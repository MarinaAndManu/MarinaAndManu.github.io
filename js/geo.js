// geo locations (google maps & distancesfrom.com)
// -----------------------------------
const eindhoven_geo =   [5.45704580000006, 51.469834];
const utrecht_geo =     [5.10966489999998, 52.090142];
const koln_geo =        [6.95669799999996, 50.935379];
const nueremberg_geo =  [11.0742420000000, 49.447428];
const fuessen_geo =     [10.7498000000000, 47.557574];
const munchen_geo =     [11.5580066999999, 48.144835];
const salzburg_geo =    [13.0473640000000, 47.808384];
const brno_geo =        [16.6087649999999, 49.196995];
const wien_geo =        [16.3306949999999, 48.194333];
const bratislava_geo =  [17.1071372999999, 48.145892];
const karlovy_geo =     [12.8785434999999, 50.241481];
const goettingen_geo =  [9.93135469999992, 51.530963];
const kassel_geo =      [9.47974610000005, 51.312711];
const hamburg_geo =     [9.96532100000001, 53.549959];


// images (imgur signed in with twitter: @manu_tero)
// -----------------------------------
const eindhoven_1 =   ['https://i.imgur.com/HsosQaF.jpg', 'Estás muy guapa con esas flores azules'];
const eindhoven_2 =   ['https://i.imgur.com/WU6tEoM.jpg', 'Tarde de juegos en la universidad de Eindhoven'];
const utrecht_1 =     ['https://i.imgur.com/IAXsvwn.jpg', 'Comida a la orilla del canal de Utrecht'];
const koln_1 =        ['https://i.imgur.com/fVKlyrw.jpg', 'El ojo te observa'];
const koln_2 =        ['https://i.imgur.com/EeoHAGC.jpg', 'Mi prima con esa actitud tan suya de seaaah'];
const koln_3 =        ['https://i.imgur.com/QIn4gU1.jpg', 'Fer'];
const koln_4 =        ['https://i.imgur.com/3MP29sP.jpg', 'Jimena'];
const koln_5 =        ['https://i.imgur.com/82NgbcC.jpg', 'Que bien hablaba inglés el cabrón ¬.¬\''];
const koln_6 =        ['https://i.imgur.com/l4sXVat.jpg', 'Mural super alegre. Pero míralos, míralos'];
const koln_7 =        ['https://i.imgur.com/iDQ5wk6.jpg', 'La terraza de Dominich'];
const koln_8 =        ['https://i.imgur.com/C9Oi6eM.jpg', 'Noche de futbolín en el garito Underground'];
const koln_9 =        ['https://i.imgur.com/o3SJhDS.jpg', 'La mejor sangría que he tomado en mucho tiempo sin duda'];
const nueremberg_1 =  ['https://i.imgur.com/CRw06Wu.jpg', 'Esta es super tierna <3'];
const nueremberg_2 =  ['', ];

const fuessen_1 =     ['https://i.imgur.com/cjFR42a.jpg', 'the bridgue - epic'];
const fuessen_2 =     ['https://i.imgur.com/fWEXdPD.jpg', 'croquis'];
const fuessen_3 =     ['https://i.imgur.com/M43ztiq.jpg', 'the bridgue - Yiwen'];
const fuessen_4 =     ['https://i.imgur.com/6lqohY8.jpg', 'the bridgue - ¿?'];
const fuessen_5 =     ['https://i.imgur.com/b3EgST8.jpg', 'the bridgue - mym'];
const fuessen_6 =     ['https://i.imgur.com/ELn2cYa.jpg', 'incognito'];
const fuessen_7 =     ['https://i.imgur.com/MIxLj1F.jpg', 'the lake'];

const salzburg_1 =    ['https://i.imgur.com/RkKc9qB.jpg', ''];
const salzburg_2 =    ['https://i.imgur.com/u1xYjgh.jpg', 'The kiss'];
const salzburg_3 =    ['', ];

const brno_1 =        ['https://i.imgur.com/X1FfeLQ.jpg', 'what\'s this'];
const brno_2 =        ['https://i.imgur.com/4GKUNhF.jpg', 'hear our rorar'];
const brno_3 =        ['https://i.imgur.com/LxCr11F.jpg', 'live concert'];

const wien_1 =        ['https://i.imgur.com/ci8Phjv.jpg', ''];
const wien_2 =        ['', ];

const bratislava_1 =  ['https://i.imgur.com/8fMN2hU.jpg', 'waiting for'];

const karlovy_1 =     ['https://i.imgur.com/kKtB8c6.jpg', 'Gabrilea'];
const karlovy_2 =     ['https://i.imgur.com/yKP9Vcv.jpg', 'colored houses'];

const goettingen_1 =  ['https://i.imgur.com/1CPj02q.jpg', 'the fantastic 4'];
const goettingen_2 =  ['https://i.imgur.com/L9AV5si.jpg', 'alex'];
const goettingen_3 =  ['https://i.imgur.com/OUvAaEk.jpg', 'fer'];
const goettingen_4 =  ['https://i.imgur.com/SUBlA4n.jpg', 'from hell'];

const kassel_1 =      ['https://i.imgur.com/Q4cSb79.jpg', 'hich selfhi']
const kassel_2 =      ['https://i.imgur.com/7AsSnnY.jpg', 'herculus ass'];

const hamburg_1 =     ['', ];


// images per city
// -----------------------------------
const eindhoven_imgs =  [eindhoven_1, eindhoven_2];
const utrecht_imgs =    [utrecht_1];
const koln_imgs =       [koln_1, koln_2, koln_3, koln_4, koln_5, koln_6, koln_7, koln_8, koln_9];
const nueremberg_imgs = [nueremberg_1, nueremberg_2];
const fuessen_imgs =    [fuessen_1, fuessen_2, fuessen_3, fuessen_4, fuessen_5, fuessen_6, fuessen_7];
const salzburg_imgs =   [salzburg_1, salzburg_2, salzburg_3];
const brno_imgs =       [brno_1, brno_2, brno_3];
const wien_imgs =       [wien_1, wien_2];
const bratislava_imgs = [bratislava_1];
const karlovy_imgs =    [karlovy_1, karlovy_2];
const goettingen_imgs = [goettingen_1, goettingen_2, goettingen_3, goettingen_4];
const kassel_imgs =     [kassel_1, kassel_2];
const hamburg_imgs =    [hamburg_1];

const markerColor = '#3c4e5a';
var geoJson = [

  {
    // Eindhoven
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": eindhoven_geo },
    "properties": {
        'title': 'Eindhoven',
        'marker-color': markerColor,
        'marker-symbol': 'bicycle',
        'marker-size': 'large',
        'images': eindhoven_imgs
    }
  },

  {
    // Utrecht
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": utrecht_geo },
    "properties": {
        'title': 'Utrecht',
        'marker-color': markerColor,
        'marker-symbol': 'bakery',
        'marker-size': 'medium',
        'images': utrecht_imgs
    }
  },

  {
    // Koln
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": koln_geo },
    "properties": {
        'title': 'Koln',
        'marker-color': markerColor,
        'marker-symbol': 'heart',
        'marker-size': 'large',
        'images': koln_imgs
    }
  },

  {
    // Nueremberg
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": nueremberg_geo },
    "properties": {
        'title': 'Nueremberg',
        'marker-color': markerColor,
        'marker-symbol': 'monument',
        'marker-size': 'large',
        'images': nueremberg_imgs
    }
  },

  {
    // Fuessen
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": fuessen_geo },
    "properties": {
        'title': 'Fuessen',
        'marker-color': markerColor,
        'marker-symbol': 'camera',
        'marker-size': 'large',
        'images': fuessen_imgs
    }
  },

  {
    // Salzburg
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": salzburg_geo },
    "properties": {
        'title': 'Salzburg',
        'marker-color': markerColor,
        'marker-symbol': 'music',
        'marker-size': 'large',
        'images': salzburg_imgs
    }
  },

  {
    // Brno
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": brno_geo },
    "properties": {
        'title': 'Brno',
        'marker-color': markerColor,
        'marker-symbol': 'music',
        'marker-size': 'large',
        'images': brno_imgs
    }
  },

  {
    // Wien
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": wien_geo },
    "properties": {
        'title': 'Wien',
        'marker-color': markerColor,
        'marker-symbol': 'monument',
        'marker-size': 'large',
        'images': wien_imgs
    }
  },

  {
    // Bratislava
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": bratislava_geo },
    "properties": {
        'title': 'Bratislava',
        'marker-color': markerColor,
        'marker-symbol': 'bakery',
        'marker-size': 'medium',
        'images': bratislava_imgs
    }
  },

  {
    // Karlovy
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": karlovy_geo },
    "properties": {
        'title': 'Karlovy Vary',
        'marker-color': markerColor,
        'marker-symbol': 'park',
        'marker-size': 'large',
        'images': karlovy_imgs
    }
  },

  {
    // Goettingen
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": goettingen_geo },
    "properties": {
        'title': 'Goëttingen',
        'marker-color': markerColor,
        'marker-symbol': 'college',
        'marker-size': 'large',
        'images': goettingen_imgs
    }
  },

  {
    // Kassel
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": kassel_geo },
    "properties": {
        'title': 'Kassel',
        'marker-color': markerColor,
        'marker-symbol': 'park',
        'marker-size': 'medium',
        'images': kassel_imgs
    }
  },

  {
    // Hamburg
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": hamburg_geo },
    "properties": {
        'title': 'Hamburg',
        'marker-color': markerColor,
        'marker-symbol': 'airport',
        'marker-size': 'large',
        'images': hamburg_imgs
    }
  },
];
