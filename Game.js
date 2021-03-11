class Game {
    constructor(){

    }
getState(){
    var gsref=database.ref('gameState')
    gsref.on("value",function(data){
        gameState=data.val()
    })
}
update(state){
  database.ref('/').update({
      gameState:state
  })
}
async start(){
    if(gameState==0){
        player=new Player()
        var pRef=await database.ref('playerCount').once("value")
        if(pRef.exists()){
            playerCount=pRef.val()
            player.getCount()
        }
        form=new Form()
        form.display()
    }
    car1=createSprite(100,200)
    car2=createSprite(200,200)
    car3=createSprite(300,200)
    car4=createSprite(400,200)
    cars=[car1,car2,car3,car4]
    car1.addImage(car1Img)
    car2.addImage(car2Img)
    car3.addImage(car3Img)
    car4.addImage(car4Img)
}
play(){
    form.hide()
    text("GAME START",120,100)
    Player.getPlayerInfo()
    if(allPlayers!=undefined){
        background("black") 
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5) 
    var x=180
    var index=0,y
    for (var i in allPlayers){

        index=index+1
        x=x+200
        y=displayHeight-allPlayers[i].distance
        cars[index-1].x=x
        cars[index-1].y=y

        if(index==player.index){
            cars[index-1].shapeColor="red"
            fill("red")
            ellipse(x,y,60,60)
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
        else{
            cars[index-1].shapeColor="black"
        }
       // text(allPlayers[i].name+" "+allPlayers[i].distance,120,pos)
        //pos=pos+25

    }
   
    }
    if(keyIsDown(UP_ARROW)&&player.index!=null){
        player.distance=player.distance+50
        player.update()
    }
    if(player.distance>3800){
        gameState=2
    }
    drawSprites()
}
 end(){
     console.log("The End")          
 }
























}
