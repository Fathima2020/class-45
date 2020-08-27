var database,gameState=0,playerCount;
var form,player,game;


function setup() {
  createCanvas (displayWidth,displayHeight-150);
  database=firebase.database();
  game=new Game ();
  game.start();
}
function draw() {
  background("yellow");  
  if(playerCount===2){
   game.update(1);
   

  }
}