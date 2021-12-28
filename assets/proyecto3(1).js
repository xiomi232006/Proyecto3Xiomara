// Muestra la navegacion al hacer click en el icono de menu de responsive
function displayNavigation() {
    if(menuBar.classList.contains('fa-bars')){
      menuBar.classList.remove('fa-bars');
      menuBar.classList.add('fa-times', 'nav-show');
      document.querySelector('nav').classList.remove('nav-hide');
    } else {
      menuBar.classList.remove('fa-times');
      menuBar.classList.add('fa-bars');
      document.querySelector('nav').classList.add('nav-hide');
    }
  }

  