import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import questions from "./questions";

function App() {
  const [question, setQuestion] = useState(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions"))
      : questions
  );

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(question));
  }, [question]);

  function toggle(index) {
    setQuestion(
      question.map((el, i) => {
        if (i + 1 === index) {
          el.status = !el.status;
        }

        return el;
      })
    );
  }

  function reset() {
    setQuestion(
      question.map((el, i) => {
        el.status = false;

        return el;
      })
    );
  }

  return (
    <div className="wrapper">
      <List toggle={toggle} question={question} reset={reset} />
    </div>
  );
}

export default App;
