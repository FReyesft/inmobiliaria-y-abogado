const buttonNav01 = document.querySelector('.showMenu01');
const buttonNav02 = document.querySelector('.showMenu02');
const menuFloatInmobiliaria = document.querySelector('.nav__menu--float--inmobiliaria');
const menuFloatAbogado = document.querySelector('.nav__menu--float--abogado');

const navMenu = document.querySelector('#nav__menu--mobile');
const navMenuShow = document.querySelector('#nav__menu--mobile--open');


buttonNav01.addEventListener('click', () => {
    menuFloatInmobiliaria.classList.toggle('activo');
    if (menuFloatInmobiliaria.classList.contains('activo')) {
        menuFloatInmobiliaria.style.display = 'block';
    }
    else {
        menuFloatInmobiliaria.style.display = 'none';
    }
});

buttonNav02.addEventListener('click', () => {
    menuFloatAbogado.classList.toggle('activo');
    if (menuFloatAbogado.classList.contains('activo')) {
        menuFloatAbogado.style.display = 'block';
    }
    else {
        menuFloatAbogado.style.display = 'none';
    }
});

const imagesWallpapers = [
    './assets/img-section.jpg',
    './assets/img-section02.jpg',
]

function changeWallpaper() {
    let i = 0;
    setInterval(function () {
      document.slider01.src = imagesWallpapers[i];
      i++;
      if (i === imagesWallpapers.length) {
        i = 0;
      }
    }, 7000);
  }
  changeWallpaper();

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        navMenuShow.style.display = 'block';
    }
    else {
        navMenuShow.style.display = 'none';
    }
})



