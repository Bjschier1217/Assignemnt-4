
// Vanish the Iron Gate
let gate = document.getElementById("gate");
gate.style.display = "none";


//Read the guards secret scroll
let message = document.getElementById("secretMessage");
message.innerHTML = "The exit code is 1234";
message.style.color = "gold";


//Unlock the corridor door
let door = document.getElementById("door");
let status = document.getElementById("doorStatus");

door.addEventListener("click", function() {
    door.classList.toggle("unlocked");

    if (door.classList.contains("unlocked")) {
        door.textContent = "🔓";
        status.innerHTML = "The door is unlocked!";
    } else {
        door.textContent = "🔒";
        status.innerHTML = "The door is locked!";
    }
});


//Summon the ancient map
async function summonMap() {
    let output = document.getElementById("map");

    try {
        output.innerHTML = "Loading map...";

        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();

        output.innerHTML = data.setup + "<br>" + data.punchline;
    } catch (error) {
        output.innerHTML = "Failed to load the map. Try again.";
    }
}

summonMap();