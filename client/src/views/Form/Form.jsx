import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import { postRecipe } from "../../redux/Actions";
import { Validations } from "./Validaciones";
import style from "./Form.module.css";

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

  const [errors, setErrors] = useState({});
  console.log(errors);
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(
      Validations({
        ...form,
        [property]: value,
      })
    );
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

  const pasosHandler = (e) => {
    const value = e.target.value;
    const valueSep = value.split("\n");
    setForm({ ...form, pasoAPaso: valueSep });
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
    <div className={style.container}>
      <form className={style.formulario}>
        <div className={style.conter}>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Nombre..."
            className={style.input}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.conter}>
          <label>Resumen del plato: </label>
          <input
            type="text"
            name="resumenDelPlato"
            onChange={changeHandler}
            placeholder="Resumen del plato..."
            className={style.input}
          />
          {errors.resumenDelPlato && <span>{errors.resumenDelPlato}</span>}
        </div>
        <div className={style.conter}>
          <label>Nivel de comida saludable: </label>
          <input
            type="number"
            name="healthScore"
            onChange={changeHandler}
            placeholder="Nivel de saludable..."
            className={style.input}
          />
          {errors.healthScore && <span>{errors.healthScore}</span>}
        </div>
        <div className={style.conter}>
          <label>Pasos: </label>
          <textarea
            name="pasoAPaso"
            cols="30"
            rows="6"
            onChange={pasosHandler}
            placeholder=" Ejemplo: 
            1 hervir el agua 
            2 sacar el agua 
            (Respetar el formato)"
            className={style.textArea}
          />
        </div>
        <div className={style.conter}>
          <label>Imagen: </label>
          <input
            type="text"
            name="imagen"
            onChange={changeHandler}
            placeholder="URL de la imagen..."
            className={style.input}
          />
          {errors.imagen && <span>{errors.imagen}</span>}
        </div>

        <label className={style.diets}>Diets: </label>
        <div className={style.selected}>
          <select
            name="diets"
            className={style.select}
            onChange={selectHandler}
          >
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
        </div>
        <button type="submit" onClick={SubmitHandler}>
          CREAR RECETA
        </button>
      </form>
      <div className={style.agregadas}>
        <label>Dietas Agregadas: </label>
        <div className={style.sinLabel}>
          {!form.diets
            ? null
            : form.diets.map((diet) => (
                <div key={diet}>
                  <div className={style.list}>
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
                  {/* <hr className="div" /> */}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
