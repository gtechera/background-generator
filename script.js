const css = document.querySelector("h3");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.getElementById("gradient");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const changeGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value; 
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
window.addEventListener("load", function(){
    color1.value = "#f32954";
    color2.value = "#ffffff";
    changeGradient();
});

const makeRandomColor = () => '#'+Math.floor(Math.random() * 16777215).toString(16);
  
  boton1.addEventListener("click", function () {
      color1.value = makeRandomColor();
      changeGradient();
  });

  boton2.addEventListener("click", function () {
    color2.value = makeRandomColor();
    changeGradient();
});