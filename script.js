var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");

function changeGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value; 
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
window.addEventListener("load", function(){
    color1.value = "#00ff00";
    color2.value = "#ff00ff";
    changeGradient();
});

function makeRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);;
  }

  boton1.addEventListener("click", function () {
      color1.value = makeRandomColor();
      changeGradient();
  });

  boton2.addEventListener("click", function () {
    color2.value = makeRandomColor();
    changeGradient();
});