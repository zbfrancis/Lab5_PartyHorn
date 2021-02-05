// main.js
function playSound() {
    document.getElementById("horn-sound").autoplay();
}

document.getElementById("honk-btn").addEventListener("click", playSound);
