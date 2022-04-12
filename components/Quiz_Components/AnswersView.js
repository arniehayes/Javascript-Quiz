import style from "./quiz.module.scss";
import Stack from "@mui/material/Stack";
import cc from "classcat";
import ReactMarkdown from "react-markdown";
import { questionArray } from "../../Questions/questionArray";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AddressContext } from "../../pages/Quiz";

const Answers_View = () => {
  /* STATES */
  const {
    answer,
    setAnswer,
    submitted,
    setSubmitted,
    isCorrect,
    setIsCorrect,
    nextQButton,
    setNextQButton,
    currentQuestion,
    setCurrentQuestion,
    showSolution,
    setShowSolution,
    ModalIsOpen,
    setModalIsOpen,
  } = useContext(AddressContext);

  const correctanswer = questionArray.javaScript[currentQuestion].correctAnswer;

  // States in this file
  const [isClicked, setIsClicked] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleSumbit = (guessedAnswer) => {
    setSubmitted(true);
    setShowBtn(true);
    if (guessedAnswer === correctanswer) {
      setIsCorrect(true);
      //setCurrentQuestion((current) => current + 1);
    } else {
      setIsCorrect(false);
    }
    console.log("current question: " + currentQuestion);
    // TODO:
    // Set the nextQButton state to false after "Next Question" button is clicked
  };

  const handleNextButton = () => {
    if (isCorrect) {
      setShowBtn(false);
      setCurrentQuestion((current) => current + 1);
    }
  };

  return (
    <div className={style.answers_container}>
      <Stack direction="column" spacing={1} className={style.stack}>
        {/* MULTIPLE CHOICE ANSWERS */}
        {questionArray.javaScript[currentQuestion].answers.map((item, id) => (
          <div
            className={style.answer_button_wrapper}
            onClick={() => setAnswer(id)}
            key={id}
          >
            <Button
              className={cc([
                style.button,
                {
                  [style.button_correct]:
                    isClicked &&
                    correctanswer === id &&
                    submitted &&
                    id === answer,
                  [style.button_incorrect]:
                    isClicked &&
                    correctanswer !== id &&
                    submitted &&
                    id === answer,
                },
              ])}
              // position={id}
              // submitted={submitted}
              // correctanswer={correctanswer}
              onClick={() => {
                handleClick();
                console.log("You Clicked button: " + id);
              }}
            >
              <ReactMarkdown children={item} />
            </Button>
          </div>
        ))}
        {/* SUBMIT BUTTON */}
        <Button
          variant="contained"
          size="medium"
          className={style.button_submit}
          onClick={() => handleSumbit(answer)}
        >
          Sumbit
        </Button>

        {
          // Buttons:
          // Checking if the answer is correct to show the two buttons.
          // Current problem: Buttons work on first question but stay on the next question
        }
        {showBtn ? (
          <div className={style.basic_button_container}>
            {isCorrect ? (
              <Button
                variant="contained"
                size="small"
                className={style.button_basic}
                onClick={() => {
                  handleNextButton();
                  setIsClicked(false);
                  setSubmitted(false);
                }}
              >
                {`Next Question`}
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                className={style.button_basic}
                onClick={() => {
                  handleNextButton();
                  setIsClicked(false);
                  setSubmitted(false);
                  setShowBtn(false);
                }}
              >
                {`Try Again`}
              </Button>
            )}

            {/* TODO: Make SolutionWindow display when solution button is clicked */}
            <Button
              variant="contained"
              size="small"
              className={style.button_basic}
              onClick={() => {
                setShowSolution(true);
                setModalIsOpen(true);
              }}
            >
              View solution
            </Button>
          </div>
        ) : null}
      </Stack>
    </div>
  );
};

export default Answers_View;
