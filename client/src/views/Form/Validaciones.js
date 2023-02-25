export const Validations = (form) => {
  let errors = {};

  if (!form.name) {
    errors.name = "Poner un nombre";
  }

  if (form.name.length >= 40) {
    errors.name = "Cáracteres máximos 40";
  }

  if (!form.resumenDelPlato) {
    errors.resumenDelPlato = "Debe crear un resumen";
  }

  if (form.resumenDelPlato.length >= 100) {
    errors.resumenDelPlato = "Cáracteres máximos 100";
  }

  if (!form.healthScore) {
    errors.healthScore = "Dene tener un puntaje";
  }
  if (form.healthScore < 1 || form.healthScore > 100) {
    errors.healthScore = "Debe ser entre 0 - 100";
  }

  if (
    !/(http(s?):)?([/|.|\w|\s|-])*\.(?:jpg|gif|png)\??([%&a-z0-9=_-]+)?/i.test(
      form.imagen
    )
  ) {
    errors.imagen = "Imagen incorrecta";
  }

  return errors;
};
