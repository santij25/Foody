import React from "react";
import style from "./Paginado.module.css"

function Paginado({ totalRecipes, postPerPage, setCurrent, current }) {
  let paginas = [];
  for (let i = 1; i <= Math.ceil(totalRecipes / postPerPage); i++) {
    paginas.push(i);
  }
  return (
    <div className={style.paginado}>
      {paginas.map((p, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setCurrent(p);
            }}
            className={p === current ? style.active : ""}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}

export default Paginado;
