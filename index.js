const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500","1000"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",  "Captures what&#039;s on the screen and copies it to your clipboard",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False" ,"True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "140","100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
    correct_answer: "True",
    incorrect_answers: ["True","False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["False","True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["True","False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary","Hexidecimal", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True","False",],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node","Local Area Network",
      "Land Address Navigation",
    ],
  },
];
/* Define All Questions*/

const quizQuestion = function () {
  const newElement = document.getElementById("questions");
  for (let i = 0; i < questions.length; i++) {
    let newP = document.createElement("p");
    newP.innerText = questions[i].question;
    newElement.append(newP);
    for (let k = 0; k < questions[i].incorrect_answers.length; k++) {
      const option = questions[i].incorrect_answers[k];
      let checkbox = `<div>
      <input type="checkbox" id="selected" name="${option}" value="${option}" >
      <label for="${option}">${option}</label>
    </div>`;
      newElement.innerHTML += checkbox;
    }
   /* let option1 = questions[i].correct_answer;
    checkbox = `<div>
      <input type="checkbox" id="selected" name="${option1}" value="${option1}" >
      <label for="${option1}">${option1}</label>
    </div>`;
    newElement.innerHTML += checkbox;*/
  }
};
/*To Check the result*/
let answer = []
for (let i=0; i<questions[i].length;i++)
{
  answer =  questions[i].correct_answer;
}
function showResult() {
  let result = []
  var ele = document.getElementsByTagName("input");
  for (let i = 0; i < ele.length; i++) {
    if ((ele[i].type = "checkbox")) {
     
       if (ele[i].checked)
     result += ele[i].name;
     // result.innerHTML = result + 1
     return result
    }

  }

};
let result = showResult()

/**
 *function displayResult(result,answer){
  let matches = []
  for (let i =0; i <result.length;i++){
    for(let j=0; j<answer.length;j++){
      if(result[i]===answer[j]){
        let finalResult
        finalResult ++

      }
    }
  }

  let displayResultFinal = document.getElementById('results')
  displayResult.innerText = finalResult
}
 */


window.onload = function () {
  quizQuestion();
  //displayResult(result,answer)
};
