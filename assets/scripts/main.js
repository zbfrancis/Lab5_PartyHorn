// main.js

let sound = document.getElementById("horn-sound");
let vol_number = document.getElementById("volume-number");

function attachListeners() {
    vol_number.addEventListener("change", changeVol);
    vol_number.addEventListener("input", changeVol);
}

function changeVol() {
    sound.volume = (vol_number.valueAsNumber)/100;
}

document.getElementById("honk-btn").addEventListener("click", playSound);

function playSound() {
    sound.getElementById("horn-sound").play();
}

