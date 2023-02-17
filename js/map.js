let coord1 = 56.8600878
let coord2 = 22.3018172

let greenIcon = L.icon({
    iconUrl: 'assets/img/icons/ic-map-pin.svg',
    iconSize:     [38, 48],
    iconAnchor:   [22, 94],
    popupAnchor:  [230, 100]
});


let map = L.map('map').setView([coord1, coord2], 7);

// L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
//     maxZoom: 20,
// }).addTo(map);

// L.tileLayer(
//     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18
// }).addTo(map);


L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);



let marker = L.marker([coord1, coord2], {icon: greenIcon}).addTo(map);

let marker2 = L.marker([56.1700878, 22.8018172], {icon: greenIcon}).addTo(map);


const modal = `
 <div class="map-modal-content">
    <img src="assets/img/all/1.png" alt="">

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
    console.log(layer._icon)

    layer.bindPopup(modal)
});




