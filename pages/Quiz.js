import Header from '../components/Header/Header';
import Answers_View from '../components/Quiz_Components/AnswersView';
import Question_View from '../components/Quiz_Components/QuestionView';
import style from '../components/Quiz_Components/quiz.module.scss'
import React, {useState } from "react";
import SolutionWindow from "../components/Quiz_Components/SolutionWindow";
import Modal from "@mui/material/Modal";


export const AddressContext = React.createContext();

const Quiz = () => {
  // STATES
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextQButton, setNextQButton] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [modalIsOpen,setModalIsOpen] = useState(false);


  const handleClose = () => setModalIsOpen(false);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.quiz_container}>
        <AddressContext.Provider
          value={{
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
            modalIsOpen,
            setModalIsOpen,
          }}
        >
          {/* QUESTION COMPONENT */}
          <Question_View currentQuestion={currentQuestion} />

          {/* MULTIPLE CHOICE ANSWERS COMPONENT */}
          <Answers_View />

          {/* MODAL FOR SOLUTION BUTTON */}
          {showSolution ? (
            <Modal open={modalIsOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              {/*<button onClick={() => setModalIsOpen(false)}>x</button>*/}
              <SolutionWindow currentQuestion={currentQuestion} />
            </Modal>
          ) : null}

        </AddressContext.Provider>
      </div>
    </div>
  );
};

export default Quiz;
