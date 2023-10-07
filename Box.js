class Box {
  constructor(x,y,width,height){
    var options = {
      "restitution":0.8,
      "friction": 1.0,
      "density":0.04
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    world.add(world, this.body);
  
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    Push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokewidth(4);
    stroke("green");
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
  }
}












