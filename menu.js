
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menuWindow = document.querySelector('.menu-window');

  menuIcon.addEventListener('click', function() {
    menuWindow.classList.toggle('hide');
  });
});

