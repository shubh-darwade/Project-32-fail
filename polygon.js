  
class polygon
{
    constructor(x,y,radius)
    {
        this.body=Bodies.circle(x,y,radius/2);
        this.width=radius;
        this.height=radius;
        this.image=loadImage("polygon.png")
        World.add(world,this.body);
    }
      display()
      {
          var spos=this.body.position;

          

          imageMode(CENTER);
         image(this.image,spos.x,spos.y,this.width,this.height);

      }
}
