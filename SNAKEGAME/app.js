
// variable declaration 
const canvas = document.querySelector("#canvas")
// console.log(canvas);
const ctx = canvas.getContext('2d')
// console.log(ctx);
let direction = 'x'
let snakeH =  snakeW = 10
let canvasH = canvas.height 
let canvasW = canvas.width 
let downPressed = upPressed = leftPressed = rightPresses = false

let snakes = [
  {x:40,y:10},
  {x:30,y:10},
  {x:20,y:10},
  {x:10,y:10},
]

// function declaration 
const drawSnake = ()=>{
  snakes.forEach(snake =>{
    ctx.beginPath()
    ctx.rect(snake.x,snake.y,snakeW,snakeH)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.closePath()
  })
}

const moveSnake = ()=>{
  setInterval(()=>{
    if(downPressed){
      direction = 'y'
    }
    snakes.forEach(snake => snake[direction] +=10)
    ctx.clearRect(0,0,canvasH,canvasW)
    drawSnake()
  },100)
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
    rightPresses = true
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
    rightPresses = false
  }
}

// function invokation 
drawSnake()
moveSnake()
snakeNavigation()
// handleKeyDown()
// handleKeyUp()