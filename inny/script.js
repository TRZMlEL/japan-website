var redDot = document.querySelector("#redDot")
var main = document.querySelector("main")
var nav = document.querySelector("nav")

index = () => {
    window.location.href = "./index.html"
}

transition = (id) => {
    redDot.classList.remove("onLoad");
    main.classList.remove("transitionInMain");
    void redDot.offsetWidth; // Reset animacji (hack)
    void main.offsetWidth;
    redDot.classList.add("reverseAnimation");
    main.classList.add("transitionOut");
    document.querySelector(".selected").classList.remove("selected")
    console.dir()
    document.querySelector(`#${id}`).classList.add("selected");
    if(id === "gospodarka"){
        nav.style.top = "43%"
    } else if(id === "turystyka"){
        nav.style.top = "38%"
        loadTemplate('templateTurystyka')
        main.classList.remove('transitionOut')
        void main.offsetWidth;
        main.classList.add("transitionInMain");
        main.style.width = "75%"
        main.style.color = 'white'
        setTimeout(initMap, 100);
    } else if(id === "kuchnia"){
        nav.style.top = "33%"
    } else if(id === "jezyk"){
        nav.style.top = "28%"
    }
    
}

function loadTemplate(templateId) {
    const template = document.getElementById(templateId);
    if (template) {
        main.innerHTML = template.innerHTML;
    }
}

// Funkcja do inicjalizacji mapy – uruchamiana po załadowaniu sekcji Turystyka
function initMap() {
        // Inicjalizacja mapy z ustawieniem na Japonię
        var map = L.map('map').setView([36.2048, 138.2529], 5);

        // Dodanie warstwy z OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Informacje o miejscach
        var locations = [
            {
                name: "Tokio",
                lat: 35.6762,
                lon: 139.6503,
                description: "Tokio – stolica Japonii, znana z nowoczesnych technologii, kultury pop i tradycyjnych świątyń."
            },
            {
                name: "Kioto",
                lat: 35.0116,
                lon: 135.7681,
                description: "Kioto – znane z wielu buddyjskich świątyń, tradycyjnych ogrodów i zabytków kultury japońskiej."
            },
            {
                name: "Osaka",
                lat: 34.6937,
                lon: 135.5022,
                description: "Osaka – miasto znane z zabytków, kuchni (np. takoyaki) oraz nowoczesnych wieżowców."
            }
        ];

        // Dodanie znaczników na mapie
        locations.forEach(function(location) {
            var marker = L.marker([location.lat, location.lon]).addTo(map);
            marker.bindPopup("<b>" + location.name + "</b><br>" + location.description);
        });
}

// Domyślnie ładujemy stronę główną
loadTemplate('templateStronaGlowna');