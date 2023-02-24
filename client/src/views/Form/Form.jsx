import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import { postRecipe } from "../../redux/Actions";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const dietasApi = useSelector((state) => state.diets);
  const [form, setForm] = useState({
    name: "",
    imagen: "",
    resumenDelPlato: "",
    healthScore: 0,
    pasoAPaso: [],
    diets: [],
  });

  console.log(form);

  const stepHandler = (e) => {
    const steps = [e.target.value];
    setForm({ ...form, pasoAPaso: steps });
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const selectHandler = (e) => {
    if (!form.diets.includes(e.target.value)) {
      setForm({ ...form, diets: [...form.diets, e.target.value] });
    } else {
      alert("Ya agregado");
    }
  };

  const deleteHandler = (diet) => {
    setForm({ ...form, diets: [...form.diets.filter((e) => e !== diet)] });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postRecipe(form))
      .then((e) => {
        setForm({
          name: "",
          imagen: "",
          resumenDelPlato: "",
          healthScore: 0,
          pasoAPaso: [],
          diets: [],
        });
        alert("Receta creada");
        history.goBack();
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrio un error");
      });
  };

  return (
    <div>
      <form>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Nombre..."
          />
        </div>
        <div>
          <label>Resumen del plato: </label>
          <input
            type="text"
            name="resumenDelPlato"
            onChange={changeHandler}
            placeholder="Resumen del plato..."
          />
        </div>
        <div>
          <label>Nivel de comida saludable: </label>
          <input
            type="number"
            name="healthScore"
            onChange={changeHandler}
            placeholder="Nivel de saludable..."
          />
        </div>
        <div>
          <label>Pasos: </label>
          <textarea
            name="pasoAPaso"
            cols="30"
            rows="6"
            onChange={stepHandler}
            placeholder="Pasos a seguir..."
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            type="text"
            name="imagen"
            onChange={changeHandler}
            placeholder="Link de la imagen..."
          />
        </div>

        <label className="info">Diets: </label>
        <select name="diets" className="diets" onChange={selectHandler}>
          {!dietasApi.length ? (
            <option>Cargando...</option>
          ) : (
            dietasApi.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.Nombre}
                </option>
              );
            })
          )}
        </select>
        <br />
        <div className="DietasAgregadas">
          <label>Dietas Agregadas: </label>
          {!form.diets
            ? null
            : form.diets.map((diet) => (
                <div key={diet}>
                  <div className="dietAdd">
                    <p>{diet}</p>
                    <button
                      onClick={(a) => {
                        a.preventDefault();
                        deleteHandler(diet);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <hr className="div" />
                </div>
              ))}
        </div>

        <button type="submit" onClick={SubmitHandler}>
          CREAR RECETA
        </button>
      </form>
    </div>
  );
};

export default Form;
