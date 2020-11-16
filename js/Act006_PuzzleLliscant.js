let puzzleActual = new Array(
  new Array(1,2,3),
  new Array(4,' ',6),
  new Array(7,5,8)
  );

let puzzleCorrecte = new Array(
    new Array(1,2,3),
    new Array(4,5,6),
    new Array(7,8,' ')
    );


let cos = document.getElementById("cos");
let taula = document.getElementById("taula");

let fila, cella;

for (let i=0 ; i<3 ; i++ ) {
  fila = taula.insertRow();
  for (let j=0 ; j<3 ; j++ ) {
    cella = fila.insertCell(-1);
    cella.id = "c" + i + j;
    cella.innerHTML= puzzleActual[i][j];
    cella.onclick= function() {canvia("+ i + ", " + j+")};
    // document.getElementById("demo").onclick = function() {myFunction()};
    // cella.onclick=function(){canvia()};
  }
}

function canvia(celaFila, celaColumna){
  alert("Has pitjat sobre la cel·la " + celaFila + ", " + celaColumna);
};