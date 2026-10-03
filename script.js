// Story dataset with branching paths
const scenes = [
    {  
        id: 0,
        background: "IMAGES/entrance.jpeg",  
        portrait: "IMAGES/mina_portrait.jpeg",  
        name: "Mina",  
        text: "The school entrance looked completely different after sunset. During the day, this place was always loud—students running between classes, teachers calling names, the sound of shoes against the stairs. Now there was only the faint hum of the lights.",
        next: 1
    },  
    {  
        id: 1,
        background: "IMAGES/entrance.jpeg",  
        portrait: "IMAGES/mina_portrait.jpeg",  
        name: "Mina",  
        text: "I checked the time on my phone. 6:47 PM. I had promised myself I'd leave before six, but apparently finishing one last assignment had turned into staying almost two hours late.",
        next: 2
    },  
    {  
        id: 2,
        background: "IMAGES/New folder (2)/classroom.jpeg",  
        portrait: "IMAGES/mina_portrait.jpeg",  
        name: "Mina",  
        text: "I went back to the classroom to grab my notebook. Most of the desks were empty now. The sunlight coming through the windows had disappeared, leaving the room strangely quiet.",
        next: 3
    },  
    {  
        id: 3,
        background: "IMAGES/New folder (2)/classroom.jpeg",  
        portrait: "IMAGES/mina_portrait.jpeg",  
        name: "Mina",  
        text: "I picked up my bag and looked around one last time. Nothing seemed unusual. Same whiteboard. Same dusty windows. Same desk by the window that everyone avoided because the leg was slightly broken.",
        next: 4
    },  
    {  
        id: 4,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "IMAGES/scared.jpeg", // Swapped to scared.jpeg! 
        name: "Mina",  
        text: "My phone suddenly vibrated.",
        next: 5
    },  
    {  
        id: 5,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "",  
        name: "Unknown Number",  
        text: "Don't leave yet.",
        next: 6
    },  
    {  
        id: 6,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "IMAGES/scared.jpeg", // Swapped to scared.jpeg! 
        name: "Mina",  
        text: "I stared at the message. There was no name attached to the number. I didn't recognize it, and there was absolutely no reason someone should be texting me this late.",
        next: 7
    },  
    {  
        id: 7,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "",  
        name: "Unknown Number",  
        text: "Check the desk by the window.",
        // First Choice Branch
        choices: [
            { text: "Ignore the text and head home immediately", next: 100 },
            { text: "Investigate the window desk", next: 8 }
        ]
    },  
    {  
        id: 8,
        background: "IMAGES/New folder (2)/classroom.jpeg",  
        portrait: "IMAGES/scared.jpeg", // Swapped to scared.jpeg! 
        name: "Mina",  
        text: "I slowly turned toward the window desk. For a moment, I considered ignoring the message. Then curiosity won.",
        next: 9
    },  
    {  
        id: 9,
        background: "IMAGES/New folder (2)/envelope.jpeg",  
        portrait: "IMAGES/scared.jpeg", // Swapped to scared.jpeg! 
        name: "Mina",  
        text: "There was an envelope underneath the desk. My name was written across the front in handwriting I didn't recognize.",
        next: 10
    },  
    {  
        id: 10,
        background: "IMAGES/New folder (2)/envelope.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I picked it up carefully. It wasn't sealed. Inside was a folded piece of paper and an old photograph.",
        next: 11
    },  
    {  
        id: 11,
        background: "IMAGES/New folder (2)/photo.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "The photograph showed this exact classroom. The desks were arranged differently, and the walls looked older, but I knew that window. I knew that board.",
        next: 12
    },  
    {  
        id: 12,
        background: "IMAGES/New folder (2)/photo.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "There was something else in the photograph. In the very corner of the room, someone had written a small number on the wall: 11:11.",
        next: 13
    },  
    {  
        id: 13,
        background: "IMAGES/New folder (2)/photo.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I turned the photograph over. There was a message written on the back.",
        next: 14
    },  
    {  
        id: 14,
        background: "IMAGES/New folder (2)/photo.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "If you're reading this, you found it at the right time.",
        next: 15
    },  
    {  
        id: 15,
        background: "IMAGES/New folder (2)/hallway.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "A strange noise came echoing down the empty hallway.",
        next: 16
    },  
    {  
        id: 16,
        background: "IMAGES/New folder (2)/hallway.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I stepped outside the classroom. The hallway lights flickered once before becoming steady again. Every classroom door was closed.",
        next: 17
    },  
    {  
        id: 17,
        background: "IMAGES/New folder (2)/hallway.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "At the very end of the hallway was an old classroom that hadn't been used for years.",
        next: 18
    },  
    {  
        id: 18,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "",  
        name: "Unknown Number",  
        text: "You're almost there.",
        next: 19
    },  
    {  
        id: 19,
        background: "IMAGES/New folder (2)/spooky.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I stood outside the old classroom. The door was slightly open.",
        next: 20
    },  
    {  
        id: 20,
        background: "IMAGES/New folder (2)/spooky.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I pushed it open slowly. The room was lined with old notes and photos across the walls.",
        next: 21
    },  
    {  
        id: 21,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "",  
        name: "Unknown Number",  
        text: "11:11.",
        next: 22
    },  
    {  
        id: 22,
        background: "IMAGES/New folder (2)/phone.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "I looked at my phone screen. Exactly 11:11 PM.",
        next: 23
    },  
    {  
        id: 23,
        background: "IMAGES/New folder (2)/spooky.jpeg",  
        portrait: "IMAGES/scared.jpeg",  
        name: "Mina",  
        text: "A final message was written across the blackboard: 'You were always meant to find this.' A cold breeze swept through the locked room as the door clicked shut behind me.",
        isEnding: true,
        endingText: "--- ENDING 1: TRAPPED IN THE MYSTERY ---"
    },

    // --- BRANCH 2: SAFE ENDING ---
    {
        id: 100,
        background: "IMAGES/entrance.jpeg",
        portrait: "IMAGES/scared.jpeg",
        name: "Mina",
        text: "A chill ran down my spine. I decided not to risk it, packed my bag instantly, and ran straight out of the school gates.",
        next: 101
    },
    {
        id: 101,
        background: "IMAGES/entrance.jpeg",
        portrait: "IMAGES/mina_portrait.jpeg", // Back to calm portrait when home safely!
        name: "Mina",
        text: "I made it home safely under the streetlights. My phone never rang again, but sometimes I still wonder what was sitting at that desk.",
        isEnding: true,
        endingText: "--- ENDING 2: ESCAPED THE UNKNOWN ---"
    }
];

let currentSceneIndex = 0;
let typingTimeout;

const sceneElement = document.getElementById("scene");
const portraitPanel = document.getElementById("portraitPanel");
const portraitElement = document.getElementById("portrait");

const nameElement = document.getElementById("name");
const textElement = document.getElementById("text");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const overlay = document.getElementById("overlay");

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const bgm = document.getElementById("bgm");

// Find scene by ID
function getSceneById(id) {
    return scenes.find(s => s.id === id);
}

// Typewriter effect function
function typeWriterText(text, index = 0) {
    if (index === 0) {
        textElement.textContent = "";
        clearTimeout(typingTimeout);
    }
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        typingTimeout = setTimeout(() => typeWriterText(text, index + 1), 25);
    }
}

function showScene(sceneId) {
    const scene = getSceneById(sceneId);  
    if (!scene) return;

    currentSceneIndex = scene.id;
    sceneElement.style.backgroundImage = `url("${scene.background}")`;  

    if (scene.portrait && scene.portrait.trim() !== "") {  
        portraitElement.src = scene.portrait;  
        portraitPanel.style.display = "block";  
    } else {  
        portraitPanel.style.display = "none";  
    }  

    nameElement.textContent = scene.name;  
    typeWriterText(scene.text);

    // Clear choices container
    choicesContainer.innerHTML = "";

    // Handle branching choices
    if (scene.choices) {
        nextButton.style.display = "none";
        scene.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice";
            btn.textContent = choice.text;
            btn.addEventListener("click", () => {
                triggerTransition(choice.next);
            });
            choicesContainer.appendChild(btn);
        });
    } else if (scene.isEnding) {
        nextButton.style.display = "none";
        const endingTag = document.createElement("p");
        endingTag.style.color = "#ff3333";
        endingTag.style.marginTop = "15px";
        endingTag.style.fontWeight = "bold";
        endingTag.textContent = scene.endingText;
        choicesContainer.appendChild(endingTag);
    } else {
        nextButton.style.display = "block";
    }
}

function triggerTransition(nextId) {
    overlay.classList.add("active");
    setTimeout(() => {
        showScene(nextId);
        overlay.classList.remove("active");
    }, 200);
}

// Start Game Event
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    bgm.volume = 0.4;
    bgm.play().catch(e => console.log("Audio play blocked", e));
    showScene(0);
});

nextButton.addEventListener("click", function () {
    const currentScene = getSceneById(currentSceneIndex);
    if (currentScene && currentScene.next !== undefined) {
        triggerTransition(currentScene.next);
    }
});
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    
    bgm.loop = true;
    bgm.volume = 0.5;
    
    bgm.play().catch(error => {
        console.log("Audio playback error:", error);
    });

    showScene(0);
});