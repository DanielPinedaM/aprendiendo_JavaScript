/* eslint-disable indent */
// @ts-nocheck
/* eslint-disable import/extensions */

/* --------------------------------------------------- */

/* export await Exportar con Asincronía
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await */

import usuarioFetch, {
    obtenerUsuarioAsyncAwait,
    usuarioAsyncAwait,
} from './asincrono.js';

console.log(usuarioFetch);
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

console.log(usuarioAsyncAwait);
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// top level await
// https://youtu.be/E62-MLR0OlE?si=i2nxg2A6zpG9Axr9
(async () => {
  try {
    const data = await obtenerUsuarioAsyncAwait();
    console.log(data);
    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  } catch (error) {
    console.error(error);
  }
})();
