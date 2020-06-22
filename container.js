class Container {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, width,height,options);
        this.image = loadImage("sprites/dustbin.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    fill("white");
    image(pos.x,pos.y,this.width,this.height);
  }
}