// js/map.js
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карты
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Добавление слоя OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Кастомные иконки
    const iconSettings = {
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    };
    const customIcon = L.icon(iconSettings);

    // Данные достопримечательностей
    const attractions = [
        {
            name: "Биг Бен",
            coords: [51.5007, -0.1246],
            description: "Часовая башня высотой 96 метров",
            image: "images/big-ben.jpg"
        },
        {
            name: "Тауэрский мост",
            coords: [51.5055, -0.0754],
            description: "Разводной мост 1894 года",
            image: "images/tower-bridge.jpg"
        }
    ];

    // Добавление маркеров
    attractions.forEach(attr => {
        L.marker(attr.coords, {icon: customIcon})
            .addTo(map)
            .bindPopup(`
                <div class="popup-content">
                    <h3>${attr.name}</h3>
                    <img src="${attr.image}" alt="${attr.name}" style="width:200px; height:120px; object-fit:cover;">
                    <p>${attr.description}</p>
                </div>
            `);
    });

    // Добавление контроля масштаба
    L.control.scale({imperial: false}).addTo(map);
});