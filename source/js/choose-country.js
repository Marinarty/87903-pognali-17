var chooseCountry = document.querySelector('.choose-country');
var countrySelect = document.querySelector('.countries-select__item--empty .countries-select__choose-country');
var chooseCountryClose = document.querySelector('.choose-country__close');

countrySelect.onclick = function() {
  chooseCountry.classList.add('choose-country--open')
}

chooseCountryClose.onclick = function() {
  chooseCountry.classList.remove('choose-country--open')
}
