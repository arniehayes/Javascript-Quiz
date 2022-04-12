import style from "./quiz.module.scss";
import { questionArray } from "../../Questions/questionArray";

const SolutionWindow = ({currentQuestion}) => {


    const currentSolution = questionArray.javaScript[currentQuestion].reason;


    return (
      <div className={style.solution_container}>
        <div className={style.info_container}>
          <div className={style.info}>{currentSolution}</div>
        </div>
      </div>
    );
};

export default SolutionWindow;
