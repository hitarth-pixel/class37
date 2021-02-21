var gameState=0;
var playerCount,database;
var Form1,player,game;
var canvas;
var allPlayers;
var  car1,car2,car3,car4;
var car1Image,car2Image,car3Image,car4Image;
var ground,track;
var cars=[];

function preload(){
       
}

function setup(){
       
        canvas=createCanvas(displayWidth-20,displayHeight-30);
        database=firebase.database();
        game=new Game()
        game.getState();
        game.start();
}

function draw(){
       
        if(playerCount===4){
                game.update(1);
         }

        if(gameState===1){
                clear();
                game.play()
        }

}