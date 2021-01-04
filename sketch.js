const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions = []
var plinkos = []
var particles = []
var particle
var divisionHeight =250
var score = 0
var count = 0;
var gameState ="start";


function setup() {
  createCanvas(480,660);
  engine = Engine.create();
  world = engine.world;
 ground0 = new Ground(width, height/2, 10, height);
 ground1= new Ground(0, height/2, 10, height);
 ground2 = new Divisions(240, height, width,20 );

 

 for(var k=0; k<=width; k=k+80 ){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j=j + 50 ){

plinkos.push(new Plinko(j,175));

}




 for (var j = 15; j <=width-10; j=j + 50 ){

  plinkos.push(new Plinko(j,75));
  
  }

  for (var j = 40; j <=width; j=j + 50 ){

    plinkos.push(new Plinko(j,275));
   
    }

   

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground0.display();
  ground1.display();
  ground2.display();
 

  //DISPLAYING SCORE

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 216, 222);
    
  }

   //text(mouseX + "," + mouseY, 20, 50);
    textSize(40)
    fill(241,158,197)
   text("Score : "+score,260,40);
   textSize(25)
   text(" 500 ", 19, 416);
   text(" 500 ", 98, 416);
   text(" 100 ", 179, 416);
   text(" 100 ", 256, 416);
   text(" 200 ", 340, 416);
   text(" 200 ",422, 416);
  
  

  for(var k=0; k<divisions.length; k++ ){
    divisions[k].display();
  }

    for(var j=0; j<plinkos.length; j++ ){
      plinkos[j].display();
}

for(var j=0; j<plinkos.length; j++ ){
  plinkos[j].display();
}

for(var j=0; j<plinkos.length; j++ ){
  plinkos[j].display();
}

//SCORING AND THE NEW THINGS

if(particle!=null)
    {
       particle.display();
       if (particle.body.position.y>631)
       {
             if (particle.body.position.x < 470) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 313 && particle.body.position.x > 165 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x <472 && particle.body.position.x > 325 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10);
      // particle.display();

  }   
}



