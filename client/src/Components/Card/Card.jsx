import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Name:{props.name}</p>
      <p> imagen: {props.imagen}</p>
      <p>resumenDelPlato:{props.resumenDelPlato}</p>
      <p> healthScore:{props.healthScore}</p>
      <p> diets:{props.diets}</p>
      <p> pasoAPaso:{props.pasoAPaso}</p>
    </div>
  );
};

export default Card;
