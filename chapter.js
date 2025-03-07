// Enhanced chapter database with more detailed content
let questions = null;
const chaptersDatabase = {
    science: [
        {
            title: 'Structure of Atom',
            content: `

<h2 class="text-3xl font-bold mb-4">Basic Structure of the Atom</h2>

<h3 class="text-2xl font-bold mb-3">Fundamental Particles</h3>

<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">
        <strong>Proton</strong> (p+)
        <ul class="list-disc pl-6 mt-2">
            <li>Located in nucleus</li>
            <li>Positive charge</li>
        </ul>
    </li>
    <li class="mb-2">
        <strong>Electron</strong> (e-)
        <ul class="list-disc pl-6 mt-2">
            <li>Revolves around nucleus in orbits/shells</li>
            <li>Negative charge</li>
        </ul>
    </li>
    <li class="mb-2">
        <strong>Neutron</strong> (n)
        <ul class="list-disc pl-6 mt-2">
            <li>Located in nucleus</li>
            <li>Neutral charge</li>
        </ul>
    </li>
</ol>

<h3 class="text-2xl font-bold mb-3">Important Numbers</h3>

<h4 class="text-xl font-bold mb-2">Atomic Number (Z)</h4>
<ul class="list-disc pl-6 mb-4">
    <li>Number of protons in nucleus</li>
    <li>Z = number of protons = number of electrons</li>
    <li>Represented as subscript on left side of element symbol</li>
</ul>

<h4 class="text-xl font-bold mb-2">Mass Number (A)</h4>
<ul class="list-disc pl-6 mb-6">
    <li>Sum of protons and neutrons</li>
    <li>A = number of protons + number of neutrons</li>
    <li>A = Z + number of neutrons</li>
    <li>Represented as superscript on left side of element symbol</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Bohr's Model of Atom (1913)</h2>

<h3 class="text-2xl font-bold mb-3">Shell Structure</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Electrons revolve in fixed orbits called shells/energy levels</li>
    <li>Shells labeled as K, L, M, N... (from innermost)</li>
    <li>Each shell has fixed energy</li>
    <li>Energy increases as distance from nucleus increases (K < L < M < N)</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Shell Capacity</h3>
<p class="mb-4">Maximum electrons per shell = 2n²</p>
<ul class="list-disc pl-6 mb-4">
    <li>K shell (n=1): 2 electrons</li>
    <li>L shell (n=2): 8 electrons</li>
    <li>M shell (n=3): 18 electrons</li>
    <li>N shell (n=4): 32 electrons</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Important Rules</h3>
<ol class="list-decimal pl-6 mb-4">
    <li class="mb-2">Maximum 8 electrons in outermost shell</li>
    <li class="mb-2">Inner shells must be filled before outer shells</li>
    <li class="mb-2">Electrons maintain constant energy in fixed orbit</li>
</ol>

<h3 class="text-2xl font-bold mb-3">Electron Behavior</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Energy Absorption</strong>: Electron jumps to higher shell → excited state</li>
    <li><strong>Energy Emission</strong>: Electron drops to lower shell → ground state</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Valency</h2>

<h3 class="text-2xl font-bold mb-3">Key Concepts</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Valence Shell</strong>: Outermost shell of atom</li>
    <li><strong>Valence Electrons</strong>: Electrons in outermost shell</li>
    <li><strong>Valency</strong>: Combining capacity of element (electrons gained/lost/shared)</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Valency Rules</h3>
<ol class="list-decimal pl-6 mb-4">
    <li class="mb-2">For 1-3 valence electrons: Valency = number of valence electrons</li>
    <li class="mb-2">For 4-7 valence electrons: Valency = 8 - number of valence electrons</li>
    <li class="mb-2">Noble gases: Valency = 0</li>
</ol>

<h2 class="text-3xl font-bold mb-4">Isotopes and Isobars</h2>

<h3 class="text-2xl font-bold mb-3">Isotopes</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Same element, different mass numbers</li>
    <li>Same atomic number, different neutron count</li>
    <li>Same chemical properties, different physical properties</li>
    <li>Same number of valence electrons</li>
</ul>

<h4 class="text-xl font-bold mb-2">Applications</h4>
<ul class="list-disc pl-6 mb-4">
    <li>Uranium isotopes: Nuclear reactor fuel</li>
    <li>Cobalt isotopes: Cancer treatment</li>
    <li>Iodine isotopes: Goiter treatment</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Isobars</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Different elements with same mass number</li>
    <li>Different atomic numbers</li>
    <li>Different chemical and physical properties</li>
    <li>Different number of protons, electrons, and neutrons</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Atomic Mass Calculations</h2>

<h3 class="text-2xl font-bold mb-3">Average Atomic Mass Formula</h3>
<p class="mb-4">For isotopes with different abundances:</p>
<pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto">
<code>
Average Mass = (Mass₁ × Abundance₁%) + (Mass₂ × Abundance₂%)
                              100
</code>
</pre>

<h4 class="text-xl font-bold mb-2">Example: Chlorine isotopes</h4>
<ul class="list-disc pl-6 mb-4">
    <li>³⁵Cl (75%) and ³⁷Cl (25%)</li>
    <li>Average mass = (35 × 75 + 37 × 25) ÷ 100 = 35.5 u</li>
</ul>
            `,
            subject: 'Science',
            difficulty: 'Intermediate',
            relatedChapters: ['Matter in Our Surroundings', 'Chemical Bonding']
        },

        {
            title: 'Matter in Our Surroundings',
            content: `

<h3 class="text-2xl font-bold mb-4">Introduction to Matter</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter is anything that has mass and occupies space</li>
    <li class="mb-2">All things around us, including our own bodies, are made of matter</li>
</ul>
<h3 class="text-2xl font-bold mb-4">States of Matter</h3>
<h4 class="text-xl font-bold mb-4">Solid</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Fixed shape and volume</li>
    <li class="mb-2">Particles are closely packed and have low kinetic energy</li>
    <li class="mb-2">Examples: ice, wood, metal</li>
</ul>
<h4 class="text-xl font-bold mb-4">Liquid</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Fixed volume but variable shape</li>
    <li class="mb-2">Particles have moderate kinetic energy, can flow and take the shape of container</li>
    <li class="mb-2">Examples: water, milk, gasoline</li>
</ul>
<h4 class="text-xl font-bold mb-4">Gas</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">No fixed shape or volume</li>
    <li class="mb-2">Particles have high kinetic energy, spread out and fill the entire container</li>
    <li class="mb-2">Examples: air, oxygen, carbon dioxide</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Properties of Matter</h3>
<h4 class="text-xl font-bold mb-4">Physical Properties</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Observable characteristics of matter</li>
    <li class="mb-2">Examples: color, smell, boiling point, melting point</li>
</ul>
<h4 class="text-xl font-bold mb-4">Chemical Properties</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Characteristics related to a substance's chemical composition and reactions</li>
    <li class="mb-2">Examples: flammability, reactivity, pH</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Changes in Matter</h3>
<h4 class="text-xl font-bold mb-4">Physical Change</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter changes in physical form but its chemical composition remains the same</li>
    <li class="mb-2">Examples: melting ice, boiling water, tearing paper</li>
</ul>
<h4 class="text-xl font-bold mb-4">Chemical Change</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter undergoes a chemical reaction, resulting in the formation of new substances</li>
    <li class="mb-2">Examples: burning wood, rusting of iron, photosynthesis</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Mixtures and Pure Substances</h3>
<h4 class="text-xl font-bold mb-4">Pure Substances</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Made up of only one type of particle (atom or molecule)</li>
    <li class="mb-2">Examples: gold, silver, water, carbon dioxide</li>
</ul>
<h4 class="text-xl font-bold mb-4">Mixtures</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Composed of two or more pure substances</li>
    <li class="mb-2">Examples: air, seawater, alloys</li>
</ul>
<h4 class="text-xl font-bold mb-4">Separation of Mixtures</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Techniques like filtration, distillation, chromatography can be used to separate the components of a mixture</li>
</ul>
<h3 class="text-2xl font-bold mb-4">States of Matter and Particle Movement</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Solid: Particles vibrate in fixed positions</li>
    <li class="mb-2">Liquid: Particles slide past each other, can flow</li>
    <li class="mb-2">Gas: Particles move rapidly in all directions, spread out to fill container</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Applications and Examples</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Solid, liquid, and gas states are observed in our everyday life</li>
    <li class="mb-2">Understanding states of matter is important for many scientific and technological applications</li>
    <li class="mb-2">Examples: water cycle, combustion, refrigeration, gas laws</li>
</ul>
            `,
            subject: 'Science',
            difficulty: 'Intermediate',
            relatedChapters: ['Structure of Atom', 'Chemical Bonding']
        },
        {
            "title": "Motion",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Motion</h2>
                <p class="mb-4">Motion refers to the change in position of an object over time. Understanding motion is fundamental in physics as it helps us analyze how objects move, why they move, and predict future movement based on given conditions. Motion is described using measurable quantities such as distance, displacement, speed, velocity, and acceleration.</p>
                
                <h3 class="text-2xl font-bold mb-3">Types of Motion</h3>
                <p class="mb-4">There are different kinds of motion depending on the path followed and the type of movement:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2"><strong>Translational Motion:</strong> When an object moves along a straight or curved path. Examples include cars moving on a road, or a ball rolling down a hill.</li>
                    <li class="mb-2"><strong>Rotational Motion:</strong> When an object spins or rotates around a fixed axis, like the rotation of Earth around its axis, or a spinning top.</li>
                    <li class="mb-2"><strong>Oscillatory Motion:</strong> Repetitive back-and-forth motion around a central point, such as a pendulum swinging or the vibrations of a tuning fork.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Distance and Displacement</h3>
                <p class="mb-4"><strong>Distance</strong> is the total length of the path an object travels, regardless of direction. It is a scalar quantity, meaning it only has magnitude (size) but no direction.</p>
                <p class="mb-4"><strong>Displacement</strong> is the shortest straight-line distance between an object's starting and ending points, taking direction into account. Displacement is a vector quantity, meaning it has both magnitude and direction.</p>
                <p class="mb-4"><strong>Example:</strong> If you walk 3 km east, then 4 km north, the total distance you traveled is 7 km. However, the displacement is only 5 km northeast (the straight-line distance from your starting to ending point).</p>
        
                <h3 class="text-2xl font-bold mb-3">Speed and Velocity</h3>
                <p class="mb-4"><strong>Speed</strong> is the rate at which an object covers distance. It is a scalar quantity, so it only considers how fast an object moves, not the direction.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Speed = Distance / Time</span></li>
                    <li>Units: Meters per second (m/s) or kilometers per hour (km/h)</li>
                    <li><strong>Example:</strong> A car traveling 120 km in 2 hours has an average speed of 60 km/h.</li>
                </ul>
                
                <p class="mb-4"><strong>Velocity</strong> is the rate at which an object changes its position. It is a vector quantity, meaning it considers both the speed and the direction of motion.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Velocity = Displacement / Time</span></li>
                    <li>Units: Meters per second (m/s)</li>
                    <li><strong>Example:</strong> A car moving 60 km east in 2 hours has a velocity of 30 km/h east.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Acceleration</h3>
                <p class="mb-4"><strong>Acceleration</strong> is the rate at which an object's velocity changes over time. It is a vector quantity, indicating that it considers the direction of change in velocity.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Acceleration = Change in Velocity / Time</span> or <span>a = (v - u) / t</span> where <span>v</span> is final velocity, <span>u</span> is initial velocity, and <span>t</span> is time taken.</li>
                    <li>Units: Meters per second squared (m/s²)</li>
                    <li><strong>Example:</strong> If a car speeds up from 0 to 20 m/s in 4 seconds, its acceleration is 5 m/s².</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Uniform and Non-uniform Motion</h3>
                <p class="mb-4"><strong>Uniform Motion:</strong> An object is in uniform motion if it covers equal distances in equal intervals of time. For example, a car moving at a constant speed of 60 km/h on a straight road.</p>
                <p class="mb-4"><strong>Non-uniform Motion:</strong> When an object covers unequal distances in equal intervals of time. This occurs when the object’s speed varies, such as a car accelerating or decelerating on a busy road.</p>
        
                <h3 class="text-2xl font-bold mb-3">Equations of Motion</h3>
                <p class="mb-4">The three equations of motion relate initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s) for an object moving with constant acceleration:</p>
                <ol class="list-decimal pl-6 mb-4">
                    <li>Final velocity: <span>v = u + at</span></li>
                    <li>Displacement: <span>s = ut + ½ at²</span></li>
                    <li>Velocity-Displacement relationship: <span>v² = u² + 2as</span></li>
                </ol>
                <p class="mb-4"><strong>Example Problem:</strong> A car accelerates from rest at 5 m/s² for 10 seconds. Calculate its final velocity and the distance it covers.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Using <span>v = u + at</span>: <span>v = 0 + (5 × 10) = 50 m/s</span></li>
                    <li>Using <span>s = ut + ½ at²</span>: <span>s = 0 × 10 + ½ × 5 × (10)² = 250 m</span></li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Graphical Representation of Motion</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Distance-Time Graph:</strong> Shows how distance changes with time. A straight line represents uniform motion, while a curve represents non-uniform motion.</li>
                    <li><strong>Velocity-Time Graph:</strong> Shows how velocity changes with time. The slope of the line represents acceleration, and the area under the curve gives displacement.</li>
                    <li><strong>Acceleration-Time Graph:</strong> Shows how acceleration varies over time. A horizontal line indicates constant acceleration.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Circular Motion</h3>
                <p class="mb-4">Circular motion is the motion of an object along the circumference of a circle. Even if the speed remains constant, the object is accelerating because the direction changes continuously.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Formula for Uniform Circular Motion:</strong> <span>v = rω</span>, where <span>v</span> is linear velocity, <span>r</span> is the radius, and <span>ω</span> is angular velocity.</li>
                    <li><strong>Example:</strong> The motion of the Earth around the Sun or a car taking a circular turn.</li>
                </ul>
        
                <h2 class="text-3xl font-bold mb-4">Key Concepts and Applications</h2>
                <ul class="list-disc pl-6 mb-4">
                    <li>Understanding motion helps analyze real-world problems in physics and engineering, such as predicting the movement of vehicles, satellites, or athletes.</li>
                    <li>Equations of motion and graphical representations are used in science and technology fields, including mechanics, aviation, and space exploration.</li>
                </ul>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["Force and Newton's Laws of Motion", "Gravitation"]
        },
        {
            title: 'Force and Newtons Laws of Motion',
            content: `
            <h2 class="text-3xl font-bold mb-4">Force and Newton's Laws of Motion</h2>

<h3 class="text-2xl font-bold mb-4">Understanding Force</h3>
<p class="mb-4"><strong>Force:</strong> A push or pull that can cause an object to start moving, stop moving, or change its direction. Force is a vector quantity, which means it has both magnitude and direction.</p>

<div class="mb-6">
    <img src="https://online-learning-college.com/wp-content/uploads/2022/06/Forces-and-movement.jpg" alt="Forces acting on objects" class="rounded-lg shadow-md mb-2" width="
    400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 1: Different types of forces acting on objects in daily life</figcaption>
</div>

<h4 class="text-xl font-bold mb-2">Types of Forces:</h4>

<div class="mb-6">
    <h5 class="font-bold mb-2">1. Contact Forces:</h5>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Muscular force:</strong> Force exerted by muscles of human body or animals (e.g., lifting a book, pushing a cart)</li>
        <li class="mb-2"><strong>Friction force:</strong> Force that opposes relative motion between surfaces in contact
            <ul class="list-disc pl-6 mt-2">
                <li>Static friction: Acts between stationary surfaces</li>
                <li>Kinetic friction: Acts between moving surfaces</li>
                <li>Rolling friction: Acts on rolling objects</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Normal force:</strong> Perpendicular force exerted by a surface on an object resting on it</li>
        <li class="mb-2"><strong>Air resistance:</strong> Force exerted by air on moving objects, opposing their motion</li>
    </ul>
    <img src="https://year4stvincents.weebly.com/uploads/2/1/3/7/21377346/screen-shot-2021-06-25-at-1-07-53-pm_orig.png" alt="Contact forces diagram" class="rounded-lg shadow-md mb-2" width="
    400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 2: Examples of contact forces in everyday situations</figcaption>
</div>

<div class="mb-6">
    <h5 class="font-bold mb-2">2. Non-Contact Forces:</h5>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Gravitational force:</strong> Attractive force between any two objects due to their masses
            <ul class="list-disc pl-6 mt-2">
                <li>Force that keeps planets in orbit</li>
                <li>Causes objects to fall towards Earth</li>
                <li>Proportional to masses and inversely proportional to square of distance</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Magnetic force:</strong> Force exerted by magnets or moving charges
            <ul class="list-disc pl-6 mt-2">
                <li>Attracts ferromagnetic materials</li>
                <li>Has both attractive and repulsive nature</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Electrostatic force:</strong> Force between electrically charged objects
            <ul class="list-disc pl-6 mt-2">
                <li>Like charges repel</li>
                <li>Unlike charges attract</li>
            </ul>
        </li>
    </ul>
    <img src="https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/f9a60bc8-20f4-4544-a073-21664c8b050a-v2" alt="Non-contact forces diagram" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 3: Illustration of non-contact forces</figcaption>
</div>

<h3 class="text-2xl font-bold mb-4">Effects of Force</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Change in state of motion:</strong> Can make a stationary object move or stop a moving object</li>
    <li class="mb-2"><strong>Change in speed:</strong> Can increase or decrease the speed of an object</li>
    <li class="mb-2"><strong>Change in direction:</strong> Can alter the direction of motion</li>
    <li class="mb-2"><strong>Change in shape:</strong> Can deform objects temporarily or permanently</li>
</ul>

<h3 class="text-2xl font-bold mb-4">Newton's Laws of Motion</h3>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">First Law of Motion (Law of Inertia)</h4>
    <p class="mb-4">"An object continues to be in its state of rest or of uniform motion in a straight line unless acted upon by an external force."</p>
    
    <img src="https://images.examples.com/wp-content/uploads/2023/04/Newtons-First-Law-of-Motion-Examples-In-Everyday-Life.png" alt="Inertia examples" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 4: Examples demonstrating inertia in daily life</figcaption>
    
    <div class="mb-4">
        <strong>Detailed Examples:</strong>
        <ul class="list-disc pl-6 mb-2">
            <li class="mb-2"><strong>Passengers falling forward when bus stops:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Passengers' bodies continue to move forward due to inertia of motion</li>
                    <li>Bus stops due to brakes, but passengers' bodies want to maintain motion</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Dust removal from carpet:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Carpet is beaten with a stick</li>
                    <li>Carpet moves, but dust particles continue to be at rest (inertia of rest)</li>
                    <li>Dust falls due to gravity</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="mb-4">
        <strong>Types of Inertia:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2"><strong>Inertia of rest:</strong> Resistance to change state of rest
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Difficulty in moving a heavy box</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Inertia of motion:</strong> Resistance to change state of motion
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Object sliding on smooth surface continues to move</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Inertia of direction:</strong> Resistance to change direction
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Satellites continuing in their orbital path</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Second Law of Motion</h4>
    <p class="mb-4">"The rate of change of momentum of an object is proportional to the applied force and takes place in the direction of the force."</p>
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh64rOD0U2M-zSA6SqcdtPzfSDMXWqMFlENA&s" alt="Second law demonstration" class="rounded-lg shadow-md mb-2">
    <figcaption class="text-center text-gray-600 text-sm">Figure 5: Illustration of Force, Mass, and Acceleration relationship</figcaption>
    
    <div class="mb-4">
        <strong>Mathematical Expression:</strong>
        <p class="font-mono mb-2">F = ma</p>
        <p class="mb-2">Where:</p>
        <ul class="list-disc pl-6">
            <li class="mb-2">F = Force (measured in Newtons, N)</li>
            <li class="mb-2">m = Mass (measured in kilograms, kg)</li>
            <li class="mb-2">a = Acceleration (measured in meters per second squared, m/s²)</li>
        </ul>
    </div>

    <div class="mb-4">
        <strong>Key Implications:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2">Double the force → Double the acceleration (if mass constant)</li>
            <li class="mb-2">Double the mass → Half the acceleration (if force constant)</li>
            <li class="mb-2">For same force, heavy objects accelerate less than lighter ones</li>
        </ul>
    </div>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Third Law of Motion</h4>
    <p class="mb-4">"For every action, there is an equal and opposite reaction."</p>
    
    <img src="/api/placeholder/400/300" alt="Third law examples" class="rounded-lg shadow-md mb-2">
    <figcaption class="text-center text-gray-600 text-sm">Figure 6: Action-Reaction pairs in different scenarios</figcaption>
    
    <div class="mb-4">
        <strong>Detailed Examples:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2"><strong>Rocket Propulsion:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Rocket expels gases backward</li>
                    <li>Reaction: Gases push rocket forward</li>
                    <li>This principle enables space travel</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Swimming:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Swimmer pushes water backward</li>
                    <li>Reaction: Water pushes swimmer forward</li>
                    <li>Arms and legs both use this principle</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Bird Flight:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Wings push air downward</li>
                    <li>Reaction: Air pushes wings upward</li>
                    <li>Enables lift and forward motion</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<h3 class="text-2xl font-bold mb-4">Conservation of Momentum</h3>
<div class="mb-6">
    <p class="mb-4">In a closed system (no external forces), the total momentum remains constant before and after collision or interaction.</p>
    
    <img src="https://stickmanphysics.com/wp-content/uploads/2020/10/Newtons-3rd-wall.jpg" alt="Conservation of momentum" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 7: Conservation of momentum in collisions</figcaption>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p class="text-yellow-700">
            <strong>Mathematical Expression:</strong><br>
            m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'<br>
            Where:
            <ul class="list-disc pl-6 mt-2">
                <li>m₁, m₂ = masses of objects</li>
                <li>v₁, v₂ = initial velocities</li>
                <li>v₁', v₂' = final velocities</li>
            </ul>
        </p>
    </div>
</div>

<h3 class="text-2xl font-bold mb-4">Solved Examples</h3>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Example 1: Second Law of Motion</h4>
    <p class="mb-4"><strong>Problem:</strong> Calculate the force needed to accelerate a 20 kg object at 5 m/s².</p>
    <p class="mb-4"><strong>Solution:</strong></p>
    <p class="mb-2">Given:</p>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Mass (m) = 20 kg</li>
        <li class="mb-2">Acceleration (a) = 5 m/s²</li>
    </ul>
    <p class="mb-2">Using F = ma:</p>
    <p class="mb-2">F = 20 kg × 5 m/s²</p>
    <p class="mb-2">F = 100 N</p>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Example 2: Conservation of Momentum</h4>
    <p class="mb-4"><strong>Problem:</strong> A 5 kg ball moving at 4 m/s collides with a 3 kg ball at rest. After collision, the 5 kg ball moves at 2 m/s. Find the velocity of the 3 kg ball.</p>
    <p class="mb-4"><strong>Solution:</strong></p>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Initial momentum = Final momentum</li>
        <li class="mb-2">(5 kg)(4 m/s) + (3 kg)(0 m/s) = (5 kg)(2 m/s) + (3 kg)(v)</li>
        <li class="mb-2">20 = 10 + 3v</li>
        <li class="mb-2">3v = 10</li>
        <li class="mb-2">v = 3.33 m/s</li>
    </ul>
</div>

<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
    <p class="text-green-700">
        <strong>Important Tips:</strong>
        <ul class="list-disc pl-6 mt-2">
            <li>Always draw free body diagrams when solving force problems</li>
            <li>Check units in calculations</li>
            <li>Consider all forces acting on the object</li>
            <li>Remember that force is a vector quantity</li>
        </ul>
    </p>
</div>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        },
        {
            title: 'Tissues',
            content: `
             <h1>Tissues - Class 9 Biology</h1>
<h2>Introduction</h2>
<ul>
<li><strong>Definition</strong>: A tissue is a group of similar cells that work together to perform a specific function.</li>
<li><strong>Importance</strong>: Tissues help in the division of labor, making organisms more efficient.</li>
<li><strong>Types of Tissues</strong>:
<ul>
<li><strong>Plant Tissues</strong></li>
<li><strong>Animal Tissues</strong></li>
</ul>
</li>
</ul>
<hr>
<h2><strong>Plant Tissues</strong></h2>
<h3><strong>1. Meristematic Tissue (Growth Tissue)</strong></h3>
<ul>
<li>Found in growing regions of the plant (roots, shoot tips).</li>
<li>Cells are small, thin-walled, actively dividing, and lack vacuoles.</li>
<li><strong>Types of Meristematic Tissue</strong>:
<ul>
<li><strong>Apical Meristem</strong>: Found at tips of roots and shoots; responsible for increase in length.</li>
<li><strong>Lateral Meristem</strong>: Found in the vascular bundles; responsible for thickness.</li>
<li><strong>Intercalary Meristem</strong>: Found at internodes and base of leaves; helps in regrowth.</li>
</ul>
</li>
</ul>
<h3><strong>2. Permanent Tissue (Non-Dividing Tissue)</strong></h3>
<ul>
<li>Formed from meristematic tissue after specialization.</li>
<li><strong>Types</strong>:
<ul>
<li><strong>Simple Permanent Tissue</strong> (Made of one type of cell)
<ul>
<li><strong>Parenchyma</strong>: Thin-walled, living cells; stores food; found in all plant parts.
<ul>
<li><em>Chlorenchyma</em>: Contains chloroplasts, helps in photosynthesis.</li>
<li><em>Aerenchyma</em>: Has air spaces, provides buoyancy in aquatic plants.</li>
</ul>
</li>
<li><strong>Collenchyma</strong>: Elongated cells with thickened cell walls at corners; provides mechanical support.</li>
<li><strong>Sclerenchyma</strong>: Dead, thick-walled cells; provides strength and rigidity.</li>
</ul>
</li>
<li><strong>Complex Permanent Tissue</strong> (Made of more than one type of cell)
<ul>
<li><strong>Xylem (Water Transport)</strong>: Made of tracheids, vessels, xylem parenchyma, and xylem fibers.</li>
<li><strong>Phloem (Food Transport)</strong>: Made of sieve tubes, companion cells, phloem fibers, and phloem parenchyma.</li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2><strong>Animal Tissues</strong></h2>
<h3><strong>1. Epithelial Tissue (Covering &amp; Protection)</strong></h3>
<ul>
<li>Covers body surfaces and internal organs.</li>
<li><strong>Types</strong>:
<ul>
<li><strong>Squamous Epithelium</strong>: Flat, thin cells (e.g., lining of blood vessels, alveoli).</li>
<li><strong>Cuboidal Epithelium</strong>: Cube-shaped cells (e.g., kidney tubules, salivary glands).</li>
<li><strong>Columnar Epithelium</strong>: Tall, column-like cells (e.g., intestine lining).</li>
<li><strong>Ciliated Epithelium</strong>: Has cilia for movement (e.g., respiratory tract).</li>
<li><strong>Glandular Epithelium</strong>: Specialized for secretion (e.g., sweat glands).</li>
</ul>
</li>
</ul>
<h3><strong>2. Connective Tissue (Binding &amp; Support)</strong></h3>
<ul>
<li>Connects different body parts.</li>
<li><strong>Types</strong>:
<ul>
<li><strong>Areolar Tissue</strong>: Found under the skin, provides support.</li>
<li><strong>Adipose Tissue</strong>: Stores fat, provides insulation.</li>
<li><strong>Bone</strong>: Hard, supports the body.</li>
<li><strong>Cartilage</strong>: Flexible, reduces friction (e.g., nose, ear).</li>
<li><strong>Blood</strong>: Fluid tissue, transports oxygen, nutrients, and waste.</li>
<li><strong>Ligaments</strong>: Connect bones to bones.</li>
<li><strong>Tendons</strong>: Connect muscles to bones.</li>
</ul>
</li>
</ul>
<h3><strong>3. Muscular Tissue (Movement)</strong></h3>
<ul>
<li><strong>Types</strong>:
<ul>
<li><strong>Striated (Skeletal) Muscle</strong>: Voluntary, striped, attached to bones.</li>
<li><strong>Smooth Muscle</strong>: Involuntary, spindle-shaped, found in intestines.</li>
<li><strong>Cardiac Muscle</strong>: Found in the heart, involuntary, striated, does not get fatigued.</li>
</ul>
</li>
</ul>
<h3><strong>4. Nervous Tissue (Control &amp; Coordination)</strong></h3>
<ul>
<li>Made of <strong>neurons (nerve cells)</strong>.</li>
<li>Neurons transmit signals via electrical impulses.</li>
<li>Consists of <strong>cell body, dendrites, and axon</strong>.</li>
<li>Found in the brain, spinal cord, and nerves.</li>
</ul>
<hr>
<h2><strong>Differences Between Plant and Animal Tissues</strong></h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Plant Tissue</th>
<th>Animal Tissue</th>
</tr>
</thead>
<tbody>
<tr>
<td>Growth</td>
<td>Continuous in meristematic tissue</td>
<td>Growth stops after maturity</td>
</tr>
<tr>
<td>Cell Wall</td>
<td>Present</td>
<td>Absent</td>
</tr>
<tr>
<td>Types</td>
<td>Simple and complex</td>
<td>Epithelial, connective, muscular, nervous</td>
</tr>
<tr>
<td>Function</td>
<td>Support, transport, photosynthesis</td>
<td>Movement, coordination, support</td>
</tr>
</tbody>
</table>
<hr>
<h2><strong>Conclusion</strong></h2>
<ul>
<li>Tissues form the basis of all biological functions.</li>
<li>Plants have <strong>meristematic and permanent tissues</strong> for growth and support.</li>
<li>Animals have <strong>epithelial, connective, muscular, and nervous tissues</strong> for protection, movement, and communication.</li>
<li>Understanding tissues helps in <strong>medicine, agriculture, and biotechnology</strong>.</li>
</ul>
         `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        },
        {
            title: 'Is Matter Around Us Pure?',
            content: `
            <p>&nbsp;</p>
<h1><em>Is Matter Around Us Pure?</em></h1>
<hr>
<h2><em>1. Introduction to Matter and Purity</em></h2>
<ul>
<li><strong>Matter:</strong> Anything that has <strong>mass and occupies space</strong>.</li>
<li><strong>Pure Substance:</strong> A material with <strong>uniform composition and properties</strong>.</li>
<li><strong>Mixture:</strong> A combination of two or more substances that <strong>retain their properties</strong> and can be separated by physical means.</li>
</ul>
<p>🔴 <strong>Key Question:</strong> Is all matter pure? <strong>No</strong> &ndash; Most substances we see around us are <em>mixtures</em>, not pure substances.</p>
<hr>
<h2><em>2. Types of Substances</em></h2>
<h3><em>2.1 Pure Substances</em></h3>
<p>A substance that has <em>only one type of particle</em> and a <em>definite composition</em>.</p>
<h4><em>(A) Elements</em></h4>
<ul>
<li>Made of <em>only one type of atom</em>.</li>
<li><em>Cannot be broken down</em> into simpler substances.</li>
<li><strong>Examples:</strong> Gold (Au), Oxygen (O₂), Hydrogen (H₂), Iron (Fe).</li>
</ul>
<p>🔹 <strong>Types of Elements</strong></p>
<table>
<thead>
<tr>
<th><strong>Type</strong></th>
<th><strong>Properties</strong></th>
<th><strong>Examples</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Metals</em></td>
<td>Shiny, good conductors, malleable, ductile</td>
<td>Gold, Iron, Copper</td>
</tr>
<tr>
<td><em>Non-metals</em></td>
<td>Dull, poor conductors, brittle</td>
<td>Carbon, Sulfur, Oxygen</td>
</tr>
<tr>
<td><em>Metalloids</em></td>
<td>Properties of both metals &amp; non-metals</td>
<td>Silicon, Boron, Arsenic</td>
</tr>
</tbody>
</table>
<h4><em>(B) Compounds</em></h4>
<ul>
<li>Made of <em>two or more elements chemically combined</em> in a fixed ratio.</li>
<li>Properties of a compound <em>are different</em> from the elements that form it.</li>
<li><strong>Examples:</strong>
<ul>
<li>Water (H₂O) &ndash; Made of Hydrogen &amp; Oxygen.</li>
<li>Carbon dioxide (CO₂) &ndash; Made of Carbon &amp; Oxygen.</li>
</ul>
</li>
</ul>
<p>🔴 <strong>Difference between Elements and Compounds</strong></p>
<table>
<thead>
<tr>
<th><strong>Property</strong></th>
<th><strong>Element</strong></th>
<th><strong>Compound</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Composition</td>
<td>Single type of atom</td>
<td>Two or more types of atoms</td>
</tr>
<tr>
<td>Separation</td>
<td>Cannot be broken down</td>
<td>Can be broken down chemically</td>
</tr>
<tr>
<td>Properties</td>
<td>Same as atoms inside it</td>
<td>Different from constituent elements</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>3. Mixtures &ndash; Impure Substances</em></h2>
<p>A mixture contains <em>two or more substances</em> that are <em>not chemically combined</em>.</p>
<h3><em>3.1 Types of Mixtures</em></h3>
<h4><em>(A) Homogeneous Mixture</em></h4>
<ul>
<li><em>Uniform composition</em> throughout.</li>
<li><em>No visible boundaries</em> between components.</li>
<li><strong>Examples:</strong> Saltwater, Sugar solution, Air, Alloy (Brass).</li>
</ul>
<h4><em>(B) Heterogeneous Mixture</em></h4>
<ul>
<li><em>Non-uniform composition</em>.</li>
<li>Components are <em>visibly separate</em>.</li>
<li><strong>Examples:</strong> Sand in water, Oil in water, Salad, Muddy water.</li>
</ul>
<p>🔴 <strong>Differences Between Homogeneous &amp; Heterogeneous Mixtures</strong></p>
<table>
<thead>
<tr>
<th><strong>Property</strong></th>
<th><strong>Homogeneous Mixture</strong></th>
<th><strong>Heterogeneous Mixture</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Composition</td>
<td>Uniform throughout</td>
<td>Not uniform</td>
</tr>
<tr>
<td>Separation</td>
<td>Harder to separate</td>
<td>Easier to separate</td>
</tr>
<tr>
<td>Examples</td>
<td>Salt solution, Air</td>
<td>Sand &amp; water, Oil &amp; water</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>4. Types of Solutions</em></h2>
<h3><em>4.1 What is a Solution?</em></h3>
<ul>
<li>A <em>homogeneous mixture</em> of <em>two or more substances</em>.</li>
<li><strong>Solvent:</strong> The substance in <strong>larger amount</strong> (e.g., Water in saltwater).</li>
<li><strong>Solute:</strong> The substance in <strong>smaller amount</strong> (e.g., Salt in saltwater).</li>
</ul>
<p>🔹 <strong>Examples of Solutions</strong></p>
<table>
<thead>
<tr>
<th><strong>Type</strong></th>
<th><strong>Solvent</strong></th>
<th><strong>Solute</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Solid in Liquid</td>
<td>Water</td>
<td>Sugar</td>
<td>Sugar solution</td>
</tr>
<tr>
<td>Gas in Liquid</td>
<td>Water</td>
<td>CO₂</td>
<td>Soda (carbonated drinks)</td>
</tr>
<tr>
<td>Liquid in Liquid</td>
<td>Alcohol</td>
<td>Water</td>
<td>Alcohol-water mixture</td>
</tr>
<tr>
<td>Gas in Gas</td>
<td>Nitrogen</td>
<td>Oxygen</td>
<td>Air</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>5. Concentration of Solutions</em></h2>
<h3><em>5.1 Types of Solutions Based on Concentration</em></h3>
<table>
<thead>
<tr>
<th><strong>Type</strong></th>
<th><strong>Definition</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Dilute Solution</em></td>
<td>Small amount of solute in solvent</td>
<td>A small pinch of salt in water</td>
</tr>
<tr>
<td><em>Concentrated Solution</em></td>
<td>Large amount of solute in solvent</td>
<td>A large amount of sugar in water</td>
</tr>
<tr>
<td><em>Saturated Solution</em></td>
<td>Maximum solute dissolved at a given temperature</td>
<td>Saltwater where extra salt doesn't dissolve</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>6. Separation of Mixtures</em></h2>
<p>Different methods are used to separate components of a mixture <em>without changing their chemical properties</em>.</p>
<h3><em>6.1 Physical Methods of Separation</em></h3>
<table>
<thead>
<tr>
<th><strong>Method</strong></th>
<th><strong>Principle</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Filtration</em></td>
<td>Separates insoluble solids from liquids</td>
<td>Sand and water</td>
</tr>
<tr>
<td><em>Evaporation</em></td>
<td>Removes liquid, leaving solid behind</td>
<td>Salt from saltwater</td>
</tr>
<tr>
<td><em>Distillation</em></td>
<td>Separates two liquids with different boiling points</td>
<td>Alcohol &amp; Water</td>
</tr>
<tr>
<td><em>Centrifugation</em></td>
<td>Separates substances based on density</td>
<td>Cream from milk</td>
</tr>
<tr>
<td><em>Chromatography</em></td>
<td>Separates dyes or pigments</td>
<td>Ink separation</td>
</tr>
<tr>
<td><em>Magnetic Separation</em></td>
<td>Uses magnet to remove magnetic substances</td>
<td>Iron from sand</td>
</tr>
<tr>
<td><em>Sublimation</em></td>
<td>Separates a solid that turns into gas directly</td>
<td>Camphor from salt</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>7. Colloids and Suspensions</em></h2>
<h3><em>7.1 What is a Colloid?</em></h3>
<ul>
<li>A <em>heterogeneous mixture</em>, but appears <strong>homogeneous</strong>.</li>
<li><em>Particles are smaller</em> than in suspensions but <em>larger</em> than in solutions.</li>
<li>Particles <em>do not settle</em> and scatter light (Tyndall effect).</li>
<li><strong>Examples:</strong> Milk, Fog, Blood, Ink.</li>
</ul>
<p>🔴 <strong>Properties of Colloids</strong></p>
<table>
<thead>
<tr>
<th><strong>Property</strong></th>
<th><strong>Colloid</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Appearance</td>
<td>Looks homogeneous but is heterogeneous</td>
</tr>
<tr>
<td>Particle Size</td>
<td>1-100 nm</td>
</tr>
<tr>
<td>Settling</td>
<td>Particles do not settle</td>
</tr>
<tr>
<td>Tyndall Effect</td>
<td>Yes (scatters light)</td>
</tr>
</tbody>
</table>
<hr>
<h3><em>7.2 What is a Suspension?</em></h3>
<ul>
<li>A <em>heterogeneous mixture</em> where particles <em>are large and settle down</em>.</li>
<li><strong>Examples:</strong> Muddy water, Flour in water, Paint.</li>
</ul>
<p>🔴 <strong>Properties of Suspensions</strong></p>
<table>
<thead>
<tr>
<th><strong>Property</strong></th>
<th><strong>Suspension</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Appearance</td>
<td>Heterogeneous</td>
</tr>
<tr>
<td>Particle Size</td>
<td>Larger than 100 nm</td>
</tr>
<tr>
<td>Settling</td>
<td>Particles settle down</td>
</tr>
<tr>
<td>Tyndall Effect</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>8. Tyndall Effect</em></h2>
<ul>
<li>The <em>scattering of light</em> by particles in a <em>colloid or suspension</em>.</li>
<li><strong>Example:</strong> Light passing through fog, dust in a dark room.</li>
</ul>
<p>🔴 <strong>Which mixtures show the Tyndall Effect?</strong></p>
<p>✅ <em>Colloids</em> &ndash; YES (Milk, Fog).<br>✅ <em>Suspensions</em> &ndash; YES (Muddy water).<br>❌ <em>Solutions</em> &ndash; NO (Saltwater, Sugar solution).</p>
<hr>
<h2><em>9. Key Differences &ndash; Solutions, Colloids, and Suspensions</em></h2>
<table>
<thead>
<tr>
<th><strong>Property</strong></th>
<th><strong>Solution</strong></th>
<th><strong>Colloid</strong></th>
<th><strong>Suspension</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Nature</td>
<td>Homogeneous</td>
<td>Appears homogeneous</td>
<td>Heterogeneous</td>
</tr>
<tr>
<td>Particle Size</td>
<td>&lt;1 nm</td>
<td>1-100 nm</td>
<td>&gt;100 nm</td>
</tr>
<tr>
<td>Settling</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Tyndall Effect</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Examples</td>
<td>Saltwater</td>
<td>Milk, Fog</td>
<td>Muddy Water</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>10. Conclusion</em></h2>
<ul>
<li><em>Pure substances</em> have a fixed composition, while <em>mixtures</em> contain multiple components.</li>
<li>*Solutions are homogeneous, while *<em>colloids and suspensions are heterogeneous</em>.</li>
<li><em>Separation methods</em> help purify mixtures without altering their chemical properties.</li>
</ul>
<p>🔥 <em>With this, you've mastered "Is Matter Around Us Pure?"</em> 🚀</p>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        },
        {
            title: 'Structure of the Atom',
            content: `
            <p>&nbsp;</p>
<h1><em>Atoms and Molecules</em></h1>
<hr>
<h2><em>1. Introduction to Atoms and Molecules</em></h2>
<ul>
<li><strong>Matter:</strong> Everything around us is made up of matter.</li>
<li><strong>Atoms:</strong> Tiny particles that make up matter.</li>
<li><strong>Molecules:</strong> Groups of atoms chemically bonded together that form different substances.</li>
</ul>
<p>🔴 <strong>Key Question:</strong> Why do we study atoms and molecules?<br>✅ <strong>Answer:</strong> To understand how substances are formed, their properties, and their chemical behavior.</p>
<hr>
<h2><em>2. Laws of Chemical Combination</em></h2>
<p>Before atoms were discovered, scientists observed certain laws:</p>
<h3><em>2.1 Law of Conservation of Mass</em></h3>
<ul>
<li><strong>Principle:</strong> Mass can neither be created nor destroyed in a chemical reaction.</li>
<li><strong>Implication:</strong> Total mass of reactants = Total mass of products.</li>
</ul>
<p>📝 <strong>Example:</strong><br>When <em>Hydrogen (H₂)</em> reacts with <em>Oxygen (O₂)</em> to form <em>Water (H₂O)</em>,</p>
<ul>
<li>Mass of hydrogen + Mass of oxygen = Mass of water formed.</li>
</ul>
<h3><em>2.2 Law of Constant Proportions</em></h3>
<ul>
<li><strong>Principle:</strong> A chemical compound always contains the same elements in fixed proportion by mass.</li>
</ul>
<p>📝 <strong>Example:</strong></p>
<ul>
<li>In <em>Water (H₂O)</em>, the <strong>ratio of hydrogen to oxygen</strong> by mass is always <em>1:8</em>.</li>
<li>No matter the source, this ratio remains constant.</li>
</ul>
<hr>
<h2><em>3. What are Atoms?</em></h2>
<ul>
<li><strong>Definition:</strong> The smallest particle of an element that retains its chemical properties.</li>
<li><strong>Size:</strong> Atoms are extremely small and cannot be seen with the naked eye.</li>
</ul>
<p>🔹 <strong>Size of an Atom:</strong></p>
<ul>
<li>Ranges from <em>0.1 nm to 0.5 nm</em> (1 nm = <span class="katex">10&minus;910^{-9}</span> m).</li>
<li>Example: A hydrogen atom is about <em>0.1 nm</em> in diameter.</li>
</ul>
<p>🔹 <strong>Representation:</strong></p>
<ul>
<li>Each element is represented by a <em>symbol</em> (e.g., Hydrogen &rarr; <strong>H</strong>, Oxygen &rarr; <strong>O</strong>, Carbon &rarr; <strong>C</strong>).</li>
</ul>
<p>🔴 <strong>Key Point:</strong></p>
<ul>
<li>Atoms of the same element have the <em>same properties</em>, whereas atoms of different elements have <em>different properties</em>.</li>
</ul>
<hr>
<h2><em>4. Atomic Mass</em></h2>
<ul>
<li><strong>Atomic Mass Unit (amu):</strong> The unit used to measure atomic mass.</li>
<li><strong>Definition:</strong> 1 amu is defined as 1/12th the mass of a carbon-12 atom.</li>
</ul>
<p>🔹 <strong>Atomic Mass of Some Elements:</strong></p>
<table>
<thead>
<tr>
<th><strong>Element</strong></th>
<th><strong>Symbol</strong></th>
<th><strong>Atomic Mass (amu)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Hydrogen</td>
<td>H</td>
<td>1</td>
</tr>
<tr>
<td>Carbon</td>
<td>C</td>
<td>12</td>
</tr>
<tr>
<td>Oxygen</td>
<td>O</td>
<td>16</td>
</tr>
<tr>
<td>Nitrogen</td>
<td>N</td>
<td>14</td>
</tr>
<tr>
<td>Sodium</td>
<td>Na</td>
<td>23</td>
</tr>
</tbody>
</table>
<p>🔴 <strong>Example:</strong><br>Oxygen has an atomic mass of <strong>16 amu</strong>, meaning one oxygen atom is 16 times heavier than a hydrogen atom.</p>
<hr>
<h2><em>5. What are Molecules?</em></h2>
<ul>
<li><strong>Definition:</strong> Molecules are groups of <strong>two or more atoms chemically bonded together</strong>.</li>
<li><strong>Types:</strong>
<ul>
<li><strong>Molecules of an Element:</strong> Made of only one type of atom (e.g., O₂, N₂, Cl₂).</li>
<li><strong>Molecules of a Compound:</strong> Made of two or more different atoms (e.g., H₂O, CO₂, NH₃).</li>
</ul>
</li>
</ul>
<p>🔹 <strong>Atomicity (Number of Atoms in a Molecule):</strong></p>
<table>
<thead>
<tr>
<th><strong>Molecular Type</strong></th>
<th><strong>Examples</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Monoatomic</em></td>
<td>He, Ne, Ar</td>
</tr>
<tr>
<td><em>Diatomic</em></td>
<td>O₂, H₂, N₂</td>
</tr>
<tr>
<td><em>Triatomic</em></td>
<td>O₃, CO₂</td>
</tr>
<tr>
<td><em>Polyatomic</em></td>
<td>NH₃, C₆H₁₂O₆</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>6. What are Ions?</em></h2>
<ul>
<li><strong>Definition:</strong> Ions are charged particles formed when an atom <strong>gains or loses electrons</strong>.</li>
</ul>
<p>🔹 <strong>Types of Ions:</strong></p>
<table>
<thead>
<tr>
<th><strong>Type</strong></th>
<th><strong>Definition</strong></th>
<th><strong>Examples</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Cation (Positive Ion)</em></td>
<td>Atom loses electrons</td>
<td>Na⁺, Mg&sup2;⁺</td>
</tr>
<tr>
<td><em>Anion (Negative Ion)</em></td>
<td>Atom gains electrons</td>
<td>Cl⁻, O&sup2;⁻</td>
</tr>
</tbody>
</table>
<p>📝 <strong>Example:</strong></p>
<ul>
<li><strong>Sodium (Na):</strong> Loses 1 electron to form Na⁺.</li>
<li><strong>Chlorine (Cl):</strong> Gains 1 electron to form Cl⁻.</li>
</ul>
<hr>
<h2><em>7. Writing Chemical Formulae</em></h2>
<p>To write chemical formulae, follow these steps:</p>
<ol>
<li>Write the <strong>symbols</strong> of the elements.</li>
<li>Note their <strong>valencies</strong> (combining capacities).</li>
<li><strong>Cross multiply</strong> the valencies to get the correct ratio.</li>
</ol>
<p>🔹 <strong>Common Valencies of Elements:</strong></p>
<table>
<thead>
<tr>
<th><strong>Element</strong></th>
<th><strong>Symbol</strong></th>
<th><strong>Valency</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Hydrogen</td>
<td>H</td>
<td>1</td>
</tr>
<tr>
<td>Oxygen</td>
<td>O</td>
<td>2</td>
</tr>
<tr>
<td>Nitrogen</td>
<td>N</td>
<td>3</td>
</tr>
<tr>
<td>Carbon</td>
<td>C</td>
<td>4</td>
</tr>
<tr>
<td>Sodium</td>
<td>Na</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>📝 <strong>Examples of Chemical Formulae:</strong></p>
<table>
<thead>
<tr>
<th><strong>Compound</strong></th>
<th><strong>Elements</strong></th>
<th><strong>Valency</strong></th>
<th><strong>Formula</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Water</td>
<td>H, O</td>
<td>H = 1, O = 2</td>
<td>H₂O</td>
</tr>
<tr>
<td>Carbon dioxide</td>
<td>C, O</td>
<td>C = 4, O = 2</td>
<td>CO₂</td>
</tr>
<tr>
<td>Ammonia</td>
<td>N, H</td>
<td>N = 3, H = 1</td>
<td>NH₃</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>8. Molecular Mass and Mole Concept</em></h2>
<h3><em>8.1 Molecular Mass</em></h3>
<ul>
<li><strong>Definition:</strong> The sum of atomic masses of all atoms in a molecule.</li>
<li><strong>Example:</strong>
<ul>
<li><em>H₂O:</em>
<ul>
<li>Hydrogen (H) = 1 amu; Oxygen (O) = 16 amu</li>
<li>Molecular mass = (2 &times; 1) + (1 &times; 16) = <strong>18 amu</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3><em>8.2 Formula Unit Mass</em></h3>
<ul>
<li><strong>Used for ionic compounds.</strong></li>
<li><strong>Example:</strong>
<ul>
<li><em>NaCl (Sodium chloride):</em>
<ul>
<li>Na = 23 amu; Cl = 35.5 amu</li>
<li>Formula unit mass = <strong>23 + 35.5 = 58.5 amu</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3><em>8.3 Mole Concept</em></h3>
<ul>
<li><strong>Definition:</strong> A mole is the amount of substance that contains <strong>Avogadro's number of particles</strong>.</li>
<li><strong>Avogadro&rsquo;s Number (Nₐ):</strong> <span class="katex">6.022&times;10236.022 \times 10^{23}</span> particles.</li>
</ul>
<p>📝 <strong>Formulae for Moles:</strong></p>
<ol>
<li><strong>Number of moles</strong> = Given mass (g) / Molar mass (g/mol)</li>
<li><strong>Number of particles</strong> = Moles &times; Avogadro&rsquo;s number</li>
</ol>
<p>🔹 <strong>Example:</strong> Find the number of molecules in <strong>36 g of water (H₂O)</strong></p>
<ul>
<li>Molar mass of H₂O = 18 g/mol</li>
<li>Moles of H₂O = 36 / 18 = <strong>2 moles</strong></li>
<li>Number of molecules = 2 &times; <span class="katex">6.022&times;10236.022 \times 10^{23}</span> = <strong>1.204 &times; 10&sup2;⁴ molecules</strong></li>
</ul>
<hr>
<h2><em>9. Summary</em></h2>
<ul>
<li><strong>Atoms</strong> are the basic building blocks of matter.</li>
<li><strong>Laws of Chemical Combination</strong> (Conservation of Mass and Constant Proportions) govern how elements form compounds.</li>
<li><strong>Molecules</strong> are made of atoms, and <strong>ions</strong> form when atoms gain or lose electrons.</li>
<li><strong>Chemical formulae</strong> are written using valency rules.</li>
<li>The <strong>Mole Concept</strong> helps count atoms and molecules in substances.</li>
</ul>
<p>🔥 <em>With this, you&rsquo;ve mastered "Atoms and Molecules"!</em> 🚀</p>
<hr>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        },
        {
            title: "The Fundamental Unit of Life",
            content: `
            <p>&nbsp;</p>
<h1><em>The Fundamental Unit of Life</em></h1>
<hr>
<h2><em>1. Introduction to Cells</em></h2>
<ul>
<li><strong>Cell:</strong> The basic structural and functional unit of life.</li>
<li><strong>All living organisms</strong> are made up of cells.</li>
<li><strong>Cytology:</strong> The study of cells.</li>
</ul>
<h3><em>Discovery of the Cell</em></h3>
<ul>
<li><strong>Robert Hooke (1665):</strong> Discovered <strong>cells</strong> in a thin slice of cork using his self-designed microscope.</li>
<li><strong>Anton van Leeuwenhoek (1674):</strong> First to observe <strong>living cells</strong> under a microscope.</li>
</ul>
<hr>
<h2><em>2. Cell Theory</em></h2>
<ul>
<li>Proposed by <strong>Schleiden and Schwann (1838-39)</strong> and later modified by <strong>Rudolf Virchow (1855)</strong>.</li>
</ul>
<h3><em>Cell Theory States:</em></h3>
<ol>
<li><strong>All living organisms</strong> are made up of <em>one or more cells</em>.</li>
<li><strong>Cells are the basic unit</strong> of structure and function in living beings.</li>
<li><strong>All cells arise from pre-existing cells</strong> (Rudolf Virchow).</li>
</ol>
<hr>
<h2><em>3. Types of Cells</em></h2>
<h3><em>Based on Number of Cells</em></h3>
<ul>
<li><strong>Unicellular organisms:</strong> Made of a single cell (e.g., Amoeba, Bacteria).</li>
<li><strong>Multicellular organisms:</strong> Made of many cells (e.g., Humans, Plants).</li>
</ul>
<h3><em>Based on Cell Structure</em></h3>
<table>
<thead>
<tr>
<th><strong>Feature</strong></th>
<th><strong>Prokaryotic Cells</strong></th>
<th><strong>Eukaryotic Cells</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Nucleus</strong></td>
<td>Absent</td>
<td>Present</td>
</tr>
<tr>
<td><strong>DNA Location</strong></td>
<td>Floating in cytoplasm</td>
<td>Inside nucleus</td>
</tr>
<tr>
<td><strong>Membrane-bound Organelles</strong></td>
<td>Absent</td>
<td>Present</td>
</tr>
<tr>
<td><strong>Size</strong></td>
<td>Small (1-10 &mu;m)</td>
<td>Larger (10-100 &mu;m)</td>
</tr>
<tr>
<td><strong>Examples</strong></td>
<td>Bacteria, Blue-green algae</td>
<td>Plants, Animals, Fungi</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>4. Structure of a Cell</em></h2>
<p>A typical eukaryotic cell consists of:</p>
<ol>
<li><strong>Plasma membrane (Cell membrane)</strong></li>
<li><strong>Cytoplasm</strong></li>
<li><strong>Nucleus</strong></li>
<li><strong>Cell organelles</strong></li>
</ol>
<hr>
<h2><em>5. Plasma Membrane (Cell Membrane)</em></h2>
<ul>
<li>The <strong>outermost covering</strong> of animal cells and is present below the cell wall in plant cells.</li>
<li>Composed of a <strong>lipid bilayer with embedded proteins</strong>.</li>
<li><strong>Selectively permeable:</strong> Allows certain molecules to pass through while restricting others.</li>
</ul>
<h3><em>Functions:</em></h3>
<p>✅ Protects the internal contents of the cell.<br>✅ Allows <strong>exchange of materials</strong> between the cell and its surroundings.<br>✅ <strong>Maintains the shape</strong> of the animal cell.</p>
<h3><em>Transport Across the Membrane:</em></h3>
<p>🔹 <strong>Passive Transport (No Energy Required)</strong></p>
<ul>
<li><strong>Diffusion:</strong> Movement of molecules from high to low concentration (e.g., oxygen &amp; carbon dioxide exchange).</li>
<li><strong>Osmosis:</strong> Movement of water molecules from high to low concentration through a selectively permeable membrane.</li>
</ul>
<p>🔹 <strong>Active Transport (Energy Required &ndash; Uses ATP)</strong></p>
<ul>
<li>Movement of substances against the concentration gradient (from low to high concentration) (e.g., Sodium-Potassium pump).</li>
</ul>
<hr>
<h2><em>6. Cell Wall (Only in Plant Cells)</em></h2>
<ul>
<li>Located <strong>outside the plasma membrane</strong>.</li>
<li>Made of <strong>cellulose</strong> in plants or <strong>chitin</strong> in fungi.</li>
<li><strong>Fully permeable:</strong> Allows free movement of substances.</li>
</ul>
<h3><em>Functions:</em></h3>
<p>✅ Provides <strong>structural support and protection</strong>.<br>✅ Prevents <strong>cell bursting</strong> in a hypotonic solution.</p>
<hr>
<h2><em>7. Cytoplasm</em></h2>
<ul>
<li>A <strong>jelly-like fluid</strong> inside the cell.</li>
<li><strong>Holds organelles</strong> and is the site of various chemical reactions.</li>
</ul>
<hr>
<h2><em>8. Nucleus &ndash; The Control Center</em></h2>
<ul>
<li>Controls <strong>all cell activities</strong>.</li>
<li>Contains <strong>DNA</strong> (the genetic material).</li>
</ul>
<h3><em>Parts of the Nucleus:</em></h3>
<ol>
<li><strong>Nuclear Membrane:</strong> A double-layered, porous structure.</li>
<li><strong>Nucleoplasm:</strong> The jelly-like fluid inside the nucleus.</li>
<li><strong>Chromatin:</strong> Thread-like structures containing DNA and proteins.</li>
<li><strong>Nucleolus:</strong> Produces ribosomes.</li>
</ol>
<h3><em>Functions:</em></h3>
<p>✅ Controls <strong>cell division</strong> and <strong>growth</strong>.<br>✅ Stores <strong>genetic information</strong>.</p>
<hr>
<h2><em>9. Cell Organelles &ndash; Mini Organs of the Cell</em></h2>
<table>
<thead>
<tr>
<th><strong>Organelle</strong></th>
<th><strong>Structure</strong></th>
<th><strong>Function</strong></th>
<th><strong>Present in</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Endoplasmic Reticulum (ER)</strong></td>
<td>Network of membranes</td>
<td>Transport &amp; synthesis of molecules</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Rough ER (RER)</strong></td>
<td>Has ribosomes attached</td>
<td>Protein synthesis</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Smooth ER (SER)</strong></td>
<td>Lacks ribosomes</td>
<td>Lipid synthesis &amp; detoxification</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Ribosomes</strong></td>
<td>Small granules (no membrane)</td>
<td>Protein synthesis</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Golgi Apparatus</strong></td>
<td>Stack of membranes</td>
<td>Modifies &amp; packages proteins</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Mitochondria</strong></td>
<td>Double membrane; has its own DNA</td>
<td>Produces ATP (energy)</td>
<td>Plant &amp; Animal</td>
</tr>
<tr>
<td><strong>Lysosomes</strong></td>
<td>Membrane sacs with enzymes</td>
<td>Digests waste &amp; damaged cell parts ("suicide bags")</td>
<td>Mostly Animal, some Plant</td>
</tr>
<tr>
<td><strong>Plastids</strong></td>
<td>Double membrane; found in plants</td>
<td>Photosynthesis (Chloroplast), storage (Leucoplast), pigments (Chromoplast)</td>
<td>Plant only</td>
</tr>
<tr>
<td><strong>Vacuole</strong></td>
<td>Large sac-like structure</td>
<td>Stores water, nutrients, and waste</td>
<td>Plant (Large), Animal (Small)</td>
</tr>
<tr>
<td><strong>Centrioles</strong></td>
<td>Cylinder-like structure</td>
<td>Aids in cell division</td>
<td>Animal only</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>10. Differences Between Plant and Animal Cells</em></h2>
<table>
<thead>
<tr>
<th><strong>Feature</strong></th>
<th><strong>Plant Cell</strong></th>
<th><strong>Animal Cell</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cell Wall</strong></td>
<td>Present</td>
<td>Absent</td>
</tr>
<tr>
<td><strong>Shape</strong></td>
<td>Generally rectangular</td>
<td>Generally round</td>
</tr>
<tr>
<td><strong>Chloroplasts</strong></td>
<td>Present (for photosynthesis)</td>
<td>Absent</td>
</tr>
<tr>
<td><strong>Vacuole</strong></td>
<td>Large, central vacuole</td>
<td>Small or absent</td>
</tr>
<tr>
<td><strong>Centrioles</strong></td>
<td>Absent</td>
<td>Present</td>
</tr>
</tbody>
</table>
<hr>
<h2><em>11. Cell Division &ndash; Growth &amp; Reproduction</em></h2>
<h3><em>Why Do Cells Divide?</em></h3>
<ol>
<li><strong>Growth</strong></li>
<li><strong>Repair damaged tissues</strong></li>
<li><strong>Reproduction</strong></li>
</ol>
<h3><em>Types of Cell Division</em></h3>
<ol>
<li><strong>Mitosis:</strong> Produces two identical daughter cells for growth and repair.</li>
<li><strong>Meiosis:</strong> Produces four genetically different gametes (sperm/egg) for reproduction.</li>
</ol>
<hr>
<h2><em>12. Summary &ndash; Quick Recap</em></h2>
<ul>
<li><strong>Cells</strong> are the fundamental units of life.</li>
<li>The <strong>plasma membrane</strong> controls what enters and exits the cell.</li>
<li><strong>Cytoplasm</strong> contains organelles that perform specialized functions.</li>
<li>The <strong>nucleus</strong> stores DNA and controls cell activities.</li>
<li><strong>Mitochondria</strong> are the powerhouse of the cell.</li>
<li><strong>Plant cells</strong> have a cell wall, chloroplasts, and a large vacuole, whereas <strong>animal cells</strong> lack these structures.</li>
<li><strong>Cell division</strong> (mitosis &amp; meiosis) is essential for growth, repair, and reproduction.</li>
</ul>
<hr>
<h3><em>🔥 With this, you've mastered "The Fundamental Unit of Life"! 🚀</em></h3>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        },
        {
            title: "Force and Laws of Motion",
            content: `
            
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        }
        
    
        // Add more detailed chapters here
    ],
    mathematics: [
        {
            "title": "Linear Equations",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Linear Equations</h2>
                <p class="mb-4">A linear equation is an equation in which the highest power of the variable is one. Linear equations form straight lines when graphed on a coordinate plane and are fundamental in mathematics, representing relationships between variables in a simple, direct way.</p>
        
                <h3 class="text-2xl font-bold mb-3">Standard Form of a Linear Equation</h3>
                <p class="mb-4">In a linear equation with one variable, the standard form is:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Form:</strong> <span>ax + b = 0</span> where <span>a</span> and <span>b</span> are constants, and <span>x</span> is the variable.</li>
                    <li><strong>Example:</strong> <span>3x + 5 = 0</span></li>
                </ul>
                <p class="mb-4">In a linear equation with two variables, the standard form is:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Form:</strong> <span>ax + by + c = 0</span> where <span>a</span>, <span>b</span>, and <span>c</span> are constants, and <span>x</span> and <span>y</span> are variables.</li>
                    <li><strong>Example:</strong> <span>2x + 3y - 6 = 0</span></li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Types of Linear Equations</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Linear Equation in One Variable:</strong> Contains only one variable, such as <span>x</span> or <span>y</span>. Example: <span>4x - 8 = 0</span>.</li>
                    <li><strong>Linear Equation in Two Variables:</strong> Contains two variables, usually <span>x</span> and <span>y</span>. Example: <span>3x + 4y = 12</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Solving Linear Equations in One Variable</h3>
                <p class="mb-4">To solve a linear equation in one variable, isolate the variable on one side of the equation. Perform operations to simplify.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>5x - 10 = 15</span></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: Add 10 to both sides: <span>5x - 10 + 10 = 15 + 10</span>, which simplifies to <span>5x = 25</span>.</li>
                    <li>Step 2: Divide by 5 on both sides: <span>x = 5</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Solving Linear Equations in Two Variables</h3>
                <p class="mb-4">Linear equations in two variables can have infinitely many solutions. To solve for specific values, additional information or equations are required. These equations are solved simultaneously.</p>
        
                <h4 class="text-xl font-bold mb-3">Graphical Method</h4>
                <p class="mb-4">Graph the equations on a coordinate plane and find the point where the lines intersect. This point of intersection is the solution to both equations.</p>
                <p class="mb-4"><strong>Example:</strong> Solve the system of equations <span>2x + 3y = 6</span> and <span>x - y = 1</span> by graphing.</p>
        
                <h4 class="text-xl font-bold mb-3">Substitution Method</h4>
                <p class="mb-4">In this method, solve one equation for one variable, then substitute this expression into the other equation.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>2x + 3y = 6</span> and <span>x - y = 1</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: From <span>x - y = 1</span>, we get <span>x = y + 1</span>.</li>
                    <li>Step 2: Substitute <span>x = y + 1</span> into <span>2x + 3y = 6</span>: <span>2(y + 1) + 3y = 6</span>.</li>
                    <li>Step 3: Solve for <span>y</span>: <span>2y + 2 + 3y = 6</span> leads to <span>5y = 4</span> or <span>y = 0.8</span>.</li>
                    <li>Step 4: Substitute <span>y = 0.8</span> back into <span>x = y + 1</span> to get <span>x = 1.8</span>.</li>
                </ul>
        
                <h4 class="text-xl font-bold mb-3">Elimination Method</h4>
                <p class="mb-4">Add or subtract equations to eliminate one of the variables, then solve for the remaining variable.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>2x + 3y = 12</span> and <span>3x - y = 5</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: Multiply the second equation by 3 to match the coefficients of <span>y</span>: <span>9x - 3y = 15</span>.</li>
                    <li>Step 2: Add both equations: <span>(2x + 3y) + (9x - 3y) = 12 + 15</span>, which simplifies to <span>11x = 27</span> or <span>x = 2.45</span>.</li>
                    <li>Step 3: Substitute <span>x = 2.45</span> into one of the original equations to solve for <span>y</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Graphing Linear Equations</h3>
                <p class="mb-4">A linear equation in two variables can be represented as a straight line on a graph. To plot the line, find two points that satisfy the equation and draw a line through them.</p>
                <p class="mb-4"><strong>Example:</strong> Graph <span>y = 2x - 1</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Choose two values of <span>x</span>, say <span>x = 0</span> and <span>x = 2</span>.</li>
                    <li>Calculate <span>y</span> for each value of <span>x</span>: When <span>x = 0</span>, <span>y = -1</span>; when <span>x = 2</span>, <span>y = 3</span>.</li>
                    <li>Plot points <span>(0, -1)</span> and <span>(2, 3)</span> on the graph and draw a line through them.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Applications of Linear Equations</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Business and Economics:</strong> Linear equations are used in cost and revenue analysis, profit calculations, and budgeting.</li>
                    <li><strong>Physics:</strong> Linear equations describe relationships in motion, like calculating speed or distance.</li>
                    <li><strong>Engineering:</strong> Linear equations are used to model relationships and predict outcomes in engineering systems.</li>
                </ul>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Polynomials", "Coordinate Geometry"]
        },
        {
            "title": "Number Systems",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Number Systems</h2>
                <p class="mb-4">The number system is a way to represent and classify numbers into different types. Understanding these systems helps us perform various mathematical operations and comprehend the structure of mathematics. This chapter covers different types of numbers, including natural numbers, whole numbers, integers, rational numbers, and irrational numbers.</p>
        
                <h3 class="text-2xl font-bold mb-3">Types of Numbers</h3>
                <p class="mb-4">The following are the main types of numbers you will encounter:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Natural Numbers (N):</strong> The counting numbers starting from 1. <span>N = {1, 2, 3, ...}</span></li>
                    <li><strong>Whole Numbers (W):</strong> All natural numbers including 0. <span>W = {0, 1, 2, 3, ...}</span></li>
                    <li><strong>Integers (Z):</strong> All whole numbers, including positive and negative numbers. <span>Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</span></li>
                    <li><strong>Rational Numbers (Q):</strong> Numbers that can be expressed as the ratio of two integers. A rational number is of the form <span>a/b</span>, where <span>b ≠ 0</span>. Example: 3/4, -2/5, 0.75.</li>
                    <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as a fraction. Their decimal expansions are non-terminating and non-repeating. Examples include √2, π.</li>
                    <li><strong>Real Numbers (R):</strong> All rational and irrational numbers combined. Any number that can be represented on the number line is a real number.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Representation of Rational and Irrational Numbers</h3>
                <p class="mb-4">Numbers can be represented in two main forms:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Terminating Decimal:</strong> A decimal number that ends after a certain number of digits. Example: 0.25, 1.5.</li>
                    <li><strong>Non-Terminating, Repeating Decimal:</strong> A decimal number that repeats a pattern endlessly. Example: 0.333..., 1.272727...</li>
                    <li><strong>Non-Terminating, Non-Repeating Decimal:</strong> A decimal number that goes on forever without any repeating pattern. Example: π, √2.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Properties of Real Numbers</h3>
                <p class="mb-4">Real numbers follow various properties that are fundamental to mathematical operations:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Closure Property:</strong> The result of addition, subtraction, multiplication, and division (except by zero) of two real numbers is always a real number.</li>
                    <li><strong>Commutative Property:</strong> For any two real numbers <span>a</span> and <span>b</span>, <span>a + b = b + a</span> and <span>a × b = b × a</span>.</li>
                    <li><strong>Associative Property:</strong> For any three real numbers <span>a</span>, <span>b</span>, and <span>c</span>, <span>(a + b) + c = a + (b + c)</span> and <span>(a × b) × c = a × (b × c)</span>.</li>
                    <li><strong>Distributive Property:</strong> For any real numbers <span>a</span>, <span>b</span>, and <span>c</span>, <span>a × (b + c) = (a × b) + (a × c)</span>.</li>
                    <li><strong>Identity Element:</strong> For addition, 0 is the identity element as <span>a + 0 = a</span>. For multiplication, 1 is the identity element as <span>a × 1 = a</span>.</li>
                    <li><strong>Inverse Element:</strong> For every real number <span>a</span>, there exists an additive inverse <span>-a</span> such that <span>a + (-a) = 0</span>. For every non-zero real number <span>a</span>, there exists a multiplicative inverse <span>1/a</span> such that <span>a × (1/a) = 1</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Rationalizing the Denominator</h3>
                <p class="mb-4">In some cases, it is useful to simplify an expression by removing irrational numbers from the denominator. This process is called rationalizing the denominator.</p>
                <p class="mb-4"><strong>Example:</strong> Rationalize the denominator of <span>1 / √2</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Multiply both the numerator and denominator by <span>√2</span>: <span>(1 × √2) / (√2 × √2) = √2 / 2</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Real Numbers and Their Decimal Expansions</h3>
                <p class="mb-4">The decimal expansion of real numbers can help us classify them as rational or irrational:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Terminating Decimals:</strong> If a decimal terminates, it represents a rational number. Example: 0.75 = 3/4.</li>
                    <li><strong>Non-Terminating, Repeating Decimals:</strong> If a decimal is non-terminating but repeats, it represents a rational number. Example: 0.666... = 2/3.</li>
                    <li><strong>Non-Terminating, Non-Repeating Decimals:</strong> If a decimal neither terminates nor repeats, it is an irrational number. Example: π, √3.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Real Numbers on the Number Line</h3>
                <p class="mb-4">Any real number can be represented on the number line. To locate an irrational number, we can approximate it to a decimal value.</p>
                <p class="mb-4"><strong>Example:</strong> To locate √2 on the number line, approximate √2 ≈ 1.414 and mark the point between 1 and 2.</p>
        
                <h3 class="text-2xl font-bold mb-3">Operations on Real Numbers</h3>
                <p class="mb-4">Real numbers can be added, subtracted, multiplied, and divided (except by zero) following standard arithmetic rules.</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Addition:</strong> When adding two real numbers, add their decimal or fraction parts directly.</li>
                    <li><strong>Subtraction:</strong> Subtract the decimal or fraction parts to get the result.</li>
                    <li><strong>Multiplication:</strong> Multiply the two numbers as usual. For irrational numbers, express them in decimal or square root form.</li>
                    <li><strong>Division:</strong> Divide the numbers, ensuring the denominator is not zero.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Applications of Number Systems</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Financial Calculations:</strong> Rational and real numbers are used in budgeting, interest calculations, and other financial models.</li>
                    <li><strong>Measurement and Construction:</strong> Real numbers help in measuring distances, areas, and volumes, especially when irrational numbers like √2 and π are involved.</li>
                    <li><strong>Science and Engineering:</strong> Real and irrational numbers are crucial in calculations for physics, chemistry, and engineering.</li>
                </ul>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Polynomials", "Linear Equations"]
        },
        {
            "title": "Polynomials",
            "content": `
                <h2 class="text-3xl font-bold mb-6">Polynomials</h2>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
    <p class="text-yellow-700">
        <strong>Note:</strong> A polynomial's degree is the highest power of the variable in it. The degree helps us understand the type of polynomial and how many solutions (or zeroes) it can have.
    </p>
</div>

<h3 class="text-2xl font-bold mb-4">1. What is a Polynomial?</h3>
<p class="mb-4">A polynomial in one variable (like <math><mi>x</mi></math>) is an expression that can look like this:</p>
<p class="mb-4">
    <math>
        <mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>a</mi><sub><mn>n</mn></sub></msup><msup><mi>x</mi><mn>n</mn></msup><mo>+</mo><msup><mi>a</mi><sub><mn>n-1</mn></sub></msup><msup><mi>x</mi><mn>n-1</mn></msup><mo>+</mo>...<mo>+</mo><mi>a</mi><sub><mn>0</mn></sub>
    </math>
</p>
<p class="mb-4">Each <math><mi>a</mi></math> is a number called a "coefficient," and <math><mi>x</mi></math> is the variable. The powers of <math><mi>x</mi></math> (like <math><msup><mi>x</mi><mn>2</mn></msup></math> or <math><msup><mi>x</mi><mn>3</mn></msup></math>) tell us the degree of the polynomial.</p>

<h3 class="text-2xl font-bold mb-4">2. Types of Polynomials</h3>
<ul class="list-disc pl-6 mb-6">
    <li><strong>Constant Polynomial:</strong> Just a single number, like <math><mn>-6</mn></math> or <math><mn>4</mn></math>.</li>
    <li><strong>Zero Polynomial:</strong> A polynomial that equals zero, like <math><mn>0</mn></math>.</li>
    <li><strong>Monomial:</strong> Has only one term, like <math><mn>7x</mn></math>.</li>
    <li><strong>Binomial:</strong> Has two terms, like <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></math>.</li>
    <li><strong>Trinomial:</strong> Has three terms, like <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>5</mn></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">3. Degree of a Polynomial</h3>
<p class="mb-4">The "degree" of a polynomial is the highest power of the variable in it.</p>

<ul class="list-disc pl-6 mb-4">
    <li><strong>One Variable:</strong> The degree is the highest exponent. Example: In <math><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></math>, the degree is 4.</li>
    <li><strong>Multiple Variables:</strong> For polynomials with more than one variable, add up the exponents in each term. The highest sum is the degree. Example: In <math><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><msup><mn>2</mn></msup><mo>+</mo><mn>8</mn></math>, the degree is 5 (from <math><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><msup><mn>2</mn></msup></math>).</li>
</ul>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
    <p class="text-yellow-700">
        <strong>Note:</strong> The degree of a constant polynomial (like 5) is zero. For a zero polynomial, the degree is undefined.
    </p>
</div>

<h3 class="text-2xl font-bold mb-4">4. Key Types of Polynomials by Degree</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Linear Polynomial:</strong> Degree is 1. Example: <math><mi>x</mi><mo>+</mo><mn>3</mn></math>.</li>
    <li><strong>Quadratic Polynomial:</strong> Degree is 2. Example: <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>.</li>
    <li><strong>Cubic Polynomial:</strong> Degree is 3. Example: <math><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>b</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>c</mi><mi>x</mi><mo>+</mo><mi>d</mi></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">5. Value of a Polynomial</h3>
<p class="mb-4">To find the value of a polynomial <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> at a certain number (like <math><mi>x</mi><mo>=</mo><mi>2</mi></math>), we just plug in the value of <math><mi>x</mi></math> and calculate:</p>
<p class="mb-4">
    Example: If <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn></math>, then at <math><mi>x</mi><mo>=</mo><mn>2</mn></math>, <math><mi>p</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mn>2</mn><mo>=</mo><mn>4</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>14</mn></math>.
</p>

<h3 class="text-2xl font-bold mb-4">6. Zeroes of a Polynomial</h3>
<p class="mb-4">A "zero" of a polynomial is a value of <math><mi>x</mi></math> that makes the polynomial equal zero.</p>
<ul class="list-disc pl-6 mb-4">
    <li>Every linear polynomial has exactly one zero.</li>
    <li>The maximum number of zeroes a polynomial can have is equal to its degree.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">7. Remainder Theorem</h3>
<p class="mb-4">If a polynomial <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is divided by <math><mi>x</mi><mo>-</mo><mi>a</mi></math>, the remainder is <math><mi>p</mi><mo>(</mo><mi>a</mi><mo>)</mo></math>.</p>
<p class="mb-4">Formula: <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo>(<mi>x</mi><mo>-</mo><mi>a</mi>)<mo>⋅</mo><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>+</mo><mi>r</mi></math></p>

<h3 class="text-2xl font-bold mb-4">8. Factor Theorem</h3>
<p class="mb-4">If <math><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is a polynomial:</p>
<ul class="list-disc pl-6 mb-6">
    <li><math>(<mi>x</mi><mo>-</mo><mi>a</mi>)</math> is a factor of <math><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> if <math><mi>q</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">9. Key Algebraic Identities</h3>
<p class="mb-4">These identities make it easier to expand and factor polynomials:</p>
<ul class="list-disc pl-6 mb-4">
    <li><math>(<mi>x</mi><mo>+</mo><mi>y</mi>)<msup><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>xy</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math></li>
    <li><math>(<mi>x</mi><mo>-</mo><mi>y</mi>)<msup><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>xy</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math></li>
    <li><math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo>(<mi>x</mi><mo>+</mo><mi>y</mi>)(<mi>x</mi><mo>-</mo><mi>y</mi>)</math></li>
</ul>


            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        },
        {
            "title": "Lines and Angles",
            "content": `
            <h2 class="text-3xl font-bold mb-4">Basic Terms and Definitions on Lines and Angles</h2>
<p class="mb-4"><strong>Line Segment:</strong> A line that has two endpoints is called a line segment.</p>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20211214074602/linesegament.jpg">
<p class="mb-4"><strong>Ray:</strong> A line with one endpoint and the other end of the line extending up to infinity is called a ray.</p>
<img src="https://cdn1.byjus.com/wp-content/uploads/2020/01/Ray-example.png">
<p class="mb-4"><strong>Collinear points:</strong> When three or more points lie on the same line, they are said to be collinear.</p>
<p class="mb-4"><strong>Non-collinear points:</strong> When three or more points do not lie on the same line, they are non-collinear.</p>
<p class="mb-4"><strong>Angle:</strong> An angle is formed by two rays meeting at a common point (called a vertex), and the rays forming the angle are called arms of the angle.</p>
<h3 class="text-2xl font-bold mb-4">Types of Angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Acute Angle:</strong> An angle that measures between 0° and 90° is called an acute angle.</li>
    <li class="mb-2"><strong>Obtuse angle:</strong> An angle that measures between 90° and 180° is called an obtuse angle.</li>
    <li class="mb-2"><strong>Right angle:</strong> An angle that is equal to 90° is called a right angle.</li>
    <li class="mb-2"><strong>Reflex angle:</strong> An angle greater than 180° but less than 360° is called a reflex angle.</li>
</ul>
<img src="https://s3.amazonaws.com/images.powershow.com/P1256588991FBxMa.pr.jpg">
<h3 class="text-2xl font-bold mb-4">Supplementary angles and Complementary angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Complementary angles:</strong> When sum of two angles is equal to 90°.</li>
    <img src="https://softschools.com/math/geometry/topics/images/supplementary_and_complementary_angles_image2.png">
    <li class="mb-2"><strong>Supplementary angles:</strong> When sum of two angles is equal to 180°.</li>
    <img src="https://softschools.com/math/geometry/topics/images/supplementary_and_complementary_angles_image1.png">
</ul>
<h3 class="text-2xl font-bold mb-4">Relation between two Angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Adjacent Angles:</strong> If two angles have the same vertex and their one of the arm is common then these are called adjacent angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-1365851-8914-adjacent-angles.png">
    <li class="mb-2"><strong>Linear pair of Angles:</strong> If two angles have the same vertex and one common arm but the arms which are not common are making a line then these are called the linear pair of angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13722956-9387-linear-pair-of-angles.png">
    <li class="mb-2"><strong>Vertically opposite Angles:</strong> If two lines intersect each other at a point then the opposite angles are vertically opposite angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13814752-4803-vertically-opposite-angles.png">
</ul>
<h3 class="text-2xl font-bold">Intersecting Lines and Non-intersecting Lines</h3>
<p class="mb-4">There are two ways to draw two lines-</p>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">The lines which cross each other from a particular point is called <strong>Intersecting Lines</strong></li>
    <li class="mb-2">The lines which never cross each other at any point are called <strong>Non-intersecting Lines</strong>. These lines are called <strong>Parallel Lines</strong> and the common length between two lines is the distance between parallel lines.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13718706-6311-intersecting-lines-and-non-intersecting-lines.png">
</ol>
<h3 class="text-2xl font-bold mb-4">Pairs of Angles Axioms</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2"><strong>If a ray stands on a line, then the sum of two adjacent angles formed by that ray is 180°.</strong></li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13736534-4296-pairs-of-angles-axioms.png">
    <p class="mb-4">This shows that the common arm of the two angles is the ray which is standing on a line and the two adjacent angles are the linear pair of the angles. As the sum of two angles is 180° so these are supplementary angles too.</p>
    <li class="mb-2"><strong>If the sum of two adjacent angles is 180°, then the arms which are not common of the angles form a line.</strong></li>
    <p class="mb-4">This is the reverse of the first axiom which says that the opposite is also true.   </p>
</ol>
<h3 class="text-2xl font-bold mb-4">Vertically opposite Angles Theorem</h3>
<p class="mb-4">When two lines intersect each other, then the vertically opposite angles so formed will be equal.</p>
<img src="https://files.askiitians.com/cdn/images/20181013-13818564-4880-vertically-opposite-angles-theorem.png">
<p class="mb-4">AC and BD are intersecting each other so ∠AOD = ∠BOC and ∠AOB = DOC.</p>
<h3 class="text-2xl font-bold mb-4">Parallel Lines and a Transversal</h3>
<p class="mb-4">If a line passes through two distinct lines and intersects them at distant points then this line is called <strong>Transversal Line</strong></p>
<p class="mb-4">Here line “l” is transversal of line m and n.</p>
<img alt="Parallel Lines and a Transversal" src="https://files.askiitians.com/cdn/images/20181013-13741331-5038-parallel-lines-and-a-transversal.png" style="text-align: center; float: right;" title="Parallel Lines and a Transversal">
<p class="mb-4"><strong>Exterior Angles</strong> - ∠1, ∠2, ∠7 and ∠8</p>
<p class="mb-4"><strong>Interior Angles</strong> - ∠3, ∠4, ∠5 and ∠6</p>
<p class="mb-4">Pairs of angles formed when a transversal intersects two lines-</p>
<ol class="list-decimal pl-6 mb-6">
    <li><strong>Corresponding Angles :</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">∠ 1 and ∠ 5</li>
        <li class="mb-2">
        <p class="mb-4">∠ 2 and ∠ 6</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 8</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 7</p>
        </li>
    </ul>
    <li><strong>Alternate Interior Angles :</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 6</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 5</p>
        </li>
    </ul>
    <li><strong>Alternate Exterior Angles:</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 1 and ∠ 7</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 2 and ∠ 8</p>
        </li>
    </ul>
    <li class="mb-2"><strong>Interior Angles on the same side of the transversal:</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 5</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 6</p>
        </li>
    </ul>
</ol>
<h3 class="text-2xl font-bold mb-4">Transversal Axioms</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2"><strong>If a transversal intersects two parallel lines, then</strong></li>
    <img alt="Transversal Axioms" src="https://files.askiitians.com/cdn/images/20181013-1386408-8859-transversal-axioms.png" style="float: right;" title="Transversal Axioms">
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p>Each pair of corresponding angles will be equal.?</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Each pair of alternate interior angles will be equal.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Each pair of interior angles on the same side of the transversal will be supplementary.</p>
        </li>
    </ul>
    <li class="mb-2"><strong>If a transversal intersects two lines in such a way that</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">Corresponding angles are equal then these two lines will be parallel to each other.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Alternate interior angles are equal then the two lines will be parallel.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Interior angles on the same side of the transversal are supplementary then the two lines will be parallel.</p>
        </li>
    </ul>
</ol>
<h3 class="text-2xl font-bold mb-4">Example</h3>
<p class="mb-4">Find ∠DGH.</p>
<p class="mb-4" style="text-align: center;"><img alt="Corresponding Angles" src="https://files.askiitians.com/cdn/images/20181013-14351840-8617-corresponding-angles.png" title="Corresponding Angles"></p>
<p>&nbsp;</p>
<h3 class="text-2xl font-bold mb-4">Solution</h3>
<p class="mb-4">Here, AB ∥ CD and EH is transversal.</p>
<p class="mb-4">∠EFB + ∠BFG = 180° (Linear pair)</p>
<p class="mb-4">∠BFG = 180°- 133°  </p>
<p class="mb-4">∠BFG = 47°</p>
<p class="mb-4">∠BFG =∠DGH (Corresponding Angles)</p>
<p class="mb-4">∠DGH = 47°</p>
<h3 class="text-2xl font-bold mb-4">Lines Parallel to the Same Line</h3>
<p style="text-align: center;"><img alt="Lines Parallel to the Same Line" src="https://files.askiitians.com/cdn/images/20181013-13728816-8286-lines-parallel-to-the-same-line.png" title="Lines Parallel to the Same Line"></p>
<p class="mb-4">If two lines are parallel with a common line then these two lines will also be parallel to each other.</p>
<p class="mb-4">As in the above figure if AB ∥ CD and EF ∥ CD then AB ∥ EF.</p>
<h3 class="text-2xl font-bold mb-4">Angle Sum Property of a Triangle</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">The sum of the angles of a triangle is 180º.</li>
    <p style="text-align: center;"><img alt="The sum of the angles of a triangle is 180º." src="https://files.askiitians.com/cdn/images/20181013-13758596-1769-sum-of-the-angles-of-a-triangle-is-180º.png" title="The sum of the angles of a triangle is 180º."></p>
    <p class="mb-4">∠A + ∠B + ∠C = 180°</p>
    <li class="mb-4">If we produce any side of a triangle, then the exterior angle formed is equal to the sum of the two interior opposite angles.</li>
    <p style="text-align: center;"><img alt="The exterior angle formed is equal to the sum of the two interior opposite angles" src="https://files.askiitians.com/cdn/images/20181013-13810471-9775-triangle.png" title="The exterior angle formed is equal to the sum of the two interior opposite angles"></p>
    <p class="mb-4">∠BCD = ∠BAC + ∠ABC</p>
</ol>
<h3 class="text-2xl font-bold mb-4">Example</h3>
<p class="mb-4">Find x and y.</p>
<p style="text-align: center;"><img alt="Angle" src="https://files.askiitians.com/cdn/images/20181013-1371879-7355-angle.png" title="Angle"></p>
<p>&nbsp;</p>
<h3 class="text-2xl font-bold mb-4">Solution</h3>
<p class="mb-4">Here, ∠A + ∠B + ∠C = 180° (Angle sum property)</p>
<p class="mb-4" style="margin-left: 40px;">30°+ 42° + x = 180°</p>
<p class="mb-4" style="margin-left: 40px;">x = 180°- (30° + 42°)</p>
<p class="mb-4" style="margin-left: 40px;">x = 108°</p>
<p class="mb-4">And y is the exterior angle and the two opposite angles are ∠A and ∠B.</p>
<p class="mb-4">So,</p>
<p class="mb-4">∠BCD = ∠A + ∠B (Exterior angle is equal to the sum of the two interior opposite angles).</p>
<p class="mb-4" style="margin-left: 40px;">y = 30°+ 42°</p>
<p class="mb-4" style="margin-left: 40px;">y = 72°</p>
<p class="mb-4">We can also find it by linear pair axiom as BC is a ray on the line AD, so</p>
<p class="mb-4" style="margin-left: 40px;">x + y = 180° (linear pair)</p>

         `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        },
        {
            "title": "Euclid’s Geometry",
            "content": `
<p>&nbsp;</p>
<h1>📚&nbsp;<strong>Euclid&rsquo;s Geometry &ndash; Class 9 Mathematics</strong></h1>
<h2><strong>1. Introduction to Euclidean Geometry</strong></h2>
<p>Euclidean Geometry is named after the Greek mathematician <strong>Euclid</strong>, who introduced the <strong>axiomatic method</strong> of proving mathematical truths.<br>It is based on fundamental <strong>axioms and postulates</strong> that define shapes, lines, and angles in two-dimensional space.</p>
<hr>
<h2><strong>2. Euclid&rsquo;s Definitions</strong></h2>
<p>Euclid provided precise definitions for basic geometrical terms:</p>
<ul>
<li><strong>Point:</strong> A location that has no size or dimension.</li>
<li><strong>Line:</strong> A one-dimensional figure that extends infinitely in both directions.</li>
<li><strong>Plane:</strong> A flat, two-dimensional surface that extends infinitely.</li>
<li><strong>Line Segment:</strong> A part of a line with two endpoints.</li>
<li><strong>Ray:</strong> A line that starts at one point and extends infinitely in one direction.</li>
<li><strong>Angle:</strong> Formed when two rays originate from a common endpoint.</li>
</ul>
<hr>
<h2><strong>3. Euclid&rsquo;s Axioms (Universal Truths)</strong></h2>
<p>Euclid&rsquo;s axioms are self-evident truths that do not require proof.</p>
<ol>
<li>
<p><strong>Things which are equal to the same thing are equal to one another.</strong><br><em>Example:</em> If <span class="katex">a=ba = b</span> and <span class="katex">b=cb = c</span>, then <span class="katex">a=ca = c</span>.</p>
</li>
<li>
<p><strong>If equals are added to equals, the wholes are equal.</strong><br><em>Example:</em> If <span class="katex">a=ba = b</span>, then <span class="katex">a+c=b+ca + c = b + c</span>.</p>
</li>
<li>
<p><strong>If equals are subtracted from equals, the remainders are equal.</strong><br><em>Example:</em> If <span class="katex">a=ba = b</span>, then <span class="katex">a&minus;c=b&minus;ca - c = b - c</span>.</p>
</li>
<li>
<p><strong>Things that coincide with one another are equal to one another.</strong><br><em>Example:</em> Two overlapping circles are equal in size.</p>
</li>
<li>
<p><strong>The whole is greater than the part.</strong><br><em>Example:</em> A full pizza is larger than any single slice.</p>
</li>
<li>
<p><strong>Things which are double of the same things are equal to one another.</strong><br><em>Example:</em> If <span class="katex">a=ba = b</span>, then <span class="katex">2a=2b2a = 2b</span>.</p>
</li>
<li>
<p><strong>Things which are halves of the same things are equal to one another.</strong><br><em>Example:</em> If <span class="katex">a=ba = b</span>, then <span class="katex">a2=b2\frac{a}{2} = \frac{b}{2}</span>.</p>
</li>
</ol>
<hr>
<h2><strong>4. Euclid&rsquo;s Five Postulates (Geometrical Assumptions)</strong></h2>
<p>Euclid&rsquo;s postulates are specific assumptions about geometry:</p>
<ol>
<li>
<p><strong>A straight line may be drawn from any one point to any other point.</strong><br>✅ This means we can always connect two points with a straight line.</p>
</li>
<li>
<p><strong>A terminated line (line segment) can be extended indefinitely.</strong><br>✅ A line segment can always be extended to form a full line.</p>
</li>
<li>
<p><strong>A circle can be drawn with any center and any radius.</strong><br>✅ Given a point and a radius, a circle can always be drawn.</p>
</li>
<li>
<p><strong>All right angles are equal to one another.</strong><br>✅ A right angle is always <span class="katex">90∘90^\circ</span>, no matter where it is.</p>
</li>
<li>
<p><strong>If a straight line, falling on two other straight lines, makes the interior angles on the same side sum up to less than two right angles, then the two lines, if extended indefinitely, meet on that side.</strong><br>✅ This is called the <strong>parallel postulate</strong>.</p>
</li>
</ol>
<hr>
<h2><strong>5. Equivalent Versions of Euclid&rsquo;s Fifth Postulate</strong></h2>
<p>Several mathematicians provided alternate versions of Euclid&rsquo;s Fifth Postulate:</p>
<ul>
<li><strong>Two distinct intersecting lines cannot be parallel to the same line.</strong></li>
<li><strong>Through a given point, only one parallel line can be drawn to a given line.</strong></li>
<li><strong>The sum of interior angles in a triangle is always <span class="katex">180∘180^\circ</span>.</strong></li>
</ul>
<hr>
<h2><strong>6. Common Notions (Additional Self-Evident Truths)</strong></h2>
<ol>
<li><strong>Things which are equal to the same thing are equal to one another.</strong></li>
<li><strong>If equals are added to equals, their sums are equal.</strong></li>
<li><strong>If equals are subtracted from equals, their differences are equal.</strong></li>
<li><strong>Things which coincide are equal to one another.</strong></li>
<li><strong>The whole is greater than the part.</strong></li>
</ol>
<p>These common notions are frequently used in proofs.</p>
<hr>
<h2><strong>7. Importance of Euclidean Geometry</strong></h2>
<p>Euclidean Geometry forms the basis of modern mathematics and is widely used in:</p>
<ul>
<li><strong>Architecture</strong></li>
<li><strong>Engineering</strong></li>
<li><strong>Physics</strong></li>
<li><strong>Computer Graphics</strong></li>
<li><strong>GPS and Mapping Technologies</strong></li>
</ul>
<hr>
<h2><strong>8. Summary &ndash; Quick Recap 🚀</strong></h2>
<p>✅ <strong>Euclid&rsquo;s Geometry</strong> is based on axioms, postulates, and logical proofs.<br>✅ <strong>Axioms</strong> are universal mathematical truths.<br>✅ <strong>Postulates</strong> are specific to geometry and form its foundation.<br>✅ <strong>The Fifth Postulate</strong> (Parallel Postulate) is a key concept in Euclidean geometry.<br>✅ <strong>Real-Life Applications</strong> include construction, physics, and navigation.</p>
<hr>
<p>🎯 <strong>Now you&rsquo;re a Euclidean Geometry Pro! 🚀🔥</strong></p>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        },
        {
            "title": "Lines and Angles",
            "content":`
            <p>&nbsp;</p>
<h1>📚&nbsp;<strong>Lines and Angles &ndash; Class 9 Mathematics</strong></h1>
<h2><strong>1. Introduction to Lines and Angles</strong></h2>
<ul>
<li><strong>Geometry</strong> is the branch of mathematics that deals with shapes, sizes, and properties of figures.</li>
<li><strong>Lines and angles</strong> are fundamental components of geometry, forming the basis for many theorems and constructions.</li>
</ul>
<hr>
<h2><strong>2. Basic Terms and Definitions</strong></h2>
<h3><strong>Point</strong></h3>
<ul>
<li>A location in space with no size or dimensions.</li>
<li>Represented by a capital letter (e.g., A, B, C).</li>
</ul>
<h3><strong>Line</strong></h3>
<ul>
<li>A collection of infinite points extending in both directions.</li>
<li>Has no endpoints.</li>
<li>Represented as <strong>&harr;</strong> (e.g., <strong>AB &harr;</strong>).</li>
</ul>
<h3><strong>Line Segment</strong></h3>
<ul>
<li>A part of a line with two endpoints.</li>
<li>Represented as <strong>&minus;</strong> (e.g., <strong>AB &minus;</strong>).</li>
</ul>
<h3><strong>Ray</strong></h3>
<ul>
<li>A part of a line that starts at a point and extends infinitely in one direction.</li>
<li>Represented as <strong>&rarr;</strong> (e.g., <strong>AB &rarr;</strong>).</li>
</ul>
<h3><strong>Angle</strong></h3>
<ul>
<li>Formed when two rays meet at a common point (vertex).</li>
<li>Measured in degrees (<strong>&deg;</strong>).</li>
</ul>
<hr>
<h2><strong>3. Types of Angles</strong></h2>
<ol>
<li><strong>Acute Angle</strong>: Less than <span class="katex">90∘90^\circ</span>.</li>
<li><strong>Right Angle</strong>: Exactly <span class="katex">90∘90^\circ</span>.</li>
<li><strong>Obtuse Angle</strong>: Between <span class="katex">90∘90^\circ</span> and <span class="katex">180∘180^\circ</span>.</li>
<li><strong>Straight Angle</strong>: Exactly <span class="katex">180∘180^\circ</span>.</li>
<li><strong>Reflex Angle</strong>: Between <span class="katex">180∘180^\circ</span> and <span class="katex">360∘360^\circ</span>.</li>
<li><strong>Complete Angle</strong>: Exactly <span class="katex">360∘360^\circ</span>.</li>
</ol>
<hr>
<h2><strong>4. Types of Pairs of Angles</strong></h2>
<ol>
<li>
<p><strong>Adjacent Angles</strong></p>
<ul>
<li>Two angles with a common vertex and a common arm but no overlap.</li>
<li>Example: <span class="katex">&ang;ABC\angle ABC</span> and <span class="katex">&ang;CBD\angle CBD</span>.</li>
</ul>
</li>
<li>
<p><strong>Linear Pair of Angles</strong></p>
<ul>
<li>Two adjacent angles that form a straight line.</li>
<li><strong>Sum = <span class="katex">180∘180^\circ</span></strong>.</li>
<li>Example: If <span class="katex">&ang;A+&ang;B=180∘\angle A + \angle B = 180^\circ</span>, they are a linear pair.</li>
</ul>
</li>
<li>
<p><strong>Vertically Opposite Angles</strong></p>
<ul>
<li>Formed when two lines intersect.</li>
<li><strong>Always equal</strong>.</li>
<li>Example: If <span class="katex">&ang;A=50∘\angle A = 50^\circ</span>, then opposite <span class="katex">&ang;B=50∘\angle B = 50^\circ</span>.</li>
</ul>
</li>
<li>
<p><strong>Complementary Angles</strong></p>
<ul>
<li><strong>Sum = <span class="katex">90∘90^\circ</span></strong>.</li>
<li>Example: <span class="katex">30∘+60∘=90∘30^\circ + 60^\circ = 90^\circ</span>.</li>
</ul>
</li>
<li>
<p><strong>Supplementary Angles</strong></p>
<ul>
<li><strong>Sum = <span class="katex">180∘180^\circ</span></strong>.</li>
<li>Example: <span class="katex">110∘+70∘=180∘110^\circ + 70^\circ = 180^\circ</span>.</li>
</ul>
</li>
<li>
<p><strong>Explementary Angles</strong></p>
<ul>
<li><strong>Sum = <span class="katex">360∘360^\circ</span></strong>.</li>
</ul>
</li>
</ol>
<hr>
<h2><strong>5. Intersecting and Parallel Lines</strong></h2>
<h3><strong>Transversal</strong></h3>
<p>A line that cuts two or more lines at different points.</p>
<h3><strong>Angles Formed by a Transversal</strong></h3>
<ol>
<li>
<p><strong>Corresponding Angles</strong></p>
<ul>
<li>On the same side of the transversal.</li>
<li><strong>Equal when lines are parallel</strong>.</li>
<li>Example: <span class="katex">&ang;1=&ang;5\angle 1 = \angle 5</span>.</li>
</ul>
</li>
<li>
<p><strong>Alternate Interior Angles</strong></p>
<ul>
<li>On opposite sides of the transversal, inside the parallel lines.</li>
<li><strong>Equal when lines are parallel</strong>.</li>
<li>Example: <span class="katex">&ang;3=&ang;6\angle 3 = \angle 6</span>.</li>
</ul>
</li>
<li>
<p><strong>Alternate Exterior Angles</strong></p>
<ul>
<li>On opposite sides of the transversal, outside the parallel lines.</li>
<li><strong>Equal when lines are parallel</strong>.</li>
<li>Example: <span class="katex">&ang;1=&ang;8\angle 1 = \angle 8</span>.</li>
</ul>
</li>
<li>
<p><strong>Consecutive Interior (Co-Interior) Angles</strong></p>
<ul>
<li>Inside parallel lines, on the same side of the transversal.</li>
<li><strong>Sum = <span class="katex">180∘180^\circ</span> when lines are parallel</strong>.</li>
<li>Example: <span class="katex">&ang;3+&ang;5=180∘\angle 3 + \angle 5 = 180^\circ</span>.</li>
</ul>
</li>
</ol>
<hr>
<h2><strong>6. Important Theorems on Lines and Angles</strong></h2>
<h3><strong>Theorem 1: If two lines intersect, then the vertically opposite angles are equal.</strong></h3>
<p>✅ <strong>Proof:</strong></p>
<ul>
<li>Let two lines intersect at <span class="katex">OO</span>, forming angles <span class="katex">A,B,C,DA, B, C, D</span>.</li>
<li>Since angles on a straight line sum to <span class="katex">180∘180^\circ</span>: <span class="katex">&ang;A+&ang;B=180∘\angle A + \angle B = 180^\circ</span> <span class="katex">&ang;C+&ang;D=180∘\angle C + \angle D = 180^\circ</span></li>
<li>But also: <span class="katex">&ang;A=&ang;C,&ang;B=&ang;D\angle A = \angle C, \quad \angle B = \angle D</span></li>
<li><strong>Conclusion:</strong> Vertically opposite angles are equal.</li>
</ul>
<hr>
<h3><strong>Theorem 2: If a transversal intersects two parallel lines, then</strong></h3>
<ul>
<li><strong>Corresponding angles are equal</strong></li>
<li><strong>Alternate interior angles are equal</strong></li>
<li><strong>Co-interior angles are supplementary</strong></li>
</ul>
<p>✅ <strong>Proof:</strong></p>
<ul>
<li>Given two parallel lines <span class="katex">ll</span> and <span class="katex">mm</span>, transversal <span class="katex">tt</span> cuts them.</li>
<li>Using the straight-line property and parallelism, we prove the above relationships.</li>
</ul>
<hr>
<h3><strong>Theorem 3: Lines Parallel to the Same Line are Parallel to Each Other.</strong></h3>
<p>✅ <strong>Statement:</strong><br>If two lines are parallel to the same third line, they are parallel to each other.</p>
<p>✅ <strong>Proof:</strong></p>
<ul>
<li>Given three lines: <span class="katex">A∥BA \parallel B</span> and <span class="katex">B∥CB \parallel C</span>.</li>
<li>By the transitive property, <span class="katex">A∥CA \parallel C</span>.</li>
</ul>
<hr>
<h2><strong>7. Angle Sum Property of a Triangle</strong></h2>
<p>✅ <strong>Statement:</strong><br>The sum of the interior angles of a triangle is always <span class="katex">180∘180^\circ</span>.</p>
<p>✅ <strong>Proof:</strong></p>
<ul>
<li>Draw a parallel line through one vertex.</li>
<li>Use alternate interior angles and straight-line properties to show: <span class="katex">&ang;A+&ang;B+&ang;C=180∘\angle A + \angle B + \angle C = 180^\circ</span></li>
</ul>
<hr>
<h2><strong>8. Summary &ndash; Quick Recap 🚀</strong></h2>
<p>✅ <strong>Types of angles</strong>: Acute, Right, Obtuse, Straight, Reflex, Complete.<br>✅ <strong>Angle pairs</strong>: Complementary (<span class="katex">90∘90^\circ</span>), Supplementary (<span class="katex">180∘180^\circ</span>), Linear Pair, Vertically Opposite, etc.<br>✅ <strong>Transversal angles</strong>: Corresponding, Alternate Interior, Alternate Exterior, Co-Interior.<br>✅ <strong>Key Theorems</strong>:</p>
<ul>
<li><strong>Vertically opposite angles are equal.</strong></li>
<li><strong>Parallel lines with a transversal follow specific angle rules.</strong></li>
<li><strong>Sum of angles in a triangle is <span class="katex">180∘180^\circ</span>.</strong></li>
</ul>
<hr>
<p>🎯 <strong>Now you&rsquo;re a master of Lines and Angles! 🚀🔥</strong></p>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        }
        
        
        // Add more detailed chapters here
    ],
    english:[
        {
            "title": "The Fun They Had",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to "The Fun They Had"</h2>
                <p class="mb-4">"The Fun They Had" is a science fiction story by Isaac Asimov that explores the future of education through the perspective of two young children, Margie and Tommy. Set in the year 2157, it contrasts their future computerized schooling with the traditional schooling of the past, highlighting themes of technology, nostalgia, and the value of human interaction in learning.</p>
                
                <h3 class="text-2xl font-bold mb-3">Summary of the Story</h3>
                <p class="mb-4">The story begins with 11-year-old Margie Jones writing in her diary about an unusual discovery made by her friend Tommy, a 13-year-old boy. Tommy has found a real "book," something unheard of in their time where books are entirely digital, displayed on computer screens. The book describes schools from centuries ago, where students were taught by human teachers in physical classrooms and sat together to learn.</p>
                <p class="mb-4">Margie, who studies alone at home with a robotic teacher that operates from a computer, is fascinated by the idea of a school with real human interaction. Her mechanical teacher, which she finds boring and difficult, lacks the warmth and flexibility of a human teacher. Through the story, Margie imagines how fun it must have been for students in the past to study together, sharing stories and learning in a communal setting.</p>
        
                <h3 class="text-2xl font-bold mb-3">Characters</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Margie Jones:</strong> An 11-year-old girl who dislikes her mechanical teacher and yearns for a different form of schooling. Her curiosity about traditional schools reveals her desire for human interaction in learning.</li>
                    <li><strong>Tommy:</strong> A 13-year-old boy, Margie's friend, who is more knowledgeable about the past. He discovers the "real book" and shares it with Margie, sparking her curiosity about old-fashioned schools.</li>
                    <li><strong>Mechanical Teacher:</strong> A computerized device that teaches Margie various subjects. It lacks empathy and personalization, which frustrates Margie, making her long for a more interactive learning experience.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Themes</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Impact of Technology on Education:</strong> The story explores how technology could replace traditional methods of teaching, but it also highlights potential downsides, such as the lack of social interaction and emotional connection.</li>
                    <li><strong>Nostalgia for the Past:</strong> Through Margie's fascination with traditional schools, the story conveys a sense of nostalgia and appreciation for human-centered education, something that might be lost in the future.</li>
                    <li><strong>Isolation vs. Community:</strong> Margie’s solitary learning experience contrasts with the communal learning of the past, highlighting the importance of social connections and friendships in education.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Analysis</h3>
                <p class="mb-4">Asimov’s story serves as a commentary on the future of education, raising questions about how much technology should be integrated into schooling. Although technology offers many benefits, the story suggests that it cannot fully replace the human elements of teaching and learning. Margie’s longing for a "real school" reflects a common sentiment that human connections play an essential role in personal growth and happiness. Through its futuristic lens, the story encourages readers to think about the value of interpersonal relationships in learning environments.</p>
                
                <h3 class="text-2xl font-bold mb-3">Important Quotes</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>"They turned the pages, which were yellow and crinkly, and it was awfully funny to read words that stood still instead of moving."</strong> - This quote emphasizes the novelty of physical books for Margie and Tommy, who are used to digital screens.</li>
                    <li><strong>"Margie was thinking about how the kids must have loved it in the old days."</strong> - This line reflects Margie’s fascination and idealization of the past educational system, which she believes was more enjoyable than her own.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Message of the Story</h3>
                <p class="mb-4">The story conveys that while technology can transform education, it cannot replace the social and emotional experiences that come with human interaction in a classroom. Asimov suggests that traditional schooling offers a sense of camaraderie and shared learning that may be missing in a highly computerized future.</p>
        
                <h3 class="text-2xl font-bold mb-3">Moral of the Story</h3>
                <p class="mb-4">The moral of "The Fun They Had" is to recognize the importance of social interactions and relationships in education. While technology can provide knowledge, true learning often comes from collaborative experiences and the guidance of a compassionate teacher. The story encourages readers to value both technological advancements and the human aspects of learning.</p>
            `,
            "subject": "English",
            "difficulty": "Intermediate",
            "relatedChapters": ["The Road Not Taken", "The Little Girl"]
        },
        {
            "title": "The Road Not Taken",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to "The Road Not Taken"</h2>
                <p class="mb-4">"The Road Not Taken" is a renowned poem by Robert Frost, a prominent American poet. Published in 1916 as part of his collection "Mountain Interval," the poem explores themes of choices, individuality, and the consequences of decisions. It is often interpreted as a reflection on the importance of making unique choices in life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Summary of the Poem</h3>
                <p class="mb-4">The poem describes a traveler who comes to a fork in the road in a yellow wood. He must decide which path to take, symbolizing a choice in life. He carefully examines both paths and chooses the one that appears less traveled, although he later realizes that both paths are equally worn. The traveler reflects on his decision, recognizing that choices are final and often lead to unexpected outcomes. He concludes that his choice has significantly influenced his life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Themes</h3>
        <ul class="list-disc pl-6 mb-6">
            <li><strong>Choices and Consequences:</strong> The poem explores the impact of choices on life’s direction. Every decision leads to a new path with its own outcomes.</li>
            <li><strong>Individualism and Nonconformity:</strong> By choosing the "less traveled" road, the speaker represents individuality and the courage to make unconventional decisions.</li>
            <li><strong>Reflection and Regret:</strong> The poem captures the human tendency to wonder about "what might have been" and the inherent regret in making irreversible choices.</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">Themes in Detail</h3>
                <p class="mb-4"><strong>Choices and Decisions:</strong> The poem delves into the inevitability of making choices in life and the weight they carry. It underscores that each decision leads to a unique path, shaping our future experiences.</p>
                <p class="mb-4"><strong>Individuality:</strong> By choosing the "one less traveled by," the speaker emphasizes the value of making independent and personal decisions rather than following the crowd.</p>
                <p class="mb-4"><strong>Regret and Anticipation:</strong> The reflective tone suggests that the speaker anticipates a future where he will look back on his decision, contemplating its impact and perhaps wondering about the alternative path.</p>
                <p class="mb-4"><strong>Consequences:</strong> Every choice has consequences, and the poem reflects on how a single decision can alter the course of one’s life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Literary Devices</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Metaphor:</strong> The diverging roads symbolize life choices.</li>
                    <li><strong>Imagery:</strong> Vivid descriptions of the forest and paths create a visual representation of the dilemma.</li>
                    <li><strong>Symbolism:</strong> Roads represent different life paths and decisions.</li>
                    <li><strong>Rhyme Scheme:</strong> ABAAB rhyme scheme adds a musical quality to the poem.</li>
                    <li><strong>Tone:</strong> Reflective and contemplative, conveying the speaker's thoughtful consideration.</li>
                </ul>
        
                <h2 class="text-3xl font-bold mb-3">Detailed Analysis</h2>
                <blockquote class="italic mb-4">
            <p>Two roads diverged in a yellow wood,<br>
            And sorry I could not travel both<br>
            And be one traveler, long I stood<br>
            And looked down one as far as I could<br>
            To where it bent in the undergrowth;</p>
            <p> .
            </p>
            <p>Then took the other, as just as fair,<br>
            And having perhaps the better claim,<br>
            Because it was grassy and wanted wear;<br>
            Though as for that the passing there<br>
            Had worn them really about the same,</p>
            <p>.
             </p>
            <p>And both that morning equally lay<br>
            In leaves no step had trodden black.<br>
            Oh, I kept the first for another day!<br>
            Yet knowing how way leads on to way,<br>
            I doubted if I should ever come back.</p>
            <p> .
            </p>
            <p>I shall be telling this with a sigh<br>
            Somewhere ages and ages hence:<br>
            Two roads diverged in a wood, and I—<br>
            I took the one less traveled by,<br>
            And that has made all the difference.</p>
        </blockquote>


        <h3 class="text-2xl font-bold mb-3">Stanza-by-Stanza Explanation</h3>
        
        <h4 class="text-xl font-bold mb-2">Stanza 1</h4>
        <p class="mb-4">The speaker stands at a fork in the road in a forest during autumn. He is regretful that he cannot take both paths and spends a long time deciding which one to follow. This moment represents a point in life where a person must make a crucial decision.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 2</h4>
        <p class="mb-4">The speaker chooses the second path, believing it to be "grassy and wanted wear." However, he acknowledges that, in reality, both paths are equally worn. This indicates that choices often appear unique but may ultimately lead to similar experiences.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 3</h4>
        <p class="mb-4">The paths are described as equally covered in leaves, suggesting that both are fresh and untraveled that day. The speaker hopes to keep the first path for another day, though he doubts he will return. This illustrates the nature of choices: once made, they are difficult to reverse.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 4</h4>
        <p class="mb-4">The speaker predicts that he will look back on this choice with a "sigh," reflecting on how his decision has impacted his life. He believes taking the "road less traveled" has made a significant difference, symbolizing how individual choices shape one's unique life journey.</p>
        
                <h3 class="text-2xl font-bold mb-3">Characters</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Speaker:</strong> The narrator of the poem, representing an individual faced with a crucial life decision.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Important Quotes and Their Significance</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>"Two roads diverged in a yellow wood,":</strong> Introduces the central metaphor of life choices.</li>
                    <li><strong>"And sorry I could not travel both":</strong> Expresses the regret of being unable to pursue multiple paths simultaneously.</li>
                    <li><strong>"I took the one less traveled by,":</strong> Highlights the speaker’s desire for individuality and uniqueness in his choices.</li>
                    <li><strong>"And that has made all the difference":</strong> Suggests that the choice has had a significant impact on the speaker’s life, though the nature of the difference is open to interpretation.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Moral of the Poem</h3>
                <p class="mb-4">The moral of "The Road Not Taken" is to recognize the importance of making thoughtful and individual choices. While every decision leads to different outcomes, embracing your unique path can lead to personal growth and fulfillment. It also highlights that while we may wonder about the roads not taken, each choice we make shapes our own unique journey.</p>
        
                <h3 class="text-2xl font-bold mb-3">Conclusion</h3>
                <p class="mb-4">Robert Frost’s "The Road Not Taken" eloquently captures the essence of decision-making and its lasting impact on our lives. Through its rich imagery and thoughtful reflection, the poem encourages readers to value their own choices and understand that every path has its own significance. It serves as a reminder that our decisions, whether big or small, play a crucial role in defining who we are and where we end up.</p>
            `,
            "subject": "English",
            "difficulty": "Intermediate",
            "relatedChapters": ["The Fun They Had", "The Little Girl"]
        },

        
        
    ],
    
    social_science: [
        {
            title: 'The French Revolution',
            content: `
                <h1><strong>French Revolution</strong></h1>
<hr>
<h2><strong>1. Introduction</strong></h2>
<p>The <em>French Revolution (1789-1799)</em> was a period of <em>radical social and political change</em> in France that overthrew the <em>monarchy, established a republic, and introduced democratic ideals</em> like <strong>liberty, equality, and fraternity</strong>.</p>
<hr>
<h2><strong>2. Causes of the French Revolution</strong></h2>
<p>The revolution was caused by <em>political, social, economic, and intellectual factors</em>:</p>
<h3><strong>2.1 Political Causes</strong></h3>
<ul>
<li><em>Absolute monarchy:</em> France was ruled by <strong>King Louis XVI</strong>, who was inefficient and weak. His extravagant spending led to a <strong>financial crisis</strong>.</li>
<li><em>Unfair taxation:</em> The <strong>Third Estate</strong> (common people) paid all the taxes, while the <strong>clergy</strong> and <strong>nobles</strong> were exempt.</li>
<li><em>No political representation:</em> The common people had <strong>no voice</strong> in governance.</li>
</ul>
<h3><strong>2.2 Social Causes</strong></h3>
<p>French society was divided into <em>three estates</em>:</p>
<ol>
<li><strong>First Estate</strong> &ndash; <em>Clergy</em> (church officials) &ndash; <em>paid no taxes</em> and enjoyed privileges.</li>
<li><strong>Second Estate</strong> &ndash; <em>Nobility</em> &ndash; held high positions in government and <em>paid no taxes</em>.</li>
<li><strong>Third Estate</strong> &ndash; <em>Common people</em> (peasants, workers, middle class) &ndash; <em>paid heavy taxes</em> but had <em>no rights</em>.</li>
</ol>
<h3><strong>2.3 Economic Causes</strong></h3>
<ul>
<li>France was in <em>huge debt</em> due to <em>wars and extravagant spending</em> (e.g., the <em>American Revolution</em>).</li>
<li><em>Poor harvests</em> led to <em>food shortages and high prices</em> of bread.</li>
<li>The <strong>Third Estate</strong> suffered <em>severe taxation</em> while the rich were exempt.</li>
</ul>
<h3><strong>2.4 Intellectual Causes</strong></h3>
<ul>
<li>Enlightenment thinkers like <em>John Locke, Montesquieu, and Rousseau</em> inspired ideas of <em>liberty, equality, and democracy</em>.</li>
<li>The <em>American Revolution (1776)</em> motivated the French people to fight for their rights.</li>
</ul>
<hr>
<h2><strong>3. Events of the Revolution</strong></h2>
<h3><strong>3.1 Estates-General &amp; Tennis Court Oath (1789)</strong></h3>
<ul>
<li>In <em>May 1789</em>, King <strong>Louis XVI</strong> called a meeting of the <em>Estates-General</em> (a council of representatives from all three estates) to raise taxes.</li>
<li>The <em>Third Estate</em> demanded <em>equal representation</em>, but the King ignored them.</li>
<li>The <em>Third Estate</em> broke away and formed the <em>National Assembly</em> on <em>June 17, 1789</em>.</li>
<li>They took the <em>Tennis Court Oath</em>, vowing to <strong>draft a constitution</strong> and not disband until their demands were met.</li>
</ul>
<h3><strong>3.2 Storming of the Bastille (July 14, 1789)</strong></h3>
<ul>
<li>The <em>Bastille</em> (a prison symbolizing the King&rsquo;s power) was stormed by an angry <em>mob</em> on <em>July 14, 1789</em>.</li>
<li>It marked the <em>beginning of the revolution</em>.</li>
<li><em>King Louis XVI was forced to accept the National Assembly&rsquo;s demands</em>.</li>
</ul>
<h3><strong>3.3 The Great Fear &amp; Abolition of Feudalism (August 1789)</strong></h3>
<ul>
<li>Peasants <em>attacked nobles&rsquo; estates</em> across France.</li>
<li>The <em>National Assembly abolished feudal privileges</em> on <em>August 4, 1789</em>.</li>
</ul>
<h3><strong>3.4 Declaration of the Rights of Man and Citizen (August 26, 1789)</strong></h3>
<ul>
<li>A document that guaranteed <em>basic rights like freedom, equality, and justice</em>.</li>
<li>Inspired by <em>Enlightenment ideas</em> and the <em>American Revolution</em>.</li>
<li><strong>Key principles:</strong>
<ul>
<li><em>Liberty, Equality, Fraternity</em></li>
<li><em>Freedom of speech, religion, and press</em></li>
<li><em>Equal taxation</em></li>
</ul>
</li>
</ul>
<h3><strong>3.5 Women&rsquo;s March on Versailles (October 1789)</strong></h3>
<ul>
<li>Thousands of <em>women</em> marched to the <em>King&rsquo;s palace in Versailles</em>, demanding <strong>bread and reforms</strong>.</li>
<li>The King was <em>forced to move to Paris</em>, under the control of the revolutionaries.</li>
</ul>
<h3><strong>3.6 The Constitution of 1791 &amp; Constitutional Monarchy</strong></h3>
<ul>
<li>The <em>National Assembly</em> created a <em>new constitution</em> in <em>1791</em>.</li>
<li>France became a <em>constitutional monarchy</em>, limiting the power of the King.</li>
<li><em>Active citizens (property-owning men)</em> could vote, but <em>women and the poor</em> were excluded.</li>
</ul>
<h3><strong>3.7 Fall of the Monarchy &amp; Republic (1792-1793)</strong></h3>
<ul>
<li><em>Austria and Prussia</em> tried to <em>invade France</em> to restore the monarchy.</li>
<li>The *Jacobins, led by <strong>Maximilien Robespierre</strong>, took control.</li>
<li><em>King Louis XVI was arrested, put on trial, and executed by the guillotine in January 1793</em>.</li>
</ul>
<h3><strong>3.8 Reign of Terror (1793-1794)</strong></h3>
<ul>
<li><em>Robespierre</em> ruled France as a <em>dictator</em>.</li>
<li>He executed <em>anyone suspected of being against the revolution</em> (including Queen <em>Marie Antoinette</em>).</li>
<li><em>Over 16,000 people</em> were executed by the <em>guillotine</em>.</li>
<li>Robespierre was eventually <em>executed in 1794</em>, ending the Reign of Terror.</li>
</ul>
<h3><strong>3.9 The Directory (1795-1799)</strong></h3>
<ul>
<li>A <em>new government</em> called the <em>Directory</em> (a five-member committee) ruled France.</li>
<li>However, it was <em>weak and corrupt</em>.</li>
</ul>
<hr>
<h2><strong>4. Rise of Napoleon Bonaparte (1799)</strong></h2>
<ul>
<li>In <em>1799, <strong>Napoleon Bonaparte</strong></em> led a <em>coup d'&eacute;tat</em> and overthrew the Directory.</li>
<li>He declared himself <em>Emperor of France</em> in <em>1804</em>, ending the revolution.</li>
</ul>
<hr>
<h2><strong>5. Impact of the French Revolution</strong></h2>
<h3><strong>5.1 Political Impact</strong></h3>
<ul>
<li><em>End of monarchy</em> and rise of democracy.</li>
<li>Inspired <em>revolutions across Europe and Latin America</em>.</li>
</ul>
<h3><strong>5.2 Social Impact</strong></h3>
<ul>
<li><em>End of feudalism</em> and special privileges.</li>
<li><em>Rise of equality and individual rights</em>.</li>
</ul>
<h3><strong>5.3 Economic Impact</strong></h3>
<ul>
<li><em>Fair taxation system</em> was introduced.</li>
<li><em>Nationalism</em> increased, leading to <em>stronger state control</em>.</li>
</ul>
<h3><strong>5.4 Global Impact</strong></h3>
<ul>
<li>Inspired <em>democratic movements worldwide</em>.</li>
<li>Ideas of <em>liberty, equality, and fraternity</em> spread across the world.</li>
</ul>
<hr>
<h2><strong>6. Important Dates Summary</strong></h2>
<table style="width: 36.1933%;">
<thead>
<tr>
<th style="width: 61.2824%;"><strong>Event</strong></th>
<th style="width: 38.7481%;"><strong>Date</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="width: 61.2824%;">Meeting of Estates-General</td>
<td style="width: 38.7481%;">May 5, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Tennis Court Oath</td>
<td style="width: 38.7481%;">June 20, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Storming of the Bastille</td>
<td style="width: 38.7481%;">July 14, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Abolition of Feudalism</td>
<td style="width: 38.7481%;">August 4, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Declaration of Rights of Man</td>
<td style="width: 38.7481%;">August 26, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Women&rsquo;s March on Versailles</td>
<td style="width: 38.7481%;">October 5, 1789</td>
</tr>
<tr>
<td style="width: 61.2824%;">Constitution of 1791</td>
<td style="width: 38.7481%;">September 1791</td>
</tr>
<tr>
<td style="width: 61.2824%;">Execution of Louis XVI</td>
<td style="width: 38.7481%;">January 21, 1793</td>
</tr>
<tr>
<td style="width: 61.2824%;">Reign of Terror</td>
<td style="width: 38.7481%;">1793-1794</td>
</tr>
<tr>
<td style="width: 61.2824%;">Execution of Robespierre</td>
<td style="width: 38.7481%;">July 28, 1794</td>
</tr>
<tr>
<td style="width: 61.2824%;">Napoleon&rsquo;s Coup</td>
<td style="width: 38.7481%;">November 9, 1799</td>
</tr>
</tbody>
</table>
<hr>
<h2><strong>7. Conclusion</strong></h2>
<p>The <em>French Revolution</em> was a <em>turning point in world history</em>. It <strong>ended the monarchy, spread democratic ideals, and influenced revolutions across the world</strong>. However, <strong>it also led to extreme violence</strong>, especially during the <strong>Reign of Terror</strong>. Eventually, <strong>Napoleon Bonaparte</strong> took power, shaping the future of France and Europe.</p>
<hr>
            `,
            subject: 'Social Science',
            difficulty: 'Intermediate',
            relatedChapters: ['The Industrial Revolution', 'The American Revolution']
        },
        {
            title: 'Socialism in Europe and the Russian Revolution',
            content: `
            <h1><em>Socialism and the Russian Revolution</em></h1>
<h2><em>1. Introduction</em></h2>
<p>The <em>Russian Revolution (1917)</em> was one of the most significant political events in world history. It led to the <em>end of monarchy, the rise of **communism, and the creation of the **Soviet Union (USSR)</em>.</p>
<p>The revolution had <em>two major phases</em>:</p>
<ul>
<li><em>February Revolution (March 1917)</em> &ndash; Overthrew the <em>Tsar</em> (monarchy).</li>
<li><em>October Revolution (November 1917)</em> &ndash; Established a <em>socialist government</em> led by <em>Vladimir Lenin</em> and the <em>Bolshevik Party</em>.</li>
</ul>
<hr>
<h2><em>2. Socialism and Its Rise</em></h2>
<h3><em>2.1 What is Socialism?</em></h3>
<ul>
<li>Socialism is an <em>economic and political system</em> that aims for <em>equality</em> and the <em>collective ownership</em> of resources.</li>
<li>It opposes *capitalism, where industries are privately owned, creating *<em>rich and poor divisions</em>.</li>
</ul>
<h3><em>2.2 Features of Socialism</em></h3>
<ul>
<li><em>No private ownership</em> &ndash; Factories, land, and industries belong to the <em>government</em>.</li>
<li><em>Equal distribution of wealth</em> &ndash; No extreme rich or poor classes.</li>
<li><em>Government controls production</em> &ndash; The economy is <em>centrally planned</em>.</li>
<li><em>Welfare for all</em> &ndash; Healthcare, education, and jobs for everyone.</li>
</ul>
<h3><em>2.3 Thinkers Who Inspired Socialism</em></h3>
<ul>
<li><em>Karl Marx</em>: Wrote the <em>Communist Manifesto</em>, arguing that <em>workers (proletariat)</em> should overthrow <em>capitalists (bourgeoisie)</em>.</li>
<li><em>Friedrich Engels</em>: Co-authored <em>Communist Manifesto</em>, promoting <em>class struggle</em>.</li>
</ul>
<hr>
<h2><em>3. Russia Before the Revolution</em></h2>
<h3><em>3.1 Russian Society in the Early 20th Century</em></h3>
<ul>
<li><em>Autocratic Monarchy</em>: Russia was ruled by **Tsar Nicholas II, who had *<em>absolute power</em>.</li>
<li><em>Social Inequality</em>: Society was divided into:
<ul>
<li><em>Nobles and Clergy</em> &ndash; Owned <em>land and power</em>, lived in luxury.</li>
<li><em>Middle Class (Bourgeoisie)</em> &ndash; Small business owners.</li>
<li><em>Peasants and Workers (Proletariat)</em> &ndash; Majority of the population, lived in <em>poverty</em>.</li>
</ul>
</li>
<li><em>Lack of Political Rights</em>: People had *<em>no say</em> in governance.</li>
</ul>
<h3><em>3.2 Economic and Social Problems</em></h3>
<ul>
<li><em>Agriculture-based economy</em>: Most people were **peasants, but land was owned by *<em>rich landlords</em>.</li>
<li><em>Low industrial growth</em>: Russian factories were *<em>underdeveloped</em> and poorly managed.</li>
<li><em>Harsh working conditions</em>: Factory workers had *<em>long hours, low wages, and no rights</em>.</li>
<li><em>Food shortages</em>: *<em>High bread prices</em> led to <em>hunger and protests</em>.</li>
</ul>
<h3><em>3.3 Role of Tsar Nicholas II</em></h3>
<ul>
<li><em>Incompetent ruler</em>: Failed to address the *<em>problems of workers and peasants</em>.</li>
<li><em>Ignored reforms</em>: Rejected changes proposed by the **Duma (parliament)*.</li>
<li><em>Involvement in World War I (1914-1918)</em>:
<ul>
<li>Russian soldiers <em>suffered massive losses</em>.</li>
<li>The economy *collapsed, leading to *<em>starvation</em>.</li>
</ul>
</li>
</ul>
<hr>
<h2><em>4. The Russian Revolution</em></h2>
<h3><em>4.1 The February Revolution (March 1917)</em></h3>
<ul>
<li><em>Causes</em>:
<ul>
<li>Food shortages, worker strikes, and military failures in <em>World War I</em>.</li>
<li><em>Women-led protests</em> in Petrograd demanding <em>bread, peace, and land</em>.</li>
</ul>
</li>
<li><em>Key Events</em>:
<ul>
<li><em>Tsar Nicholas II was forced to abdicate (step down) on March 2, 1917</em>.</li>
<li>A <em>Provisional Government</em> was formed, but it was <em>weak</em> and continued the war.</li>
</ul>
</li>
<li>*Outcome: End of **monarchy, but people were still *<em>dissatisfied</em>.</li>
</ul>
<hr>
<h3><em>4.2 The October Revolution (November 1917)</em></h3>
<ul>
<li>*Led by: *<em>Vladimir Lenin</em> and the <em>Bolshevik Party</em>.</li>
<li><em>Slogan: **"Peace, Land, and Bread"</em>.</li>
<li><em>Key Events</em>:
<ul>
<li><em>Bolsheviks overthrew the Provisional Government</em> on November 7, 1917.</li>
<li><em>Lenin became the leader of Russia</em>.</li>
<li>The <em>first socialist government</em> was established.</li>
</ul>
</li>
<li>*Outcome: Russia became a *<em>communist state</em>.</li>
</ul>
<hr>
<h2><em>5. Changes After the Revolution</em></h2>
<h3><em>5.1 Policies Under Lenin</em></h3>
<ul>
<li><em>Redistribution of Land</em>: *<em>Land was taken from nobles and given to peasants</em>.</li>
<li><em>Factories nationalized</em>: All industries came under *<em>government control</em>.</li>
<li><em>End of private banks</em>: The government controlled the *<em>economy</em>.</li>
<li><em>Russia withdrew from World War I</em> (March 1918).</li>
<li><em>Workers got more rights</em>: 8-hour workdays were introduced.</li>
</ul>
<hr>
<h3><em>5.2 Civil War (1918-1921)</em></h3>
<ul>
<li><em>Opposition to Bolsheviks</em>:
<ul>
<li><em>Reds (Bolsheviks)</em> vs <em>Whites (Tsar supporters, capitalists, and foreign countries)</em>.</li>
</ul>
</li>
<li><em>Outcome</em>:
<ul>
<li>The Bolsheviks won, strengthening <em>communism in Russia</em>.</li>
<li>Lenin introduced the *New Economic Policy (NEP), allowing *<em>limited capitalism</em> to rebuild the economy.</li>
</ul>
</li>
</ul>
<hr>
<h2><em>6. The Rise of Stalin (1924-1953)</em></h2>
<ul>
<li>After Lenin&rsquo;s death in *1924, *<em>Joseph Stalin</em> became the leader.</li>
<li>He ruled with <em>absolute power</em> and introduced:
<ul>
<li><em>Five-Year Plans</em> &ndash; Rapid industrial growth.</li>
<li><em>Collectivization of Agriculture</em> &ndash; Merging small farms into <em>state-run farms</em>.</li>
<li><em>Great Purge</em> &ndash; <em>Executed or jailed</em> anyone who opposed him.</li>
</ul>
</li>
</ul>
<hr>
<h2><em>7. Impact of the Russian Revolution</em></h2>
<h3><em>7.1 Political Impact</em></h3>
<ul>
<li>End of <em>monarchy</em> &rarr; Rise of <em>communism</em>.</li>
<li>Russia became the <em>first socialist country</em> in the world.</li>
<li>Inspired <em>communist revolutions in China, Cuba, and other countries</em>.</li>
</ul>
<h3><em>7.2 Social Impact</em></h3>
<ul>
<li><em>End of class privileges</em> &ndash; No more <em>nobility and landlords</em>.</li>
<li><em>Free education and healthcare</em> for all.</li>
<li>Women gained <em>equal rights</em>.</li>
</ul>
<h3><em>7.3 Economic Impact</em></h3>
<ul>
<li><em>Industries and banks were nationalized</em>.</li>
<li><em>Land was redistributed</em> among peasants.</li>
<li>Russia became an <em>industrial power under Stalin</em>.</li>
</ul>
<hr>
<h2><em>9. Conclusion</em></h2>
<p>The <em>Russian Revolution</em> led to the rise of **socialism, inspired **communist movements worldwide, and transformed **Russia into a global power. However, it also resulted in *<em>dictatorship, purges, and human rights abuses under Stalin</em>.</p>
            `,
            subject: 'Social Science',
            difficulty: 'Intermediate',
            relatedChapters: ['The Industrial Revolution', 'The American Revolution']
                

        },
        {
            title: 'Nazisam and the Rise of Hitler',
            content: `
            <h1><em>Nazism and the Rise of Hitler</em></h1>
<hr>
<h2><em>1. Introduction</em></h2>
<ul>
<li>The rise of <em>Nazism</em> in Germany was a result of *political instability, **economic crisis, and *<em>nationalist propaganda</em>.</li>
<li>*Adolf Hitler, the leader of the **Nazi Party, became the *<em>dictator of Germany</em> and led the country into <em>World War II (1939-1945)</em>.</li>
<li>His rule was marked by <em>militarism, racism, dictatorship, and genocide (Holocaust)</em>.</li>
</ul>
<hr>
<h2><em>2. The Aftermath of World War I</em></h2>
<h3><em>2.1 Germany&rsquo;s Defeat in World War I (1914-1918)</em></h3>
<ul>
<li>Germany was <em>defeated</em> in <em>WWI</em> and blamed for the war.</li>
<li>The <em>Treaty of Versailles (1919)</em> imposed <em>harsh penalties</em> on Germany.</li>
</ul>
<h3><em>2.2 Treaty of Versailles (1919) &ndash; A Humiliation for Germany</em></h3>
<ul>
<li><em>Germany had to accept full blame</em> for the war.</li>
<li>It had to pay <em>huge reparations</em> (compensation for damages).</li>
<li><em>Lost its colonies</em> and large parts of its territory.</li>
<li>Its army was <em>restricted</em> (no tanks, air force, or submarines).</li>
</ul>
<p>🔴 *Impact: Germans felt **angry and humiliated, leading to *<em>resentment</em> and a desire for revenge.</p>
<hr>
<h2><em>3. The Weimar Republic (1919-1933) &ndash; A Failed Democracy</em></h2>
<ul>
<li><em>Weimar Republic</em> was the democratic government formed after WWI.</li>
<li>It was <em>weak and unpopular</em> due to:
<ul>
<li>The <em>Treaty of Versailles</em> (people hated it for accepting harsh conditions).</li>
<li><em>Economic crisis</em> (hyperinflation made German money worthless).</li>
<li><em>Political instability</em> (many uprisings and protests).</li>
<li><em>Great Depression (1929)</em> &ndash; Led to mass <em>unemployment and poverty</em>.</li>
</ul>
</li>
</ul>
<p>🔴 *Impact: People lost faith in democracy and looked for a *<em>strong leader</em> &rarr; <em>Hitler and the Nazis gained popularity</em>.</p>
<hr>
<h2><em>4. The Rise of Hitler and the Nazi Party</em></h2>
<h3><em>4.1 Hitler&rsquo;s Early Life</em></h3>
<ul>
<li>Born in <em>1889 in Austria</em>.</li>
<li>Fought in <em>WWI</em> and was <em>angry at Germany&rsquo;s defeat</em>.</li>
<li>Joined the <em>Nazi Party (NSDAP &ndash; National Socialist German Workers' Party)</em> in 1919.</li>
<li>Became its <em>leader (Führer)</em> by 1921.</li>
</ul>
<h3><em>4.2 Nazi Ideology</em></h3>
<ul>
<li><em>Extreme Nationalism</em> &ndash; Germany must become a <em>powerful empire</em> again.</li>
<li><em>Anti-Semitism</em> &ndash; Hatred against <em>Jews</em>, blaming them for Germany&rsquo;s problems.</li>
<li><em>Militarism</em> &ndash; Wanted to <em>rebuild the German army</em>.</li>
<li><em>Anti-Communism</em> &ndash; Opposed socialist ideas.</li>
<li><em>Racial Superiority</em> &ndash; Believed <em>Aryans (Germans) were the superior race</em>.</li>
</ul>
<h3><em>4.3 The Great Depression (1929) Helped Hitler Gain Power</em></h3>
<ul>
<li>The <em>stock market crash in the USA</em> led to a <em>global economic crisis</em>.</li>
<li><em>Millions of Germans lost jobs and savings</em>.</li>
<li>People turned to <em>extreme leaders like Hitler</em>, who promised:
<ul>
<li><em>Jobs</em> and economic recovery.</li>
<li><em>Rebuilding Germany&rsquo;s military strength</em>.</li>
<li><em>Restoring German pride</em>.</li>
</ul>
</li>
</ul>
<hr>
<h2><em>5. Hitler Becomes Dictator (1933-1934)</em></h2>
<h3><em>5.1 Hitler&rsquo;s Rise to Power</em></h3>
<ul>
<li><em>1932 Elections</em> &ndash; Nazi Party became the <em>largest party in Germany</em>.</li>
<li><em>January 30, 1933</em> &ndash; Hitler was made <em>Chancellor of Germany</em>.</li>
<li><em>February 1933 &ndash; Reichstag Fire</em>:
<ul>
<li>The <em>German Parliament (Reichstag) was set on fire</em>.</li>
<li>Hitler blamed <em>Communists</em> and declared an <em>emergency</em>.</li>
</ul>
</li>
</ul>
<h3><em>5.2 Enabling Act (March 1933) &ndash; Hitler Becomes Dictator</em></h3>
<ul>
<li>Gave <em>Hitler absolute power</em> to make laws <em>without parliament</em>.</li>
<li><em>Banned all political parties</em> (Germany became a <em>one-party state</em>).</li>
<li>Created a <em>secret police (Gestapo)</em> to <em>eliminate opposition</em>.</li>
</ul>
<p>🔴 *Impact: Germany became a *<em>totalitarian dictatorship</em> under Hitler.</p>
<hr>
<h2><em>6. Nazi Germany &ndash; A Dictatorship</em></h2>
<h3><em>6.1 Propaganda and Control</em></h3>
<ul>
<li>Used <em>mass rallies, radio, newspapers, and films</em> to spread Nazi ideology.</li>
<li>Created the <em>Hitler Youth</em> to brainwash young people.</li>
<li><em>Banned books, newspapers, and art</em> that opposed Nazi views.</li>
</ul>
<h3><em>6.2 Persecution of Jews and Minorities</em></h3>
<ul>
<li><em>Jews, Communists, Gypsies, and the Disabled</em> were declared <em>"enemies of the state."</em></li>
<li><em>Nuremberg Laws (1935)</em>:
<ul>
<li><em>Jews lost citizenship and rights</em>.</li>
<li><em>Banned marriages between Jews and non-Jews</em>.</li>
</ul>
</li>
</ul>
<h3><em>6.3 The Holocaust (1941-1945) &ndash; Mass Genocide</em></h3>
<ul>
<li><em>6 million Jews were murdered</em> in <em>concentration camps</em> (e.g., Auschwitz).</li>
<li><em>Gas chambers and mass shootings</em> were used to kill Jews.</li>
<li><em>Other victims</em>: Poles, Slavs, disabled people, and political prisoners.</li>
</ul>
<p>🔴 *Impact: One of the *<em>worst crimes in history</em>.</p>
<hr>
<h2><em>7. Hitler&rsquo;s Foreign Policy &ndash; Road to World War II</em></h2>
<h3><em>7.1 Hitler&rsquo;s Goals</em></h3>
<ul>
<li><em>Undo the Treaty of Versailles</em>.</li>
<li><em>Expand German territory (Lebensraum &ndash; &ldquo;Living space&rdquo;)</em>.</li>
<li><em>Rebuild the army</em>.</li>
</ul>
<h3><em>7.2 Key Events Leading to WWII</em></h3>
<ul>
<li><em>1936</em> &ndash; Invaded <em>Rhineland</em> (breaking the Treaty of Versailles).</li>
<li><em>1938</em> &ndash; Annexed <em>Austria</em> (Anschluss &ndash; joining of Germany and Austria).</li>
<li><em>1939</em> &ndash; <em>Germany invaded Poland</em> &rarr; <em>World War II began</em>.</li>
</ul>
<hr>
<h2><em>8. End of Hitler and Nazi Germany (1945)</em></h2>
<ul>
<li><em>Germany lost WWII</em> after fighting <em>Britain, USA, and the Soviet Union</em>.</li>
<li><em>April 30, 1945</em> &ndash; Hitler <em>committed suicide</em> in his Berlin bunker.</li>
<li><em>May 1945</em> &ndash; Germany <em>surrendered</em>, ending the war in Europe.</li>
</ul>
<hr>
<h2><em>9. Conclusion</em></h2>
<ul>
<li><em>Nazism and Hitler&rsquo;s rule</em> were based on <em>dictatorship, extreme nationalism, and racism</em>.</li>
<li>His policies led to *WWII and the Holocaust, causing *<em>millions of deaths</em>.</li>
<li>After <em>Hitler&rsquo;s death, Germany was rebuilt as a democratic nation</em>.</li>
</ul>
            `,
            subject: 'Social Science',
            difficulty: 'Intermediate',
            relatedChapters: ['The Industrial Revolution', 'The American Revolution']
        },
            
    ]
    // Add more subjects here
};

// Get chapter information from URL parameters
function getChapterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const title = urlParams.get('chapter');
    
    if (!subject || !title) {
        window.location.href = 'index.html';
        return null;
    }

    const chapter = chaptersDatabase[subject]?.find(c => c.title === decodeURIComponent(title));
    if (!chapter) {
        window.location.href = 'index.html';
        return null;
    }

    return chapter;
}

// Load and display chapter content
function loadChapter() {
    const chapter = getChapterFromURL();
    if (!chapter) return;

    // Store chapter position in localStorage
    const subjectKey = chapter.subject.toLowerCase().replace(' ', '_');
    const chapters = chaptersDatabase[subjectKey];
    if (!chapters) {
        console.error(`Subject key "${subjectKey}" not found in chaptersDatabase.`);
        window.location.href = 'index.html';
        return;
    }
    const chapterIndex = chapters.findIndex(c => c.title === chapter.title);
    if (chapterIndex === -1) {
        console.error(`Chapter "${chapter.title}" not found in subject "${subjectKey}".`);
        window.location.href = 'index.html';
        return;
    }
    localStorage.setItem('currentSubject', subjectKey);
    localStorage.setItem('currentChapterIndex', chapterIndex);

    // Update page title
    document.title = `${chapter.title} - LearnBite`;

    // Update breadcrumbs
    document.getElementById('subjectBreadcrumb').textContent = chapter.subject;
    document.getElementById('chapterBreadcrumb').textContent = chapter.title;

    // Update chapter title and tags
    document.getElementById('chapterTitle').textContent = chapter.title;
    document.getElementById('subjectTag').textContent = chapter.subject;
    document.getElementById('difficultyTag').textContent = chapter.difficulty;

    // Update chapter content
    document.getElementById('chapterContent').innerHTML = chapter.content;
    loadQuiz();
    // Load related chapters
    loadRelatedChapters(chapter);
}

// Load and display related chapters
function loadRelatedChapters(currentChapter) {
    const relatedChaptersContainer = document.getElementById('relatedChapters');
    relatedChaptersContainer.innerHTML = '';

    currentChapter.relatedChapters.forEach(relatedTitle => {
        const relatedChapter = chaptersDatabase[currentChapter.subject.toLowerCase()]?.find(
            c => c.title === relatedTitle
        );

        if (relatedChapter) {
            const chapterCard = document.createElement('div');
            chapterCard.className = 'bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors';
            chapterCard.innerHTML = `
                <h3 class="font-bold mb-2">${relatedChapter.title}</h3>
                <p class="text-sm text-gray-600 mb-2">Subject: ${relatedChapter.subject}</p>
                <a href="chapter.html?subject=${currentChapter.subject.toLowerCase()}&chapter=${encodeURIComponent(relatedChapter.title)}" 
                   class="text-teal-600 hover:text-teal-700 text-sm">Read more →</a>
            `;
            relatedChaptersContainer.appendChild(chapterCard);
        }
    });
}
// Gemini API Integration
const GEMINI_API_KEY = 'AIzaSyCimXE_MiDlUbelHQ_V8AnEleuSOltpKdY'; // Replace with actual API key
const QUIZ_PROMPT = `Generate a 5-question quiz in pure JSON format (NO MARKDOWN) based on the following chapter content... 
Format: {
    "questions": [{
        "question": "...",
        "options": ["...", "...", "...", "..."],
        "correct_index": 0,
        "explanation": "..."
    }]
}
Questions should be varied (MCQs, true/false, fill-in-the-blank(with the answers as options)). 
Difficulty level: appropriate for middle school students.`;

async function generateQuiz(content) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: QUIZ_PROMPT + "\n\nChapter Content:\n" + content
                    }]
                }]
            })
        });

        const data = await response.json();
        const rawText = data.candidates[0].content.parts[0].text;
        
        // Clean the response - remove markdown code blocks
        const cleanedText = rawText
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim();

        const quizJSON = JSON.parse(cleanedText);
        return quizJSON.questions;
    } catch (error) {
        console.error('Quiz generation failed:', error);
        return null;
    }
}

// Display Quiz
async function loadQuiz() {

    const content = document.getElementById('chapterContent').textContent;
    questions = await generateQuiz(content);
    
    if (!questions) {
        document.getElementById('quizSection').remove();
        return;
    }


    const container = document.getElementById('quizContainer');
    
    questions.forEach((q, index) => {
        const questionHTML = `
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 quiz-question">
                <div class="font-bold mb-3">Q${index + 1}: ${q.question}</div>
                <div class="space-y-2">
                    ${q.options.map((opt, i) => `
                        <label class="flex items-center space-x-3 cursor-pointer">
                            <input type="radio" name="q${index}" value="${i}" 
                                   class="form-radio text-teal-600">
                            <span class="select-none">${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="explanation hidden mt-3 text-sm text-gray-600"></div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', questionHTML);
    });
}
// Quiz Submission
function submitQuiz() {
    if (!questions) {
      console.error('No questions loaded');
      return;
    }
  
    let correct = 0;
    // Loop through each quiz question container
    document.querySelectorAll('.quiz-question').forEach((question, index) => {
      const selected = question.querySelector('input:checked');
      const correctIndex = questions[index].correct_index;
      const explanationEl = question.querySelector('.explanation');
  
      // Show the explanation text
      explanationEl.style.display = 'block';
      explanationEl.textContent = questions[index].explanation;
  
      // Loop through each radio input in the current question
      question.querySelectorAll('input[type="radio"]').forEach(radio => {
        const label = radio.parentElement; // assume the label is the parent of the input
        // If this option is the correct answer, mark it green
        if (parseInt(radio.value, 10) === correctIndex) {
          label.style.backgroundColor = '#d4edda'; // light green background
          label.style.border = '1px solid #28a745'; // green border
        }
        // If the user selected an answer that is not correct, mark it red
        if (radio.checked && parseInt(radio.value, 10) !== correctIndex) {
          label.style.backgroundColor = '#f8d7da'; // light red background
          label.style.border = '1px solid #dc3545'; // red border
        }
      });
  
      // Update the question container border as a whole:
      if (selected && parseInt(selected.value, 10) === correctIndex) {
        correct++;
        question.style.border = '2px solid #28a745'; // green border if correct
      } else {
        question.style.border = '2px solid #dc3545'; // red border if wrong or not answered
      }
    });
  
    // Display overall quiz result
    const result = document.getElementById('quizResult');
    result.style.display = 'block';
    result.innerHTML = `<div style="padding: 1rem; border-radius: 8px; background: ${correct >= 3 ? '#d4edda' : '#f8d7da'};">
                            Score: ${correct} / ${questions.length}
                            ${correct === questions.length ? ' 🎉 Perfect score!' : ''}
                        </div>`;
    updateChapterProgress();
  }
  
let userXP = 0;
let streak = 0;
const mascotStates = {
  happy: "🦉",
  excited: "🎉",
  correct: "✅",
  wrong: "❌"
};

function updateMascot(state) {
  const mascot = document.getElementById('duoMascot');
  mascot.textContent = mascotStates[state];
  if(state === 'correct') mascot.classList.add('celebrate');
}

function updateXP(points) {
  userXP += points;
  document.getElementById('xpCounter').textContent = userXP;
  localStorage.setItem('learnbiteXP', userXP);
}

// Initialize page
document.addEventListener('DOMContentLoaded', loadChapter);