/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-restricted-exports */

/* --------------------------------------------------------------- */

export const uno = 1;

const sumar = (a, b) => a + b;

/* Solamente se puede
exportar por defecto UNA SOLA
constante, funcion, clase, etc. */

// ESTO:
// export { sumar as default };

// ES LO MISMO Q ESTO...
export default sumar;
