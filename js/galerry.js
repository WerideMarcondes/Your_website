function Showplanet() {
  var planet = document.querySelectorAll(".planet");
  var maintenance = document.querySelectorAll(".nature");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < planet.length; i++) {
    planet[i].hidden = false;
  }

  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
  for (var m = 0; m < maintenance.length; m++) {
    maintenance[m].hidden = true;
  }
}

function Showmaintenancehome() {
  var planet = document.querySelectorAll(".planet");
  var maintenance = document.querySelectorAll(".nature");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < planet.length; l++) {
    planet[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
}

function Showconstruction() {
  var planet = document.querySelectorAll(".planet");
  var maintenance = document.querySelectorAll(".nature");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = true;
  }

  for (var l = 0; l < planet.length; l++) {
    planet[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}

function ShowEverything() {
  var planet = document.querySelectorAll(".planet");
  var maintenance = document.querySelectorAll(".nature");
  var posconstruction = document.querySelectorAll(".construction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < planet.length; l++) {
    planet[l].hidden = false;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelectorAll(".card-container");
  image.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.add("activa");
      images = document.querySelectorAll("activa");
      image.classList.remove("card-container");
      posconstruction = document.querySelectorAll(".card-container");
      for (var i = 0; i < images.length; i++) {
        if (!image[i].classList.contains("activa")) {
          image[i].hidden = false;
        }
      }
      for (var m = 0; m < posconstruction.length; m++) {
        posconstruction[m].hidden = true;
      }
      // }
    });
  });
});

