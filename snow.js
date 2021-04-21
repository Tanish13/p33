class Snow {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadAnimation("sprites/bird.png");
      this.snowImage = loadAnimation("sprites/smoke.png");
      this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
  }
  