var iss, spC, sC1, sC2, sC3, sC4;
var issIm, im1, im2, im3, im4;
var bgImg;

function preload(){
  bgImg = loadImage("Docking-undocking/spacebg.jpg")
  issImg = loadImage("Docking-undocking/iss.png");
  im1 = loadImage("Docking-undocking/spacecraft1.png");
  im2 = loadImage("Docking-undocking/spacecraft2.png");
  im3 = loadImage("Docking-undocking/spacecraft3.png");
  im4 = loadImage("Docking-undocking/spacecraft4.png");
}
function setup() {
  createCanvas(800,500);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("spaceCraft", issImg);
  iss.scale = 0.7;

  spC = createSprite(400, 400, 20,20);
  spC.addImage("space", im1);
  spC.scale = 0.2;
  spC.addImage("spaceCr", im2);
  spC.addImage("spaceCra", im3);
  spC.addImage("spaceCraft", im4);
}

function draw() {
  background(bgImg);  

  if (keyDown("up")){
    spC.changeImage("spaceCr", im2);
    spC.y += -1;
  }
  else{
    spC.changeImage("space", im1);
  }


  if (keyDown("down")){
    spC.changeImage("space", im1);
    spC.y += 1;
  }
   

  if (keyDown("left")){
    spC.changeImage("spaceCra", im3);
    spC.x += -1;
  }
  

  if (keyDown("right")){
    spC.changeImage("spaceCraft", im4);
    spC.x += 1;
  }
  

console.log(spC.x, spC.y);

if(spC.x==351 && spC.y==264 ){
  textSize(40)
  fill("yellow")
  text("DOCKING SUCCESSFUL", 250, 350);
}


  drawSprites();
}