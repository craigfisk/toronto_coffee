import { coffeeShops } from './coffeeshops.js';
let map;
let markers = [];
function initMap() {
    const torontoCenter = [43.6532, -79.3832];
    map = L.map('map').setView(torontoCenter, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    renderMarkers();
    renderShopList();
}
function renderMarkers() {
    coffeeShops.forEach((shop) => {
        const marker = L.marker([shop.lat, shop.lng], { title: shop.name }).addTo(map);
        const infoContent = `
      <div style="max-width: 200px; font-family: sans-serif;">
        <h3 style="margin: 0 0 8px 0;">${shop.name}</h3>
        <p style="margin: 0 0 4px 0;"><strong>Location:</strong> ${shop.intersection}</p>
        <p style="margin: 0 0 4px 0;"><strong>Wi-Fi:</strong> ${shop.wifi ? 'Yes' : 'No'}</p>
        <p style="margin: 0;">${shop.notes}</p>
      </div>
    `;
        marker.bindPopup(infoContent);
        markers.push(marker);
    });
}
function renderShopList() {
    const listContainer = document.getElementById("shop-list");
    if (!listContainer)
        return;
    coffeeShops.forEach((shop, index) => {
        const div = document.createElement("div");
        div.className = "shop-item";
        div.style.cssText = "padding: 8px; border-bottom: 1px solid #eee; cursor: pointer;";
        div.innerHTML = `
      <div style="font-weight: bold;">${shop.name}</div>
      <div style="font-size: 0.9em; color: #555;">${shop.intersection}</div>
    `;
        div.addEventListener("click", () => {
            map.setView([shop.lat, shop.lng], 16);
            const marker = markers[index];
            if (marker) {
                marker.openPopup();
            }
        });
        listContainer.appendChild(div);
    });
}
// Initialize map on document load
document.addEventListener('DOMContentLoaded', initMap);
//# sourceMappingURL=app.js.map