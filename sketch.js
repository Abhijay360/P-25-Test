
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=Bodies.circle(200,100,20,{
		restitution:0.3,
		friction:0.5,
		density:1.2
	});
	World.add(world, ball);
	ground = Bodies.rectangle(400, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	ball.image=loadImage("paper.png");
	 
	boxPos = 1200;
	boxY = 640;
	
	boxbasebody = Bodies.rectangle(boxPos+100, 600, 200, 20, {isStatic:true});
	World.add(world, boxbasebody);
	boxbasebody.image=loadImage("dustbingreen.png")

	
	//leftboxbody= Bodies.rectangle(boxPos, boxY, 20, 100, {isStatic:true});
	//World.add(world, leftboxbody)
	
	//rightboxbody= Bodies.rectangle(boxPos+200, boxY, 20, 100, {isStatic:true});
	//World.add(world, rightboxbody)


	

	Engine.run(engine);
  
  
}





function draw() {
  rectMode(CENTER);
  background(0);
  
  image(ball.image,ball.position.x,ball.position.y,70,70);
  image(boxbasebody.image,boxbasebody.position.x,400,240,300);
  //rect(0,ground.position.y,1600,10);

  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(ball,ball.postion,{
		x:100,
		y:-85
	});

}



