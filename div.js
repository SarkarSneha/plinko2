
class Divisions {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      rectMode(CENTER);
      fill(245,178,140);
      stroke(245,178,140)
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }






  };