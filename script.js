const main = document.querySelector('main');

const scrollToTop = () => {
    main.scrollTo({ top: 0, behavior: 'smooth' });
}

japonia = document.querySelector('#japonia');



if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "/japan-website/index.html") {
  main.style.overflowY = 'hidden';
  main.style.marginLeft = 'calc(15% + 0.3rem)';
  japonia.addEventListener('animationend', () => {
    japonia.style.position = 'relative';
    main.style.overflowY = 'scroll';
    main.style.marginLeft = '15%';
  });
}