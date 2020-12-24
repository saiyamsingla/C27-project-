
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(600,100,300,20);

	bob1= new Bob(500,600,50);
	bob2= new Bob(550,600,50);
	bob3= new Bob(600,600,50);
	bob4= new Bob(650,600,50);
	bob5= new Bob(700,600,50);

	rope1=new Rope ({x:500,y:100},bob1.body,)
	rope2=new Rope ({x:550,y:100},bob2.body,)
	rope3=new Rope ({x:600,y:100},bob3.body,)
	rope4=new Rope ({x:650,y:100},bob4.body,)
	rope5=new Rope ({x:700,y:100},bob5.body,)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-225,y:285})
}
}

