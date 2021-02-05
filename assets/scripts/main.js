// main.js
function playSound() {
    document.getElementById("horn-sound").play();
}

document.getElementById("honk-btn").addEventListener("click", playSound);
