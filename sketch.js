
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ball1, ball2, ball3, ball4, ball5
var rope1, rope2, rope3, rope4, rope5
var rect

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect = new Rect(600, 600, 1200, 20);

	ball1 = new Ball(200, 200, 80, 80);
	ball2 = new Ball(200, 200, 80, 80);
	ball3 = new Ball(200, 200, 80, 80);
	ball4 = new Ball(200, 200, 80, 80);
	ball5 = new Ball(200, 200, 80, 80);

	rope1 = new Rope(ball.body, { x: 500, y: 50 });
	rope2 = new Rope(ball.body, { x: 500, y: 50 });
	rope3 = new Rope(ball.body, { x: 500, y: 50 });
	rope4 = new Rope(ball.body, { x: 500, y: 50 });
	rope5 = new Rope(ball.body, { x: 500, y: 50 });

	Engine.run(engine);  
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  rect.display();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }

