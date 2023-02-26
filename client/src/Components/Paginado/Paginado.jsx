import React from "react";

function Paginado({ totalRecipes, postPerPage, setCurrent }) {
  let paginas = [];
  for (let i = 1; i <= Math.ceil(totalRecipes / postPerPage); i++) {
    paginas.push(i);
  }
  return (
    <div>
      {paginas.map((p, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setCurrent(p);
            }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}

export default Paginado;
