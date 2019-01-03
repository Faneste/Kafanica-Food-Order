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

//////////// To Top Button

window.onscroll = function() {scrollFunction()}; // show button when scrooled window

function scrollFunction() { // show button when scrooled window
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("to-top-button").style.display = "block";
  } else {
    document.getElementById("to-top-button").style.display = "none";
  }
}

function topFunction() { // scroll to top when clicked
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//////////// End To Top Button

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

//////////// Google Map / doesn't work, requires paying

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
  itemPriceContainer.innerHTML = itemPrice + " rsd";
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

  // modal inner content
  let modalInnerContent = document.getElementsByClassName("modal__content__inner-content")[0]; // modal innerHTML
  modalInnerContent.innerHTML = ""; // reset inner content to be put again
  let itemsArray = document.getElementsByClassName("shopping-cart__item"); // get array of all html elements (html collection)
  console.log(itemsArray);

  // get item names from html content array/collection and put in modal
  for (let i = 0; i < itemsArray.length; i++) {
    modalInnerContent.innerHTML =
    modalInnerContent.innerHTML +
    // put item names in modal
    '<div class="modal__content__inner-content__item">' +
    itemsArray[i].firstChild.innerHTML +
    '</div>'
  }

  // put order choice in modal dostava/licno preuzimanje
  let orderDetail = "";
  if (dostava.checked === true) { orderDetail = "Način preuzimanja: Dostava"; }
  if (preuzimanje.checked === true) { orderDetail = "Način preuzimanja: Lično preuzimanje"; }

  // put price/order detail in modal
  let modalPrice = document.getElementById("shopping-cart__combined-price__number");
  modalInnerContent.innerHTML = modalInnerContent.innerHTML + '<div class="modal__content__inner-content__price">' +
  'Ukupno: ' +
  modalPrice.innerHTML +
  '</div>' +
  '<div class="modal__content__inner-content__order-detail">' +
  orderDetail +
  '</div>';

  // modal create/open/close
  let modal = document.getElementById('modal'); // modal variable
  let closeSpan = document.getElementsByClassName("modal__content__close-button")[0]; // close button/x character
  let closeButton = document.getElementsByClassName("modal__content__close-button-bottom")[0]; // close button
  modal.style.display = "block"; // display the modal
  closeSpan.onclick = function() { modal.style.display = "none"; } // close the modal with x
  closeButton.onclick = function() { modal.style.display = "none"; } // close the modal with button

  window.onclick = function(event) { // close the modal by clicking outside of it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // end modal
}

//////////// End Shopping Cart

//////////// Submit Comment

let inputForm = document.getElementsByClassName("content__comment-container__form-container")[0];
let commentThanks = document.getElementsByClassName("content__comment-container__form-container__thanks-for-comment")[0];
let nameInput = document.getElementsByClassName("content__comment-container__form-container__input")[0];
let emailInput = document.getElementsByClassName("content__comment-container__form-container__input")[0];
let commentInput = document.getElementsByClassName("content__comment-container__form-container__input input--comment")[0];

function commentSubmit() { // form validation / display comment is submitted
  // treba da se stavi form validation
  inputForm.style.display = "none";
  commentThanks.style.display = "block";
}

//////////// End Submit Comment


















//
