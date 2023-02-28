import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../../redux/Actions";
import style from "./Detail.module.css";
import logo from "../../Media/food-restaurant.png";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipeId(id));
  }, [dispatch, id]);

  return (
    <div className={style.padre}>
      <div className={style.container}>
        <div className={style.primero}>
          <div className={style.segundo}>
            <div className={style.name}>
              <h1>Name:</h1>
              <p>{recipe.name}</p>
            </div>
            <div className={style.score}>
              <h1>HealthScore:</h1>
              <p>❤️{recipe.healthScore}</p>
            </div>
            <div className={style.diets}>
              <h1>Diets:</h1>
              <div className={style.dietsCh}>
                {recipe.diets ? (
                  recipe.diets.map((e) => (
                    <span>
                      <img src={logo} alt="" />
                      {e}
                    </span>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
          <div className={style.img}>
            <img src={recipe.imagen} alt="receta" />
          </div>
        </div>
        <div className={style.abajo}>
          <div className={style.summary}>
            <h1>Summary:</h1>
            <p dangerouslySetInnerHTML={{ __html: recipe.resumenDelPlato }}></p>
          </div>
          <div className={style.steps}>
            <h1>Steps:</h1>
            <ul>
              {recipe.pasoAPaso ? (
                typeof recipe.pasoAPaso[0] === "object" ? (
                  recipe.pasoAPaso.map((r) => {
                    return <li>{r.number + " " + r.step}</li>;
                  })
                ) : (
                  recipe.pasoAPaso.map((r) => {
                    return <li>{r}</li>;
                  })
                )
              ) : (
                <p>No hay pasos 😔</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
