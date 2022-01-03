
// alert("Hello world")

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height / 2
let dx = 8 
let dy = -4

ctx.beginPath()
ctx.arc(x,y,30,0,2 * Math.PI, false)
ctx.fillStyle = "green"
ctx.fill()
ctx.stroke()
ctx.closePath()
// drawCirlce(x,y);

setInterval(()=>{

  detectCollision()
  ctx.clearRect(0,0,canvas.width , canvas.height)
  drawCirlce(x,y)
  
},50)

const detectCollision = ()=>{
  x += dx
  y += dy 
  if(x >= canvas.width || y >= canvas.height){
    dx = -dx 
    dy = -dy
    }
  if(x < 0 || y < 0){
    dx = -dx 
    dy = -dy
    }
  }

const drawCirlce = (x,y)=>{
  ctx.beginPath()
  ctx.arc(x,y,30,0,2 * Math.PI, false)
  ctx.fillStyle = "green"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// console.log(canvas);