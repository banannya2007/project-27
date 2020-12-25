class rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
   this.rope = Constraint.create(options)
    World.add(world,this.rope);
    }
  rope1=new rope(bobObject1.body, roof.body,-bobDiameter*2,0)
  rope2=new rope(bobObject2.body, roof.body,-bobDiameter*2,0)
  rope3=new rope(bobObject3.body, roof.body,-bobDiameter*2,0)
  rope4=new rope(bobObject4.body, roof.body,-bobDiameter*2,0)
  rope5=new rope(bobObject5.body, roof.body,-bobDiameter*2,0)
}

