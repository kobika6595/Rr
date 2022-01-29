const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

let engine;
let world;

var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blast_Img;
var board_img
var p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7;
var p2c1,p2c2,p2c3,p2c4,p2c5,p2c6,p2c7;
var bg_img
var coin1 , coin2;
var di1, di2 , di3,di4;
var d1,d2,d3,d4;
var dice;
var di
var DiceImage=[di1,di2,di3,di4];
var rules;
var button;
var DiceTotal;
var DiceValues=[1,2,3,4];
var isRolling=false;
var player1_Start1,player1_Start2,player1_Start3,player1_Start4,middle1,middle2,middle3,middle4,middle5,middle6,middle7,middle8,player1End1,player1End2;
var player2_Start1,player2_Start2,player2_Start3,player2_Start4,player2End1,player2End2;
var food;
var nextTiles=[ player1_Start1,player1_Start2,player1_Start3,player1_Start4,middle1,middle2,middle3,middle4,middle5,middle6,middle7,middle8,player1End1,player1End2,
   player2_Start1,player2_Start2,player2_Start3,player2_Start4,player2End1,player2End2];
var c1
var startingTile=[p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7];
var options={
    isStatic:true
}
var currentTile;
var transform=[p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7];
function preload() {
  backgroundImage = loadImage("./assets/bg.jpeg");
 // bg_img= loadImage("./assets/f1.jpeg");
  board_img=loadImage( "./assets/board.png")
  coin1=loadImage("./assets/c1 (2).png")
  coin2=loadImage("./assets/c2 (2).png")
 di1=loadImage("./assets/di1.png")
 di2=loadImage("./assets/di2.png")
 di3=loadImage("./assets/di3.png")
 di4=loadImage("./assets/di4.png")
 f2=loadImage("./assets/f2.jpeg")
 food=loadImage("melon.png")
 
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  
  game = new Game();
  rules= new Rule()
  game.getState();
  game.start();

  button = createImg('./assets/cut_button.png');
  button.position(300,50);
 // button.visible=false
  button.size(100,50);
  button.mouseClicked(rolled);

  c1 = createImg('./assets/c2 (2).png');
  c1.position(300,150);
 // button.visible=false
  c1.size(75,80);
  c1.mouseClicked(OnMouseUp);
  
 // dice= createSprite(300,height-300)
  //dice.addImage(di4)
  //player1_Start1 = Bodies.circle(760,490,100,options);
 // player1_Start1.visible=false
  player1_Start2 = Bodies.circle(760,575,100,options);
  player1_Start3 = Bodies.circle(760,660,100,options);
  player1_Start4 = Bodies.circle(760,745,100,options);
  middle1 = Bodies.circle(850,745,100,options);
  middle2 = Bodies.circle(850,660,100,options);
  middle3 = Bodies.circle(850,575,100,options); 
  middle4 = Bodies.circle(850,490,100,options);
  middle5 = Bodies.circle(850,405,100,options);
  middle6 = Bodies.circle(850,320,100,options);
  middle7 = Bodies.circle(850,235,100,options);
  middle8 = Bodies.circle(850,150,100,options);
  player1End1 = Bodies.circle(760,150,100,options);
  player1End2 = Bodies.circle(760,235,100,options);
  player2_Start1 = Bodies.circle(945,490,100,options);
  player2_Start2 = Bodies.circle(945,575,100,options);
  player2_Start3 = Bodies.circle(945,660,100,options);
  player2_Start4= Bodies.circle(945,745,100,options);
  player2End1 = Bodies.circle(945,150,100,options);
  player2End2 = Bodies.circle(945,235,100,options);



  //World.add(world,player1_Start1);
  World.add(world,player1_Start2);
  World.add(world,player1_Start3);
  World.add(world,player1_Start4);
  World.add(world,middle1);
  World.add(world,middle2);
  World.add(world,middle3);
  World.add(world,middle4);
  World.add(world,middle5);
  World.add(world,middle6);
  World.add(world,middle7);
  World.add(world,middle8);
  World.add(world,player1End1);
  World.add(world,player1End2);
  World.add(world,player2_Start1);
  World.add(world,player2_Start2);
  World.add(world,player2_Start3);
  World.add(world,player2_Start4);
  World.add(world,player2End1);
  World.add(world,player2End2);

  ellipseMode(RADIUS);
  
 
}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
    rules.display()
  }

  Engine.update(engine);
  
  
  if (gameState === 1) {
    rules.hide()
    game.play();
    fill("pink")
    //ellipse(player1_Start1.position.x,player1_Start1.position.y,30)
    ellipse(player1_Start2.position.x,player1_Start2.position.y,30)
    ellipse(player1_Start3.position.x,player1_Start3.position.y,30)
    ellipse(player1_Start4.position.x,player1_Start4.position.y,30)
    ellipse(middle1.position.x,middle1.position.y,30)
    ellipse(middle2.position.x,middle2.position.y,30)
    ellipse(middle3.position.x,middle3.position.y,30)
    ellipse(middle4.position.x,middle4.position.y,30)
    ellipse(middle5.position.x,middle5.position.y,30)
    ellipse(middle6.position.x,middle6.position.y,30)
    ellipse(middle7.position.x,middle7.position.y,30)
    ellipse(middle8.position.x,middle8.position.y,30)
    ellipse(player1End1.position.x,player1End1.position.y,30)
    ellipse(player1End2.position.x,player1End2.position.y,30)
    ellipse(player2_Start1.position.x,player2_Start1.position.y,30)
    ellipse(player2_Start2.position.x,player2_Start2.position.y,30)
    ellipse(player2_Start3.position.x,player2_Start3.position.y,30)
    ellipse(player2_Start4.position.x,player2_Start4.position.y,30)
    ellipse(player2End1.position.x,player2End1.position.y,30)
    ellipse(player2End2.position.x,player2End2.position.y,30)
   
    
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
 
   

  nextTiles[player1_Start1]=player1_Start2;
  nextTiles[player1_Start2]=player1_Start3;
  nextTiles[player1_Start3]=player1_Start4;
  nextTiles[player1_Start4]=middle1;
  nextTiles[middle1]=middle2;
  nextTiles[middle2]=middle3;
  nextTiles[middle3]=middle4;
  nextTiles[middle4]=middle5;
  nextTiles[middle5]=middle6;
  nextTiles[middle6]=middle7;
  nextTiles[middle7]=middle8;
  nextTiles[middle8]=player1End1;
  nextTiles[player2_Start1]=player2_Start2;
  nextTiles[player2_Start2]=player2_Start3;
  nextTiles[player2_Start3]=player2_Start4;
  nextTiles[player2_Start4]=middle1;
  nextTiles[player1End1]=player1End2;
  nextTiles[player2End1]=player2End2;
  startingTile=player1_Start1;


}
function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
  

}
function rolled() {
  DiceTotal=0;
   for(var i=0;i<DiceValues.length;i++){
      DiceValues[i]=Math.round(random(0,1))
      DiceTotal+=DiceValues[i];
     
       if(DiceValues[i]===0){
       dice=DiceImage[random(0, DiceImage.length)];
           
       }
   }
     console.log("rolled :"+ DiceTotal);

     if(dice=== DiceImage[0]){
      di= createSprite(300,height-300)
      di.addImage(di1)
      }
  
    if(dice===DiceImage[1]){
       di= createSprite(300,height-300)
      di.addImage(di2)
      }
  
    if(dice===DiceImage[2]){
      di= createSprite(300,height-300)
      di.addImage(di3)
      }
  
    if(dice===DiceImage[3]){
         di= createSprite(300,height-300)
        di.addImage(di4)
      }
    
    
  
}
function OnMouseUp(){
  
 var spacesToMove=DiceTotal;
  //c1.position(730,540)

  //var finalTile=currentTile;

  for(var i=0;i<spacesToMove;i++){
    for(var j=0;j<nextTiles.length;j++){
    //  nextTiles[j]=i
     // if(c1.position===nextTiles[0]){
     c1.position(nextTiles[j].body.position.x,nextTiles[j].body.position.y)
   // }
  //  else{
    //  c1=p1c1
    //}
  }

  //currentTile=finalTile;
  }
}
