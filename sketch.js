var sea,ship1;
var seaImg,ship1Img;
var ship2,ship3;
var ship2Img,ship3Img;
var ship4;
var ship4Img;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
seaImg = loadImage("sea.png");
ship1Img = loadImage("ship-1.png");
ship2Img = loadImage("ship-2.png");
ship3Img = loadImage("ship-3.png");
ship4Img = loadImage("ship-4.png");
}

function setup(){
  createCanvas(400,600);
  // Moving background
  sea.addImage(seaImg);
  velocityX=50

  //creating ship running 
ship1Img = createSprite(70,580,20,20);
ship1.addAnimation("ShipMoving",ship1Img);
ship1Img.scale=0.08;
ship1Img.velocityx=50
}

function draw() {
  background("sea.png")
}