function getLocation() {
    const output = document.getElementById("output");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude;
                let mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

                if (lat >= 58 && lon <= 80){
                    fetch('COR_IP.json')
                    .then(response => response.json())
                    .then(data => {
                    const result = data['KZ'];
                    result.forEach(item => {
                    console.log("title:", item.title);
                    console.log("description:", item.description);
                    console.log("image:", item.image);
                    console.log("link:", item.link);
                    });
                    })
                    .catch(error => {
                        console.error("Ошибка загрузки JSON:", error);
                    });
                }
                else {
                    console.log(alert)
                }

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
