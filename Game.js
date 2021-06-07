class Game{
    constructor(){}

    getState(){
        var gameStateref = database.ref('gamestate')
        gameStateref.on("value", function(data){
         gameState = data.val()
        })
    }

    update(state){
        var gameStateref = database.ref('/')
        gameStateref.update({
            gamestate:state
        })
    }
    //async function
    async start(){
        if(gameState === 0){            
            player = new Player()
            //player.getCount()
            var countRef = await database.ref('playercount').once("value")
            if(countRef.exists()){
                playerCount = countRef.val()
                player.getCount();
            }
            form = new Form()
            form.display()
            basket1 = createSprite(200,displayHeight-150);
            basket1.addImage(basketImg)
            basket2 = createSprite(800,displayHeight-150);
            basket2.addImage(basketImg)
            baskets = [basket1, basket2]
            //console.log(cars)
            
        }
    }

    play(){
        form.hideElements();
        //background(jungleImg)   
        Player.getPlayerInfo()
        var index = 0; //player.index, 1 car1 cars[0], 2 car2 cars[1]
        var x=200,y;
        drawSprites()
        for(var plr in allPlayers ){
            
            index = index + 1
            x = 200 - allPlayer[plr].distance
            y = displayHeight-150
           
            
            baskets[index-1].x = x
            baskets[index-1].y = y
            console.log(player.index, index)
            if(player.index === index){
                console.log(player.name)
                push()
                fill("black")
                
                text(player.name, baskets[index-1].x + 100, baskets[index-1].y + 100)
                pop()
             
            }
        
       
        }
        if(keyDown(RIGHT_ARROW)){
            player.distance = player.distance + 10  
        }
        if(keyDown(LEFT_ARROW)){
            player.distance = player.distance - 10      
        }

        player.update()

// 15 frames delay,  math.random(1,5)
     if(frameCount % 15 === 0 ){
        fruits = createSprite(random(100,1000), 30)
        var rand = Math.round(random(1,5))
        switch(rand){
            case 1: fruits.addImage("fruits",appleImg)
            break;

            case 2: fruits.addImage("fruits",bananaImg)
            break;



        }
     }
        
   
    
    }

   


}