var Edges
var bomb
var boy,boy_running
function preload(){
  boy_running=loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg=loadImage("path.png")
  bombImg=loadImage("bomb.png")
  coinImg=loadImage("coin.png")
  energyDrinkImg=loadImage("energyDrink.png")
  powerImg=loadImage("power.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  path=createSprite(800,200,windowWidth,windowHeight);
  path.addImage(pathImg);
  path.velocityY=4;
  boy=createSprite(800,500)
  boy.addAnimation("boy_running",boy_running)
  boy.scale=0.075
  secondground=createSprite(width-900,0,10,1600)
  secondground.visible=false
  thirdground=createSprite(width-550,0,10,1600)
  thirdground.visible=false
}

function draw() {
  background("green");
  if(path.y>400){
    path.y=height/2;
  }
  if(keyDown("right")){
    boy.velocityX=5
    }
    if(keyDown("left")){
      boy.velocityX=-5
      }
    boy.collide(secondground)
    boy.collide(thirdground)
    bombCreate()
    drawSprites()
}

function bombCreate(){
  if(frameCount%50==0){
    bomb=createSprite(800,200)
    bomb.addImage(bombImg);
    bomb.scale=0.05
    bomb.velocityY=4
    bomb.x=Math.round(random(650,920))
    bomb.depth=boy.depth
    boy.depth=boy.depth+1
    }
    if (frameCount%50==0){
      power=createSprite(720,100)
      power.addImage(powerImg)
      power.scale=0.1
      power.velocityY=4
      power.x=Math.round(random(650,920))
      power.depth=boy.depth
      boy.depth=boy.depth+1
}
    if (frameCount%50==0){
      energyDrink=createSprite(720,100)
      energyDrink.addImage(energyDrinkImg)
      energyDrink.scale=0.1
      energyDrink.velocityY=4
      energyDrink.x=Math.round(random(650,920))
      energyDrink.depth=boy.depth
      boy.depth=boy.depth+1
}
    if (frameCount%50==0){
      coin=createSprite(720,100)
      coin.addImage(coinImg)
      coin.scale=0.3
      coin.velocityY=4
      coin.x=Math.round(random(650,920))
      coin.depth=boy.depth
      boy.depth=boy.depth+1
}
  }