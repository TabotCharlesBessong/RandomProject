
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
  constructor(){
    this.position = {
      x:200,
      y:100
    }
    this.height = 20
    this.width = 200
  }
  draw(){
    c.fillStyle ='green'
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
}

const platform = new Platform()

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



const animate = ()=>{
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height)
  player.update()
  platform.draw()

  if(keys.right.pressed){
    player.velocity.x = 5
  }
  else if(keys.left.pressed){
    player.velocity.x = -5
  }
  else{
    player.velocity.x = 0
  }
  
  // platform collision detection 
  if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width ){
    player.velocity.y = 0
  }
}
animate()

window.addEventListener('keydown',({keyCode})=>{
  switch(keyCode){
    case 37:
      keys.left.pressed = true 
      // left movement
      player.velocity.x -= 5
      break
    case 38:
      // upward movement
      player.velocity.y -= 5
      break
    case 39:
      // right movement
      keys.right.pressed = true
      player.velocity.x += 5
      break
    case 40:
      // downward movement
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
