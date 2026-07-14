

const form = document.querySelector('#form');

const task= document.querySelector('#task');

const list= document.querySelector('#task-list');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const taskInput= task.value 
    const li =document.createElement('li');
    const span = document.createElement('span')
    const doneButton = document.createElement('button')
    doneButton.textContent= "Done"
    doneButton.style.color='white'
    doneButton.style.height='40px';
    doneButton.style.width="80px"
    doneButton.style.backgroundColor='green'
    doneButton.style.paddingLeft="5px"
    doneButton.style.paddingRight="5px"
    doneButton.style.paddingTop="2px"
    doneButton.style.paddingBottom="2px"
    doneButton.style.marginLeft="30px"

    const deleteButton = document.createElement('button')
    deleteButton.textContent= "Delete"
    deleteButton.style.color='white'
    deleteButton.style.height='40px';
    deleteButton.style.width="80px"
    deleteButton.style.backgroundColor='red'
    deleteButton.style.paddingLeft="5px"
    deleteButton.style.paddingRight="5px"
    deleteButton.style.paddingTop="2px"
    deleteButton.style.paddingBottom="2px"
    deleteButton.style.marginLeft="30px"

    span.innerText= taskInput;

    li.append(span,doneButton,deleteButton);

   list.appendChild(li)
    
   doneButton.addEventListener('click',()=>{
    li.style.background='grey'
   })

   deleteButton.addEventListener('click',()=>{
    li.remove();
   })

   form.reset()
})