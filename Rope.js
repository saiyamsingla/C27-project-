class Rope{
    constructor(pointA,bodyB){

        

        var options={
            pointA: pointA,
            bodyB : bodyB,
           isStatic:true
            
        };
        this.pointA=pointA;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
var pointA= this.pointA; //var pos =this.body.positon
var pointB=this.rope.bodyB.position;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);                                          //pos.x,pos.y
    }
}