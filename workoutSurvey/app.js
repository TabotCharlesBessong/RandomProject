
import Workout from "./workout.js";

const app = document.querySelector("#app")
// console.log(app);

const wt = new Workout(app)
console.log(wt);
window.wt = wt
console.log(wt);