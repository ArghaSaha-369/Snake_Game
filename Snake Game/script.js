let inputDir = {x:0, y:0}
const foodSound = new Audio("eat.wav");
const dirChangeSound = new Audio("dirChange.wav");
const gameOverSound = new Audio("gameOver.wav");
const scoreShowSound = new Audio("scoreSound.wav");
const bgSound = new Audio("bgMusic.wav");

let score = 0;
let speed = 5;
let lastPaintTime = 0;

let snakeArr = [
    { x : 13, y : 15}
];
let food = { x : 5, y : 6}

//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    for(let i = 0; i = snakeArr.length; i++){
       
    }    
}

function gameEngine(){
    //Updating snake array and food
       //If Collides
    if(isCollide(snakeArr)){
        gameOverSound.play();
        bgSound.pause();
        inputDir = {x : 0, y :0};
        alert("Nice Touch! Press any key to play again.");
        snakeArr = { x : 13, y : 15};
        score = 0;
    }
    
       //When the snake eats the food... Score Increment, Food Regeneration
    if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        foodSound.play();
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+(b-a)* Math.random()), y: Math.round(a+(b-a)* Math.random())}
    }

       //Snake Movement
    for(let i = snakeArr.length -2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Display snake and food
       //Snake Element
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index == 0){
            snakeElement.classList.add('snakehead');
        }
        else{
            snakeElement.classList.add('snakebody');
        }
        board.appendChild(snakeElement);
    })

       //Food Element
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
    


}

function f(){
    bgSound.play();
}






//Game Logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{

    inputDir = {x : 0, y : 1 }

    dirChangeSound.play();
    setTimeout(f,1000);
    switch(e.key){
        case 'ArrowUp':
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case 'ArrowLeft':
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;     
        case('ArrowRight'):
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;    
        default:
            break;    
    }
})


