document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementsByClassName('signUpButton')[0];
    var transitionOverlay = document.querySelector('.transition-overlay');
  
    loginButton.addEventListener('click', function() {
      transitionOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(function() {
        window.location.href = '../../SignUp/html/signUp.html';
      }, 500);
    });
 
    var LoginButton = document.getElementById('LoginButton');
  
    LoginButton.addEventListener('click', function () {
        event.preventDefault();
        console.log('LoginButton clicked!');
      var email = document.getElementById('email').value;
      var password = document.getElementById('inputPassword5').value;

      console.log('email: ' + email);
      console.log('password: ' + password);
  
      var storedUsername = sessionStorage.getItem('email');
      var storedPassword = sessionStorage.getItem('password');

        console.log('storedUsername: ' + storedUsername);
        console.log('storedPassword: ' + storedPassword);
  
        if (email === storedUsername && password === storedPassword) {
            // Redirect to portal
            alert('Login successful!');
            window.location.href = '../../Portal/html/portal.html';
          } 
           else {
        // Show alert if username doesn't exist or password doesn't match
        alert('Invalid username or password');
      }
    });
});
  
  
  