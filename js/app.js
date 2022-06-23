const body = document.querySelector("body");
const colorPicker1 = document.querySelector(".color-picker1");
const colorPicker2 = document.querySelector(".color-picker2");
const text = document.querySelector(".rgb-value");

function changeBackground() {
  body.style.background = `linear-gradient(to right, ${colorPicker1.value}, ${colorPicker2.value})`;
  text.innerHTML = body.style.background;
}

colorPicker1.addEventListener("input", changeBackground());
colorPicker2.addEventListener("input", changeBackground());
