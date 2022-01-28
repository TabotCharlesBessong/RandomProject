
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')
const canvasH = canvas.height
const canvasW = canvas.width

let ball = leftPaddle = rightPaddle = {}

let paddle = {
  w:5,h:50
}


const drawBall = ()=>{
  ctx.beginPath()
  ctx.arc(ball.x,ball.y,ball.r,0,2 * Math.PI)
  ctx.stroke()
  ctx.closePath()
}

const drawLeftPaddle = ()=>{
  ctx.beginPath()
  ctx.rect(leftPaddle.x , leftPaddle.y , paddle.w , paddle.h)
  ctx.stroke()
  ctx.closePath()
}

const drawRightPaddle = ()=>{
  ctx.beginPath()
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

  requestAnimationFrame(moveBall)
}

const ballCollisionDetection = ()=>{

  // right paddle collision detection
  if(ball.x  > rightPaddle.x - ball.r  ){
    ball.dx = -ball.dx
  }
  // left paddle collision detection
  if((ball.x  < 0 + ball.r + paddle.w ) && (ball.y > leftPaddle.y) && (ball.y < leftPaddle.y  + paddle.h  )){
    ball.dx = -ball.dx
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
  
}
  

setVariables()
drawBall()
drawLeftPaddle()
drawRightPaddle()
moveBall()
moveLeftPaddle()