var myMap = L.map("map2", {
  center: [23.62, -102.53],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);

function markerSize(magnitud) {
  return magnitud * 10000;
}

var sismos = [
  {
    ubicacion: "100 km al NORESTE de LA PAZ, BCS",
    location: [25.00, -110.00],
    magnitud: 6.9
  },
  {
    ubicacion: "83 km al OESTE de AHOME, SIN",
    location: [26.00, -110.00],
    magnitud: 7
  },
  {
    ubicacion: "21 km al OESTE de ZUMPANGO DEL RIO, GRO",
    location: [17.62, -99.72],
    magnitud: 7
  },
  {
    ubicacion: "72 km al ESTE de CACAHOATAN, CHIS",
    location: [14.90, -91.50],
    magnitud: 7.5
  },
  {
    ubicacion: "5 km al SUROESTE de TEOPISCA, CHIS",
    location: [16.50, -92.50],
    magnitud: 7.7
  },
  {
    ubicacion: "115 km al NORTE de GUERRERO NEGRO, BCS",
    location: [29.00, -114.00],
    magnitud: 7.1
  },
  {
    ubicacion: "50 km al SUR de MAPASTEPEC, CHIS",
    location: [15.00, -93.00],
    magnitud: 7.6
  },
  {
    ubicacion: "320 km al SUR de CABO SAN LUCAS, BCS",
    location: [20.00, -110.00],
    magnitud: 6.6
  },
  {
    ubicacion: "727 km al SUROESTE de CABO SAN LUCAS, BCS",
    location: [17.00, -113.00],
    magnitud: 7.1
  },
  {
    ubicacion: "23 km al SURESTE de SAN MARCOS, GRO",
    location: [16.70, -99.20],
    magnitud: 7.6
  },
  {
    ubicacion: "77 km al NOROESTE de SANTA ROSALIA, BCS",
    location: [28.00, -112.50],
    magnitud: 7.1
  },
  {
    ubicacion: "8 km al SUR de ACAPULCO, GRO",
    location: [16.80, -99.90],
    magnitud: 7.2
  },
  {
    ubicacion: "60 km al SUR de PETATLAN, GRO",
    location: [17.00, -101.20],
    magnitud: 6.9
  },
  {
    ubicacion: "23 km al SURESTE de SAN MARCOS, GRO",
    location: [16.70, -99.20],
    magnitud: 6.5
  },
  {
    ubicacion: "65 km al SURESTE de TLACOLULA, OAX",
    location: [16.77, -95.90],
    magnitud: 6.9
  },
  {
    ubicacion: "19 km al ESTE de H HUAJUAPAN DE LEON, OAX",
    location: [17.80, -97.60],
    magnitud: 6.5
  },
  {
    ubicacion: "59 km al SUROESTE de CD LAZARO CARDENAS, MICH",
    location: [17.50, -102.50],
    magnitud: 7.6
  },
  {
    ubicacion: "51 km al ESTE de TLACOLULA, OAX",
    location: [17.50, -102.50],
    magnitud: 7.6
  },
  {
    ubicacion: "36 km al SUR de TECPAN, GRO",
    location: [16.90, -100.70],
    magnitud: 7.5
  },
  {
    ubicacion: "15 km al NORESTE de ATLACOMULCO, MEX",
    location: [19.93, -99.83],
    magnitud: 6.9
  },
  {
    ubicacion: "13 km al NOROESTE de MAPASTEPEC, CHIS",
    location: [15.50, -93.00],
    magnitud: 7
  },
  {
    ubicacion: "348 km al ESTE de CD HIDALGO, CHIS",
    location: [14.00, -89.00],
    magnitud: 7.4
  },
  {
    ubicacion: "33 km al SURESTE de GPE VICTORIA(KM.43), BC",
    location: [32.00, -115.00],
    magnitud: 7
  },
  {
    ubicacion: "9 km al SURESTE de UNION HIDALGO, OAX",
    location: [16.40, -94.80],
    magnitud: 4.0
  },
  {
    ubicacion: "1 km al ESTE de STA MARIA CORONANGO, PUE",
    location: [19.13, -98.30],
    magnitud: 3.1
  },
  {
    ubicacion: "90 km al SURESTE de SALINA CRUZ, OAX",
    location: [15.56, -94.65],
    magnitud: 3.9
  },
  {
    ubicacion: "29 km al SURESTE de TELOLOAPAN, GRO",
    location: [18.14, -99.73],
    magnitud: 3.5
  },
  {
    ubicacion: "4 km al ESTE de MATIAS ROMERO, OAX",
    location: [16.87, -95.00],
    magnitud: 4.0
  },
  {
    ubicacion: "50 km al SUROESTE de PINOTEPA NACIONAL, OAX",
    location: [16.02, -98.38],
    magnitud: 3.4
  },
  {
    ubicacion: "45 km al SURESTE de TECATE, BC",
    location: [32.45, -116.19],
    magnitud: 2.7
  },
  {
    ubicacion: "67 km al SUROESTE de MAPASTEPEC, CHIS",
    location: [14.94, -93.25],
    magnitud: 3.7
  },
  {
    ubicacion: "20 km al NORTE de RIO GRANDE, OAX",
    location: [16.19, -97.41],
    magnitud: 3.7
  },
  {
    ubicacion: "44 km al SUROESTE de CIHUATLAN, JAL",
    location: [18.88, -104.76],
    magnitud: 3.4
  },
  {
    ubicacion: "53 km al SURESTE de SALINA CRUZ, OAX",
    location: [15.73, -95.02],
    magnitud: 3.8
  },
  {
    ubicacion: "79 km al SUROESTE de OMETEPEC, GRO",
    location: [16.11, -98.85],
    magnitud: 3.3
  },
  {
    ubicacion: "26 km al NOROESTE de PINOTEPA NACIONAL, OAX",
    location: [16.51, -98.22],
    magnitud: 3.4
  },
  {
    ubicacion: "7 km al SUROESTE de RIO GRANDE, OAX",
    location: [15.99, -97.50],
    magnitud: 7.5
  },
  {
    ubicacion: "2 km al NORTE de COYUCA DE BENITEZ, GRO",
    location: [17.03, -100.08],
    magnitud: 7.7
  },
  {
    ubicacion: "17 km al NORTE de ARRIAGA , CHIS",
    location: [16.39, -93.87],
    magnitud: 3.7
  },
  {
    ubicacion: "7 km al NORTE de JUCHITAN DE ZARAGOZA, OAX",
    location: [16.49, -95.03],
    magnitud: 3.7
  },
  {
    ubicacion: "4 km al SURESTE de TONALA, CHIS",
    location: [16.05, -93.74],
    magnitud: 3.9
  },
  {
    ubicacion: "63 km al SUR de CRUCECITA, OAX",
    location: [15.20, -96.15],
    magnitud: 4.0
  },
  {
    ubicacion: "81 km al SUROESTE de OMETEPEC, GRO",
    location: [16.08, -98.85],
    magnitud: 7.6
  },
  {
    ubicacion: "84 km al SUROESTE de PINOTEPA NACIONAL, OAX",
    location: [15.97, -98.73],
    magnitud: 3.5
  },
  {
    ubicacion: "14 km al SUROESTE de ARRIAGA , CHIS",
    location: [16.11, -93.94],
    magnitud: 4.0
  },
  {
    ubicacion: "31 km al NORTE de PUERTO ESCONDIDO, OAX",
    location: [16.13, -97.14],
    magnitud: 3.3
  },
  {
    ubicacion: "30 km al OESTE de CINTALAPA, CHIS",
    location: [16.74, -94.00],
    magnitud: 4.0
  },
  {
    ubicacion: "35 km al OESTE de CD HIDALGO, CHIS",
    location: [14.67, -92.48],
    magnitud: 4.2
  },
  {
    ubicacion: "7 km al SUROESTE de TECOMAN, COL",
    location: [18.87, -103.93],
    magnitud: 6.9
  },
  {
    ubicacion: "8 km al NOROESTE de CD DE ARMERIA, COL",
    location: [19.00, -104],
    magnitud: 6.8
  },
  {
    ubicacion: "29 km al NORESTE de RODOLFO SANCHEZ T(MRO), BC",
    location: [31.82, -116.28],
    magnitud: 3.2
  },
  {
    ubicacion: "314 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.58, -89.47],
    magnitud: 4.4
  },
  {
    ubicacion: "28 km al SUR de SANTA ISABEL, BC",
    location: [32.28, -115.57],
    magnitud: 3.5
  },
  {
    ubicacion: "16 km al NORTE de ENSENADA, BC",
    location: [32, -116.65],
    magnitud: 3.4
  },
  {
    ubicacion: "32 km al SURESTE de HUATABAMPO, SON",
    location: [26.59, -109.46],
    magnitud: 4.3
  },
  {
    ubicacion: "392 km al SUROESTE de LA MIRA, MICH",
    location: [15.17, -104.49],
    magnitud: 4.5
  },
  {
    ubicacion: "318 km al SUR de CHETUMAL, QR",
    location: [15.63, -88.49],
    magnitud: 4.3
  },
  {
    ubicacion: "281 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.26, -89.99],
    magnitud: 5
  },
  {
    ubicacion: "4 km al NOROESTE de HUETAMO, MICH",
    location: [18.64, -100.93],
    magnitud: 5.5
  },
  {
    ubicacion: "53 km al SUROESTE de GPE VICTORIA(KM.43), BC",
    location: [32.02, -115.57],
    magnitud: 3.6
  },
  {
    ubicacion: "26 km al NORTE de MEXICALI, BC",
    location: [32.9, -115.47],
    magnitud: 3.3
  },
  {
    ubicacion: "41 km al SUR de CD ALTAMIRANO, GRO",
    location: [18.00, -100.58],
    magnitud: 5.5
  },
  {
    ubicacion: "22 km al NOROESTE de H HUAJUAPAN DE LEON, OAX",
    location: [17.93, -97.94],
    magnitud: 4.2
  },
  {
    ubicacion: "73 km al SUR de ISLA, VER",
    location: [17.38, -95.68],
    magnitud: 4.5
  },
  {
    ubicacion: "15 km al SUROESTE de IXMIQUILPAN, HGO",
    location: [20.36, -99.28],
    magnitud: 4.5
  },
  {
    ubicacion: "110 km al SUROESTE de H CABORCA, SON",
    location: [30.21, -113.15],
    magnitud: 3.9
  },
  {
    ubicacion: "121 km al SUR de LOS MOCHIS, SIN",
    location: [24.73, -109.29],
    magnitud: 4.2
  },
  {
    ubicacion: "22 km al SURESTE de CASIMIRO CASTILLO, JAL",
    location: [19.42, -104.36],
    magnitud: 4.7
  },
  {
    ubicacion: "1104 km al NORESTE de H MATAMOROS, TAMS",
    location: [32.2, -88.73],
    magnitud: 3
  },
  {
    ubicacion: "52 km al SUROESTE de CD HIDALGO, CHIS",
    location: [14.26, -92.38],
    magnitud: 5
  },
  {
    ubicacion: "59 km al NORESTE de TECATE, BC",
    location: [32.93, -116.18],
    magnitud: 3.1
  },
  {
    ubicacion: "225 km al SUROESTE de RIO GRANDE, OAX",
    location: [14.23, -98.45],
    magnitud: 4.8
  },
  {
    ubicacion: "207 km al SURESTE de CD HIDALGO, CHIS",
    location: [14.26, -92.38],
    magnitud: 5
  },
  {
    ubicacion: "59 km al NORESTE de TECATE, BC",
    location: [32.93, -116.18],
    magnitud: 3.1
  },
  {
    ubicacion: "73 km al NOROESTE de PUERTO DE ANAPRA, CHIH",
    location: [32.36, -106.92],
    magnitud: 3.2
  },
  {
    ubicacion: "8 km al SURESTE de ALLENDE, VER",
    location: [18.11, -94.34],
    magnitud: 4.2
  },
  {
    ubicacion: "259 km al SURESTE de CHETUMAL, QR",
    location: [17.2, -86.27],
    magnitud: 4.6
  },
  {
    ubicacion: "33 km al NOROESTE de SANTA ISABEL, BC",
    location: [32.87, -115.78],
    magnitud: 3.3
  },
  {
    ubicacion: "69 km al SUROESTE de CD DE ARMERIA, COL",
    location: [18.34, -104.16],
    magnitud: 4.2
  },
  {
    ubicacion: "297 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.21, -89.85],
    magnitud: 4.3
  },
  {
    ubicacion: "412 km al SUROESTE de LA MIRA, MICH",
    location: [15.11, -104.16],
    magnitud: 4.4
  },
  {
    ubicacion: "174 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.21, -89.85],
    magnitud: 4.3
  },
  {
    ubicacion: "200 km al SUROESTE de CIHUATLAN, JAL",
    location: [18, -105.95],
    magnitud: 4
  },
  {
    ubicacion: "144 km al SUROESTE de COALCOMAN, MICH",
    location: [17.61, -103.76],
    magnitud: 4.8
  },
  {
    ubicacion: "260 km al SURESTE de CHETUMAL, QR",
    location: [16.61, -86.85],
    magnitud: 5.7
  },
  {
    ubicacion: "269 km al SURESTE de CHETUMAL, QR",
    location: [16.7, -86.61],
    magnitud: 5.9
  },
  {
    ubicacion: "263 km al SURESTE de CHETUMAL, QR",
    location: [16.95, -86.43],
    magnitud: 4.7
  },
  {
    ubicacion: "72 km al ESTE de RODOLFO SANCHEZ T(MRO), BC",
    location: [31.83, -115.82],
    magnitud: 3.1
  },
  {
    ubicacion: "12 km al NOROESTE de ALLENDE, VER",
    location: [18.25, -94.44],
    magnitud: 3.8
  },
  {
    ubicacion: "57 km al NOROESTE de SANTA ROSALIA, BCS",
    location: [27.82, -112.48],
    magnitud: 3.9
  },
  {
    ubicacion: "113 km al SUR de RIO GRANDE, OAX",
    location: [15.02, -97.7],
    magnitud: 4.5
  },
  {
    ubicacion: "135 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.52, -91.75],
    magnitud: 5.6
  },
  {
    ubicacion: "268 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.56, -89.95],
    magnitud: 5
  },
  {
    ubicacion: "326 km al SUR de CABO SAN LUCAS, BCS",
    location: [20.03, -109.15],
    magnitud: 5.7
  },
  {
    ubicacion: "59 km al ESTE de RODOLFO SANCHEZ T(MRO), BC",
    location: [31.78, -115.95],
    magnitud: 3.4
  },
  {
    ubicacion: "5 km al SURESTE de JUCHITAN DE ZARAGOZA, OAX",
    location: [16.39, -95],
    magnitud: 4.7
  },
  {
    ubicacion: "26 km al NORTE de MEXICALI, BC",
    location: [32.9, -115.5],
    magnitud: 2.8
  },
  {
    ubicacion: "24 km al NORTE de MEXICALI, BC",
    location: [32.88, -115.5],
    magnitud: 2.9
  },
  {
    ubicacion: "24 km al NORTE de MEXICALI, BC",
    location: [32.88, -115.5],
    magnitud: 3.2
  },
  {
    ubicacion: "500 km al SURESTE de CD HIDALGO, CHIS",
    location: [13.23, -87.76],
    magnitud: 4.9
  },
];

for (var i = 0; i < sismos.length; i++) {
  L.circle(sismos[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(sismos[i].magnitud)
  }).bindPopup("<h1>" + sismos[i].ubicacion + "</h1> <hr> <h3>Magnitud: " + sismos[i].magnitud + "</h3>").addTo(myMap);
}