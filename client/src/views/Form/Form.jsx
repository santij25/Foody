import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from "../../redux/Actions";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const dietasApi = useSelector((state) => state.diets);
  const [form, setForm] = useState({
    nombre: "",
    summary: "",
    healthScore: 0,
    steps: [],
    image: "",
    diets: [],
  });

  console.log(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleSelect = (e) => {
    if (!form.diets.includes(e.target.value)) {
      setForm({ ...form, diets: [...form.diets, e.target.value] });
    } else {
      alert("Ya agregado");
    }
  };

  const handleDelete = (diet) => {
    setForm({ ...form, diets: [...form.diets.filter((e) => e !== diet)] });
  };

  return (
    <div>
      <form>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            onChange={changeHandler}
            placeholder="Nombre..."
          />
        </div>
        <div>
          <label>Resumen del plato: </label>
          <input
            type="text"
            name="summary"
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
            name="steps"
            cols="30"
            rows="6"
            onChange={changeHandler}
            placeholder="Pasos a seguir..."
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            type="text"
            name="image"
            onChange={changeHandler}
            placeholder="Link de la imagen..."
          />
        </div>

        <label className="info">Diets: </label>
        <select name="diets" className="diets" onChange={handleSelect}>
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
                        handleDelete(diet);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <hr className="div" />
                </div>
              ))}
        </div>

        <button type="submit">CREAR</button>
      </form>
    </div>
  );
};

export default Form;
