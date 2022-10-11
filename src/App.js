import { useState } from "react";
import "./App.css";
import randomQuestsion from "./questions.js";

function App() {
  const cls = ["question"];

  const [status, setStatus] = useState(randomQuestsion.status);

  const сlickYes = () => {
    setStatus(true);
  };

  const сlickNo = () => {
    setStatus(false);
  };

  if (status === true) {
    cls.push("green");
  } else if (status === false) {
    cls.push("red");
  }

  return (
    <div className="questions">
      <div className={cls.join(" ")}>{randomQuestsion.question}</div>
      <button onClick={сlickYes} className="yes">
        yes
      </button>
      <button onClick={сlickNo} className="no">
        no
      </button>
    </div>
  );
}

export default App;
