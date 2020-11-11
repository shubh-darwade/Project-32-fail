
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b,c=0,d=1;
var a=2;
var bg="day.png";
var backgroundImg;

function preload()
{
  GetBackgroundImg(); 
  
}
function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  
 polygon1= new polygon(300,250,60);
 chain1 = new chain(polygon1.body,{x:300,y:250});

          

 ground1= new Ground(750,650,400,10);
 ground2= new Ground(1000,300,300,10)

 bbox1 = new BlueBox(750,620);
 bbox2 = new BlueBox(700,620);
 bbox3 = new BlueBox(800,620);
 bbox4 = new BlueBox(850,620);
 bbox5 = new BlueBox(650,620);
 bbox6 = new BlueBox(900,620);
 bbox7 = new BlueBox(600,620);
 
 pbox1 = new BlueBox(750,570);
 pbox2 = new BlueBox(700,570);
 pbox3 = new BlueBox(800,570);
 pbox4 = new BlueBox(850,570);
 pbox5 = new BlueBox(650,570);
 
 box1 = new BlueBox(750,520);
 box2 = new BlueBox(700,520);
 box3 = new BlueBox(800,520);

 abox1 = new BlueBox(1000,270);
 abox2 = new BlueBox(1050,270);
 abox3 = new BlueBox(950,270);
 abox4 = new BlueBox(1100,270);
 abox5 = new BlueBox(900,270);

 cbox1 = new BlueBox(1000,220);
 cbox2 = new BlueBox(1050,220);
 cbox3 = new BlueBox(950,220);
 
 dbox1 = new BlueBox(1000,170);

 lbox1 = new BlueBox(750,470);

 Engine.run(engine);

}

function draw() {
  
  if(backgroundImg)

  background(backgroundImg);  
 
  drawSprites();
 

  polygon1.display();
  chain1.display();

  ground1.display();
  ground2.display();

  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();
  bbox6.display();
  bbox7.display();

  pbox1.display();
  pbox2.display();
  pbox3.display();
  pbox4.display();
  pbox5.display();

  box1.display();
  box2.display();
  box3.display();

  abox1.display();
  abox2.display();
  abox3.display();
  abox4.display();
  abox5.display();

  cbox1.display();
  cbox2.display();
  cbox3.display();

  lbox1.display();
  dbox1.display();
  


 noStroke();
textSize(20);
text("Press Hold the ploygon backwards",400,100);

}

function mouseDragged() {
  if(d===1)
  {
  Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased() {
 d=2;
  chain1.fly();
}

function keyPressed() 
{
  if(keyCode === 32)
  {
    d=1;
     Body.setPosition(polygon1.body,{x:300,y:250});
     chain1.chain.bodyA=polygon1.body;       
   
  } 
  
 
}

async function GetBackgroundImg()
{
  var time = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
  var timeJSON = await time.json();

var dt = timeJSON.datetime;

var hour = dt.slice(11,13);
  console.log(hour);

if(hour >= 6 && hour <= 18)
{
   bg ="day.png";
}
else
{
  bg = "night.png";
}
backgroundImg = loadImage(bg);
}
             