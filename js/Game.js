class Game {
  constructor(x,y) {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.playerMoving=false;
    transform=x,y;
    this.isDoneRolling=false;
    this.p1c1=createButton("")
 
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    p1c1= createSprite(760, 490);
    p1c1.addImage("coin1", coin1);
    p1c1.scale=0.2
  

    p1c2= createSprite( 219, height/3);
    p1c2.addImage("coin1", coin1);
    p1c2.scale=0.2
   
   
    p1c3= createSprite(275, height/3);
    p1c3.addImage("coin1", coin1);
    p1c3.scale=0.2
   
    p1c4= createSprite(331, height/3);
    p1c4.addImage("coin1", coin1);
    p1c4.scale=0.2
   
    p1c5= createSprite(387, height/3);
    p1c5.addImage("coin1", coin1);
    p1c5.scale=0.2
   
    p1c6= createSprite(443, height/3);
    p1c6.addImage("coin1", coin1);
    p1c6.scale=0.2
   
    p1c7= createSprite(500, height/3);
    p1c7.addImage("coin1", coin1);
    p1c7.scale=0.2
   

    p2c1 = createSprite(width-500, height/3);
    p2c1.addImage("coin2", coin2);
    p2c1.scale=0.2
    
    p2c2 = createSprite(width-443, height/3);
    p2c2.addImage("coin2", coin2);
    p2c2.scale=0.2

   
    p2c3 = createSprite(width -387, height/3);
    p2c3.addImage("coin2", coin2);
    p2c3.scale=0.2
    
    p2c4 = createSprite(width - 331, height/3);
    p2c4.addImage("coin2", coin2);
    p2c4.scale=0.2
    
    p2c5 = createSprite(width - 275, height/3);
    p2c5.addImage("coin2", coin2);
    p2c5.scale=0.2
    
    p2c6 = createSprite(width-219 , height/3);
    p2c6.addImage("coin2", coin2);
    p2c6.scale=0.2
    
    p2c7 = createSprite(width-163, height/3);
    p2c7.addImage("coin2", coin2);
    p2c7.scale=0.2
    //p1 = [p, car2];

    
    

  }
  

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    //C39
    this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);

    

    
  }

  play() {
    this.handleElements();
    this.handleResetButton();
  
    Player.getPlayersInfo();
   // player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      image(board_img, width/3, 100, width/3, height/1.2);

      

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        
       

        
        
      }

      
    

      drawSprites();
    }
}
/*OnMouseUp(){
  
          var spacesToMove=DiceTotal;

          var finalTile=currentTile;

          for(var i=0;i<spacesToMove;i++){
            if(finalTile==null){
              finalTile=startingTile
            }
            else{
              finalTile=finalTile.nextTiles[0]
            }
          }
    if(finalTile===null){
          return;
    }
  
   transform.position=finalTile.transform.position
          
   currentTile=finalTile;

}

*/


  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
        
      });
      window.location.reload();
    });
  }

 
  
    
  

    

  

  
  
  showRank() {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
      
    });
  }
}

