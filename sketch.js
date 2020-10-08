
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();

  

  
}


function draw() {
background("white");
  
  stroke("white");
  textSize(15);
  fill("white");
  text("Score:"+score,100,65);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50)
  
  
  
  
  
   if(keyDown("space")) {
        monkey.velocityY = -12;
       }
    
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  Spawnbanana();
  spawnObstacles();
  
  drawSprites();
}
function Spawnbanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,335,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-3;
   
             
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}





