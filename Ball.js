class Ball{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body)
        this.radius=30;
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        ellipseMode(CENTER);
        this.body.position.x=pos.x;
        this.body.position.y=pos.y;
        pos.x=mouseX
        pos.y=mouseY
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("#E800E3");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}