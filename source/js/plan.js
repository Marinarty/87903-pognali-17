var planOpen = document.querySelector('.add-profile__button');
var planModal = document.querySelector('.plan');
var planClose = document.querySelector('.plan__close');

planOpen.onclick = function() {
  planModal.classList.add('plan--open')
}

planClose.onclick = function() {
  planModal.classList.remove('plan--open')
}
