
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(250, 500, 170, 45);
	iron = new Iron(600, height, 1200, 35);
	stone1 = new Stone(275, 630, 100, 100);
	rubber1 = new Rubber(1050, 645, 100, 100);
	sand1 = new Sand(400, 650);
	sand2 = new Sand(430, 650);
	sand3 = new Sand(460, 650);
	sand4 = new Sand(490, 650);
	sand5 = new Sand(520, 650);
	sand6 = new Sand(550, 650);
	sand7 = new Sand(580, 650);
	sand8 = new Sand(610, 650);
	sand9 = new Sand(640, 650);
	sand10 = new Sand(670, 650);
	sand11 = new Sand(700, 650);
	sand12 = new Sand(730, 650);
	sand13 = new Sand(760, 650);
	sand14 = new Sand(790, 650);
	sand15 = new Sand(820, 650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  hammer1.display();
  stone1.display();
  rubber1.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  drawSprites();
 
}



