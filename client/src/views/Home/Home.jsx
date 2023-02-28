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
} from "../../redux/Actions";
import Paginado from "../../Components/Paginado/Paginado";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  console.log(recipes);

  //* Paginado

  const [current, setCurrent] = useState(1);
  const [postPerPage] = useState(9);
  const lastPostIndex = current * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage; 
  let currentRecipes = recipes.slice(firstPostIndex, lastPostIndex);

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

  currentRecipes = !name
    ? recipes.slice(firstPostIndex, lastPostIndex)
    : recipes.filter((e) =>
        e.name.toLowerCase().includes(name.toLocaleLowerCase())
      );

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.contenedor}>
        <nav>
          <div>
            <form className={style.formulario}>
              <div className={style.buscador}>
                <input
                  value={name}
                  type="text"
                  name="Buscar"
                  onChange={HandleChange}
                  placeholder="Buscar receta"
                  className={style.filtre}
                />
              </div>
              <div className={style.selected}>
                <select
                  onChange={nameHandler}
                  defaultValue="default"
                  className={style.select}
                >
                  <option value="default" disabled>
                    Ordenar por Nombre
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>

              <div className={style.selected}>
                <select
                  defaultValue="default"
                  onChange={scoreHandler}
                  className={style.select}
                >
                  <option value="default" disabled>
                    Ordenar por puntaje
                  </option>
                  <option value="MIN">Min - Max</option>
                  <option value="MAX">Max - Min</option>
                </select>
              </div>

              <div className={style.selected}>
                <select
                  defaultValue="default"
                  onChange={dietsHandler}
                  className={style.select}
                >
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

              <div className={style.selected}>
                <select
                  name="DBAPI"
                  onChange={dbApiHandler}
                  className={style.select}
                >
                  <option value="ALL">Todas</option>
                  <option value="DB">Creadas</option>
                  <option value="API">No creadas</option>
                </select>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <Paginado
        totalRecipes={recipes.length}
        postPerPage={postPerPage}
        setCurrent={setCurrent}
        current={current}
      />
      <CardsContainer recipes={currentRecipes} />
    </div>
  );
};

export default Home;
