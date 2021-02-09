class hero {
    constructor(x,y,r){
     var options = {
          density: 1,
          frictionAir: 1
     };
     this.x=x;
     this.y=y;
     this.r=r;
     hero.loadImage("Superhero-01");
     this.body = bodies.circle(this.x, this.y, this.r/2, options);
     world.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
    }
}