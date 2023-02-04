//imagens e sons do jogo
let imgEstrada
let imgAtor
let imgCarro
let imgCarro2
let imgCarro3


//sons do jogo
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imgEstrada = loadImage("img/estrada.png")
  imgAtor = loadImage("img/ator-1.png")
  imgCarro = loadImage("img/carro-1.png")
  imgCarro2 = loadImage("img/carro-2.png")
  imgCarro3 = loadImage("img/carro-3.png")
  imgCarros=[imgCarro, imgCarro2, imgCarro3, imgCarro2, imgCarro, imgCarro3]
  
  somTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")
}