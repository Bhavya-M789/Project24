class Hammer {
    constructor(x, y) {
        var options = {
            'density': 2, 
            'friction':2.5, 
            'restitution': 0.5
        };
        this.body = Bodies.rectangle(x, y, 200, 60, options); 
        this.width = 170;
        this.height = 45;
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position; 
        pose.x = mouseX;
        pose.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pose.x, pose.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop ();
    }
}