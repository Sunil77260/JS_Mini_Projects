  import {quizData} from './quize-data.js'

 const generateQuize= ()=>{
    const startIndex = Math.floor(Math.random()*95);
    const quize = quizData.slice(startIndex, startIndex + 5)
    return quize;
 } 

 const quize = generateQuize();

const form = document.getElementById('form');


 for( let i=0; i < quize.length; i++){
    const div = document.createElement('div');
    div.id='question';
    const h2= document.createElement('h2');
    h2.textContent=`Q ${i+1} : ${quize[i].question}`;
    div.append(h2)

    for(let j =0; j<4;j++){
      const options = document.createElement('div');
      options.id="options"

      const option = document.createElement('span');

      const input = document.createElement('input')
      input.type='radio',
      input.name=`question-${i}`,
      input.value=quize[i].options[j]
      option.textContent= quize[i].options[j];
      options.append(input,option)
      div.append(options)
    }
    form.before(div);
 }


 form.addEventListener('submit',(e)=>{
    e.preventDefault()
   
    let score =0;

    for(let i =0; i<quize.length;i++){
        const seleted = document.querySelector(`input[name="question-${i}"]:checked`)
        if(seleted && seleted.value===quize[i].answer){
            score++
        }
    }

  document.querySelector('#score').textContent= `Your Test Score is ${score}`
    
 })

