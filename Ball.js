class Ball {
    constructor(x, y, widht, height){
        var options = {
            density : 1,
            frictionAir : 0.005};

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x =x;
        this.y =y;
        World.add(world, this.body);


    }
    display(){
       // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.y);
        //rotate(angle);
        fill("blue");
        ellipse(0,0,this.width, this.height);
        pop();
    }
}