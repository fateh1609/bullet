var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet = createSprite(50, 200,100, 20);
 wall = createSprite(1200,200,thickness,height/2)

}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    bullet.velocity=0;
    var damage=0.5 * weight * speed *speed/(thickness * thickness *thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }



    if(damage<10){
      wall.shapeColor(0,255,0);
    }
  }
  
  
  drawSprites();
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}