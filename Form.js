class Form{
    constructor(){
        this.input= createInput("name")
        this.button = createButton('play')
        this.greeting=createElement('h1')
        this.reset=createButton('Reset')
    }
           



 display(){
 var title=createElement('h2')
 title.html("car racing game")
 title.position(displayWidth/2-50,0);
 
 
 this.input.position(displayWidth/2-50,displayHeight/2-200)
 
 
 this.button.position(displayWidth/2+10,displayHeight/2-70)
this.reset.position(displayWidth-100,20)

 this.button.mousePressed( ()=> {
     this.input.hide()
     this.button.hide()
      player.name=this.input.value()
     playerCount=playerCount+1
     player.index=playerCount
     player.update()
     player.updateCount(playerCount)
    this.greeting.html("hello "+player.name)
      this.greeting.position(displayWidth/2-10,displayHeight/2-200)
 })
  this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.update(0)
})
}

hide() {
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}










}












