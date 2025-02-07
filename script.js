// Player and End Element
let player = document.getElementById("player");
let end = document.getElementById("end");
let mazeContainer = document.getElementById("maze-container");
let mainContainer = document.getElementById("main-container");
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");
let message = document.getElementById("message");
let nextPage = document.getElementById("nextPage");
let heart = document.getElementById("heart");

let playerX = 0;
let playerY = 0;
let gridSize = 40; // Grid size for movement
let growCount = 0;
let messageStages = [
    "Are you really sure?",
    "Are you sure sure, Merlina?",
    "Are you positive?",
    "Please, baby!"
];

// Ensure player and end align with the grid
end.style.left = "360px"; 
end.style.top = "360px";

// Update player position on the screen
function updatePlayerPosition() {
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}

// Listen for arrow key movements to move the player
window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' && playerY > 0) playerY -= gridSize;
    if (event.key === 'ArrowDown' && playerY < 360) playerY += gridSize;
    if (event.key === 'ArrowLeft' && playerX > 0) playerX -= gridSize;
    if (event.key === 'ArrowRight' && playerX < 360) playerX += gridSize;

    updatePlayerPosition();

    // Check if player reaches the end
    checkForWin();
});

// Check if player reaches the end
function checkForWin() {
    if (playerX === 360 && playerY === 360) {
        winGame();
    }
}

// Handle "Yes" button click
function handleYes() {
    document.getElementById("main-container").style.display = "none";
    nextPage.style.display = "block";
    createFloatingHearts();
    launchConfetti();
}

// Handle "No" button click
function handleNo() {
    growCount++;
    
    // Grow the Yes button
    yesButton.style.transform = `scale(${1 + growCount * 0.5})`;

    // Update the message with a random stage
    let messageIndex = growCount % messageStages.length;
    message.textContent = messageStages[messageIndex];

    // Get the size of the "No" button and "No Zone"
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const noZone = document.getElementById('noZone');
    const zoneWidth = noZone.offsetWidth;
    const zoneHeight = noZone.offsetHeight;

    // Calculate random position within the no-zone
    let randomX = Math.random() * (zoneWidth - buttonWidth);
    let randomY = Math.random() * (zoneHeight - buttonHeight);

    // Position the "No" button inside the no-zone
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX + 20}px`; 
    noButton.style.top = `${randomY + 20}px`;
}

// Show the love letter
function showLetter() {
    document.getElementById("loveLetter").style.display = "block";
}

// Hide the love letter
function hideLetter() {
    document.getElementById("loveLetter").style.display = "none";
}

// Start the background music
window.onload = function() {
    let audio = document.getElementById("backgroundMusic");
    audio.play(); // Starts the music on page load
};

// Launch confetti with Hello Kitty theme
function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        shapes: ['image'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Hello_Kitty_Logo.svg/1200px-Hello_Kitty_Logo.svg.png', // Hello Kitty icon
        gravity: 0.5,
        scalar: 1.2
    });
}

// Create floating hearts
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 3000); // Hearts disappear after 3 seconds
}

// Win the game
function winGame() {
    // Fade out maze container
    mazeContainer.classList.add('fade-out');
    
    setTimeout(function() {
        mazeContainer.style.display = 'none';  // Hide maze
        mainContainer.style.display = 'block'; // Show main UI
        mainContainer.classList.add('fade-in'); // Add fade-in class for smooth transition

        // Show Hello Kitty GIF with animation
        let kittyAnimation = document.getElementById("kittyAnimation");
        kittyAnimation.style.display = 'block';  // Show the kitty GIF container
    }, 1000); // Match the fade-out time (1s)
}
// Handle "No" button click
function handleNo() {
    growCount++;
    
    // Grow the Yes button
    yesButton.style.transform = `scale(${1 + growCount * 0.5})`;

    // Update the message with a random stage
    let messageIndex = growCount % messageStages.length;
    message.textContent = messageStages[messageIndex];

    // Get the size of the "No" button and "No Zone"
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const noZone = document.getElementById('noZone');
    const zoneWidth = noZone.offsetWidth;
    const zoneHeight = noZone.offsetHeight;

    // Calculate random position within the no-zone
    let randomX = Math.random() * (zoneWidth - buttonWidth);
    let randomY = Math.random() * (zoneHeight - buttonHeight);

    // Position the "No" button inside the no-zone
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX + 20}px`; 
    noButton.style.top = `${randomY + 20}px`;

    // Add the shining effect to the Yes button
    yesButton.classList.add('shining-effect');

    // Remove the shining effect after the animation completes (1.5s)
    setTimeout(function() {
        yesButton.classList.remove('shining-effect');
    }, 2000); // Time should match the duration of the animation
}
// Handle "No" button click
function handleNo() {
    growCount++;
    
    // Grow the Yes button
    yesButton.style.transform = `scale(${1 + growCount * 0.5})`;

    // Update the message with a random stage
    let messageIndex = growCount % messageStages.length;
    message.textContent = messageStages[messageIndex];

    // Get the size of the "No" button and "No Zone"
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const noZone = document.getElementById('noZone');
    const zoneWidth = noZone.offsetWidth;
    const zoneHeight = noZone.offsetHeight;

    // Calculate random position within the no-zone
    let randomX = Math.random() * (zoneWidth - buttonWidth);
    let randomY = Math.random() * (zoneHeight - buttonHeight);

    // Position the "No" button inside the no-zone
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX + 20}px`; 
    noButton.style.top = `${randomY + 20}px`;

    // Ensure Yes button stays above No button as it grows
    yesButton.style.zIndex = 2; // Keep Yes button above No button
    noButton.style.zIndex = 1; // Keep No button behind Yes button
}
function handleNo() {
    growCount++;

    // Grow the Yes button
    yesButton.style.transform = `scale(${1 + growCount * 0.5})`;

    // Update the message with a random stage
    let messageIndex = growCount % messageStages.length;
    message.textContent = messageStages[messageIndex];

    // Position the "No" button randomly within the "No Zone"
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const noZone = document.getElementById('noZone');
    const zoneWidth = noZone.offsetWidth;
    const zoneHeight = noZone.offsetHeight;

    let randomX = Math.random() * (zoneWidth - buttonWidth);
    let randomY = Math.random() * (zoneHeight - buttonHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX + 20}px`;
    noButton.style.top = `${randomY + 20}px`;

    // Ensure Yes button stays above No button
    yesButton.style.zIndex = 2;
    noButton.style.zIndex = 1;

    // Add the shining effect to the Yes button
    yesButton.classList.add('shine');

    // Keep shining effect permanently after clicking "No"
    }
    const maze = document.querySelector('.maze');
    const wallPositions = [
        { x: 0, y: 40 }, { x: 40, y: 40 }, { x: 80, y: 40 },
        { x: 160, y: 120 }, { x: 200, y: 160 },
        { x: 240, y: 200 }, { x: 280, y: 200 },
        { x: 40, y: 280 }, { x: 80, y: 320 },
        { x: 160, y: 40 }, { x: 320, y: 120 },
        { x: 200, y: 280 }, { x: 360, y: 320 }
    ];
    

    wallPositions.forEach(pos => {
        const wall = document.createElement('div');
        wall.classList.add('wall');
        wall.style.left = `${pos.x}px`;
        wall.style.top = `${pos.y}px`;
        maze.appendChild(wall);
    });
    let isPlaying = false;
    let audio = document.getElementById("backgroundMusic");
    
    function toggleMusic() {
        let heartIcon = document.getElementById("heartIcon");
        let muteLine = document.getElementById("muteLine");
    
        if (isPlaying) {
            audio.pause();
            muteLine.style.display = "block"; // Show mute line
        } else {
            audio.play();
            muteLine.style.display = "none"; // Hide mute line
        }
        
        isPlaying = !isPlaying;
    }
    function winGame() {
        // Fade out maze container
        mazeContainer.classList.add('fade-out');
    
        // Remove the maze title
        const mazeTitle = document.getElementById("mazeTitle");
        if (mazeTitle) {
            mazeTitle.style.display = "none";
        }
    
        setTimeout(function() {
            mazeContainer.style.display = 'none';  // Hide maze
            mainContainer.style.display = 'block'; // Show main UI
            mainContainer.classList.add('fade-in'); // Add fade-in class for smooth transition
    
            // Show Hello Kitty GIF with animation
            let kittyAnimation = document.getElementById("kittyAnimation");
            kittyAnimation.style.display = 'block';  // Show the kitty GIF container
        }, 1000); // Match the fade-out time (1s)
    }
    function showLetter() {
        const loveLetter = document.getElementById("loveLetter");
        loveLetter.style.display = "block";
        loveLetter.classList.add('fade-in'); // Apply fade-in effect
    
        const messageContent = `Merlina,
        
    You are the most special person in my life. I am so lucky to have you and be with you. I would be miserable without you. My life has gotten 100x better since I met you. You don’t realize how much you help me and heal me. I’m so happy that you're mine and my Valentine. I see a future with you...
    
    [The rest of your heartfelt message...]`;
    
        // Add typing animation
        typeMessage("loveLetterText", messageContent);
    }
    
    function typeMessage(elementId, message) {
        const element = document.getElementById(elementId);
        element.innerHTML = ''; // Clear previous content
        let index = 0;
    
        function typeNextChar() {
            if (index < message.length) {
                element.innerHTML += message[index++];
                setTimeout(typeNextChar, 50); // Typing speed
            }
        }
    
        typeNextChar();
    }
    function winGame() {
        // Fade out maze container
        mazeContainer.classList.add('fade-out');
    
        // Remove the maze title
        const mazeTitle = document.getElementById("mazeTitle");
        if (mazeTitle) {
            mazeTitle.style.display = "none";
        }
    
        setTimeout(function () {
            mazeContainer.style.display = 'none';  // Hide maze
            mainContainer.style.display = 'block'; // Show main UI
            mainContainer.classList.add('fade-in'); // Add fade-in class for smooth transition
    
            // Show Hello Kitty GIF centered above the text
            let kittyAnimation = document.getElementById("kittyAnimation");
            kittyAnimation.style.display = 'block';  // Show the kitty GIF container
            kittyAnimation.classList.add('fade-in');
        }, 1000); // Match the fade-out time (1s)
    }
    const clickSound = document.getElementById("clickSound");

// Attach the click sound to all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0; // Reset audio to start
        clickSound.play();
    });
});
