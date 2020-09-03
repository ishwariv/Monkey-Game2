//global variables' declaration
var monkey , monkey_running, ground, invisibleGround,bg;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var x1=0;
var x2;
var scrollSpeed=2;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 bg=loadImage("jungle.jpeg");
}

function setup() {
          createCanvas(400,400);
  
          x2=width;
  
          //monkey
          monkey=createSprite(100,320,20,50);
          monkey.addAnimation("monkey",monkey_running);
          monkey.scale=0.1;
          
          //ground  
          ground=createSprite(400,350,800,10);
          ground.velocityX=-4;  
  
          //grouping sprites
          FoodGroup=createGroup();
          obstacleGroup=createGroup();
}

function draw() {
           //background
          image(bg,x1,0,width,height);
          image(bg,x2,0,width,height);
          x1 -= scrollSpeed;
          x2 -= scrollSpeed;

          if (x1 < -width){
            x1 = width;
          }
          if (x2 < -width){
            x2 = width;
          }
          
          //Monkey should jump when space pressed
          if(keyDown("space")&&monkey.y>=300){
            monkey.velocityY = -12;  
          }
          
          //Gravity
          monkey.velocityY=monkey.velocityY+0.35;  
          
          //never-ending ground  
          if (ground.x < 0){
              ground.x = ground.width/2;
          }
  
          //colliding with ground
          monkey.collide(ground);
  
          //user-defined function
          bananas();
          obstacles();
  
          //Survival Time
          stroke('black');
          textSize(20);
          fill('black');
              survivalTime=survivalTime+Math.round(getFrameRate()/62);
          text("Survival Time: " + survivalTime,125,50);
          
          if(obstacleGroup.isTouching(monkey)
          {
            ground.velocityX=0;
            banana.velocityX=0;
            obstacle.velocityX=0;
            text("Game Over!",125,100);
          }
          })

          drawSprites();
}

function bananas(){
          if(frameCount % 80 === 0)
          {
            banana = createSprite(380,Math.round(random(120,200)),20,20);
            banana.addImage(bananaImage);
            banana.scale=0.10;
            banana.velocityX = -5;
            banana.lifetime=70;

            FoodGroup.add(banana);
          }
}

function obstacles(){
          if(frameCount % 300 === 0){
            obstacle = createSprite(350,340,20,20);
            obstacle.addImage(obstacleImage);
            obstacle.scale=0.15;
            obstacle.velocityX = -5;
            obstacle.lifetime=75;

            obstacleGroup.add(obstacle);
          }
}