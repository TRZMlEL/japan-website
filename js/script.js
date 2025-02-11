const main = document.querySelector('main');

const scrollToTop = () => {
    main.scrollTo({ top: 0, behavior: 'smooth' });
}

japonia = document.querySelector('#japonia');



if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "/japan-website/index.html" || window.location.pathname === "/japan-website/") {
  main.style.overflowY = 'hidden';
  if (window.innerWidth > 1000) {
    main.style.marginLeft = 'calc(15% + 0.3rem)';
  }else{
    main.style.paddingLeft = '0.3rem';
  }
  
  japonia.addEventListener('animationend', () => {
    japonia.style.position = 'relative';
    main.style.overflowY = 'scroll';
    if (window.innerWidth > 1000) {
      main.style.marginLeft = '15%';
    }else{
      main.style.paddingLeft = '0';
    }
  });
}

document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
      }
  });
});