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

// window.onload = function() {
//    var element = document.getElementById('abouts');
// element.addEventListener('mouseover', (e) => {
//     var el = document.getElementById('about')
//     element = el
//  e.target;
//  el.style.marginTop= '-100px';
//   el.style.color = 'white';
//   el.style.transition= '1.9s';

// });

//    var element = document.getElementById('missions');
// element.addEventListener('mouseenter', (e) => {
//     var el = document.getElementById('mission')
   
//     element = el
//  e.target;
//  el.style.marginTop= '-100px';
//   el.style.color = 'black';
//   el.style.transition= '1.9s';

// });

//    var element = document.getElementById('visions');
// element.addEventListener('mouseenter', (e) => {
//     var el = document.getElementById('vision')
//     element = el
//  e.target;
//  el.style.marginTop= '-100px';
//   el.style.color = 'black';
//   el.style.transition= '1.9s';

// });

//  var element = document.getElementById('abouts');
// element.addEventListener('mouseleave', (e) => {
//     var el = document.getElementById('about')
//     element = el
//  e.target;
//  el.style.marginTop= '0px';
//   el.style.color = 'white';
//   el.style.transition= '1.9s';

// });

//    var element = document.getElementById('missions');
// element.addEventListener('mouseleave', (e) => {
//     var el = document.getElementById('mission')
   
//     element = el
//  e.target;
//  el.style.marginTop= '100px';
//   el.style.color = 'black';
//   el.style.transition= '1.9s';

// });

//    var element = document.getElementById('visions');
// element.addEventListener('mouseleave', (e) => {
//     var el = document.getElementById('vision')
//     element = el
//  e.target;
//  el.style.marginTop= '300px';
//   el.style.color = 'black';
//   el.style.transition= '1.9s';

// });

// };


