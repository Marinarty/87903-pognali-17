var menuBtn = document.querySelector('.header__menu-btn');
var header = document.querySelector('header');
var filterBtns = document.querySelectorAll('.country-filter__btn');
var filter = document.querySelector('.country-filter__container');
var searchbtns = document.querySelectorAll('.buddies-search__filter-btn');
var letterButtons = document.querySelectorAll('.country-filter__letter-btn');
var lettersContainer = document.querySelector('.country-filter__letters');
var chooseCountry = document.querySelector('.choose-country');
var countrySelect = document.querySelector('.countries-select__item--empty .countries-select__choose-country');
var chooseCountryClose = document.querySelector('.choose-country__close');

countrySelect.onclick = function() {
  chooseCountry.classList.add('choose-country--open')
}

chooseCountryClose.onclick = function() {
  chooseCountry.classList.remove('choose-country--open')
}

menuBtn.onclick = function() {
  header.classList.toggle('header--menu-open')
}

for (var i = 0; i < filterBtns.length; i++ ) {
  filterBtns[i].onclick = function() {
  filter.classList.toggle('country-filter__container--open')
  }
}

letterButtons.forEach(function(button) {
  button.onclick = function() {
    letterButtons.forEach(function(item) {
      item.parentNode.classList.remove('country-filter__item--current')
    });
    button.parentNode.classList.add('country-filter__item--current');
    lettersContainer.style.marginBottom = (button.parentNode.querySelector('.country-filter__list').offsetHeight + 20) + 'px';
  }
});

searchbtns.forEach(function(button) {
  button.onclick = function(){
    button.classList.toggle('buddies-search__filter-btn--swipe');
  }
})

document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init);
  var map;
  function init() {
      map = new ymaps.Map("map", {
          center: [59.9377383,30.3225968],
          zoom: 15,
          controls: []
      });
      var placemark = new ymaps.Placemark([59.9377383,30.3225968], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-marker.svg",
          iconImageSize: [40, 40]
      });
      map.geoObjects.add(placemark);
  }
});
