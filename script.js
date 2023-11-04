function hamburgerMenu() {
    var menu = document.getElementById("hamburger-content");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

  function aspekAnimation1() {
    var animation = document.getElementById("aspek-dropdown1");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function aspekAnimation2() {
    var animation = document.getElementById("aspek-dropdown2");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function aspekAnimation3() {
    var animation = document.getElementById("aspek-dropdown3");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation1() {
    var animation = document.getElementById("jenis-dropdown1");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation2() {
    var animation = document.getElementById("jenis-dropdown2");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation3() {
    var animation = document.getElementById("jenis-dropdown3");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation4() {
    var animation = document.getElementById("jenis-dropdown4");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation5() {
    var animation = document.getElementById("jenis-dropdown5");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation6() {
    var animation = document.getElementById("jenis-dropdown6");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }
  function jenisAnimation7() {
    var animation = document.getElementById("jenis-dropdown7");
    if(animation.style.transform === "none") {
      animation.style.transform = "rotate(-90deg)";
    } else {
      animation.style.transform = "none";
    }
  }

  function aspekDisplay1() {
    var display = document.getElementById("aspek-biologi-caption");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }
  function aspekDisplay2() {
    var display = document.getElementById("aspek-fisika-caption");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }

  function aspekDisplay3() {
    var display = document.getElementById("aspek-kimia-caption");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }

  function jenisDisplay1() {
    var display = document.getElementById("jenispenelitian-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }

  function jenisDisplay2() {
    var display = document.getElementById("waktupenelitian-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }

  function jenisDisplay3() {
    var display = document.getElementById("prosedur-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }
  function jenisDisplay4() {
    var display = document.getElementById("variabelpenelitian-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }
  function jenisDisplay5() {
    var display = document.getElementById("teknikpengumpulan-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }
  function jenisDisplay6() {
    var display = document.getElementById("instrumenpenelitian-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  }
  function jenisDisplay7() {
    var display = document.getElementById("analisisdata-p");
    if(display.style.display === "none") {
      display.style.display = "block";
    } else {
      display.style.display = "none";
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

  function bab5Dropdown() {
    var menu1 = document.getElementById("bab5-dropdown1");
    var menu2 = document.getElementById("bab5-dropdown2");
    if (menu1.style.display === "flex") {
      menu1.style.display = "none";
      menu2.style.display = "none";
    } else {
      menu1.style.display = "flex";
      menu2.style.display = "flex";
    }
  }

  function firstDropdown() {
    document.getElementById("nav-first-dropdown").classList.toggle("show");
  }

  function fourthDropdown() {
    document.getElementById("nav-fourth-dropdown").classList.toggle("show");
  }

  
  window.onclick = function(event) {
    if (!event.target.matches('.first-dropbtn')) {
    var myDropdown = document.getElementById("nav-first-dropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
    if (!event.target.matches('.fourth-dropbtn')) {
      var myDropdown = document.getElementById("nav-fourth-dropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
  }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lampiran-showcase");
  let dots = document.getElementsByClassName("lampiran-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}