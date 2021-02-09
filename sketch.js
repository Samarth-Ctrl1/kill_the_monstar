var monster, hero, background;
var engine, world;

function preload() {
  monster.loadImage("images/Monster-01");
  monster.loadImage("images/Monster-02");
  hero.loadImage("images/Superhero-01");
  hero.loadImage("images/Superhero-02");
  background.loadImage("images/gamingBackground");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = Engine.world;

}

function draw() {
  background(0);
  ground = new ground(width/2,height,width,20);
  hero = new hero(1500, 400);
  fly = new fly(bodyA, bodyB);
  
}
function mouseDragged(){
 
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}