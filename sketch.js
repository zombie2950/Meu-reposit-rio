let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  let palavras = ["Determinação", "Determinado", "Determinada"];
  return random(palavras);}

function draw() {
  
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
 
    let quantidade = map(mouseX, 0, width, 1, palavra.length)
  let parcial = palavra.substring(0, quantidade);
  
  let macimo = width
  let minimo = 0

  text(parcial, 200, 200);
  
}