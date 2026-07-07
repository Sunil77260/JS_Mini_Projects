

const container= document.getElementById("container");

const btn = document.getElementById("btn")


const handleClick=()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    container.style.backgroundColor = `rgb(${r},${g},${b})`
}

 btn.addEventListener('click', handleClick)