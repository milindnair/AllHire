let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function () {
    var getStartedBtn = document.getElementById('getStartedBtn');

    getStartedBtn.addEventListener('click', function () {
      var loggedInUser = sessionStorage.getItem('username');

      if (loggedInUser === null) {
        // Redirect to login page
        window.location.href = './Login/html/login.html';
      } else {
        // Redirect to portal
        window.location.href = './Portal/html/portal.html';
      }
    });
  });

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
  