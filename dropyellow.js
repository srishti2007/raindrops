class Drop {
    constructor(x,y,width,height) {
      this.body = Bodies.circle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, this.width, this.height);
      
    }
  };