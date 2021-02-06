class Ball {
    constructor(x, y, r, angle) {
        var options = {
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}