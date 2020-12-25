
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
	var roof, rope
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = createSprite (250, 500, 20, 20)
	bobObject2 = createSprite (300, 500, 20, 20)
	bobObject3 = createSprite (350, 500, 20, 20)
	bobObject4 = createSprite (400, 500, 20, 20)
	bobObject5 = createSprite (450, 500, 20, 20)

	roof = createSprite (350, 100, 600, 60)


	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
  background(230, 230, 230);
  
  drawSprites();
 
}



