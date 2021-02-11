
var a,b;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  a=createSprite(400, 200, 50, 80);
  b=createSprite(300,200,80,50);
  a.shapeColor="orange";
  b.shapeColor="orange"
}
function draw() {
  background(255,255,255);  
  a.x=mouseX;
  a.y=mouseY;
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2  &&  a.y-b.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2 )
  {
   a.shapeColor="blue";
   b.shapeColor="blue";
}
 else{
    a.shapeColor="orange";
    b.shapeColor="orange";
  }
  drawSprites();
}
