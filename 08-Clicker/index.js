
const body=document.querySelector('body');


const bgColor=['red','blue','yellow','orange','pink','green']

body.addEventListener('click',(e)=>{

    const cirlceX= `${e.clientX}px`;
    const circleY = `${e.clientY}px`;
    const div= document.createElement('div');
    div.id="circle";
    div.style.backgroundColor=`${bgColor[Math.floor(Math.random()*6)]}`
    div.style.top=circleY;
    div.style.left=cirlceX;
    div.textContent="HI"

    body.append(div);

    setTimeout(()=>{
     div.remove();
    },5000)
    
}
)