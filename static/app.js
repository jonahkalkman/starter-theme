import "./sass/main.scss";
const Menu = () => {
  const menuButton = document.querySelector('.header__menu-mobile');
  const closeButton = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu__wrapper');
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu__wrapper--active');
    document.body.classList.add('fixed');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu__wrapper--active');
    document.body.classList.remove('fixed');
  });

  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('mobile-menu__wrapper--active');
      document.body.classList.remove('fixed');
      location.hash = link.attributes.href.value;
    })
  });
};
Menu();

const fadeIn = () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in--active")
      }
    })
  }

  const options = {}

  const myObserver = new IntersectionObserver(callback, options)

  fadeElements.forEach(elem => {
    myObserver.observe(elem)
  })
}
fadeIn();


const projects = () => {
  const projectButtons = document.querySelectorAll('.projects__open-button');
  projectButtons.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('active');
      item.parentElement.classList.add('active')
    })
  })
}

projects();