import React, { useState } from "react";
import "./App.css";
import List from "./List";
import questions from "./questions";

function App() {
  let [question, setQuestion] = useState(questions);

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

  return (
    <div className="wrapper">
      <List toggle={toggle} />
    </div>
  );
}

export default App;
