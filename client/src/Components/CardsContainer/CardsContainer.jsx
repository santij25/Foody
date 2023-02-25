import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useState } from "react";

const CardsContainer = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const recipes = useSelector((state) => state.recipes);
  return (
    <div className={style.container}>
      <div>
        <input
          type="search"
          placeholder="Buscar"
          onChange={changeHandler}
          value={search}
        />
      </div>
      <div>
        {!search
          ? recipes.map((recipe) => {
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
          : recipes
              .filter((el) =>
                el.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((recipe) => {
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
    </div>
  );
};

export default CardsContainer;
