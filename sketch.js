var database;
var form, player, game;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var basket1,basket2
var baskets = []
var playerAtEnd = 0
function preload(){
    appleImg = loadImage("images/apple2.png")
    bananaImg = loadImage("images/banana2.png")
    basketImg = loadImage("images/basket2.png")
    jungleImg = loadImage("images/jungle.jpg")
    melonImg = loadImage("images/melon2.png")
    pineappleImg = loadImage("images/pineapple2.png")
}

function setup(){    
    createCanvas(displayWidth-100,displayHeight-100)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount === 2){
        game.update(1)
    }
    if(gameState ===1){
        clear()
        game.play();
    }
    else if(gameState === 2){
        clear()
        game.end();
    }

}