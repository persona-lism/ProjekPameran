function hamburgerMenu() {
    var menu = document.getElementById("hamburger-content");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

  function hamburgerMenuAnimation() {
    var animation = document.getElementById("hamburger-menu");
    if (animation.style.transform === "matrix(0, 1, 1, 0, 0, 0)") {
      animation.style.transform = "none";
    } else {
      animation.style.transform = "matrix(0, 1, 1, 0, 0, 0)";
    }
  }

  function responsiveMenu(x) {
    var animation = document.getElementById("hamburger-menu");
    var menu = document.getElementById("hamburger-content");
    if (responsiveWidth1028px.matches) {
      // If media query matches
      menu.style.display = "none";
      animation.style.transform = "none";
    } else {
      menu.style.display = "none";
      animation.style.transform = "none";
    }
  }
  
  var responsiveWidth1028px = window.matchMedia("(min-width: 1028px)");
  
  responsiveMenu(responsiveWidth1028px);
  responsiveWidth1028px.addListener(responsiveMenu);

  function bab1Dropdown() {
    var menu1 = document.getElementById("bab1-dropdown1");
    var menu2 = document.getElementById("bab1-dropdown2");
    var menu3 = document.getElementById("bab1-dropdown3");
    if (menu1.style.display === "flex") {
      menu1.style.display = "none";
      menu2.style.display = "none";
      menu3.style.display = "none";
    } else {
      menu1.style.display = "flex";
      menu2.style.display = "flex";
      menu3.style.display = "flex";
    }
  }

  function bab4Dropdown() {
    var menu1 = document.getElementById("bab4-dropdown1");
    var menu2 = document.getElementById("bab4-dropdown2");
    var menu3 = document.getElementById("bab4-dropdown3");
    if (menu1.style.display === "flex") {
      menu1.style.display = "none";
      menu2.style.display = "none";
      menu3.style.display = "none";
    } else {
      menu1.style.display = "flex";
      menu2.style.display = "flex";
      menu3.style.display = "flex";
    }
  }

  function firstDropdown() {
    document.getElementById("nav-first-dropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.first-dropbtn')) {
      var dropdowns = document.getElementsByClassName("first-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }