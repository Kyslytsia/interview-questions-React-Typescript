import React, { useState } from "react";

import * as Styles from "../styles";
import { questions } from "../questions";
import * as IconCheckMark from "../assets/icons/check-mark.svg";

const Questions: React.FC = () => {
  const [remainingQuestions, setRemainingQuestions] =
    useState<string[]>(questions);
  const [randomQuestion, setRandomQuestion] = useState<string | null>(null);

  const getRandomQuestion = () => {
    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const selectedElement = remainingQuestions[randomIndex];
      setRandomQuestion(selectedElement);
    } else {
      setRandomQuestion(null);
    }
  };

  const handleQuestionClick = () => {
    if (randomQuestion) {
      setRemainingQuestions(
        remainingQuestions.filter((question) => question !== randomQuestion)
      );
      getRandomQuestion();
    }
  };

  return (
    <Styles.QuestionsContainer>
      <Styles.Question>{randomQuestion}</Styles.Question>

      <Styles.ButtonsBlock>
        <Styles.ButtonKnow onClick={handleQuestionClick}>
          <IconCheckMark.ReactComponent width={20} height={20} />
        </Styles.ButtonKnow>

        <Styles.ButtonNext onClick={getRandomQuestion}>
          {randomQuestion ? "Show later" : "Get question"}
        </Styles.ButtonNext>
      </Styles.ButtonsBlock>
    </Styles.QuestionsContainer>
  );
};

export default Questions;