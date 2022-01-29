class Rule {
    constructor() {
      
     
      this.heading = createElement("h1");
      this.r1=createElement("h2")
      this.r2=createElement("h2")
      this.r3=createElement("h2")
      this.r4=createElement("h2")
    }
  
    setElementsPosition() {
     this.heading.position(width/2,350)
     this.r1.position(300,400)
     this.r2.position(300,500)
     this.r3.position(300,550)
     this.r4.position(300,650)


    }
  
    setElementsStyle() {
    this.heading.class("heading")
   this.r1.class("rules")
   this.r2.class("rules")
   this.r3.class("rules")
   this.r4.class("rules")

    }
  
    hide() {
      this.heading.hide();
      this.r1.hide();
      this.r2.hide();
      this.r3.hide();
      this.r4.hide();
    }
  
    
    
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.heading.html("RULES")
      this.r1.html("1.Throw the dice to decide who plays first - highest score goes first,</br> if it's a draw, throw again.")
      this.r2.html("2.Players take turns to throw three binary lots and move one of their pieces.")
      this.r3.html("3.Only one piece may be moved per throw of the dice </br> pieces must always move forward around the track.")
      this.r4.html("4.If a counter lands upon a square occupied by an opposing counter,</br> the counter landed upon is sent off the board</br> and  must start again from the beginning.")

    }
  }
  