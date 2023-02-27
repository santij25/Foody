import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Media/fudi.png";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.todo}>
        <header className={style.header}>
          <div className={style.logo}>
            <Link to="/home">
              <img src={logo} alt="hamburguesa" />
            </Link>
          </div>
          <nav>
            <ul className={style.navLinks}>
              <Link to="/home">
                <li>
                  <button>HOME</button>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <button>LANDING</button>
                </li>
              </Link>
            <Link to="/create">
              <li>
                <button>CREAR</button>
              </li>
            </Link>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
