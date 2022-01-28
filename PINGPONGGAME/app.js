
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')
const canvasH = canvas.height
const canvasW = canvas.width

let ball = {
  x:150 , y:150 , r:10 , dx:2 , dy:1
}

let leftPaddle = {
  x:0 , y :125 
}

let rightPaddle = {
  x:canvasW - 5 , y :125 
}

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
  
  collisionDetection()
  drawBall()
  drawLeftPaddle()
  drawRightPaddle()

  requestAnimationFrame(moveBall)
}

const collisionDetection = ()=>{

}


drawBall()
drawLeftPaddle()
drawRightPaddle()
moveBall()