



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
          maxParticles: 350,
          connectParticles: false
        }
      },
    ]
  });
  var loader = document.getElementsByClassName('preload');
  setTimeout(() => {document.getElementById('preload1').classList.add('loaded');}, 3000);
};
var mymap = L.map('mapid').setView([14.455945, 121.037672], 15);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18,
  id: 'mapbox.streets'
}).addTo(mymap);

L.marker([14.455945, 121.037672]).addTo(mymap)
  .bindPopup("<b>Dr Arcadio Santos Avenue</b><br />San Antonio, Manila, 1700 Metro Manila").openPopup();

var popup = L.popup();






