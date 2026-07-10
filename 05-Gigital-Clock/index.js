
const day = document.querySelector('#day');
const hours = document.querySelector('#hours');
const mintues = document.querySelector('#mintues');
const sec = document.querySelector('#sec');
// const milisec = document.querySelector('#milisec');

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Throusday',
    'Friday',
    'Saturday'
]

setInterval(()=>{
   const timer= new Date()
   day.textContent = days[timer.getDay()];
   hours.textContent = timer.getHours();
   mintues.textContent =timer.getMinutes();
   sec.textContent=timer.getSeconds();
//    milisec.textContent=timer.getMilliseconds();
},1000)