class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.04,
            'friction':0.5,
            'density':0.1,
            
        }
        this.Visibility=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }


      score(){
       if(this.Visibility<0 && this.Visibility > -20 ) {
       
         score=score+1;
         console.log("score read" + score)
       }
      }

      display(){
        console.log(this.body.speed);
        if(this.body.speed<5){
        var angle = this.body.angle;
      
        push();
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        
        pop();
        }
        else{
          World.remove(world, this.body);  // i think the box is removed from the world as soon as the speed is > 5, is it coz of this?

          push();
          this.Visibility=this.Visibility-5;
         
          pop();

        }
      }
}

