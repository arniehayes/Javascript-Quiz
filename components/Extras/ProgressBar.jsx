import React, { useContext, useEffect } from "react";
import style from "../Extras/ProgressBar.module.scss";
import { AddressContext } from "../../pages/Quiz";

const ProgressBar = () => {
  const { currentQuestion } = useContext(AddressContext);
  const totalQuestions = 20;

  return (
    <div className={style.content_container}>
      <div className={style.bar_container}>
        <span
          className={style.inner_bar}
          id="progressBar"
          style={{ width: (currentQuestion / totalQuestions) * 100 + "%" }}
        />
      </div>
      <div className={style.title_container}>
              <p className={style.title}>Question number {currentQuestion + 1}. </p>
      </div>
    </div>
  );
};

export default ProgressBar;
