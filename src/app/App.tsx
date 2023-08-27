import React from "react";

import * as Styles from "../components/randomQuestions/styles";
import Questions from "../components/randomQuestions";

const App: React.FC = () => {
  return (
    <Styles.Container>
      <Questions />
      <Styles.GlobalStyle />
    </Styles.Container>
  );
};

export default App;
