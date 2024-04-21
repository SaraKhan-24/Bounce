var ctx=null;
var tileW=40, tileH=40;
var mapW=134, mapH=22;
var currentSecond=0,frameCount=0;framesLastSecond=0;
var gameMap=[
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,5,0,0,0,0,1,1,0,0,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,7,1,1,
    1,1,11,7,11,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,6,0,0,0,0,0,0,11,7,0,0,0,0,11,7,0,0,0,0,11,7,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,11,7,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,9,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,
    1,1,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,7,0,0,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,7,7,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,7,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,1,3,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,2,1,1,1,1,3,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,5,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,8,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,2,1,1,1,1,1,1,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,5,0,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];
var tileTypes = {
    0: new Image(),
    1: new Image(), 
    2: new Image(),
    3:new Image(),
    4: new Image()
}
    var ringlowery=mapH+1;
    var ringlowerx=mapW+1;
   
    var lastFrameTime=0;
    var keysDown={
        37:false,//left
        38:false,//down
        39:false,
        40:false
    };
    var player=new Character();

    function Character(){
        this.tileFrom=[1,1];
        this.tileTo=[1,1];
        this.timeMoved=0;
        this.dimensions=[30,30];
        this.position=[45,45];
        this.delayMove=700;

    }
    Character.prototype.placeAt=function(x,y){
        this.tileFrom=[x,y];
        this.tileTo=[x,y];
        this.position=[((tileW*x)+
            ((tileW-this.dimensions[0])/2)),
            ((tileH*y)+
            (tileH-this.dimensions[1])/2)];
    };
    // Character.prototype.processMovement=function(t){
    //     if(this.tileFrom[0]==this.tileTo[0]&&
    //     this.tileFrom[1]==)
    // };
tileTypes[0].src = 'tile.jpg';  // Source for tile type 0
tileTypes[1].src = 'popper.png';
tileTypes[2].src = 'deflator.jpeg';
tileTypes[3].src = 'inflator.png';
tileTypes[4].src='spike.png' ; // Source for tile type 1 (popper)
var imagesLoaded = 0;
var totalImages = Object.keys(tileTypes).length;

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        initGame(); // Initialize the game only after all images have loaded
    }
}

for(let i=0;i<totalImages;i++){
    tileTypes[i].onload = imageLoaded;
}


function initGame() {
    ctx = document.getElementById('game').getContext('2d');
    ctx.font = 'bold 10pt sans-serif';
    requestAnimationFrame(drawGame);
}
function drawRightSlope(x, y, fillStyle) {
    ctx.beginPath();
    ctx.moveTo(x, y);  // Top left corner
    ctx.lineTo(x + tileW, y + tileH);  // Middle of the tile
    ctx.lineTo(x + tileW, y);  // Top right corner
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
}


function drawLeftSlope(x, y, fillStyle) {
    ctx.beginPath();
    ctx.moveTo(x, y);  // Top left corner
    ctx.lineTo(x + tileW, y);  // Top right corner
    ctx.lineTo(x, y + tileH);  // Bottom left corner
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
}

function drawRing(x, y) {
    var width = tileW * 0.8;
    var height = tileH * 2;

    // Calculate the center of the oval
    var centerX = x + tileW / 2;
    var centerY = y + tileH;

    // Start drawing the oval
    ctx.beginPath();
    ctx.moveTo(centerX + width / 2, centerY); // Move to the rightmost point of the oval

    // Draw the right half of the oval
    ctx.bezierCurveTo(
        centerX + width / 2, centerY - height / 2, // Control point 1
        centerX - width / 2, centerY - height / 2, // Control point 2
        centerX - width / 2, centerY // End point (top left corner)
    );
    // Draw the left half of the oval
    ctx.bezierCurveTo(
        centerX - width / 2, centerY + height / 2, // Control point 1
        centerX + width / 2, centerY + height / 2, // Control point 2
        centerX + width / 2, centerY // End point (top right corner)
    );
    ctx.strokeStyle = "#fff700"; // White stroke
    ctx.lineWidth = 8;
    ctx.stroke();
}
function drawSmallRing(x, y) {
    var width = tileW * 0.6;
    var height = tileH * 1.5;

    // Calculate the center of the oval
    var centerX = x + tileW / 2;
    var centerY = y + tileH;

    // Start drawing the oval
    ctx.beginPath();
    ctx.moveTo(centerX + width / 2, centerY); // Move to the rightmost point of the oval

    // Draw the right half of the oval
    ctx.bezierCurveTo(
        centerX + width / 2, centerY - height / 2, // Control point 1
        centerX - width / 2, centerY - height / 2, // Control point 2
        centerX - width / 2, centerY // End point (top left corner)
    );
    // Draw the left half of the oval
    ctx.bezierCurveTo(
        centerX - width / 2, centerY + height / 2, // Control point 1
        centerX + width / 2, centerY + height / 2, // Control point 2
        centerX + width / 2, centerY // End point (top right corner)
    );
    ctx.strokeStyle = "#fff700"; // White stroke
    ctx.lineWidth = 8;
    ctx.stroke();
}
function drawHorizontalSmallRing(x, y) {
    var width = tileW * 1.5; // Adjusted for a horizontal oval
    var height = tileH * 0.6; // Adjusted for a horizontal oval

    // Calculate the center of the oval
    var centerX = x + tileW;
    var centerY = y + tileH / 2;

    // Start drawing the oval
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - height / 2); // Move to the top point of the oval

    // Draw the top half of the oval
    ctx.bezierCurveTo(
        centerX + width / 2, centerY - height / 2, // Control point 1
        centerX + width / 2, centerY + height / 2, // Control point 2
        centerX, centerY + height / 2 // End point (bottom center)
    );
    // Draw the bottom half of the oval
    ctx.bezierCurveTo(
        centerX - width / 2, centerY + height / 2, // Control point 1
        centerX - width / 2, centerY - height / 2, // Control point 2
        centerX, centerY - height / 2 // End point (top center)
    );
    ctx.strokeStyle = "#fff700"; // White stroke
    ctx.lineWidth = 8;
    ctx.stroke();
}

  function drawGame(){
    if(ctx===null){ return;}
    var sec=Math.floor(Date.now()/1000);

    if(sec!=currentSecond){
        currentSecond= sec;
        framesLastSecond=frameCount;
        frameCount=1;

    }else{
        frameCount++;
    }
    for(var y=0; y<mapH;y++){
        for(var x=0; x<mapW ; x++){
            switch(gameMap[((y*mapW)+x)]){
                case 0:
                    ctx.fillStyle="#64bde3";
                        ctx.fillRect(x*tileW,y*tileH, tileW, tileH);


                    

                    break;
                    case 2:
                        ctx.drawImage(tileTypes[0], x * tileW, y * tileH, tileW, tileH);

                        drawLeftSlope(x * tileW, y * tileH, "#64bde3");
                        break;
                        case 3:
                            ctx.drawImage(tileTypes[0], x * tileW, y * tileH, tileW, tileH);

                            drawRightSlope(x * tileW, y * tileH, "#64bde3");
                            break;  
                            case 4:
                                ctx.drawImage(tileTypes[2], x * tileW, y * tileH, tileW, tileH);
                                break;
                            case 5:
                                ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                                    ctx.drawImage(tileTypes[1], x * tileW, y * tileH, tileW, tileH);
                                    break;
                                    case 6:
                                        
                                        ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                                        ctx.fillRect(x*tileW,(y+1)*tileH, tileW, tileH);

                                        drawRing(x * tileW, y * tileH);
                        break;
                        case 7: continue;
                        case 8: 
                        ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                        ctx.drawImage(tileTypes[3], x * tileW, y * tileH, tileW, tileH);
                        break;
                        case 9:  ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                        ctx.fillRect(x*tileW,(y+1)*tileH, tileW, tileH);

                        drawSmallRing(x * tileW, y * tileH);
                        break;
                        case 10:  ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                        ctx.fillRect((x+1)*tileW,(y)*tileH, tileW, tileH);

                        drawHorizontalSmallRing(x * tileW, y * tileH);
                        break;
                        case 11:  ctx.fillRect(x*tileW,y*tileH, tileW, tileH);
                        ctx.fillRect((x+1)*tileW,(y)*tileH, tileW, tileH);
                        ctx.fillRect((x+1)*tileW,(y+1)*tileH, tileW, tileH);
                        ctx.fillRect((x)*tileW,(y+1)*tileH, tileW, tileH);

                        ctx.drawImage(tileTypes[4], x * tileW, y * tileH, tileW*2, tileH*2);
                        break;
                default: 
                ctx.drawImage(tileTypes[0], x * tileW, y * tileH, tileW, tileH);
                break;                
            }

        }
    }
    ctx.fillStyle="#ffffff";
    ctx.fillText("FPS: "+framesLastSecond, 10 ,20);
    requestAnimationFrame(drawGame);
}