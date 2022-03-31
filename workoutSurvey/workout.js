
export default class Workout {
  constructor(root){
    this.root = root 
    this.root.insertAdjacentHTML("afterbegin",Workout.html())
    this.loadEnteries()
    this.updateView()
  }

  static html(){
    return `
    <table class="tracker">
    <thead>
      <tr>
        <th>Date</th>
        <th>Workout</th> 
        <th>Duration</th>
        <th></th>
      </tr>
    </thead>
    <tbody class="tracker__enteries">

    </tbody>

    <tbody>
      <tr class="tracker__row tracker__row__add" >
         <td colspan="4" >
           <span class="tracker__add">
             Add Entry
           </span>
         </td>
      </tr>
    </tbody>
  </table>
    `
  }

  static rowHtml(){
    return `
    <tr class="tracker__row" >
          <td>
            <input type="date" class="tracker__date" >
          </td>
          <td>
            <select type="date" class="tracker__workout" >
              <option value="walking">walking</option>
              <option value="outdoor-cycling">outdoor cycling</option>
              <option value="indoor-cycling">indoor cycling</option>
              <option value="walking">walking</option>
              <option value="running">running</option>
              <option value="swimming">swimming</option>
              <option value="yoga">yoga</option>
              <option value="juging">juging</option>
            </select>
          </td>
          <td>
            <input type="number" class="tracker__duration" >
            <span class="tracker__text">minutes</span>
          </td>

          <td>
            <button type="button" class="tracker__btn tracker__add" >
              &times;
            </button>
          </td>
        </tr>
    `
  }

  loadEnteries(){
    this.entries = JSON.parse(localStorage.getItem("workout-tracker-entries") || "[]")
  }

  saveEnteries(){
    localStorage.setItem("workout-tracker-entries",JSON.stringify(this.entries))
  }

  updateView(){
    const tableBd = this.root.querySelector(".tracker__enteries")
    const addRow = (data)=>{
      const temp = document.createElement("template")
      let row = null 
      temp.innerHTML = Workout.rowHtml().trim()
      row = temp.content.firstElementChild
      tableBd.appendChild(row)
    }

    tableBd.querySelectorAll(".tracker__row").forEach(row => {
      row.delete()
    })
    this.entries.forEach(()=> addRow(data))
  }
}