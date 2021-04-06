class Stone{
    constructor(x,y,width,height) {
        var options = {
         friction: 5,
         density: 5,
         
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        var pos =this.body.position;
        
        
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      strokeWeight(3);
      stroke('brown')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
      }
    }