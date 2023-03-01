import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ recipes }) => {
  return (
    <div className={style.container}>
      {!recipes.length ? (
        <h1>No hay recetas 😔</h1>
      ) : recipes[0] === "Not Found" ? (
        <h1>No hay recetas 😔</h1>
      ) : (
        recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              imagen={recipe.imagen}
              // resumenDelPlato={recipe.resumenDelPlato}
              healthScore={recipe.healthScore}
              diets={recipe.diets}
              // pasoAPaso={recipe.pasoAPaso}
            />
          );
        })
      )}
    </div>
  );
};

export default CardsContainer;
