
let puzzleActual = new Array(
  new Array(1,2,3),
  new Array(4,' ',6),
  new Array(7,5,8)
  );
  
  let filCellaBuida, colCellaBuida;
  filCellaBuida = 1;
  colCellaBuida = 1;

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
    cella.onclick= function() {canvia(this.id, this.innerHTML);
    };

    if (i==filCellaBuida && j==colCellaBuida){
       cella.classList.add("celaBuida");
    }  
 
  }
}

function canvia(idCela, valorCela){ //celaFila, celaColumna){
  
  let posColumna, posFila;
  let celBuida;

  posFila = parseInt(idCela.substring(1, 2));
  posColumna = parseInt(idCela.substring(2, 3));

  celBuida = document.getElementById("c"+filCellaBuida+colCellaBuida);
  celACanviar = document.getElementById(idCela);

  // console.log("La casella buida                      => " + filCellaBuida + ", " + colCellaBuida + "  filCellaBuida, colCellaBuida" +
  //           "\ni la casella que hem pitjat           => " + posFila + ", " + posColumna          + "  posFila      , posColumna");

  // console.log("posFila==filCellaBuida                => " + (posFila==filCellaBuida));
  // console.log("Math.abs(posColumna-colCellaBuida)==1 => " + (Math.abs(posColumna-colCellaBuida)==1));

  // console.log("posColumna==colCellaBuida             => " + (posColumna==colCellaBuida) );
  // console.log("Math.abs(posFila-filCellaBuida)==1)   => " + (Math.abs(posFila-filCellaBuida)==1) );

  if ( (posFila==filCellaBuida)&&(Math.abs(posColumna-colCellaBuida)==1)||
       (posColumna==colCellaBuida)&&(Math.abs(posFila-filCellaBuida)==1)
     ){
      celBuida.classList.remove("celaBuida");
      celACanviar.classList.add("celaBuida");
      celBuida.innerHTML=celACanviar.innerHTML;
      puzzleActual[filCellaBuida][colCellaBuida]=celACanviar.innerHTML;
      celACanviar.innerHTML=" ";
      puzzleActual[posFila][posColumna]=" ";
      filCellaBuida = posFila;
      colCellaBuida = posColumna;
     }

  if (esCorrecte()){
    alert("Molt bé ho has aconseguit!");
  }
};

function esCorrecte() {
  let correcte = true;
  for(let fila = 0; fila < puzzleActual.length; fila++) {
    for(let col = 0; col < puzzleActual.length; col++) {
      if (puzzleActual[fila][col] != puzzleCorrecte[fila][col]) {
        correcte = false;
        break;
      }
    }
  }
  return correcte;
}