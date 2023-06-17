/* ========= toggle icon nvabar =============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuIconInitialRight = window.innerWidth <= 768 ? 1 : null;

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/* ========= scroll sections glow =============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  /* ========= sticky navbar =============*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

  /* ========= remove toggle icon navbar when click navbar =============*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

  /* ========= scroll reveal=============*/
  ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });


  ScrollReveal().reveal('.home-contect, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .repair-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });

    /* ========= multi text show =============*/

    const typed = new Typed('.multi-text', {
      strings: ['فهمها', 'دراستها', 'احترافها'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    })