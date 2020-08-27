class Player{
  constructor(){
    this.index=null;
   this.name=null;
   this.goal=0;
  }

  getCount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",(data)=>{
      playerCount=data.val();
    })
    
  }

  updateCount(count){
    database.ref("/").update({
      playerCount:count

    })
  }

  update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
      name:this.name
    })
    
  }

  static getPlayerinfo(){
   var playerinforef= database.ref("players");
   playerinforef.on("value",(data)=>{
     allplayers=data.val();
   })
  }
  
}

