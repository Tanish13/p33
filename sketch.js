const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg

function preload(){
backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,550);
  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background (backgroundImg);  
  drawSprites();
}