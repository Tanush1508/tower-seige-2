const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ball = new Ball(400,100,70,70);

  block1 = new Block(600, 100, 70, 70);
  block2 = new Block(600, 100, 70, 70);
  block3 = new Block(700, 100, 70, 70);
  block4 = new Block(700, 100, 70, 70);
  block5 = new Block(700, 100, 70, 70);
  block6 = new Block(800,100,70,70);
  block7 = new Block(800,100,70,70);
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);
  block10 = new Block(900,100,70,70);
  block11 = new Block(900,100,70,70);
  block12 = new Block(900,100,70,70);
  block13 = new Block(1000,100,70,70);
  block14 = new Block(1000,100,70,70);



  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  ball.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

 

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
} 