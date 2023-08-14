import styled from "styled-components";

export const Container = styled.body`
  padding: 20px 10px;
  height: 1000px;
  background: linear-gradient(90deg, #faf0cd, #fab397);
`;

export const QuestionsContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
`;

export const Question = styled.div`
  height: 330px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const IconMark = styled.img`
  height: 20px;
  width: 20px;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 250px;
`;

export const ButtonKnow = styled.button`
  height: 40px;
  width: 70px;
  background-color: green;
  font-size: 16px;
  color: white;
  border: 2px solid green;
  border-radius: 20px;
  cursor: pointer;
`;

export const ButtonNext = styled.button`
  padding: 10px 20px;
  height: 40px;
  width: 160px;
  background-color: transparent;
  font-size: 16px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
`;