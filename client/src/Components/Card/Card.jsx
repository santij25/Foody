import style from "./Card.module.css"

const Card = (props) => {
    return (
      <div className={style.card}>
        <p>Name:{props.name}</p>
        <p>Username:{props.username}</p>
        <p>Email:{props.email}</p>
      </div>
    );
  };
  
  export default Card;