
// alert("Hello world")

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')
// ctx.moveTo(0,0)
// ctx.lineTo(250,50)
ctx.beginPath()
ctx.rect(10,10,50,50)

ctx.fillStyle = "orange"
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(100,100,30,0,2 * Math.PI, false)
ctx.fillStyle = "green"
ctx.fill()
ctx.stroke()
ctx.closePath()

// console.log(canvas);