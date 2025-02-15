let timer;
let isStudying = false;
let totalPoints = 0;
let endTime = 0;

const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const pointsSpan = document.getElementById("points");
const motivationText = document.getElementById("motivation");

// Initialize timer and points from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedEndTime = localStorage.getItem('studyTimerEnd');
  const savedPoints = localStorage.getItem('studyPoints');

  if (savedEndTime) {
    endTime = parseInt(savedEndTime, 10);
    const remaining = endTime - Date.now();
    
    if (remaining > 0) {
      isStudying = true;
      initializeTimer();
      startBackgroundTimer();
    } else {
      cleanupTimer();
    }
  }

  if (savedPoints) {
    totalPoints = parseInt(savedPoints, 10);
    pointsSpan.textContent = totalPoints;
  }
});

// Event Listeners for starting and resetting the study session
startButton.addEventListener("click", startStudySession);
resetButton.addEventListener("click", handleReset);

function initializeTimer() {
  startButton.textContent = "Studying...";
  resetButton.disabled = false;
  motivationText.textContent = "Stay focused! You can do it!";
  startMainTimer();
}

function startStudySession() {
  if (isStudying) return;

  isStudying = true;
  endTime = Date.now() + 25 * 60 * 1000; // 25 minutes
  localStorage.setItem('studyTimerEnd', endTime.toString());
  
  initializeTimer();
  blockWebsites(); // Block distracting websites when study session starts
}

function startMainTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    const remaining = endTime - Date.now();
    
    if (remaining <= 0) {
      endStudySession();
      return;
    }
    updateTimerDisplay(remaining);  
  }, 200);
}

function startBackgroundTimer() {
  // (Optional) This function could be used to synchronize a background timer if needed.
  if (!document.getElementById('timer-section')) {
    const bgInterval = setInterval(() => {
      const remaining = endTime - Date.now();
      if (remaining <= 0 || !endTime) {
        clearInterval(bgInterval);
        return;
      }
    }, 200);
  }
}

function updateTimerDisplay(remaining) {
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");
}

function handleReset() {
  if (confirm("Do you want to abandon your study session? 😢 (WARNING: if you give up, 5 gems will be reduced)")) {
    // Subtract 5 gems from Firebase
    updateGems(-5);

    // Stop the timer, reset the UI, and unblock distracting websites
    cleanupTimer();
    resetUI();
    unblockWebsites();
  }
}


function endStudySession() {
  totalPoints += 10;
  updateIframePoints();
  pointsSpan.textContent = totalPoints;
  localStorage.setItem('studyPoints', totalPoints.toString());
  motivationText.textContent = "Great work! Take a break! 🎉";
  cleanupTimer();
  console.log("Study session complete – unblocking websites...");
  const gemsEarned = calculateGemsBasedOnTime(); // Implement your logic here
  updateGems(gemsEarned);
  unblockWebsites(); // Unblock websites when the study session ends naturally
}

function cleanupTimer() {
  clearInterval(timer);
  localStorage.removeItem('studyTimerEnd');
  endTime = 0;
  isStudying = false;
}

function resetUI() {
  minutesSpan.textContent = "25";
  secondsSpan.textContent = "00";
  startButton.textContent = "Start Studying";
  resetButton.disabled = true;
  motivationText.textContent = "Ready for a new session? 💪";
}

// ===================================================
// BLOCK/UNBLOCK FUNCTIONS
// These functions “notify” an external blocking mechanism (such as an extension)
// to add or remove blocking rules.
// ===================================================

function blockWebsites() {
  console.log("Blocking distracting websites...");
  // If the chrome.runtime API is available (e.g. within an extension context), use it:
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
    // Calculate remaining study duration (in minutes)
    const duration = Math.ceil((endTime - Date.now()) / (60 * 1000));
    chrome.runtime.sendMessage({ action: "startBlocking", duration: duration }, (response) => {
      console.log("Block message sent. Response:", response);
    });
  } else {
    // Fallback: Use window.postMessage so a listening content script can handle it.
    window.postMessage({ action: "block" }, "*");
  }
}

function unblockWebsites() {
  console.log("Unblocking websites...");
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage({ action: "stopBlocking" }, (response) => {
      console.log("Unblock message sent. Response:", response);
    });
  } else {
    window.postMessage({ action: "unblock" }, "*");
  }
}

// ===================================================
// POINTS SYNC AND IFRAME COMMUNICATION
// ===================================================

window.addEventListener('message', (event) => {
  if (event.data.type === 'updatePoints') {
    totalPoints = event.data.points;
    pointsSpan.textContent = totalPoints;
    localStorage.setItem('studyPoints', totalPoints.toString());
  }
});

function updateIframePoints() {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.contentWindow.postMessage({
      type: 'updatePoints',
      points: totalPoints
    }, '*');
  }
}
  // Firebase Configuration (same as index.html)
  const firebaseConfig = {
    apiKey: "AIzaSyA6At0_PeY351303P85_o0wtYMXGQ_d_xg",
    authDomain: "learnbite-e7673.firebaseapp.com",
    databaseURL: "https://learnbite-e7673-default-rtdb.firebaseio.com/",
    projectId: "learnbite-e7673",
    storageBucket: "learnbite-e7673.firebasestorage.app",
    messagingSenderId: "897857889201",
    appId: "1:897857889201:web:c601789ccba7f1fe8b9390"
  };
  firebase.initializeApp(firebaseConfig);

  function updateGems(amount) {
    const user = firebase.auth().currentUser;
    if (user) {
      const uid = user.uid;
      const userRef = firebase.database().ref('users/' + uid);
      userRef.transaction((currentData) => {
        if (currentData) {
          currentData.points = (currentData.points || 0) + amount;
        }
        return currentData;
      });
    }
  }

    // Listen for auth state changes
    firebase.auth().onAuthStateChanged(user => {
      const loginBtn = document.getElementById('loginBtn');
      if (user) {
        // Update gems display
        const uid = user.uid;
        firebase.database().ref('users/' + uid).on('value', (snapshot) => {
          const data = snapshot.val();
          if (data) {
            document.getElementById('gemCount').textContent = data.points || 0;
          }
        });
        
        loginBtn.textContent = "Logout";
        loginBtn.onclick = () => firebase.auth().signOut();
      } else {
        loginBtn.textContent = "Login";
        loginBtn.onclick = () => window.location.href = 'index.html';
      }
    });