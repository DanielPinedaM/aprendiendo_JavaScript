/* eslint-disable import/extensions */

/* --------------------------------------------------- */

/* export await Exportar con Asincronía
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await */

import usuarioFetch, { usuarioAsyncAwait } from './asincrono.js';

console.log(usuarioFetch);
// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

console.log(usuarioAsyncAwait);
// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
