
import Workout from "./workout.js";

const app = document.querySelector("#app")

const wt = new Workout(app)
window.wt = wt
console.log(wt);