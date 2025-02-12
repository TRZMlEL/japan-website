const main = document.querySelector("main");
const japonia = document.querySelector("#japonia");
const galleryContainer = document.querySelector(".gallery-container");
let isDown = false;
let startX, scrollLeft;

const scrollToTop = () => {
    main.scrollTo({ top: 0, behavior: "smooth" });
};

if (["/index.html", "/", "/japan-website/index.html", "/japan-website/"].includes(window.location.pathname)) {
    main.style.overflowY = "hidden";
    if (window.innerWidth > 1000) {
        main.style.marginLeft = "calc(15% + 0.3rem)";
    } else {
        main.style.paddingLeft = "0.3rem";
    }

    japonia.addEventListener("animationend", () => {
        japonia.style.position = "relative";
        main.style.overflowY = "scroll";
        if (window.innerWidth > 1000) {
            main.style.marginLeft = "15%";
        } else {
            main.style.paddingLeft = "0";
        }
    });
}

document.querySelectorAll("area").forEach((area) => {
    area.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = area.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

galleryContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - galleryContainer.offsetLeft;
    scrollLeft = galleryContainer.scrollLeft;
    galleryContainer.style.cursor = "grabbing";
});

galleryContainer.addEventListener("mouseleave", () => {
    isDown = false;
    galleryContainer.style.cursor = "grab";
});

galleryContainer.addEventListener("mouseup", () => {
    isDown = false;
    galleryContainer.style.cursor = "grab";
});

galleryContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galleryContainer.offsetLeft;
    const walk = (x - startX) * 2;
    galleryContainer.scrollLeft = scrollLeft - walk;
});

const openLightbox = (img) => {
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
};

const closeLightbox = () => {
    document.querySelector(".lightbox").style.display = "none";
};