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

// Header Scroll
let jelovnik = document.getElementById("jelovnik-scroll");
let informacije = document.getElementById("informacije-scroll");
let galerija = document.getElementById("galerija-scroll");
let utisci = document.getElementById("utisci-scroll");

function jelovnikScroll(){ jelovnik.scrollIntoView({ behavior: 'smooth' })}
function informacijeScroll(){ informacije.scrollIntoView({ behavior: 'smooth' })}
function galerijaScroll(){ galerija.scrollIntoView({ behavior: 'smooth' })}
function utisciScroll(){ utisci.scrollIntoView({ behavior: 'smooth' })}
// End Header Scroll

// Category Scroll
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
// End Category Scroll

//////////// End Scroll Into View Menu

//////////// Google Map

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('google-map-holder'), {
    center: {lat: 44.011315, lng: 20.911604},
    zoom: 15
  });
}

//////////// End Google Map
























//
