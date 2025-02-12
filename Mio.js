const API_KEY = 'AIzaSyCASUDy0da3IOOsPn3Z9otr6yMAc50SWEw'; // Replace with your Gemini API key
        const MAX_HISTORY = 6; // Keep last 6 messages as context
        const SESSION_STORAGE_KEY = 'chatHistory';
        const chatContainer = document.getElementById('chatContainer');
        const userInput = document.getElementById('userInput');
        const loading = document.getElementById('loading');
    
        // Initialize Google AI
        async function initializeGoogleAI() {
            const { GoogleGenerativeAI } = await import("https://esm.run/@google/generative-ai");
            return new GoogleGenerativeAI(API_KEY);
        }
        
        function updateChatHistory(role, content) {
            const history = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '[]');
            history.push({ role, content, timestamp: new Date().toISOString() });
            if(history.length > MAX_HISTORY) history.splice(0, history.length - MAX_HISTORY);
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(history));
        }
        
    
        // Modify the addMessage function's formatting section:
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    let formattedMessage = message
        // Format code blocks
        .replace(/```([\s\S]*?)```/g, (_, content) => {
            return `<div class="equation-container">${content
                .replace(/•/g, '<span class="operator">•</span>')
                .replace(/([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '$1<sup>$2</sup>')
                .replace(/([a-zA-Z]+)\s*=/g, '<span class="variable">$1</span> =')
                .replace(/(\d+\/\d+)/g, '<span class="fraction">$1</span>')
                .replace(/(\d+)([a-zA-Z]+)/g, '<span class="number">$1</span><span class="unit">$2</span>')
                .replace(/\n/g, '<div class="equation-step">')}</div>`
        })
        .replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')
        .replace(/\* /g, '• ')
        .replace(/Practice Questions/g, '<div class="practice-questions"><strong>Practice Questions</strong>')
        .replace(/Study Techniques/g, '<div class="example-box"><strong>Study Techniques</strong>')
        .replace(/\n/g, '<br>');

    messageDiv.innerHTML = formattedMessage;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    updateChatHistory(isUser ? 'user' : 'assistant', message);
}
    
        async function sendMessage() {
            const question = userInput.value.trim();
            if (!question) return;
    
            addMessage(question, true);
            userInput.value = '';
            loading.style.display = 'block';
    
            try {
                const googleAI = await initializeGoogleAI();
                const model = googleAI.getGenerativeModel({ model: "gemini-pro" });
                const history = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '[]');
                
                const prompt = `As a study assistant with conversation memory, consider this context:
                ${history.slice(0, -1).map(msg => `${msg.role}: ${msg.content}`).join('\n')}
    
                Your tasks:
                1. Answer clearly while maintaining context
                2. Reference previous discussions when relevant
                4. Provide examples matching the user's level
                5. Make learning fun (not fun fact)
                6. If the user asks for a specific chapter then give them detailed expplanation of that chapter. if the chapter contains formulas then give the formulas 
                7. Summarize the topic and cover all the thing
                Current question: ${question}`;
    
                const result = await model.generateContent(prompt);
                const response = await result.response;
                addMessage(response.text());
            } catch (error) {
                addMessage("Sorry, I'm having trouble answering that. Please try again.");
            } finally {
                loading.style.display = 'none';
            }
        }
    
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    
        // Load chat history on page load
        window.addEventListener('load', () => {
            const history = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '[]');
            history.forEach(msg => addMessage(msg.content, msg.role === 'user'));
        });
        