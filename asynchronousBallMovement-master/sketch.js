var balloon;
var database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    balloon = createSprite(250,250,10,10);
    balloon.shapeColor = "red";
    var balloonPosition=database.ref('balloon/position');
    balloonPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('balloon/position').set({
        'x' : position.x + x,
    'y' : position.y + y

    })
    
}
function readPosition(data){
    position=data.val();
    balloon.x = position.x;
    balloon.y = position.y;
}
function showError(){
    console.log("error");
}