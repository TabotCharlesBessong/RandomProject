import { incrementCustomProperty } from "./updateConstProperty"



const groundElems = document.querySelectorAll('[data-ground]')

export function updateGround(delta){
  groundElems.forEach(ground =>{
    incrementCustomProperty(ground , "--left")
  })
}