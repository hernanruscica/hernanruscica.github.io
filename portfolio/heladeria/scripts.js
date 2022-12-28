const menuBtn = document.getElementById("menu-btn");
const navMobile = document.getElementById("nav-mobile");

menuBtn.addEventListener("click", function() {
	navMobile.classList.toggle("open");
});

const navLinks = document.querySelectorAll('.ben-header__nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Oculta el navbar
    navMobile.classList.remove('open');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  