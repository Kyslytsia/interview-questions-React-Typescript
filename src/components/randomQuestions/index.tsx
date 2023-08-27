import React, { useEffect, useState } from "react";

import * as Icon from "../icons";
import * as Styles from "./styles";
import { questions } from "../../app/questions";

interface IQuestion {
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const [remainingQuestions, setRemainingQuestions] = useState<IQuestion[]>(
    localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions")!)
      : questions
  );
  const [randomQuestion, setRandomQuestion] = useState<IQuestion | null>();
  const [isOpenAnswer, setIsOpenAnswer] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(remainingQuestions));
  }, [remainingQuestions]);

  const getRandomQuestion = () => {
    if (remainingQuestions.length > 0) {
      setIsOpenAnswer(false);
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const selectedElement = remainingQuestions[randomIndex];
      setRandomQuestion(selectedElement);
    } else {
      setRandomQuestion(null);
    }
  };

  const handleKnowQuestion = () => {
    if (randomQuestion) {
      setRemainingQuestions(
        remainingQuestions.filter((question) => question !== randomQuestion)
      );
      getRandomQuestion();
      setIsOpenAnswer(false);
    }
  };

  const handleResetClick = () => {
    setIsOpenAnswer(false);
    setRandomQuestion(null);
    setRemainingQuestions(questions);
  };

  const handleOpenAnswer = () => {
    setIsOpenAnswer(!isOpenAnswer);
  };

  return (
    <Styles.QuestionsContainer>
      <Styles.Reset onClick={handleResetClick}>RESET</Styles.Reset>

      <Styles.Question>
        {randomQuestion ? (
          <>{randomQuestion.question}</>
        ) : (
          <Icon.Knowledge width={200} height={200} />
        )}
      </Styles.Question>

      {randomQuestion && (
        <Styles.ShowAnswerTitle onClick={handleOpenAnswer} open={isOpenAnswer}>
          {isOpenAnswer ? "Close Answer" : "Show Answer"}
          <Styles.Triangle open={isOpenAnswer} />
        </Styles.ShowAnswerTitle>
      )}

      <Styles.ShowAnswerWrapper open={isOpenAnswer}>
        <div>{randomQuestion && randomQuestion.answer}</div>
      </Styles.ShowAnswerWrapper>

      <Styles.RemainingQuestions>
        {"Remaining Questions: " + remainingQuestions.length}
      </Styles.RemainingQuestions>

      <Styles.ButtonsBlock>
        <Styles.ButtonKnow onClick={handleKnowQuestion}>
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
