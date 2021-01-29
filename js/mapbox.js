//pk.eyJ1IjoibGltYmVydHNhbnRhbmRlciIsImEiOiJja2tpbHkxZDQwaWZyMndwN2o3dnFncnllIn0.czzt7GlhmQ07Uor-xZz2OA


mapboxgl.accessToken = 'pk.eyJ1IjoibGltYmVydHNhbnRhbmRlciIsImEiOiJja2tpbHkxZDQwaWZyMndwN2o3dnFncnllIn0.czzt7GlhmQ07Uor-xZz2OA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-80.09481,-0.696466],
zoom: 15
});
 
var marker = new mapboxgl.Marker()
.setLngLat([ -80.09481,-0.696466])
.addTo(map);