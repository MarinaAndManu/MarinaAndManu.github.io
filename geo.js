// geo locations (google maps)
// -----------------------------------
var eindhoven_geo =   [5.45704580000006,    51.4698348];
var utrecht_geo =     [, ];
var koln_geo =        [6.95669799999996,    50.935379];
var nueremberg_geo =  [11.074242000000027,  49.447428];
var fuessen_geo =     [10.74980000000005,   47.55757400000001];
var salzburg_geo =    [13.047364000000016,  47.808384];
var brno_geo =        [16.60876499999995,   49.196995];
var wien_geo =        [16.33069499999999,   48.194333];
var bratislava_geo =  [17.107137299999977,  48.1458923];
var karlovy_geo =     [12.878543499999978,  50.2414816];
var goettingen_geo =  [9.931354699999929,   51.5309636];
var kassel_geo =      [, ];
var hamburg_geo =     [9.965321000000017,   53.549959];


// images (imgur - @manu_tero)
// -----------------------------------
var eindhoven_1 =   ['https://i.imgur.com/HsosQaF.jpg', 'blue flowers'];
var eindhoven_2 =   ['', 'gaming at university'];

var utrecht_1 =     ['', ];
var utrecht_2 =     ['', ];

var koln_1 =        ['', ];
var koln_2 =        ['', ];
var koln_3 =        ['', ];
var koln_4 =        ['', ];
var koln_5 =        ['', ];
var koln_6 =        ['', ];
var koln_7 =        ['', ];
var koln_8 =        ['', ];

var nueremberg_1 =  ['', ];
var nueremberg_2 =  ['', ];

var fuessen_1 =     ['https://i.imgur.com/cjFR42a.jpg', 'the bridgue - epic'];
var fuessen_2 =     ['https://i.imgur.com/fWEXdPD.jpg', 'croquis'];
var fuessen_3 =     ['https://i.imgur.com/M43ztiq.jpg', 'the bridgue - Yiwen'];
var fuessen_4 =     ['https://i.imgur.com/6lqohY8.jpg', 'the bridgue - ¿?'];
var fuessen_5 =     ['https://i.imgur.com/b3EgST8.jpg', 'the bridgue - mym'];
var fuessen_6 =     ['https://i.imgur.com/ELn2cYa.jpg', 'incognito'];
var fuessen_7 =     ['https://i.imgur.com/MIxLj1F.jpg', 'the lake'];

var salzburg_1 =    ['', ];
var salzburg_2 =    ['', ];
var salzburg_3 =    ['', ];

var brno_1 =        ['https://i.imgur.com/X1FfeLQ.jpg', 'what\'s this'];
var brno_2 =        ['https://i.imgur.com/4GKUNhF.jpg', 'hear our rorar'];
var brno_3 =        ['https://i.imgur.com/LxCr11F.jpg', 'live concert'];

var wien_1 =        ['', ];
var wien_2 =        ['', ];

var bratislava_1 =  ['https://i.imgur.com/8fMN2hU.jpg', 'waiting for'];

var karlovy_1 =     ['http://i.imgur.com/kKtB8c6.jpg', 'Gabrilea'];
var karlovy_2 =     ['http://i.imgur.com/yKP9Vcv.jpg', 'colored houses'];

var goettingen_1 =  ['https://i.imgur.com/1CPj02q.jpg', 'the fantastic 4'];
var goettingen_2 =  ['https://i.imgur.com/L9AV5si.jpg', 'alex'];
var goettingen_3 =  ['https://i.imgur.com/OUvAaEk.jpg', 'fer'];
var goettingen_4 =  ['https://i.imgur.com/SUBlA4n.jpg', 'from hell'];

var kassel_1 =      ['https://i.imgur.com/Q4cSb79.jpg', 'hich selfhi']
var kassel_2 =      ['', 'herculus ass'];

var hamburg_1 =     ['', ];


// images per city
// -----------------------------------
var eindhoven_imgs =  [eindhoven_1, eindhoven_2];
var utrecht_imgs =    [utrecht_1, utrecht_2];
var koln_imgs =       [koln_1, koln_2, koln_3, koln_4];
var nueremberg_imgs = [nueremberg_1, nueremberg_2];
var fuessen_imgs =    [fuessen_1, fuessen_2, fuessen_3, fuessen_4, fuessen_5, fuessen_6, fuessen_7];
var salzburg_imgs =   [salzburg_1, salzburg_2, salzburg_3];
var brno_imgs =       [brno_1, brno_2, brno_3];
var wien_imgs =       [wien_1, wien_2];
var bratislava_imgs = [bratislava_1];
var karlovy_imgs =    [karlovy_1, karlovy_2];
var goettingen_imgs = [goettingen_1, goettingen_2, goettingen_3, goettingen_4];
var kassel_imgs =     [kassel_1, kassel_2];
var hamburg_imgs =    [hamburg_1];


function getGeoJson() {
  return [
    {
      // Eindhoven
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": eindhoven_geo },
      "properties": {
          'title': 'Eindhoven',
          'marker-color': '#3c4e5a',
          'marker-symbol': 'monument',
          'marker-size': 'large',
          'images': eindhoven_imgs
      }
    },
    {
      // Koln
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": koln_geo },
      "properties": {
          'title': 'Köln',
          'marker-color': '#3c4e5a',
          'marker-symbol': 'monument',
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
          'marker-color': '#3c4e5a',
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
          'title': 'Nueremberg',
          'marker-color': '#3c4e5a',
          'marker-symbol': 'monument',
          'marker-size': 'large',
          'images': fuessen_imgs
      }
    },
    {
      // Nueremberg
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": nueremberg_geo },
      "properties": {
          'title': 'Nueremberg',
          'marker-color': '#3c4e5a',
          'marker-symbol': 'monument',
          'marker-size': 'large',
          'images': nueremberg_imgs
      }
    },
  ];
}
