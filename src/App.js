import { useState } from "react";
import "./App.css";
import randomQuest from "./questions.js";

function App() {
  const [status, setStatus] = useState(randomQuest.status);

  const сlickYes = () => {
    randomQuest.status = setStatus(true);
  };

  console.log(status);

  console.log("randomQuest status", randomQuest.status);

  return (
    <div className="questions">
      <div className="question">
        {randomQuest.question} {JSON.stringify(randomQuest.status)}
      </div>
      <button onClick={сlickYes} className="yes">
        yes
      </button>
      <button className="no">no</button>
    </div>
  );
}

export default App;
