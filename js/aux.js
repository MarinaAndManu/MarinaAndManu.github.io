function disableZoomHandlers(map) {
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  if (map.tap) map.tap.disable();
}

//TODO
function resetColors() {
    for (var i = 0; i < geoJson.length; i++) {
        geoJson[i].properties['marker-color'] =
            geoJson[i].properties['old-color'] || geoJson[i].properties['marker-color'];
    }
    myLayer.setGeoJSON(geoJson);
}

function clone(o) {
  return jQuery.extend({}, o);
}
