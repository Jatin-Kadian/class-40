var gameState = 0;
var playerCount,form,player,game
var allPlayers
var car1,car2,car3,car4,cars

 
function preload() {
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
    groundImg = loadImage("images/ground.png")
}


function setup(){
    database=firebase.database()
    createCanvas(displayWidth,displayHeight);
    game= new Game()
    game.getState()
    game.start()
    //temp= createSprite(200,200)
}


function draw(){
   // background("white");
    if (playerCount==4){
        game.update(1)
    }
    if(gameState==1){

        clear()
        game.play()
        
    }
    
    if (gameState==2){
        game.end()
    }
    }
   
    






