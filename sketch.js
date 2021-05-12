
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle;
var count = 0; 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = "PLAY";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
     
}
function draw() {
  background("black");
 
  fill("white");
  textSize(30);
  text("Score : " + score ,50,50); 
  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }  
              else {
                   score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }    
              
        }
  
      }
  fill("white");
  textSize(30);
  text("500",15,525);
  text("500",95,525);
  text("500",175,525);

  text("100",255,525);
  text("100",335,525);
  text("100",415,525);
  text("100",495,525);
  
  text("200",575,525);
  text("200",655,525);
  text("200",735,525);
  
  
  if(count >= 5)  {
    gameState = "end";
  }
  if(gameState === "end"){
    textSize(60);
    fill("red")
    text("GAME OVER",200,250);
    textSize(30);

    //particles = [];
    //fill("white");
    //text("Your Score: " + score, 250,350);
  } 
 
//   text("Score : "+score,20,30);


}
function mousePressed(){
  
  particle= new Particle(mouseX,10,10,10);
  particles.push(particle);
    count++;
  }
