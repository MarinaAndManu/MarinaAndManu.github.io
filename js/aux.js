/**
 * Clone a copy of the object passed as parameter using JQuery extension
 * @param  {object} o
 * @return {object} copy of the parameter object
 */
function clone(o) {
  return jQuery.extend({}, o);
}

function disableZoomHandlers(map) {
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  if (map.tap) map.tap.disable();
}

// on('click') => changeColor
function changeColor(e) {
 for (var i = 0; i < geoJson.length; i++) {
    geoJson[i].properties['marker-color'] =
      geoJson[i].properties['old-color'] || geoJson[i].properties['marker-color'];
  }
  e.layer.feature.properties['old-color'] = e.layer.feature.properties['marker-color'];
  e.layer.feature.properties['marker-color'] = '#ff8888';
}

// on('click') => centerOnMarker
function centerOnMarker(e) {
  goo = clone(e.layer.getLatLng());
  goo["lat"] += 3;
  map.panTo(goo);
}

// map button - onclick => hideQuotes
function hideQuotes() {
  $('#quotes').fadeTo(2000, 0.0, function() {
    // get focus on the map again
    $('#quotes').hide();
  });
  $('#map').fadeTo(2000, 1.0);
}

// quotes button - onclick => hideQuotes
function showQuotes() {
  $('#quotes').fadeTo(2000, 1.0);
  $('#map').fadeTo(2000, 0.3);
}

// on('layeradd') => addImages
function addImages(e) {
  var marker = e.layer;
  var feature = marker.feature;
  var images = feature.properties.images
  var slideshowContent = '';

  for(var i = 0; i < images.length; i++) {
    var img = images[i];
    slideshowContent +=
      '<div class="image' + (i === 0 ? ' active' : '') + '">' +
        '<img src="' + img[0] + '" />' +
        '<div class="caption">' +
          img[1] +
        '</div>' +
      '</div>';
  }

  var popupContent =
    '<div id="' + feature.properties.id + '" class="popup">' +
      '<h2>' + feature.properties.title + '</h2>' +
      '<div class="slideshow">' +
        slideshowContent +
      '</div>' +
      '<div class="cycle">' +
        '<a href="#" class="prev">&laquo;</a>' +
        '<a href="#" class="next">&raquo;</a>' +
      '</div>'
    '</div>';

  var popUpOpt = {closeButton: false, minWidth: 320};
  marker.bindPopup(popupContent, popUpOpt);
}

// on('ready') => addLines
function addLines() {
  var polyline = newLine();
  polyline.addTo(map);
  myLayer.eachLayer(function(l) {
    if (mustDraw(l.feature.properties)) {
      polyline.addLatLng(l.getLatLng());
    }
  });
}

function newLine() {
  var lineOpt = {weight: 5, color: "#fff", opacity: 0.7, clickable: false};
  return L.polyline([], lineOpt);
}

// draw a line between large markers only
function mustDraw(properties) {
  return properties["marker-size"] == "large";
}

// on('click') => createPopUpHTML
function createPopUpHTML() {
  var $slideshow = $('.slideshow'),
      $newSlide;
  if ($(this).hasClass('prev')) {
    $newSlide = $slideshow.find('.active').prev();
    if ($newSlide.index() < 0) {
      $newSlide = $('.image').last();
    }
  } else {
    $newSlide = $slideshow.find('.active').next();
    if ($newSlide.index() < 0) {
      $newSlide = $('.image').first();
    }
  }
  $slideshow.find('.active').removeClass('active').hide();
  $newSlide.addClass('active').show();
  return false;
}
