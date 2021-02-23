const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,ball;

function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var object_options = {
    isStatic: true
  }
  var ball_options = {
    restitution: 0.5,friction:0.2
  }
  ball = Bodies.circle(200,100,50,ball_options)
  object = Bodies.rectangle(200,390,400,20, object_options);
  World.add(world,object);
  World.add(world,ball);
  console.log(object.type);
  console.log(object.position.x)

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  circle(ball.position.x,ball.position.y,50)
  drawSprites();
}