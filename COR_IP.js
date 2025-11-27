async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Геолокация не поддерживается");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            pos => resolve({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            }),
            er => reject("Доступ к геолокации запрещён")
        );
    });
}

async function getCountryByCoords(lat, lon) {
    const API_KEY = "YOUR_API_KEY";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}&language=ru`;

    const res = await fetch(url);
    const data = await res.json();

    const countryCode = data.results[0].components.country_code.toUpperCase();
    const city = data.results[0].components.city || data.results[0].components.town || "";

    return { countryCode, city };
}

const locationTitle = document.getElementById("locationTitle");
const newsContainer = document.getElementById("newsContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const refreshBtn = document.getElementById("refreshLocation");

async function loadNews(region = "DEFAULT") {
    const response = await fetch("data/news.json");
    const data = await response.json();

    const news = data[region] || data["DEFAULT"];
    newsContainer.innerHTML = "";

    news.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}">Читать полностью</a>
        `;
        newsContainer.appendChild(card);
    });
}

async function init() {
    loading.classList.remove("hidden");

    try {
        const { lat, lon } = await getUserLocation();
        const { countryCode, city } = await getCountryByCoords(lat, lon);

        locationTitle.textContent = `Новости для: ${city || countryCode}`;
        await loadNews(countryCode);

    } catch (e) {
        locationTitle.textContent = "Новости со всего мира";
        await loadNews("DEFAULT");
    }

    loading.classList.add("hidden");
}

refreshBtn.addEventListener("click", init);

init();