import React from "react";
import style from "../Extras/EndGame.module.scss";

const EndGame = () => {
  return (
    <div className={style.endGame_container}>
      YOU WIN!
      <button className={style.button}>
        Close
      </button>
    </div>
  );
};

export default EndGame;
