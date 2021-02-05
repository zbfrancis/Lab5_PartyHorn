// main.js

let vol_number = document.getElementById("volume-number");
let vol_slide = document.getElementById("volume-slider");
let vol_image = document.getElementById("volume-image");
let radio_group = document.getElementsByName("radio-sound");
let sound_img = document.getElementById("sound-image");
let sound = document.getElementById("horn-sound");
let honk_btn = document.getElementById("honk-btn");

attachListeners();

function attachListeners() {
	vol_number.addEventListener("input", changeVolNum);
	vol_slide.addEventListener("input", changeVolSlide);

	for (radio of radio_group) {
		radio.addEventListener("input", changeSound);
	}

	honk_btn.addEventListener("click", playSound);
}

function changeVolNum(event) {
	if (event.target.value == 0) {
		vol_image.src = "./assets/media/icons/volume-level-0.svg";
		vol_image.alt = "Muted";
		honk_btn.disabled = true;
	} else if (event.target.value >= 1 && event.target.value <= 33) {
		vol_image.src = "./assets/media/icons/volume-level-1.svg";
		vol_image.alt = "Low Volume";
		honk_btn.disabled = false;
	} else if (event.target.value >= 34 && event.target.value <= 66) {
		vol_image.src = "./assets/media/icons/volume-level-2.svg";
		vol_image.alt = "Medium Volume";
		honk_btn.disabled = false;
	} else if (event.target.value >= 67) {
		vol_image.src = "./assets/media/icons/volume-level-3.svg";
		vol_image.alt = "Max Volume";
		honk_btn.disabled = false;
	}
	vol_slide.value = event.target.value;
	sound.volume = (event.target.value) / 100;
}

function changeVolSlide(event) {
	if (event.target.value == 0) {
		vol_image.src = "./assets/media/icons/volume-level-0.svg";
		vol_image.alt = "Muted";
		honk_btn.disabled = true;
	} else if (event.target.value >= 1 && event.target.value <= 33) {
		vol_image.src = "./assets/media/icons/volume-level-1.svg";
		vol_image.alt = "Low Volume";
		honk_btn.disabled = false;
	} else if (event.target.value >= 34 && event.target.value <= 66) {
		vol_image.src = "./assets/media/icons/volume-level-2.svg";
		vol_image.alt = "Medium Volume";
		honk_btn.disabled = false;
	} else if (event.target.value >= 67) {
		vol_image.src = "./assets/media/icons/volume-level-3.svg";
		vol_image.alt = "Max Volume";
		honk_btn.disabled = false;
	}
	vol_number.value = event.target.value;
	sound.volume = (event.target.value) / 100;
}

function changeSound(event) {
	if (event.target.id == "radio-air-horn") {
		sound.src = "./assets/media/audio/air-horn.mp3";
		sound_img.src = "./assets/media/images/air-horn.svg";
		sound_img.alt = "Air Horn";
	} else if (event.target.id == "radio-car-horn") {
		sound.src = "./assets/media/audio/car-horn.mp3";
		sound_img.src = "./assets/media/images/car.svg";
		sound_img.alt = "Car Horn";
	} else if (event.target.id == "radio-party-horn") {
		sound.src = "./assets/media/audio/party-horn.mp3";
		sound_img.src = "./assets/media/images/party-horn.svg";
		sound_img.alt = "Party Horn";
	}
}

function playSound(event) {
	event.preventDefault();
	sound.play();
}
