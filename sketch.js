var shipImg,ship;
var sea,seaImg;

function preload() {
  
 shipImg= loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png") ;
 seaImg= loadAnimation("sea.png");


}
function setup() {
  createCanvas(600,500);
  //creating ship
    ship=createSprite(50,200,20,50);
    ship.addAnimation("ship",shipImg);
    ship.scale=0.2;
    ship.x=90;
 ship.y=300;
    //creating the sea
  sea=createSprite(600,300);
  sea.addAnimation("sea",seaImg);
  sea.velocityX=-1;
  sea.scale=0.5;
 // adding scale and position to the ship
 
}
function draw(){
background("white");
   
    createEdgeSprites();

drawSprites();
}