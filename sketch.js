//Create variables here
var dog,dogimg;
var happyDogimg;
var database;

var  foodS;
var foodstock;
var database;

function preload()
{
  dogimg=loadImage("images/dogImg.png");
  happydogimg=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database =firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;


  foodstock= database.ref('food');
  foodstock.on("value", readStock );
}


function draw() {  
  background(46,137,87);
 // if(foodstock!=undefined){
    if(keyWentDown(UP_ARROW)){
      dog.addImage(happydogimg);   
      writeStock(foodS);
      }
  //}
  
 
  drawSprites();
  //add styles here
  text("Note-press UP_ARROW to feed drago milk",250,100 );
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food : x
  })
}






