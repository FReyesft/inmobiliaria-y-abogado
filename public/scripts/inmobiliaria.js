const buttonNav01 = document.querySelector('.showMenu01');
const buttonNav02 = document.querySelector('.showMenu02');
const menuFloatInmobiliaria = document.querySelector('.nav__menu--float--inmobiliaria');
const menuFloatAbogado = document.querySelector('.nav__menu--float--abogado');

const navMenu = document.querySelector('#nav__menu--mobile');
const navMenuShow = document.querySelector('#nav__menu--mobile--open');

const body = document.querySelector('body');
const buttonsContact01 = document.querySelector('.button01');
const buttonsContact02 = document.querySelector('.button02');
const buttonsContact03 = document.querySelector('.button03');
const form = document.querySelector('.section__container--form');
const closeForm = document.querySelector('.fa-xmark');
function showOverlay() {
    form.classList.toggle('show');
    if (form.classList.contains('show')) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}
closeForm.addEventListener('click', showOverlay);
buttonsContact01.addEventListener('click', showOverlay);
buttonsContact02.addEventListener('click', showOverlay);
buttonsContact03.addEventListener('click', showOverlay);

function sendMessage() {
    let name = document.querySelector(".name").value;
    let lastName = document.querySelector(".last-name").value;
    let message = document.querySelector(".input-message").value;
    let strigToSend = `Tema: Inmobiliaria ${name} ${lastName} ${message}`;
    document.querySelector(".float01").href = `https://api.whatsapp.com/send?phone=+1 3124147546&text=${strigToSend}`;
}

const inputSend = document.querySelector(".form__send");

inputSend.addEventListener('click', sendMessage);

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

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        navMenuShow.style.display = 'block';
    }
    else {
        navMenuShow.style.display = 'none';
    }
})