var gamestate = "serve"
//loads the images, animation and sound
function preload(){
  t_rex=loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimg=loadImage('ground2.png')
  cloudimg= loadImage('cloud.png')
  ob1= loadImage('obstacle1.png')
  ob2= loadImage('obstacle2.png')
  ob3= loadImage('obstacle3.png')
  ob4= loadImage('obstacle4.png')
  ob5= loadImage('obstacle5.png')
  ob6= loadImage('obstacle6.png')
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,180,5,4)
  trex.addAnimation('walking',t_rex)
  trex.scale=0.6
  ground=createSprite(300,190,600,20)
  ground.addImage(groundimg)
  ground2=createSprite(300,200,600,20)
  ground2.visible=false
  cloudG = createGroup()
  obstacleg = createGroup()

}

//indentation - giving tab space in the begining of line

function draw(){
  background(180)
  if(gamestate==="serve"&&keyDown("space") ){
    gamestate= "play"
  }

  trex.collide(ground2)
  if(gamestate === "play"){
    
  if (keyDown('space')&&trex.y>=162) {
    trex.velocityY=-8 
  }
  trex.velocityY=trex.velocityY+0.3
  ground.velocityX=-5
  if(ground.x<0){
    ground.x=600
  }

  clouds()
  cactii()
  if(trex.isTouching(obstacleg)){
    gamestate= "end"
  }
}

if(gamestate==="end"){
  ground.velocityX = 0
  obstacleg.setVelocityXEach(0)
  cloudG.setVelocityXEach(0)
  obstacleg.setLifetimeEach(-5)
  cloudG.setLifetimeEach(-8)
}

  drawSprites()
}

function clouds(){
  if(frameCount%60===0){
    cloud =createSprite(600,random(30,100),60,50)
    cloud.velocityX= -4
    cloud.addImage(cloudimg)
    cloud.scale= 0.6
    trex.depth=cloud.depth+1
    cloud.lifetime=150
    cloudG.add(cloud)
  }
  }



  function cactii(){
    if(frameCount%90===0){
      cactus =createSprite(600,170,60,50)
      cactus.velocityX= -4
      cactus.scale= 0.6
      var choice = Math.round(random(1,6))
      cactus.lifetime= 150
      switch(choice) {
        case 1 : cactus.addImage(ob1)
        break
        case 2 : cactus.addImage(ob2)
        break
        case 3 : cactus.addImage(ob3)
        break
        case 4 : cactus.addImage(ob4)
        break
        case 5 : cactus.addImage(ob5)
        break
        case 6 : cactus.addImage(ob6)
        break 
      }
      obstacleg.add(cactus)
    }
    }
  
  
  