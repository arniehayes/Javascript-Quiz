import style from "./quiz.module.scss";
import ReactMarkdown from 'react-markdown'
import { questionArray } from "../../Questions/questionArray";

const Question_View = ({currentQuestion}) => {
  return (
    <div className={style.question_container}>
      <div className={style.code_block}>

          <ReactMarkdown
            children={questionArray.javaScript[currentQuestion].question}
          />

      </div>
    </div>
  );
};

export default Question_View;
