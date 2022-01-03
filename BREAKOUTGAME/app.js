
// alert("Hello world")

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

let x = 100
let y = 100
const dx = 5 
const dy = 3

ctx.beginPath()
ctx.arc(x,y,30,0,2 * Math.PI, false)
ctx.fillStyle = "green"
ctx.fill()
ctx.stroke()
ctx.closePath()
// drawCirlce(x,y);

setInterval(()=>{
  x += dx
  y += dy 
  // x += 75
  // y += 50 
  // if(x >= 900 || y < 600){
    // x -= 50
    // y+= 25
  // }else if(x >=900 || y >= 600){
    // x -=50
    // y-= 50
  // }
  ctx.clearRect(0,0,canvas.width , canvas.height)
  drawCirlce(x,y)
  
},100)

const drawCirlce = (x,y)=>{
  ctx.beginPath()
  ctx.arc(x,y,30,0,2 * Math.PI, false)
  ctx.fillStyle = "green"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// console.log(canvas);