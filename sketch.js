var car, wall, speed, weight, deformation;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.color(80,80,80);
  car.velocityX = speed;
  deformation = (0.5*weight*speed*speed)/22500;

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (wall.x-car.x<car.width/2+wall.width/2 && 
    car.x-wall.x<car.width/2+wall.width/2){
       car.velocityX = 0;
      if (deformation<100){
        car.color(0,255,0);
      }
      if (deformation<180 &&
        deformation>100){
        car.color(230,230,0);
      }
      if (deformation>180){
        car.color(255,0,0);
      }
    }
}