class Greenbox {
    constructor(x, y) {
      var options = {
          restitution:0.4,
          friction:0.2,
      }
      this.width = 30;
      this.height = 40;
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill("lime");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };