

const total=document.getElementById('total');

const input= document.getElementById('salary');

const form= document.querySelector('form');

const taxCalculate=(salary)=>{
    let tax=0;
    if(salary<=1200000){
        tax=0;
       }else if(salary<=1600000){
           tax=(salary-1200000)*.15;
       }else if(salary<=2000000){
           tax = (salary-1600000)*.20 + 60000; 
       }else if(salary<=2400000){
           tax= (salary-2000000)*.25 + 60000 + 80000;
       }else{
           tax= (salary-2400000) + 60000 +80000 + 100000;
       }
       return tax;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Totaltax=taxCalculate(input.value)
    total.textContent = Totaltax;
    form.reset();
    
})