const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const container = document.querySelector(".container");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".text").style.display = "none";
  result.classList.remove("hidden");
});
