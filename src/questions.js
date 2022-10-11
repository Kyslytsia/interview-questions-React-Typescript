const questions = [
  {
    question: "Объясните делегирование событий.",
    status: 0,
  },
  {
    question:
      "Объясните, как this работает в JavaScript? Можете ли вы привести пример одного из способов работы с this, которая изменилась изменилась в ES6?",
    status: 0,
  },
  {
    question: "Объясните, как работает прототипное наследование.",
    status: 0,
  },
  {
    question:
      "В чем разница между переменной null, undefined или undeclared? Как бы вы проверили любое из этих состояний?",
    status: 0,
  },
  {
    question: "Что такое замыкание и как/почему вы его используете?",
    status: 0,
  },
];

function randomQuestions(arr) {
  let random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

let randomQuestsion = randomQuestions(questions);

export default randomQuestsion;
