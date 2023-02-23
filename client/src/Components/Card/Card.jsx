import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>name: {props.name}</p>
      <img src={props.imagen} alt="plato" srcset="" />
      {/* <p>resumenDelPlato:{props.resumenDelPlato}</p> */}
      <p> healthScore:{props.healthScore}</p>
      <p> diets:{props.diets}</p>
      {/* <p> pasoAPaso:{props.pasoAPaso}</p> */}
    </div>
  );
};

export default Card;
