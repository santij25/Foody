import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
      <div className={style.title} > 
        <h1>Foody🍔</h1>
      </div>
      <div>
        <Link to="/home">
          <a href="a" className={style.btn}>
            <span>Ir a la Página</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
