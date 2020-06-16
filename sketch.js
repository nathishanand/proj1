const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	box1 = new Box(505,433,200,20);
	
	
	box2 = new Box(600,360,20,150)
   

	box3=new Box(400, 360,20,150)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground=new Ground(100,440,2300,10)
	ball=new Ball(5,400,20,40)

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  ball.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:505,y:-433})
	}
}



