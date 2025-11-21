function getLocation() {
    const output = document.getElementById("output");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude;
                const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

                output.innerHTML = `
                    <strong>Ваши координаты:</strong><br>
                    Широта: ${lat.toFixed(5)}<br>
                    Долгота: ${lon.toFixed(5)}<br><br>
                    <a href="${mapsLink}" target="_blank">Открыть в Google Картах</a>
                `;
            },
            () => {
                output.textContent = "Не удалось получить координаты";
            }
        );
    }
    else {
        output.textContent = "Геолокачия не поддерживается вашим браузером";
    }
}
