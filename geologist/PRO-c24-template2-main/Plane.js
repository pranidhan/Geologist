class Plane {
    constructor(x,y,width,height) {
      var options = {
        restituition: 0.8,
       friction: 0.3,
       density: 1,
       isStatic : true ,
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);

      
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    strokeWeight(3);
    stroke('green')
    fill('purple')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
    }
  };