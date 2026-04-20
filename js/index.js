var movment = 1;

document.getElementById("rd1").checked = true;

setInterval(function () {
  nextPicture();
}, 5000);

function nextPicture() {
  movment++;
  if (movment > 4) {
    movment = 1;
  }
  document.getElementById("rd"+movment).checked = true;
}
