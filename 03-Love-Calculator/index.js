

const you = document.getElementById('you');
const lover = document.querySelector('#lover');
const btn= document.getElementById('btn');
const result= document.querySelector('#result');
const value = document.getElementById('value');

let yourName='';
let loverName='';

const calculateLove = (you ,lover)=>{
    const l1 = you.length;
    const l2= lover.length;
    const result = (l1**3 + l2**3)%101;
    if(result < 50){
            return result*2;
    }else if(result < 70){
            return result*1.4;
    }else{
            return result;
        }
}

you.addEventListener('focusout',(e)=>{
    yourName= e.target.value;
})

lover.addEventListener('focusout',(e)=>{
  loverName=e.target.value;
})

btn.addEventListener('click',()=>{
    const res = calculateLove(yourName,loverName)
    
    let val=0;
    result.value = 0;
    value.innerText= 0 + '%';
    const interval = setInterval(()=>{
       val++;
       result.value = val;
       value.innerText= val + '%';
       if(val>=res){
        clearInterval(interval);
       }
    },20)

})









