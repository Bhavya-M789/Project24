class Sand{
    constructor(x, y, width, height){
        var options = {
            restitution: 1.0,
            friction: 7, 
            density: 1
        }
        this.body = Bodies.rectangle(x, y, 15, 15, options);
        this.width = 25;
        this.height = 25;
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pose.x, pose.y);
        rotate (angle);
        strokeWeight(2);
        stroke("black");
        fill("red");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop ();
    }
}