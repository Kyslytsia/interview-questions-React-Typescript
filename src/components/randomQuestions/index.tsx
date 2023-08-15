import React, { useEffect, useState } from "react";

import * as Icon from "../icons";
import * as Styles from "../../app/styles";
import { questions } from "../../app/questions";

const Questions: React.FC = () => {
  const [remainingQuestions, setRemainingQuestions] = useState<string[]>(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions")!)
      : questions
  );
  const [randomQuestion, setRandomQuestion] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(remainingQuestions));
  }, [remainingQuestions]);

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

  const handleResetClick = () => {
    setRemainingQuestions(questions);
    setRandomQuestion(null);
  };

  return (
    <Styles.QuestionsContainer>
      <Styles.Reset onClick={handleResetClick}>RESET</Styles.Reset>

      <Styles.Question>
        {randomQuestion ? (
          randomQuestion
        ) : (
          <Icon.Knowledge width={200} height={200} />
        )}
      </Styles.Question>

      <Styles.RemainingQuestions>
        {"Remaining Questions: " + remainingQuestions.length}
      </Styles.RemainingQuestions>

      <Styles.ButtonsBlock>
        <Styles.ButtonKnow onClick={handleQuestionClick}>
          <Icon.CheckMark width={20} height={20} />
        </Styles.ButtonKnow>

        <Styles.ButtonNext onClick={getRandomQuestion}>
          {randomQuestion ? "Show later" : "Get question"}
        </Styles.ButtonNext>
      </Styles.ButtonsBlock>
    </Styles.QuestionsContainer>
  );
};

export default Questions;
