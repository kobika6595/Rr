

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
  
  
  game = new Game();
  rules= new Rule()
  game.getState();
  game.start();

  button = createImg('./assets/cut_button.png');
  button.position(300,50);
 // button.visible=false
  button.size(50,50);
  button.mouseClicked(rolled);

  c1 = createImg('./assets/c2 (2).png');
  c1.position(300,150);
 // button.visible=false
  c1.size(75,80);
  c1.mouseClicked(OnMouseUp);
  
 // dice= createSprite(300,height-300)
  //dice.addImage(di4)
  player1_Start1 = createSprite(760,490,50,50);
 player1_Start1.visible=false
  player1_Start2 = createSprite(760,575,50,50);
  player1_Start2.visible=false
  player1_Start3 = createSprite(760,660,50,50);
  player1_Start3.visible=false
  player1_Start4 = createSprite(760,745,50,50);
  player1_Start4.visible=false
  middle1 = createSprite(850,745,50,50);
  middle1.visible=false
  middle2 = createSprite(850,660,50,50);
  middle2.visible=false
  middle3 = createSprite(850,575,50,50); 
  middle3.visible=false
  middle4 = createSprite(850,490,50,50);
  middle4.visible=false
  middle5 = createSprite(850,405,50,50);
  middle5.visible=false
  middle6 = createSprite(850,320,50,50);
  middle6.visible=false
  middle7 = createSprite(850,235,50,50);
  middle7.visible=false
  middle8 = createSprite(850,150,50,50);
  middle8.visible=false
  player1End1 = createSprite(760,150,50,50);
  player1End1.visible=false
  player1End2 = createSprite(760,235,50,50);
  player1End2.visible=false
  player2_Start1 = createSprite(945,490,50,50);
  player2_Start1.visible=false
  player2_Start2 = createSprite(945,575,50,50);
  player2_Start2.visible=false
  player2_Start3 = createSprite(945,660,50,50);
  player2_Start3.visible=false
  player2_Start4= createSprite(945,745,50,50);
  player2_Start4.visible=false
  player2End1 = createSprite(945,150,50,50);
  player2End1.visible=false
  player2End2 = createSprite(945,235,50,50);
  player2End2.visible=false


  //World.add(world,player1_Start1);
  

 
  
 
}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
    rules.display()
  }

 
  
  
  if (gameState === 1) {

    rules.hide()
    game.play();
    fill("pink")
    //ellipse(player1_Start1.position.x,player1_Start1.position.y,30)
    
   if(mousePressedOver(p1c1)){
     console.log("hi")
   }
    
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
    // c1.position(nextTiles[j].body.position.x,nextTiles[j].body.position.y)
   // }
  //  else{
    //  c1=p1c1
    //}
  }

  //currentTile=finalTile;
  }
}
