document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.querySelector('.cart-icon');
  const cartWindow = document.querySelector('.cart-window');

  cartIcon.addEventListener('click', function() {
    cartWindow.classList.toggle('hide');
  });
});



