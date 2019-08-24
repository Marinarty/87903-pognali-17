var menuBtn = document.querySelector('.header__menu-btn');
var header = document.querySelector('header');

header.classList.remove('header--menu-open');
menuBtn.classList.remove('header__menu-btn--hidden');

menuBtn.onclick = function() {
  header.classList.toggle('header--menu-open')
}
