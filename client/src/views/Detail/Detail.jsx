import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../../redux/Actions";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipeId(id));
  }, [dispatch, id]);

  return (
    <div>
      <h6>name: {recipe.name}</h6>
      <img src={recipe.imagen} alt="receta" />
      <h6>resumenDelPlato: {recipe.resumenDelPlato}</h6>
      <h6>healthScore: {recipe.healthScore}</h6>
      <h6>diets:{recipe.diets}</h6>
      <ul>
        steps:
        {recipe.pasoAPaso
          ? recipe.pasoAPaso.map((r) => {
              return <li>{r.number + " " + r.step}</li>
            })
          : <p>No hay pasos 😔</p>}
      </ul>
    </div>
  );
};

export default Detail;
