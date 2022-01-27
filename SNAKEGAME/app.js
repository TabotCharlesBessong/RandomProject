
// variable declaration 
const canvas = document.querySelector("#canvas")
// console.log(canvas);
const ctx = canvas.getContext('2d')
// console.log(ctx);
let snakeW = 5
let dx =  snakeW
let dy = 0  
// let direction = 'x'
let interval 
let randomX 
let randomY
let snakeH =  5

let canvasH = canvas.height 
let canvasW = canvas.width 
let score  = 0 
let snake 





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
  if(!interval){
    interval =  setInterval(()=>{
      // {x:40,y:10},
      // {x:30,y:10},
      // {x:20,y:10},
      // {x:10,y:10},
      
      handleDirection()
      collisionDetection()
      growSnake()
      
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
      drawFood()
      drawScore()
    },100)
  }
  
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

const drawFood = ()=>{
  ctx.beginPath()
  ctx.rect(randomX,randomY,snakeW,snakeH)
  ctx.fillStyle = "green"
  ctx.fill()
  ctx.closePath()
}

const randomPosition = ()=>{
  randomX = Math.floor(Math.random() * 290 / 5) * 5
  randomY = Math.floor(Math.random() * 290 / 5) * 5
}

const growSnake = ()=>{
  if(snake[0].x === randomX && snake[0].y === randomY ){
    snake.push({x:randomX,y:randomY})
    randomPosition()
    score += 1
  }
}

const collisionDetection = ()=>{
  if(snake[0].x >= canvasW || snake[0].x <= 0 || snake[0].y >= canvasH || snake[0].y <= 0){
    alert('Game Over 😜😜😜😜😜😜😜!!!')
    resetGame()
  }
}

const resetGame = ()=>{
  clearInterval(interval)
  setVariables()
  randomPosition()
  moveSnake()
}

const setVariables = ()=>{
  interval = null
  dy = snakeW 
  dy = 0 
  downPressed = upPressed = leftPressed = rightPressed = false
  snake = [{x:10,y:10}]
  score = 0
}


const drawScore = ()=>{
  ctx.beginPath()
  ctx.fillText("Score: " + score , 10,10)
  ctx.closePath()
}

// function invokation 
setVariables()
drawSnake()
drawFood()
moveSnake()
snakeNavigation()
randomPosition()


// handleKeyDown()
// handleKeyUp() 