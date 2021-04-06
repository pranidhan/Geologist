const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    
    rubber= new Rubber(200,200,40);
    iron= new Iron(40,40,40,100);
    stone=new Stone(900,300,50,50)
    sand1 = new Sand(700,300,2,2);
    sand2 = new Sand(700,300,2,2);
    sand3 = new Sand(700,300,2,2);
    sand4 = new Sand(700,300,2,2);
    sand5 = new Sand(700,300,2,2);
    sand6 = new Sand(700,300,2,2);
    sand7 = new Sand(700,300,2,2);
    sand8 = new Sand(700,300,2,2);
    sand9 = new Sand(700,300,2,2);
    sand10 = new Sand(700,300,2,2);
    sand11 = new Sand(700,300,2,2);
    sand12 = new Sand(700,300,2,2);
    sand13 = new Sand(700,300,2,2);
    sand14 = new Sand(700,300,2,2);
    sand15 = new Sand(700,300,2,2);
    sand16 = new Sand(700,300,2,2);
   
   
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    sand11.display();
    sand12.display();
    sand13.display();
    sand14.display();
    sand15.display();
    sand16.display();


}