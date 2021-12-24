

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const taskList = document.querySelector("#task-list1")

console.log(form,input,taskList);

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  addTask()
})

const addTask = (task)=>{
  let taskValue = input.value
  // if(task){
    // taskValue = task.text
  // }
  task ? (taskValue = task.text) : task ; 
  
  const displayText = ()=>{
    taskValue
    const newTask = document.createElement('li')
    newTask.innerHTML = taskValue
    newTask.addEventListener('click',()=>{
      newTask.classList.toggle('completed')
    })
    newTask.classList.contains('completed') ? ((newTask,innerHTML = `<span> ${taskValue} &#10004; </span> <span onclick='deleteTask()>&#10060; </span> `), newTask.classList.toggle('delete-task')):((newTask.innerHTML = `${taskValue}`),newTask.classList.toggle('delete-task'))
    taskList.appendChild(newTask)
    input.value = ''
  }
  taskValue ? displayText() : taskValue
  // console.log(taskValue);
}

const deleteTask = ()=>{
  document.querySelectorAll('li').forEach((ele)=>{
    ele.classList.contains('delete-task') ? ele.remove() : ele
  })

}
