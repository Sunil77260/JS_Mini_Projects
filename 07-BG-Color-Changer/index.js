

const body=document.querySelector('body');
 
const parent= document.querySelector('#parent');

const handleClick=(e)=>{
    console.log('hanle clicked')
    const btn= e.target;
    console.log(btn)
    console.log(body)
    body.style.backgroundColor=btn.id;
}

parent.addEventListener('click',handleClick)