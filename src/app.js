import { coffeeShops } from './coffeeshops.js';
let map;
let markers = [];
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");
    const torontoCenter = { lat: 43.6532, lng: -79.3832 };
    map = new Map(document.getElementById("map"), {
        zoom: 13,
        center: torontoCenter,
        mapId: "TORONTO_COFFEE_MAP"
    });
    renderShopList();
    renderMarkers(Marker);
}
window.initMap = initMap;
function renderMarkers(MarkerClass) {
    coffeeShops.forEach((shop) => {
        const marker = new MarkerClass({
            position: { lat: shop.lat, lng: shop.lng },
            map: map,
            title: shop.name,
        });
        const infoContent = `
      <div style="max-width: 200px; font-family: sans-serif;">
        <h3 style="margin: 0 0 8px 0;">${shop.name}</h3>
        <p style="margin: 0 0 4px 0;"><strong>Location:</strong> ${shop.intersection}</p>
        <p style="margin: 0 0 4px 0;"><strong>Wi-Fi:</strong> ${shop.wifi ? 'Yes' : 'No'}</p>
        <p style="margin: 0;">${shop.notes}</p>
      </div>
    `;
        const infoWindow = new google.maps.InfoWindow({
            content: infoContent,
        });
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
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
            map.setCenter({ lat: shop.lat, lng: shop.lng });
            map.setZoom(16);
            const marker = markers[index];
            if (marker) {
                google.maps.event.trigger(marker, "click");
            }
        });
        listContainer.appendChild(div);
    });
}
//# sourceMappingURL=app.js.map