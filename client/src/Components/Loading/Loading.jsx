import React from "react";
import style from "./Loading.module.css";
import logo from "../../Media/loader_dribble.gif"

const Loading = () => {
  return (
    <div className={style.back}>
        <img className={style.img} src={logo} alt="Not Found"></img>
    </div>
  );
};

export default Loading;