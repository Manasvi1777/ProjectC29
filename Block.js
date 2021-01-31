class Block{
  constructor(x, y, width, height,colorcode) {
      var options = {
          restitution:0.4,
          friction:0.4,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colorcode=colorcode
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}