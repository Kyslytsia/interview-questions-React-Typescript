import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    background: linear-gradient(90deg, #faf0cd, #fab397);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scaleY(1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
  }
`;

export const Container = styled.div`
  padding: 20px;
  height: 1000px;
  background: linear-gradient(90deg, #faf0cd, #fab397);
`;

export const QuestionsContainer = styled.div`
  position: relative;
  padding: 20px 40px;
  margin: 50px auto;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
  font-family: sans-serif;
`;

export const Reset = styled.button`
  position: absolute;
  right: 0;
  top: -45px;
  height: 30px;
  width: 100px;
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
`;

export const Question = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const ShowAnswerTitle = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ open }) => (open ? "start" : "center")};
  margin: 15px 0;
  border-bottom: 2px solid grey;
  font-size: 18px;
  font-weight: 700;
  color: grey;
  transition: all 1s ease;
  cursor: pointer;
`;

export const Triangle = styled.span<{ open: boolean }>`
  position: relative;
  left: 4px;
  margin-left: 20px;
  height: 10px;
  width: 2px;
  background: grey;
  transition: all 0.4s ease;

  &::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 4px;
    height: 2px;
    width: 10px;
    background: grey;
    transition: all 0.4s ease;
  }

  ${({ open }) => css`
    transform: ${open && `rotate(270deg)`};

    &::after {
      opacity: ${open && `0`};
    }
  `}
`;

export const ShowAnswerWrapper = styled.div<{ open: boolean }>`
  margin-bottom: 25px;
  overflow: hidden;
  transition: all 0.4s ease;
  transform-origin: top;

  ${({ open }) => css`
    max-height: ${open ? "1000px" : "0"};
    animation: ${open ? fadeIn : fadeOut} 0.4s ease;
  `};
`;

export const IconMark = styled.img`
  height: 20px;
  width: 20px;
`;

export const RemainingQuestions = styled.div`
  margin: 0 auto 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
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
  height: 40px;
  width: 160px;
  background-color: transparent;
  font-size: 16px;
  color: black;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
`;
