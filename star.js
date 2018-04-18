var angle1=0;
var angle2=200;
var stars= [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	for(var i=0; i<15; i++){
		stars[i] = new Star(200*i,random(0,height),0);
		
}
	
}
function draw() {
	background(21, 8, 50);
	noFill();
	for(var i=0;i<stars.length; i++){
	
		stars[i].show();
		stars[i].update();

  }
}	
function Star(x,y,diameter){
	this.x=x;
	this.y=y;
	this.diameter=diameter;
	this.angle1=angle1;
	this.angle2=angle2;
	this.show=function(){
		
	stroke(155,227,255,20);
		arc(this.x,this.y,30,30,200,this.angle1);
    stroke(76,178,238,50);
		arc(this.x,this.y,35,35,this.angle2,-150);
		stroke(155,227,255,60);
		arc(this.x,this.y,80,80,200,this.angle1);
    stroke(76,178,238,200,50);
		arc(this.x,this.y,95,95,this.angle2,-150);
		stroke(7,153,242,60);
		arc(this.x,this.y,160,160,300,200-this.angle1);
		stroke(134,233,253,100);
		arc(this.x,this.y,165,165,0,200-this.angle2);
		stroke(143,162,223,120);
		arc(this.x,this.y,180,180,200,this.angle1);
    stroke(76,178,238,150);
		arc(this.x,this.y,185,185,this.angle2,-150);
		stroke(155,227,255,150);
		arc(this.x,this.y,260,260,300,200-this.angle1);
		stroke(40,144,223,150);
		arc(this.x,this.y,215,215,0,200-this.angle2);
		stroke(7,153,242,50);
		arc(this.x,this.y,280,280,300,200-this.angle1);
		stroke(134,233,253,150);
		arc(this.x,this.y,290,290,0,200-this.angle2);
		stroke(143,162,223,100);
		arc(this.x,this.y,292,292,200,this.angle1);
		stroke(155,227,255,30);
		arc(this.x,this.y,360,360,300,200-this.angle1);
		stroke(40,144,223,50);
		arc(this.x,this.y,375,375,0,200-this.angle2);
		stroke(7,153,242,150);
		arc(this.x,this.y,380,380,300,this.angle1);
		stroke(134,233,253,40);
		arc(this.x,this.y,390,390,0,this.angle2);
		stroke(97,150,255,100);
		arc(this.x,this.y,400,400,100,this.angle1);
			stroke(155,227,255,150);
		arc(this.x,this.y,460,460,300,200-this.angle1);
		stroke(40,144,223,50);
		arc(this.x,this.y,500,500,0,200-this.angle2);
		stroke(7,153,242,150,40);
		arc(this.x,this.y,580,580,300,this.angle1);
		stroke(134,233,253,50);
		arc(this.x,this.y,590,590,0,this.angle2);
		stroke(97,150,255,220);
		arc(this.x,this.y,600,600,100,this.angle1);
		
		
		
		
	
	}
	this.update=function(){
		this.angle1+=0.2;
		this.angle2-=0.2
	}
}