const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var ground;
var ball;
var box, box2, box3, box4, box5, box6, box7, box8;
var rope;
function setup(){
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 600, 1200, 20);
    ball = new Ball(0,0,20,20);
    box = new Box(900, 100, 70, 70);
    box2 = new Box(900, 100,70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(800,100, 70, 70);
    box5 = new Box(800, 100,70,70);
    box6 = new Box(800, 100, 70, 70);
    box7 = new Box(700, 100, 70,70);
    box8 = new Box(700, 100, 70, 70);
    rope = new Rope(10,50);



}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ball.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    rope.display();
}