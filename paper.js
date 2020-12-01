class Paper {
    constructor(x,y,radius){
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic:true
      }  
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;

      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("purple");
      stroke("purple");
      strokeWeight(1);
      circle(0,0,this.radius);
      pop();

      
    }
}