class Form {

  constructor(){
    this.input=createInput('Name');
    this.button=createButton('Enter');
    this.greeting=createElement('h2');
    this.title=createElement('h1');
  }
  display(){
    this.title.html("Fun Race");
    this.title.position(350,50);
    
    this.input.position(350,250);
    this.button.position(350,350);
    
    this.button.mousePressed(()=>{
      this.button.hide();
      this.input.hide();

      player.name=this.input.value;
      playerCount+=1
      //playerCount=playerCount+1
      player.updateCount(playerCount);
    });


  }
}