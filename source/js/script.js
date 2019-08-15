var menuBtn = document.querySelector('.header__menu-btn');
var header = document.querySelector('header');
var filterBtn = document.querySelector('.country-filter__btn');
var filter = document.querySelector('.country-filter__container');

menuBtn.onclick = function() {
  header.classList.toggle('header--menu-open')
}

filterBtn.onclick = function() {
  filter.classList.toggle('country-filter__container--open')
}


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
