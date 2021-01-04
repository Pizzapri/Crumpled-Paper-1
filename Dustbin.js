class Dustbin{
    constructor(x,y,width,height){
        var options={
            "isStatic":true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height
        World.add(world,this.body);
    }
    display(){
        var posx=this.body.position.x;
        var posy=this.body.position.y;
        push();
        translate(posx,posy);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height)
        pop();
        }
}