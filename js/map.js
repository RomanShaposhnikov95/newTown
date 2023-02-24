let coord1 = 56.8600878
let coord2 = 22.3018172

let greenIcon = L.icon({
    iconUrl: 'assets/img/icons/ic-map-pin.svg',
    iconSize:     [38, 48],
    iconAnchor:   [22, 94],
    popupAnchor:  [230, 100]
});

let blueIcon = L.icon({
    iconUrl: 'assets/img/icons/ic-map-pin-check.svg',
    iconSize:     [38, 48],
    iconAnchor:   [22, 94],
    popupAnchor:  [230, 100]
});


let map = L.map('map').setView([coord1, coord2], 7);
//
// L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
//     maxZoom: 20,
// }).addTo(map);

// L.tileLayer(
//     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18
// }).addTo(map);


// L.tileLayer(
//     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         minZoom: 7,
//     }).addTo(map);


L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);







let marker = L.marker([coord1, coord2], {icon: greenIcon}).addTo(map);

let marker2 = L.marker([56.1700878, 22.8018172], {icon: greenIcon}).addTo(map);


const modal = `
 <div class="map-modal-content">
    <img src="assets/img/slides/rimi.jpg" alt="">

    <div class="map-modal-content-data">
        <h5 class="title-s">RIMI veikalā</h5>
        <p class="descr-s">A.Deglava 110, Rīga, LV-1082</p>

        <div class="map-modal-content-data-worktime">
            <p class="descr-s">Mūsu darba laiks:</p>
            <p class="time">Darba dienās: <span>09.00 - 20.00</span></p>
            <p class="time">Se., Sv.: <span>09.00 - 18.00</span></p>
        </div>
    </div>
</div>
`

map.eachLayer(function (layer) {
    layer.bindPopup(modal)

    layer.on('popupopen', function (e) {
        e.target.setIcon(blueIcon)
    });

    layer.on('popupclose', function (e) {
        e.target.setIcon(greenIcon)
    });

});

const tile = document.querySelector(".leaflet-tile-pane")
//
// const overlay1 = document.createElement("div")
// overlay1.classList.add("ov")
// overlay1.classList.add("ove1")
//
// const overlay2 = document.createElement("div")
// overlay2.classList.add("ov")
// overlay2.classList.add("ove2")
//
//
// tile.appendChild(overlay1)
// tile.appendChild(overlay2)




map.doubleClickZoom.disable();
map.scrollWheelZoom.disable()

