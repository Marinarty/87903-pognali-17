var menuBtn = document.querySelector('.header__menu-btn');
var header = document.querySelector('header');

menuBtn.onclick = function() {
  header.classList.toggle('header--menu-open')
}
