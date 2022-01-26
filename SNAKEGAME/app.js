
// variable declaration 
const canvas = document.querySelector("#canvas")
// console.log(canvas);
const ctx = canvas.getContext('2d')
// console.log(ctx);
let snakeW = 5
let dx =  0
let dy = 0  
let direction = 'x'
let snakeH =  5

let canvasH = canvas.height 
let canvasW = canvas.width 
let downPressed = upPressed = leftPressed = rightPressed = false

let snake = [
  {x:25,y:10}, 
  {x:20,y:10},
  {x:15,y:10},
  {x:10,y:10},
]

// function declaration 
const drawSnake = ()=>{
  snake.forEach(snake =>{
    ctx.beginPath()
    ctx.rect(snake.x,snake.y,snakeW,snakeH)
    ctx.fillStyle = "orange"
    ctx.fill()
    ctx.closePath()
  })
}

const moveSnake = ()=>{
  setInterval(()=>{
    // {x:40,y:10},
    // {x:30,y:10},
    // {x:20,y:10},
    // {x:10,y:10},
    
    handleDirection()

    
    const head = {
      x: snake[0].x + dx , y :snake[0].y + dy
    }
    snake.unshift(head)
    snake.pop()
    // if(downPressed){ 
      // direction = 'y'
    // }
    // // snake.forEach(snake => snake[direction] +=10)
    ctx.clearRect(0,0,canvasH,canvasW)
    drawSnake()
  },100)
}



const handleDirection = ()=>{
  if(downPressed){
    dy = snakeH
    dx = 0
  }
  if(rightPressed){
    dx = snakeW
    dy = 0
  }
  if(upPressed){
    dy = -snakeH
    dx = 0
  }
  if(leftPressed){
    dx = -snakeW
    dy = 0
  }
}

const snakeNavigation = ()=>{
  document.addEventListener('keydown',handleKeyDown)
  document.addEventListener('keyup',handleKeyUp)
}

const handleKeyDown = (e)=>{
  if(e.key === 'ArrowDown'){
    downPressed = true
  }
  if(e.key === 'ArrowUp'){
    upPressed = true
  }
  if(e.key === 'ArrowLeft'){
    leftPressed = true
  }
  if(e.key === 'ArrowRight'){
    rightPressed = true
  }
}

const handleKeyUp = (e)=>{
  if(e.key === 'ArrowDown'){
    downPressed = false                  
  }
  if(e.key === 'ArrowUp'){
    upPressed = false
  }
  if(e.key === 'ArrowLeft'){
    leftPressed = false
  }
  if(e.key === 'ArrowRight'){
    rightPressed = false
  }
}

// function invokation 
drawSnake()
moveSnake()
snakeNavigation()
// handleKeyDown()
// handleKeyUp()