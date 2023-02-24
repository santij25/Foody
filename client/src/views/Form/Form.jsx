import { useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const dietasApi = useSelector((state) => state.diets);
  console.log(dietasApi);
  const [form, setForm] = useState({
    nombre: "",
    summary: "",
    healthScore: 0,
    steps: [],
    image: "",
    diets: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const check = (event) => {
    let dietas = form.diets;
    if (event.target.checked) {
      let aux = dietas.includes(event.target.value);
      if (!aux) {
        dietas.push(event.target.value);
      }
    } else {
      dietas = dietas.filter((check) => check !== event.target.value);
    }
    setForm({ ...form, diets: dietas });
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
        <div>
          <label>Dietas: </label>
          {dietasApi &&
            dietasApi.map((d) => (
              <div key={d.id}>
                <label>
                  <input
                    key={d.id}
                    name={d.Nombre}
                    onChange={(e) => check(e)}
                    type="checkbox"
                    value={d.id}
                  />
                  {d.Nombre}
                </label>
              </div>
            ))}
        </div>
        <button type="submit">CREAR</button>
      </form>
    </div>
  );
};

export default Form;
