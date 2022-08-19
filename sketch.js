const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground 
let engine;
let world;
var fruit
var rope
var link
var bunny, buton
var bunnyimg, buttonimg,fruitimg,background1
function preload(){
 bunnyimg=loadImage("bunny.png")
  background1=loadImage("wall.png")
 fruitimg=loadImage("fruit.png")
}
function setup() 
{
  bunny= createSprite(250,600)
 
  bunny.addImage("buny",bunnyimg)
  bunny.scale=(0.25)
  
 frameRate(80)
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  imageMode(CENTER)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope=new Rope(8,{x:250,y:50})
  ground= new GROUND(250,675,width,50)
    fruit=Bodies.rectangle(250,200,50,50)
   
    link1= new LINK(rope,fruit)
  Matter.Composite.add(rope.body,fruit)
  buton= createImg("buton.png")
  buton.position(250,50)
  buton.size(50,50)
  buton.mouseClicked(click1)
}

function draw() 
{
  
  background(51);
  image(background1,125,300,250,600)
 drawSprites()

  Engine.update(engine);
  ground.show()
  rope.show()
  push()
  imageMode(CENTER)
 image(fruitimg,fruit.position.x,fruit.position.y,50,50)
  pop()
}

function click1(){
  rope.break()
  link1.delete()
}


