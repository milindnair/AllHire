document.addEventListener('DOMContentLoaded', function () {
  var loginButton = document.querySelector('.loginButton');
  var signInButton = document.getElementById('signInButton');
  var transitionOverlay = document.querySelector('.transition-overlay');

  loginButton.addEventListener('click', function () {
    transitionOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      window.location.href = '../../Login/html/login.html';
    }, 500);
  });

  signInButton.addEventListener('click', function () {
    event.preventDefault();
    var organisationName = document.getElementById('organisationName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('inputPassword5').value;

    // Store the credentials in sessionStorage
    sessionStorage.setItem('organisationName', organisationName);
    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    alert('Account created successfully!');
    // Redirect to the desired page (e.g., login.html)
    window.location.href = '../../Login/html/login.html';
  });
});
