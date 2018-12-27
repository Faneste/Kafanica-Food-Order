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

//////////// Shopping Cart

let itemName;
let itemIngredients;
let itemPrice;
let totalPrice = 0;

/////////////////////////////////////////////////////

function addInformation(e) { // main func. for making item, gathers innerHTML from button parent as information
  // getting information and adding button event
  itemName = e.currentTarget.parentElement.parentElement.childNodes[1].innerHTML; // name for the item
  itemIngredients = e.currentTarget.parentElement.parentElement.childNodes[3].innerHTML; // item ingredients
  itemPrice = e.currentTarget.parentElement.parentElement.childNodes[5].childNodes[1].dataset.price; // item price

  // building elements
  // containers
  let mainContainerDiv = document.getElementsByClassName("shopping-cart")[0]; // get the main container div for item
  let itemContainerDiv = document.createElement("DIV"); // create container div for item
  itemContainerDiv.classList.add("shopping-cart__item"); // add class to container div
  mainContainerDiv.appendChild(itemContainerDiv); // attaches itemContainer div to mainContainerDiv
  // inner information elements
  let itemNameContainer = document.createElement("h2"); // item name/title
  itemNameContainer.classList.add("shopping-cart__item-title");
  itemNameContainer.innerHTML = itemName;
  itemContainerDiv.appendChild(itemNameContainer);

  let itemIngredientsContainer = document.createElement("h3"); // item ingredients
  itemIngredientsContainer.classList.add("shopping-cart__item-ingredients");
  itemIngredientsContainer.innerHTML = itemIngredients;
  itemContainerDiv.appendChild(itemIngredientsContainer);

  let itemPriceContainer = document.createElement("h3"); // item price
  itemPriceContainer.classList.add("shopping-cart__item-price");
  itemPriceContainer.innerHTML = itemPrice;
  itemContainerDiv.appendChild(itemPriceContainer);

  let itemDeleteButton = document.createElement("button"); // item delete button
  itemDeleteButton.classList.add("shopping-cart__item__delete-button");
  itemContainerDiv.appendChild(itemDeleteButton);
  // adding button onclick event
  itemDeleteButton.onclick = function() {
    let item = this.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
    combinePrice(); // updates total price when item removed
  }
  combinePrice(); // updates total price when item added
}

/////////////////////////////////////////////////////

function combinePrice() { // combines all the prices added and displays it in cart
  let priceItemsAllTemp = Array.from(document.getElementsByClassName("shopping-cart__item-price")); // temp array
  let priceArray = [];

  priceItemsAllTemp.forEach(function(element) {
    priceArray.push(parseInt(element.innerHTML));
  });

  document.getElementById("shopping-cart__combined-price__number").innerHTML =
  priceArray.reduce((a, b) => a + b, 0) + " rsd";
}

/////////////////////////////////////////////////////

function orderItems() { // order items function
  let dostava = document.getElementsByClassName("shopping-cart__form-checkbox__dostava")[0]; // checkbox values
  let preuzimanje = document.getElementsByClassName("shopping-cart__form-checkbox__preuzimanje")[0]; // checkbox values
  // treba za dostava i preuzimanje da bude if dostava.checked itd

  let modalInnerContent = document.getElementsByClassName("modal__content__inner-content")[0]; // modal innerHTML
  modalInnerContent.innerHTML = "";



  let itemsArray = document.getElementsByClassName("shopping-cart__item"); // item arrays

  for (let i = 0; i < itemsArray.length; i++) {
    modalInnerContent.innerHTML = modalInnerContent.innerHTML + "////////" + itemsArray[i].firstChild.innerHTML;
  }


  // modalInnerContent.innerHTML = "sdsadsadasdasdasd";

  // modal
  let modal = document.getElementById('modal'); // modal variable
  let span = document.getElementsByClassName("modal__content__close-button")[0];// close button/x character
  modal.style.display = "block"; // open the modal
  span.onclick = function() { modal.style.display = "none"; } // close the modal

  window.onclick = function(event) { // close the modal by clicking outside of it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // end modal



}

//////////// End Shopping Cart




















//
