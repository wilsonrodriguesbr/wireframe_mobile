let fingerComponent = document.querySelector(".finger");

fingerComponent.addEventListener("click", notification);

function notification(){
  alert("Biometria acionada!");
}

let displayComponent = document.querySelector(".display");

displayComponent.addEventListener("click", display);

function display(){
    alert("Display acionado!");
}