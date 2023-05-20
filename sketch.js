/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;*/
var background_image, background;
var snake, snakeImage;


function setup()
{
  createCanvas(800, 800);
  background_image = loadImage("./assets/snakeBackground.webp")
  snake = createSprite(100, 100, 20, 20)


}

function draw() 
{
  background(background_image);
  snakeControl()
 drawSprites()
}

function snakeControl(){

if(keyDown("RIGHT_ARROW")){

  snake.velocityX = 2
}

if(keyDown("LEFT_ARROW")){

  snake.velocityX = -2
}

if(keyDown("UP_ARROW")){

  snake.setSpeedAndDirection(-2, 90)
}

if(keyDown("DOWN_ARROW")){

  snake.setSpeedAndDirection(2, 90)
}



}