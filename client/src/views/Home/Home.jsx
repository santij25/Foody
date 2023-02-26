import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  getDiets,
  filterName,
  filterScore,
  filterDiets,
  filterDbApi,
  getRecipeName,
} from "../../redux/Actions";
import Paginado from "../../Components/Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  console.log(recipes);

  //* Paginado

  const [current, setCurrent] = useState(1);
  const [postPerPage] = useState(9);
  const lastPostIndex = current * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentRecipes = recipes.slice(firstPostIndex, lastPostIndex);

  //* Filtros

  const nameHandler = (e) => {
    dispatch(filterName(e.target.value));
  };

  const scoreHandler = (e) => {
    dispatch(filterScore(e.target.value));
  };

  const dietsHandler = (e) => {
    dispatch(filterDiets(e.target.value));
  };

  const dbApiHandler = (e) => {
    dispatch(filterDbApi(e.target.value));
  };

  const [name, setName] = useState("");

  const HandleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getRecipeName(name));
  };

  return (
    <div>
      <div>
        <nav>
          <div className="opcionesFilt">
            <div className="Buscador">
              <form>
                <input
                  type="text"
                  name="Buscar"
                  onChange={HandleChange}
                  placeholder="Bucsar receta"
                />
              </form>
              <input
                className="buscar"
                type="submit"
                value="🔎"
                onClick={handleSubmit}
              />
            </div>
            <div className="FiltrosBasic">
              <select
                className="FiltroASDDES"
                onChange={nameHandler}
                defaultValue="default"
              >
                <option value="default" disabled>
                  Ordenar por Nombre
                </option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>

              <select defaultValue="default" onChange={scoreHandler}>
                <option value="default" disabled>
                  Ordenar por puntaje
                </option>
                <option value="MIN">Min - Max</option>
                <option value="MAX">Max - Min</option>
              </select>

              <select defaultValue="default" onChange={dietsHandler}>
                <option value="default" disabled>
                  Tipo de Dieta
                </option>
                <option value="All">All</option>
                {diets.map((e) => {
                  return (
                    <option value={e.Nombre} key={e.id}>
                      {e.Nombre}
                    </option>
                  );
                })}
              </select>
            </div>

            <select name="DBAPI" onChange={dbApiHandler}>
              <option value="ALL">All</option>
              <option value="DB">DataBase</option>
              <option value="API">API</option>
            </select>
          </div>
        </nav>
      </div>
      <CardsContainer recipes={currentRecipes} />
      <Paginado
        totalRecipes={recipes.length}
        postPerPage={postPerPage}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default Home;
