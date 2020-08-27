class Game{
  constructor(){

  
  }

  getState(){
    var getStateref=database.ref("gameState");
    this.getStateref.on("value",function(data){
      gameState=data.val();
    })
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })
  }

 
  async start(){
    if(gameState===0){
      form=new Form();
      form.display();
      player=new Player();
      var playerCountref=await database.ref("playerCount");
      playerCountref.once('value');
      if(playerCountref.exists()){
        player.getCount();
      }
     
    }
  }

  play(){
    form.hide();
    Player.getPlayerinfo();
  }

}



