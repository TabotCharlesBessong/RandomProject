
// import platform1 from "./images/platform.png"

// console.log(platform1);

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
console.log(c);
console.log(canvas);
// alert("hello")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.05
class Player {
  constructor(){
    this.position = {
      x:100,
      y:100,
    }
    this.velocity = {
      x:0,
      y:1
    }
    this.width = 30
    this.height = 30

  }
  draw(){
    c.fillStyle = "orange"
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
  update(){
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    if(this.position.y + this.height + this.velocity.y <= canvas.height ){
      this.velocity.y += gravity
    }else{
      this.velocity.y = 0
    }
  }
}

class Platform {
  constructor({x,y}){
    this.position = {
      x,
      y
    }
    this.height = 20
    this.width = 200
  }
  draw(){
    c.fillStyle ='green'
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
}

// const platform = new Platform()
const platforms = [new Platform({
  x:200, y:100 
}),new Platform({
  x:500, y:200
})]


const player = new Player()
const keys = {
  right:{
    pressed:false
  },
  left:{
    pressed:false
  }
}
// player.draw()
// player.update()

let scrollOffset = 0

const animate = ()=>{
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height)
  player.update()
  // platform.draw()
  platforms.forEach(platform =>{
    platform.draw()
  })

  if(keys.right.pressed && player.position.x < 400){
    player.velocity.x = 5
  }
  else if(keys.left.pressed && player.position.x > 100){
    player.velocity.x = -5
  }
  else{
    player.velocity.x = 0
    if(keys.right.pressed){
      scrollOffset +=5
      platforms.forEach(platform =>{
        platform.position.x -=5
      })
    }else if(keys.left.pressed){
      scrollOffset -=5
      platforms.forEach(platform =>{
        platform.position.x += 5
      })
    }
  }
  // console.log(scrollOffset);
  // platform collision detection 
  platforms.forEach(platform =>{
    if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width ){
        player.velocity.y = 0
      }
  })
  
  if(scrollOffset > 2000){
    console.log("you win");
  }
}
animate()

window.addEventListener('keydown',({keyCode})=>{
  switch(keyCode){
    case 37:
      keys.left.pressed = true 
      // left movement
      // alert("hello")
      player.velocity.x -= 5
      break
    case 38:
      // upward movement
      // alert("hello")
      player.velocity.y -= 5
      break
    case 39:
      // right movement
      // alert("hello")
      keys.right.pressed = true
      player.velocity.x += 5
      break
    case 40:
      // downward movement
      // alert("hello")
      player.velocity.y += 5
      break
    default:
  }
})

window.addEventListener('keyup',({keyCode})=>{
  switch(keyCode){
    case 37:
      keys.left.pressed = false
      player.velocity.x = 0
      break
    case 38:
      player.velocity.y = 0
      break
    case 39:
      keys.right.pressed = false
      player.velocity.x = 0
      break
    case 40:
      player.velocity.y = 0
      break
    default:
  }
})
