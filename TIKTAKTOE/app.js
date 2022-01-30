

let score = {x:0,o:0}

let player  = 'X'
const res = document.querySelector('.score')


const cells  = document.querySelectorAll(".cell")
startGame()

// console.log(cells)
cells.forEach(cell => {
  cell.addEventListener('click',handleClick)
})

function handleClick (e){
  // console.log(e.target);
  if(e.target.innerText === ''){
    e.target.innerText = player
    checkWinner()
    checkDraw()
    switchPlayer()
  }  
}

function switchPlayer (){
  player = player ==='X' ? 'O' : 'X'
}

function checkWinner (){
  const winCombination = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    // [0,1,2],
    // [0,1,2],
  ]
  const matched = winCombination.some((comb) => 
     comb.every((com) =>  cells[com].innerText === player)
  )
  // console.log(matched);
    
  if(matched){
    alert(`you player ${player} , you won !!!`)
    if(player === 'X'){
      score.x += 1
    }else{
      score.o += 1
    }
    startGame()
  }else{
    const cellsArray = Array.from(cells)
    // console.log(cells);
    if(cellsArray.every((cell) => cell.innerText !== '')){
      alert('Match draw !!!')
      startGame()
    }
  }
  // if(matched){
    // res.innerText = `you player ${player} , you won !!!`
    // 
  // }

  // const winCom = [0,1,2]

  
  
  
  
  
  

  
  
  
  // console.log(cells[0].innerText);
  // if(){
  // alert ('you won')
  // }
}

function checkDraw (){

}

function startGame (){
  const scoreX = document.querySelector('.resultx')
  const scoreO = document.querySelector('.resulto')
  scoreX.innerText = `Player X score: ${score.x}`
  scoreO.innerText = `Player X score: ${score.o}`
  cells.forEach((cell)=> (cell.innerText = ""))
}