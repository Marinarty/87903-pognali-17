var filterBtns = document.querySelectorAll('.country-filter__btn');
var filter = document.querySelector('.country-filter__container');
var letterButtons = document.querySelectorAll('.country-filter__letter-btn');
var countryGroups = document.querySelectorAll('.country-filter__letters');
var groupButtons = document.querySelectorAll('.continents-list input');

filter.classListe.remove('country-filter__container--open');
filterBtns[1].classList.remove('country-filter__btn--hidden');

groupButtons.forEach(function(item, index) {
  item.onchange = function() {
    countryGroups.forEach(function(group) {
      group.classList.remove('country-filter__letters--open');
    })
    countryGroups[index].classList.add('country-filter__letters--open');
  }
});

for (var i = 0; i < filterBtns.length; i++ ) {
  filterBtns[i].onclick = function() {
  filter.classList.toggle('country-filter__container--open')
  }
}

letterButtons.forEach(function(button) {
  button.onclick = function() {
    document.getElementsByClassName('country-filter__letters--open');
    letterButtons.forEach(function(item) {
      item.parentNode.classList.remove('country-filter__item--current')
    });
    button.parentNode.classList.add('country-filter__item--current');
    if (window.matchMedia('(max-width: 766px)').matches) {
      document.querySelector('.country-filter__letters--open').style.marginBottom = (button.parentNode.querySelector('.country-filter__list').offsetHeight + 20) + 'px';
    }
  }
});

if (window.matchMedia('(min-width: 1439px)').matches) {
  letterButtons.forEach(function(button) {
    button.onclick = function(evt) {
      evt.preventDefault();
    }
  })
};
