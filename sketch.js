function setup() {
  width = 1520;
  height = 720;
  frameRate(10);
  createCanvas(1520, 720);
  s = new Snake();
  len = 20;
  apple = new Apple();
  apple.pickAppleLoc();
}

function Apple(){
      this.x = 0;
      this.y = 0;

    this.pickAppleLoc = function(){
      noCol = floor(width/len);
      noRows = floor(height/len);
      vec = createVector(floor(random(noCol)),floor(random(noRows)));
      vec.mult(len);
      this.x = vec.x;
      this.y = vec.y;
    }

    this.drawApple = function(){
      fill(200,150,0);
      rect(this.x,this.y,len,len);
    }
}


function draw() {
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
  background(51);
  s.updatePos();
  s.drawSnake();
  apple.drawApple();

}




function keyPressed(){
  if(keyCode == LEFT_ARROW){
      s.direction(-1,0);
  }else if(keyCode == RIGHT_ARROW){
    s.direction(1,0);
  }else if(keyCode == DOWN_ARROW){
    s.direction(0,1);
  }else if(keyCode == UP_ARROW){
    s.direction(0,-1);
  }
}

function Snake(){
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 1;
  this.yspeed = 0;


  this.updatePos = function(){
    this.x = this.x + this.xspeed*len;
    this.y = this.y + this.yspeed*len;
    this.x = constrain(this.x,0,width-len);
    this.y = constrain(this.y,0,height-len);
  }

  this.drawSnake = function(){
    fill(255);
    rect(this.x,this.y,len,len);
  }

  this.direction = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }

}
