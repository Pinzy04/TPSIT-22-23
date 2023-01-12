const righe = 12;
const colonne = 9;

// immagini
const star_image =
  "https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=2000";
const cactus_image =
  "https://images.obi-italia.it/product/IT/800x600/506918_1.jpg";
const apple_image =
  "https://i.pinimg.com/736x/40/6e/69/406e69fa30c5844972a244f7c2c1528a.jpg";
const rabbit_image =
  "https://i.pinimg.com/736x/99/6e/87/996e87cf225c29a7348216cc8533562c--ios-icon-ios-.jpg";
const duck_image =
  "https://media.istockphoto.com/id/1045035708/vector/duckling-simple-vector-icon.jpg?s=612x612&w=0&k=20&c=DPyR6_meVD32JBRKEZiwrAkn0kFY5PT4qxiQblfqkjs=";
const muffin_image = "https://www.pngmart.com/files/22/Muffin-PNG-Clipart.png";
const hat_image =
  "https://img.freepik.com/premium-vector/hand-drawn-clown-hat-illustration_1375-6188.jpg?w=2000";

  
var array_moltip = [];
creaArrayMoltip();

function creaArrayMoltip() {  //popola array_moltip con i moltiplicatori in proporzione
  // 108 valori: 0x = 73 volte (67.59%), 1x = 19 volte (17.59%), 2x = 10 volte (9.26%), 5x = 5 volte (4.63%), 10x = 1 volta (0.93%) 
  // 108 valori: 0x = 75 volte (69.44%), 1x = 15 volte (13.89%), 2x = 7 volte (6.48%), 5x = 5 volte (4.63%), 10x = 3 volta (2.78%), 20x = 2 volte(1.85%), 50x = 1 volta(0.93%)
  for (i = 0; i < 75; i++) {
    array_moltip.push(0);
  }
  for (i = 0; i < 15; i++) {
    array_moltip.push(1);
  }
  for (i = 0; i < 7; i++) {
    array_moltip.push(2);
  }
  for (i = 0; i < 5; i++) {
    array_moltip.push(5);
  }
  for (i = 0; i < 3; i++) {
    array_moltip.push(10);
  }
  for (i = 0; i < 2; i++) {
    array_moltip.push(20);
  }
  array_moltip.push(50);
}

function arrayToMatrix(array) { //Converte l'array in una matrice
  var matrice = [],
    i,
    k;

  for (i = 0, k = -1; i < array.length; i++) {
    if (i % 9 === 0) {
      k++;
      matrice[k] = [];
    }

    matrice[k].push(array[i]);
  }

  return matrice;
}

function crea_array_immagini() { //crea l'array delle immagini e le ordina in modo casuale
  var array_img = [
    star_image,
    cactus_image,
    apple_image,
    rabbit_image,
    duck_image,
    muffin_image,
    hat_image,
  ];
  var arr = [];
  var arr2 = [];

  for (i = 0; i < righe; i++) {
    for (j = 0; j < colonne; j++) {
      var pos = Math.floor(Math.random() * 7);
      arr2.push(array_img[pos]);
    }
    arr.push(arr2);
    arr2 = [];
  }

  return arr;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function crea_array_vincite() { //ritorna i moltiplicatori sotto forma di matrice
  var arr = array_moltip;
  return arrayToMatrix(shuffle(arr));
}



module.exports = {
  immagini: crea_array_immagini,
  vincite: crea_array_vincite
};
