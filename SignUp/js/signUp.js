document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementsByClassName('loginButton')[0];
    var transitionOverlay = document.querySelector('.transition-overlay');
  
    loginButton.addEventListener('click', function() {
      transitionOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(function() {
        window.location.href = '../../Login/html/login.html';
      }, 500);
    });
  });
  
  