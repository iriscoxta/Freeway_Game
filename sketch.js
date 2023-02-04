
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  carroVoltaPosicaoInicial();
  verificaColisao();
  mostraPontos();
  marcaPonto();
  //perdePonto();
}

