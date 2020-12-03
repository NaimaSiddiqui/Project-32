const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var world,engine
var ground,stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25,box26;
var sling,polygon,polygonImage;
var launchingForce=200;
var score=0;

function preload(){
  polygonImage= loadImage("polygon.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  engine= Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground= new Ground(displayWidth/2,displayHeight-200,displayWidth,20)
  stand1=new Stand(500,400,240,20);
  stand2=new Stand(750,350,150,20);

  
  box1=new Box(400,360,40,40);
  box2=new Box(440,360,40,40);
  box3=new Box(480,360,40,40);
  box4=new Box(520,360,40,40);
  box5=new Box(560,360,40,40);
  
  box6=new Box(420,320,40,40);
  box7=new Box(460,320,40,40);
  box8=new Box(500,320,40,40);
  box9=new Box(540,320,40,40);

  box10=new Box(440,280,40,40);
  box11=new Box(480,280,40,40);
  box12=new Box(520,280,40,40);

  box13=new Box(460,240,40,40);
  box14=new Box(500,240,40,40);

  box15=new Box(480,200,40,40);


  box22=new Box(700,310,40,40);
  box21=new Box(740,310,40,40);
  box23=new Box(780,310,40,40);

  box25=new Box(720,290,40,40);
  box24=new Box(760,290,40,40);

  box26=new Box(740,250,40,40); 

polygon= Bodies.circle(28,409,10,{'density': 1});
World.add(world,polygon)
 sling= new SlingShot(this.polygon,{x:130,y:320});
 Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);  
 
ground.display();
stand1.display();
stand2.display();
sling.display();

fill("skyblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("pink")
box6.display();
box7.display();
box8.display();
box9.display();

fill("lightgreen")
box10.display();
box11.display();
box12.display();

fill("turquoise");
box13.display();
box14.display();

fill("purple");
box15.display();

//------------------------------------------
fill("gold");
box21.display();
box22.display();
box23.display();

fill("silver");
box24.display();
box25.display();

fill("turquoise");
box26.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();


//sling.display();
image(polygonImage,polygon.position.x,polygon.position.y,30,30);
textSize(25);
text("Press Space to get the second Chance !", 100,100)
text("Score:  "+score,750,40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY})

}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
//Matter.Body.setPosition(sling.body,{x:13, y:320})
sling.attach(this.polygon);
}
}