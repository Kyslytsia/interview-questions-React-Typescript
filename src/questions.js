const questions = [
  {
    question: "Объясните делегирование событий.",
    status: false,
  },
  {
    question:
      "Объясните, как this работает в JavaScript? Можете ли вы привести пример одного из способов работы с this, которая изменилась изменилась в ES6?",
    status: false,
  },
  {
    question: "Объясните, как работает прототипное наследование.",
    status: false,
  },
  {
    question:
      "В чем разница между переменной null, undefined или undeclared? Как бы вы проверили любое из этих состояний?",
    status: false,
  },
  {
    question: "Что такое замыкание и как/почему вы его используете?",
    status: false,
  },
];

function randomQuestion(arr) {
  let random = Math.floor(Math.random() * arr.length);

  return arr[random];
}

let randomQuest = randomQuestion(questions);

export default randomQuest;
