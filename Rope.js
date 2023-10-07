class Rope {
 constructor(bodyA, pointB){
  var options = {
    bodyA: bodyA,
    pointB : pointB,
    satisfies : 1.2,
    length : 250,
  }

  this.pointB = pointB;
  this.Rope = Constraint.create(options);
  world.add(world, this.rope);
 }
  attach(body) {
   this.rope.bodyA = body;
  }

  fly() {
   this.rope.bodyA = null;
  }

  display() {
   if(this.rope.bodyA){
    var pointA =this.rope.bodyA.position;
    var pointB = this.rope.pointB;

    Push();
    stroke("brown");
    strokeWeight(3);
    line(pointB.x, pointB.y, pointA.x, pointA.y);
    Pop();

   }
  }
}
