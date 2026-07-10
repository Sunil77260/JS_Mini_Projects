

const clock= document.getElementById('clock');

 function findCounter() {
    const currentTime = Date.now();
    const countDate = new Date(2030,6,15).getTime();

    let diff = countDate - currentTime;
    const days = Math.floor(diff/(1000*60*60*24));
    diff = diff%(1000*60*60*24);
    const  hours= Math.floor(diff/(1000*60*60));
    diff = diff%(1000*60*60);
    const mintues = Math.floor(diff/(1000*60));
    diff = diff%(1000*60);
    const sec = Math.floor(diff/(1000));
    return `${days}: Days, ${hours}: Hours, ${mintues} Mintues, ${sec}: Secound`
 }


setInterval(()=>{
    const countDown =  findCounter();
    clock.textContent = countDown;

},1000)



