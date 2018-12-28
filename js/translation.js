
function changeLang() { // main translation function
  var lng = document.getElementById("langselector").value; // dropdown menu value
  switch (lng) {
    // Serbian option selected
    case "sr":
      location.reload(); // reloads webpage so that default text shows (i.e.Serbian)
    break;
    // English option selected
    case "en":
      // header
      document.getElementsByClassName("header__adress")[0].innerHTML = "Kralja Petra I number 35 Kragujevac";
      document.getElementsByClassName("header__links__jelovnik")[0].innerHTML = "Menu";
      document.getElementsByClassName("header__links__informacije")[0].innerHTML = "Information";
      document.getElementsByClassName("header__links__galerija")[0].innerHTML = "Gallery";
      document.getElementsByClassName("header__links__utisci")[0].innerHTML = "Impressum";
      // category
      document.getElementsByClassName("category__title-main-container__title")[0].innerHTML = "categories";
      document.getElementsByClassName("translate-breakfast")[0].innerHTML = "Breakfast";
      document.getElementsByClassName("translate-cold-aperetiff")[0].innerHTML = "Cold aperitif";
      document.getElementsByClassName("translate-hot-aperetiff")[0].innerHTML = "Hot aperitif";
      document.getElementsByClassName("translate-salad")[0].innerHTML = "Salads";
      document.getElementsByClassName("translate-salad-meals")[0].innerHTML = "Salad meals";
      document.getElementsByClassName("translate-pizza")[0].innerHTML = "Pizza";
      document.getElementsByClassName("translate-pasta")[0].innerHTML = "Pasta";
      // banner
      document.getElementsByClassName("translate-banner-title")[0].innerHTML = "Today's specialty";
      // shopping cart
      document.getElementsByClassName("shopping-cart__title-main-container__title")[0].innerHTML = "Shopping cart";
      document.getElementsByClassName("shopping-cart__combined-price__text")[0].innerHTML = "Total:";
      // menu
      document.getElementById("dorucak-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Breakfast";
      document.getElementById("hladno-predjelo-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Cold Aperitif";
      document.getElementById("toplo-predjelo-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Hot Aperitif";
      document.getElementById("salate-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Salads";
      document.getElementById("obrok-salate-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Salad meals";
      document.getElementById("pizze-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Pizza";
      document.getElementById("paste-menu-scroll").getElementsByTagName("h1")[0].innerHTML = "Pasta";
      // gallery
      document.getElementsByClassName("content__gallery-container__title-main-container__title")[0].innerHTML = "Gallery";
      // impressum
      document.getElementsByClassName("content__comment-container__title-main-container__title")[0].innerHTML = "Impressum";
      document.getElementsByClassName("content__comment-container__form-container__name-label")[0].innerHTML = "Full Name";
      document.getElementById("name").placeholder = "full name";
      document.getElementsByClassName("content__comment-container__form-container__comment-text")[0].innerHTML = "Comment Text";
      document.getElementById("comment").placeholder = "comment text...";
      document.getElementsByClassName("translate-comment-button")[0].value = "Post Comment";
      // information
      document.getElementsByClassName("content__information-container__title-main-container__title")[0].innerHTML = "Information";
      document.getElementsByClassName("content__information-container__map-container__title")[0].innerHTML = "Where are we on the map";
      document.getElementsByClassName("translate-adress")[0].innerHTML = "Adress:";
      document.getElementsByClassName("translate-phone")[0].innerHTML = "Phone Number:";
      document.getElementsByClassName("translate-delivery")[0].innerHTML = "Delivery:";
      // information table
      document.getElementById("translate-table-container").getElementsByTagName("th")[0].innerHTML = "Days in a week:";
      document.getElementById("translate-table-container").getElementsByTagName("th")[1].innerHTML = "Working hours:";
      document.getElementById("translate-table-container").getElementsByTagName("th")[2].innerHTML = "Ordering:";
      document.getElementById("translate-table-container").getElementsByTagName("th")[3].innerHTML = "Delivery:";
      // information days
      document.getElementById("translate-table-container").getElementsByTagName("td")[0].innerHTML = "Monday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[4].innerHTML = "Tuesday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[8].innerHTML = "Wednesday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[12].innerHTML = "Thursday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[16].innerHTML = "Friday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[20].innerHTML = "Saturday";
      document.getElementById("translate-table-container").getElementsByTagName("td")[24].innerHTML = "Sunday";
      // modal
      document.getElementsByClassName("modal__title-main-container__title")[0].innerHTML = "Your Order";
      document.getElementsByClassName("name-label-translate")[0].innerHTML = "Full Name";
      document.getElementsByClassName("phone-label-translate")[0].innerHTML = "Phone";
      document.getElementsByClassName("adress-label-translate")[0].innerHTML = "Adress";
      document.getElementsByClassName("text-label-translate")[0].innerHTML = "Comment if you have one";
      // footer
      document.getElementsByClassName("footer__social-text")[0].innerHTML = "Visit our social networks";
      document.getElementsByClassName("footer__social-text")[0].innerHTML = "Visit our social networks";
    break;
    }
}




















//
