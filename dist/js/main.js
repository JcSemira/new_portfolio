



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial state of the menu

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set the menu state
    showMenu = false;
  }
}

window.onload = function() {
  Particles.init({
    selector: ".background",
    maxParticles: 250,
    color: "#ffffff",
    sizeVariations: 4,
    minDistance: 100,
    connectParticles: true,
    "opacity":{
      value: 0.5,
      random: false,
      "anim":{
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    
    "interactivity":{
      detect_on:"canvas",
      "events":{
        "onhover":{
          enable: false,
          mode: "repulse"
        },
        "onclick":{
          enable: true,
          mode: "push"
        },
        resize: true
      },
      "repulse": {
        distace: 400,
        duration: 0.4
      },
      "push": {
        particles_nb: 4
      },
      "remove": {
        particles_nb:2
      },
      retina_detect: true
    },
    responsive: [
      {
        breakpoint: 1170,
        maxParticles: 100,
        connectParticles: true
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 90,
          connectParticles: true
        }
      },
      {
        breakpoint: 500,
        options: {
          maxParticles: 100,
          connectParticles: true
        }
      },
    ]
  });
  var loader = document.getElementsByClassName('preload');
  setTimeout(() => {document.getElementById('preload1').classList.add('loaded');}, 3000);
};

