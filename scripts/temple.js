document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var closeIcon = document.querySelector('.close-icon');
  var menu = document.getElementById('menu');

  menuIcon.addEventListener('click', function() {
      toggleMenu();
  });

  closeIcon.addEventListener('click', function() {
      toggleMenu();
  });

  function toggleMenu() {
      menu.classList.toggle('show');
      menuIcon.classList.toggle('hide');
      closeIcon.classList.toggle('show');
  }
});
