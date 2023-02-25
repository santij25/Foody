import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Media/hambu.webp";

const NavBar = () => {
  return (
    <nav>
      <div className={style.container}>
        <Link to="/home">
          <img src={logo} alt="hamburguesa" width={"50px"} height={"50px"} />
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/">Landing</Link>
      </div>
    </nav>
  );
};

export default NavBar;
