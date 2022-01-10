/*
-----------SECTION DOM & EVENT -----------
*/
const heroBlock = document.querySelector('.hero');
const welcomeMessage = document.querySelector('.primary-text');

heroBlock.addEventListener(
  'click',
  () => (welcomeMessage.textContent = 'Have a Good Time!')
);

const nav = document.querySelector('.nav');
const iconMenuOpen = document.querySelector('.icon--menu--open');
const iconMenuClose = document.querySelector('.icon--menu--close');
const navList = document.querySelector('.nav__list');
iconMenuOpen.addEventListener('click', () => nav.classList.add('open-menu'));
iconMenuClose.addEventListener('click', () =>
  nav.classList.remove('open-menu')
);

const buttonCTA = document.querySelector('.btn-cta');
const productContainerSub = document.querySelector('.product__container--sub');
let ctaClicked = false;
buttonCTA.addEventListener('click', () => {
  if (ctaClicked) {
    ctaClicked = !ctaClicked;
    productContainerSub.style.display = 'none';
    return;
  }
  ctaClicked = !ctaClicked;
  productContainerSub.style.display = 'grid';
});
/*
-----------SECTION tesing -----------
*/
const max = require('./assignment-1.js');
const { calculate, calculateAnother } = require('./assignment-2.js');
const { dataAssignment, avg } = require('./assignment-3.js');

max([1, 4, 6, 2]);
calculate({ op: '+', n1: 1, n2: 2 });
calculateAnother({ op: '+', n1: 1, n2: 2 });
avg(dataAssignment);
