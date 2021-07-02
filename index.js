const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
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
      "Closes all windows",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
];
const quizQuestion = function () {
  const newElement = document.getElementById("questions");
  for (let i = 0; i < questions.length; i++) {
    let newP = document.createElement("p");
    newP.innerText = questions[i].question;
    newElement.append(newP);
    for (let k = 0; k < questions[i].incorrect_answers.length; k++) {
      const option = questions[i].incorrect_answers[k];
      let checkbox = `<div>
      <input type="checkbox" id="${option}" name="${option}" value="${option}"
             >
      <label for="${option}">${option}</label>
    </div>`;
      newElement.innerHTML += checkbox;
    }
    let option1 = questions[i].correct_answer;
    checkbox = `<div>
      <input type="checkbox" id="${option1}" name="${option1}" value="${option1}"
             >
      <label for="${option1}">${option1}</label>
    </div>`;
    newElement.innerHTML += checkbox;
  }
};
/*To Check the result*/
const showResult = function () {
  let storageResult;
  let finalResult;


  var YesOrNo = (function() {
    if(document.select.checkbox.checked) {
      console.log(document.select.Active.value )
 
    } else {
      document.select.Active.value = 'no'
    }
  });
  for (let i = 0; i < questions.length; i++) {
   /* let ch = document.querySelector( 'checkbox[i].input[value]:checked')
    ch.innerText = checkbox[i].value
    storageResult = document.querySelectorAll(
      'checkbox[i].input[value="$option"]:checked' ||
        'checkbox[i].input[value="$option1"]:checked'
    )
    if (storageResult === questions[i].correct_answer) {
      finalResult = finalResult + 1;
    }

  console.log(finalResult);*/
}
}

window.onload = function () {
  quizQuestion();
  showResult();
};
