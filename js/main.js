//////////// Slider Gallery

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//////////// End Slider Gallery

//////////// Scroll Into View Menu

let dorucak = document.getElementById("dorucak-menu-scroll");
let hladnoPredjelo = document.getElementById("hladno-predjelo-menu-scroll");
let toploPredjelo = document.getElementById("toplo-predjelo-menu-scroll");
let salate = document.getElementById("salate-menu-scroll");
let obrokSalate = document.getElementById("obrok-salate-menu-scroll");
let pice = document.getElementById("pizze-menu-scroll");
let paste = document.getElementById("paste-menu-scroll");

function dorucakScroll(){ dorucak.scrollIntoView({ behavior: 'smooth' })}
function hladnoPredjeloScroll(){ hladnoPredjelo.scrollIntoView({ behavior: 'smooth' })}
function toploPredjeloScroll(){ toploPredjelo.scrollIntoView({ behavior: 'smooth' })}
function salateScroll(){ salate.scrollIntoView({ behavior: 'smooth' })}
function obrokSalateScroll(){ obrokSalate.scrollIntoView({ behavior: 'smooth' })}
function piceScroll(){ pice.scrollIntoView({ behavior: 'smooth' })}
function pasteScroll(){ paste.scrollIntoView({ behavior: 'smooth' })}

//////////// End Scroll Into View Menu
































//
