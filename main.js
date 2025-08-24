const audio = document.querySelector("#bg-music");
const button = document.querySelector(".music-btn");

button.addEventListener("click", () => {
  audio.play()
});
