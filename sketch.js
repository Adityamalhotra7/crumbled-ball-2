
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var paper1,ground,box1,box2,box3,box4,boximg;
function preload()
{
boximg=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1200, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,690,1200,20);
paper1=new Paper(100,200,80);
box1=new Box(width/2,530,20,200)
    //box1.shapeColor="red";
	box2=new Box(width/2+115,670,250,20);
	//box2.shapeColor="red";
	box3=new Box(width/2+250,530,20,200)
	//box3.shapeColor="red";
   // paper1.debug=true;
	Engine.run(engine);
   box4=createSprite(width/2+120,530,400,100) ;
   box4.addImage(boximg);
   box4.scale=1.1
}


function draw() {
  rectMode(CENTER);
  background(180);
  paper1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  //paper1.collide(box3);
  //image(boximg,width/2,530,300,100);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-1000});

	}
}

