class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getCount(){
        var pcref=database.ref('playerCount')
        pcref.on("value",function(data){
            playerCount=data.val()
        })
    }
    update(){
       var Pindex= "players/player"+this.index
       database.ref(Pindex).set({
           name:this.name,
           distance:this.distance 
       })
    }
     updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
     }   
     static getPlayerInfo(){
         var pRef = database.ref('players')
         pRef.on("value" ,(data)=>{allPlayers=data.val()})

             }
    
}

























