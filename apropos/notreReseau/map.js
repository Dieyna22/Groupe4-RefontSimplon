// Création de la carte Leaflet
var map = L.map('map').setView([0, 0], 2);

// Ajout de la couche de tuiles OpenStreetMap à la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Groupe de calques pour les marqueurs
var markers = L.layerGroup().addTo(map);

// Données des marqueurs pour chaque région
var markersData = {
  "France": [[48.8566,2.3522, "Simplon France"], [48.10458206185608, -1.6659135934477898, "Simplon Rennes"], [45.78527331901204, 3.0942459894081686, "Simplon Clermont-Ferrand"], [48.10458206185608, -1.6659135934477898, "Simplon Rennes"], [47.23249076240569, -1.5644176535148069, "Simplon  Nantes"]],
  "Belgique": [[50.6402809,4.6667145, "Simplon Belgique"]],
  "Espagne": [[39.3260685,-4.8379791, "Simplon Espagne"]],
  "Sénégal": [[14.693425,-17.447938, "Simplon Dakar"]],
  "Roumanie": [[45.9852129,24.6859225, "Simplon Roumanie"]],
  "Maroc": [[31.1728205,-7.3362482, "Simplon Maroc"]],
  "Gabon": [[-0.8999695,11.6899699, "Simplon Gabon"]]
};

// Fonction pour changer la carte et afficher les marqueurs
function changeMap() {
  var selectedOption = document.getElementById('region').value;
  var [lat, lon, zoom, name] = selectedOption.split(',');

  // Définir la vue de la carte en fonction de la région sélectionnée
  map.setView([lat, lon], zoom);
  markers.clearLayers();
  
  if (markersData[name]) {
    // Ajouter les marqueurs correspondants à la carte
    markersData[name].forEach(function (markerInfo) {
      var [markerLat, markerLon, markerName] = markerInfo;
      L.marker([markerLat, markerLon]).addTo(markers).bindPopup(markerName).openPopup();
    });
  }
}

// Chargement initial de la carte
changeMap();
