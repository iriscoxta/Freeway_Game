//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imgCarros.length; i++){
      xCarros[i] -=  velocidadeCarros[i]
  }
}

function carroVoltaPosicaoInicial(){
  for(let i = 0; i < imgCarros.length; i++){
    if (passouTodaTela(xCarros[i] )){
    xCarros[i] = 600
  }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}