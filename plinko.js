class Plinko {
    constructor(x , y){
        var ops ={
            restitution:1,
            friction:0.1,
            isStatic:true
        }
        this.r =10
        this.body=Bodies.circle(x,y,this.r,ops)
        World.add(world,this.body)
        }
        display(){
        
            push()
           
            fill("white")
            ellipseMode(RADIUS)
            ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
            pop()
        }
        }