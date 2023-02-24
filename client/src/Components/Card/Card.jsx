import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  // console.log(props.id);
  return (
    <div className={style.card}>
      <Link to={`/Detail/${props.id}`}>
        <p>name: {props.name}</p>
      </Link>
      <img src={props.imagen} alt="plato" width={"250px"} height={"200px"}/>
      {/* <p>resumenDelPlato:{props.resumenDelPlato}</p> */}
      <p> healthScore:{props.healthScore}</p>
      {props.diets.map(d => <p>{d}</p>)}
      {/* <p> pasoAPaso:{props.pasoAPaso}</p> */}
    </div>
  );
};

export default Card;
