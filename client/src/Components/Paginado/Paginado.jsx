import React from "react";
import style from "./Paginado.module.css";

function Paginado({
  totalRecipes,
  postPerPage,
  setCurrent,
  current,
  nextHandler,
  prevHandler,
}) {
  let paginas = [];
  for (let i = 1; i <= Math.ceil(totalRecipes / postPerPage); i++) {
    paginas.push(i);
  }
  return (
    <div>
      <div className={style.paginado}>
        <button onClick={prevHandler} id={style.prev}>
          Prev
        </button>
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
        <button onClick={nextHandler} id={style.prev}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginado;
