
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left,right,bottom;
var paper;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,380,800,10);

  paper=new Ball(200,370);

  left=new Dustbin(550,340,10,70);
	right=new Dustbin(650,340,10,70);
  bottom=new Dustbin(600,370,95,10);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  ground.display();

  paper.display();

  left.display();
  right.display();
  bottom.display();

  drawSprites();
 
}



