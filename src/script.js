const menubar = document.getElementById('menubar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (menubar) {
    menubar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

// Main
var navBar = document.getElementById("navbar");
window.onscroll = function() {
    if(window.scrollY > 30){
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
}
// Swipe script
const swiper = new Swiper('.swiper', {
    // for auto
    autoplay: {
      delay: 3000,
      disableOnInteraction:false,
    },

    loop: true,

    // page animation
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Nav arrow
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function seeform() {
  document.getElementById("box").style.display="block";
}

function close() {
  document.getElementById("box").style.display="none";
} 

function seeform2() {
  document.getElementById("box2").style.display="block";
}

function close2() {
  document.getElementById("box2").style.display="none";
}  

function seeform3() {
  document.getElementById("box3").style.display="block";
}

function close3() {
  document.getElementById("box3").style.display="none";
}

function seeform4() {
  document.getElementById("box4").style.display="block";
}

function close4() {
  document.getElementById("box4").style.display="none";
}

function seeform5() {
  document.getElementById("box5").style.display="block";
}

function close5() {
  document.getElementById("box5").style.display="none";
}

for (let i=1; i<=5; i++) {
  document.getElementById("prev");
}