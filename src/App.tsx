import React from "react";

import * as Styles from "./styles";
import Questions from "./randomQuestions";

const App: React.FC = () => {
  return (
    <Styles.Container>
      <Questions />
    </Styles.Container>
  );
};

export default App;
