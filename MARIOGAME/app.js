
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
    this.Height = 30

  }
  draw(){
    c.fillStyle = "orange"
    c.fillRect(this.position.x,this.position.y,this.width,this.Height)
  }
  update(){
    this.draw()
    this.position.y += this.velocity.y
    if(this.position.y + this.Height + this.velocity.y <= canvas.height ){
      this.velocity.y += gravity
    }else{
      this.velocity.y = 0
    }
  }
}

const player = new Player()
// player.draw()
// player.update()

const animate = ()=>{
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height)
  player.update()
}
animate()
