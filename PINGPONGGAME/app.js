
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')
const canvasH = canvas.height
const canvasW = canvas.width

let ball = leftPaddle = rightPaddle = {}

let paddle = {
  w:5,h:50
}
let score 


const drawBall = ()=>{
  ctx.beginPath()
  ctx.setLineDash([])
  ctx.arc(ball.x,ball.y,ball.r,0,2 * Math.PI)
  ctx.stroke()
  ctx.closePath()
}

const drawLeftPaddle = ()=>{
  ctx.beginPath()
  ctx.setLineDash([])
  ctx.rect(leftPaddle.x , leftPaddle.y , paddle.w , paddle.h)
  ctx.stroke()
  ctx.closePath()
}

const drawRightPaddle = ()=>{
  ctx.beginPath()
  ctx.setLineDash([])
  ctx.rect(rightPaddle.x , rightPaddle.y , paddle.w , paddle.h)
  ctx.stroke()
  ctx.closePath()
}
const moveBall = ()=>{
  ball.x += ball.dx
  ball.y += ball.dy

  rightPaddle.y = ball.y - (paddle.h / 2)
  ctx.clearRect(0,0,canvasW,canvasH)
  
  // ballWallHeightCollision()
  ballCollisionDetection()
  drawBall()
  drawLeftPaddle()
  drawRightPaddle()
  drawScore()
  drawLine()

  requestAnimationFrame(moveBall)
}

const ballCollisionDetection = ()=>{

  // right paddle collision detection
  if(ball.x  > rightPaddle.x - ball.r  ){
    ball.dx = -ball.dx
  }
  // left paddle collision detection
  if((ball.x  < 0 + ball.r + paddle.w ) && (ball.y > leftPaddle.y) && (ball.y < leftPaddle.y  + paddle.h  )){
    ball.dx = -ball.dx + 0.2
    ball.dy += 0.1
    score += 1
  }
  // top or bottom  collision detection
  if(ball.y > canvasH - ball.r || ball.y < 0 + ball.r ){
    ball.dy = -ball.dy

  }
  // left side detection
  if(ball.x < 0 + ball.r  ){
    alert('Game over')
    resetGame()
    // moveBall()
    setVariables()
  }
}

const moveLeftPaddle = ()=>{
  document.addEventListener('mousemove', (e)=>{
    leftPaddle.y = e.screenY - 350 
    // console.log(e.screenY);
  })
}

const setVariables = ()=>{
  ball = {
    x:150 , y:150 , r:10 , dx:2 , dy:1
  }
  
  leftPaddle = {
    x:0 , y :125 
  }
  
  rightPaddle = {
    x:canvasW - 5 , y :125 
  }
  score = 1 
  
}

const drawScore  = ()=>{
  ctx.beginPath()
  ctx.fillStyle = "#000"
  ctx.fill()
  ctx.fillText("Score: "+ score , 20 ,10)
  ctx.closePath()
}

const drawLine = ()=>{
  ctx.beginPath()
  // ctx.fillText("Score: "+ score , 20 ,10)
  ctx.setLineDash([5,5])
  ctx.moveTo(150,0)
  ctx.lineTo(150,canvasH)
  ctx.stroke()
  ctx.closePath()
}
  

setVariables()
drawBall()
drawLeftPaddle()
drawRightPaddle()
moveBall()
moveLeftPaddle()
// drawLine()