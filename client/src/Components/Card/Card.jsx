import { Link } from "react-router-dom";
import style from "./Card.module.css";
import logo from "../../Media/food-restaurant.png"

const Card = (props) => {
  // console.log(props.id);
  return (
    <div className={style.card}>
      <img src={props.imagen} alt="plato" className={style.img}/>
      <div className={style.descripcion}>
      <Link to={`/Detail/${props.id}`} className={style.link}>
        <h1>{props.name}</h1>
      </Link>
      {/* <p>resumenDelPlato:{props.resumenDelPlato}</p> */}
      {/* <div className={style.barprog}> <p>{props.healthScore}%</p></div> */}
      <div className={style.diets}>
      {props.diets.map(d => <span><img src={logo} alt="" />{d}</span>)}
      </div>
      </div>
      {/* <p> pasoAPaso:{props.pasoAPaso}</p> */}
    </div>
  );
};

export default Card;
