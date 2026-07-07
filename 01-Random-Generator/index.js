const quotes = [
    "Believe in yourself and keep moving forward.",
    "Small steps every day lead to big results.",
    "Success begins where excuses end.",
    "Dream big, work hard, stay humble.",
    "Your only limit is your mindset.",
    "Consistency beats talent when talent doesn't work.",
    "Progress is better than perfection.",
    "Every challenge is an opportunity to grow.",
    "Focus on solutions, not problems.",
    "Discipline creates the life you want.",
    "Great things take time and patience.",
    "Never stop learning and improving.",
    "Courage is taking the first step.",
    "Stay positive even during difficult times.",
    "Action turns ideas into reality.",
    "The best investment is in yourself.",
    "Hard work always leaves a mark.",
    "Every day is a fresh beginning.",
    "Success is built one habit at a time.",
    "Keep going because your future self will thank you."
  ];

const btn = document.getElementById("btn")

const quite= document.getElementById("quite");

const handleBtnClick=()=>{
    let displayItem = ''
    const index= Math.floor(Math.random()*20);
    displayItem = quotes[index]
    quite.innerText = displayItem;
}

btn.addEventListener('click',handleBtnClick)

