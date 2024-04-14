const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const showKeys = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav"); // by default, audio src is 'a' tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio

  const clickedKey = document.querySelector(
    `[data-key='${key.toLowerCase()}']`
  );
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); // adding key values to the allKeys array
  // calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  // call playTune function, if only key from allKeys array is pressed
  if (allKeys.includes(e.key.toLowerCase())) playTune(e.key);
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = (e) => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
showKeys.addEventListener("click", showHideKeys);
