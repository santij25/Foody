import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  return (
    <div className={style.container}>
      {recipes.map((recipe) => {
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
      })}
    </div>
  );
};

export default CardsContainer;
