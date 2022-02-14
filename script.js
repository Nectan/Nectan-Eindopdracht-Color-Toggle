
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');


const toggleHamburger = () => {
  navbar.classList.toggle('showNav');
  hamburger.classList.toggle('close');
};

hamburger.addEventListener('mouseover', toggleHamburger);


const body = document.body;
const text = document.getElementById('colorText');
const changeColorsByClicking = function () {
  text.innerText = `Kleur ${this.innerText}`;
  body.classList.remove('grey', 'red', 'blue', 'gold', 'green');
  body.classList.add(this.id);
};

const changeColorsByNumbers = function (addColor, addClass) {
  body.classList.remove('grey', 'red', 'blue', 'gold', 'green');
  text.innerText = `Kleur ${addColor}`;
  body.classList.add(addClass);
};

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleHamburger);
  menuLink.addEventListener('keydown', changeColorsByClicking);
});


const idToClass = document.querySelectorAll('.menuLink').forEach((button) => {
  button.addEventListener('click', changeColorsByClicking);
});

const changeClassName = () => {
  body.className.add('idToClass');
};

