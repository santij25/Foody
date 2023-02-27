import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  // console.log(props.id);
  return (
    <div className={style.card}>
      <img src={props.imagen} alt="plato" className={style.img}/>
      <Link to={`/Detail/${props.id}`} className={style.link}>
        <h1>{props.name}</h1>
      </Link>
      {/* <p>resumenDelPlato:{props.resumenDelPlato}</p> */}
      {/* <div className={style.barprog}> <p>{props.healthScore}%</p></div> */}
      <div className={style.diets}>
      {props.diets.map(d => <span>☑{d}</span>)}
      </div>
      {/* <p> pasoAPaso:{props.pasoAPaso}</p> */}
    </div>
  );
};

export default Card;
