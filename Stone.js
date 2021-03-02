class Stone{
    constructor(x, y, width, height, angle){
        var options = {
            'restitution': 0.5, 
            'friction': 4, 
            'density': 0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height; 
        // Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pose.x, pose.y);
        rotate (angle);
        rectMode(CENTER);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop ();
     }
}
