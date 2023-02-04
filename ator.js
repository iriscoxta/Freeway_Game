//código do ator

let xAtor = 110;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}




function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      atorVoltaPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
           meusPontos -= 1;
         }
    }
  }
}

function atorVoltaPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 30)
  //fill(255, 69, 0)
  text(meusPontos, width/5, 27)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    atorVoltaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0 
} 

function podeSeMover(){
  return yAtor < 366

}
