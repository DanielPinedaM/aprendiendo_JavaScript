/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* --------------------------------------------------- */

export { constante } from '../modules/constante.js';

export { restar, sumar } from '../modules/matematica.js';

// ❌ esto da error: export objetoLiteral from '../modules/objeto.js';
export { default as objetoLiteral } from '../modules/objeto.js';

