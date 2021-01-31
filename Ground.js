class Ground {
    constructor() {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(this.x,this.y,this.width,this.height,ground_options);
      World.add(world, this.ground);
    }
    display(){
      noStroke();
      fill(188,67,67);
      var pos =this.ground.position;
      rectMode(CENTER);
      rect(pos.x, pos.y,this.width,this.height);
    }
  }
