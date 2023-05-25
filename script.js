//your JS code here. If required.
let questionArr=[{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}
];

let answerArr=[];
let questionNo=1;

// window.addEventListener('load',next);

let submit=document.getElementById('submit');
submit.addEventListener('click',submitted);


function next(){
    let question=document.getElementById('question');
    question.innerText=`${questionArr[questionNo].question}`;

    let labels=document.getElementsByTagName('label');

      labels[0].innerText=questionArr[questionNo].a;
      labels[1].innerText=questionArr[questionNo].b;
      labels[2].innerText=questionArr[questionNo].c;
      labels[3].innerText=questionArr[questionNo].d;
    
}





function submitted(){
    let option=document.getElementsByName('question');
    let noInput=true;

    for(let input of option){
        if(input.checked){
     console.log(input.value);
     answerArr.push(input.value);
     noInput=false;
      }
    }

    if(noInput ){
        alert('Please select one Option');
    }
   else{
    if(questionNo<questionArr.length){
        next();
        questionNo++;
        console.log(questionNo);
    }
    else{
        if(questionNo>=questionArr.length){
            console.log(answerArr);
            result();
        }
    }
   }


}


function result(){

let correctAns=0;
  for(let i=0;i<questionArr.length;i++){
    if(questionArr[i].correct===answerArr[i]){
        correctAns++;
    }
  }
  let options=document.getElementsByClassName('options')[0];
   options.innerHTML="";
    let question=document.getElementById('question');
    question.innerText=`\n You answered ${correctAns}/4 questions correctly\n`;

submit.innerText="Reload";
submit.removeEventListener('click',submitted);
submit.addEventListener('click',reloadQuiz);
}


function reloadQuiz(){
    window.location.reload();
}