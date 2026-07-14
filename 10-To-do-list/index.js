

const form = document.querySelector('#form');

const task= document.querySelector('#task');

const list= document.querySelector('#task-list');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const taskInput= task.value 
    const li =document.createElement('li');
    li.innerText= taskInput;
   list.appendChild(li)
   form.reset()
})