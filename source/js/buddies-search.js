var searchbtns = document.querySelectorAll('.buddies-search__filter-btn');

searchbtns.forEach(function(button) {
  button.onclick = function(){
    button.classList.toggle('buddies-search__filter-btn--swipe');
  }
})
