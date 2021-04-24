const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Plinko = [];
var Particles = [];
var Divisions = [];
var divisionHeight= 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(240, 790, 480, 10)

  for (var k= 0; k <=width; k = k +80){
    Divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j= 40; j <=width; j = j +50){
    Plinko.push(new plinko(j,75,10));
  }

  for (var j= 40; j <=width; j = j +50){
    Plinko.push(new plinko(j,175,10));
  }

  for (var j= 40; j <=width; j = j +50){
    Plinko.push(new plinko(j,275,10));
  }

  for (var j= 40; j <=width; j = j +50){
    Plinko.push(new plinko(j,375,10));
  }

}

function draw() {

  background("black");
  Engine.update(engine);

  
  ground1.display();

  for (var k = 0; k < Divisions.length; k++){
    Divisions[k].display();
  }

  for (var o = 0; o < Plinko.length; o++){
    Plinko[o].display();
  }

  if(frameCount%60===0){
    Particles.push(new particle(random(width/2-10, width/2+10), 10, 10))
  }

  for (var a = 0; a <Particles.length; a++){
    Particles[a].display();
  }
  
  drawSprites();
}