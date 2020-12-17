const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var polygonObject;

var base1,base2;

var ground;

var slingshot;

function setup() {

    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
    polygonObject = Bodies.circle(50,200,20);
    World.add(world,polygonObject);

    base1 = new Base(600,400,80,10);

}

function draw() {

    background("green");

    textSize(25);
    text("Drag the hexagonal Stone and Release it,to launch it towards the block!!",50 ,50);

    base1.display();

    drawSprites();

}

