/* eslint-disable no-multiple-empty-lines */
// @ts-nocheck

/* --------------------------------------------------- */

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await
const usuarioFetch = fetch(URL).then((response) => response.json());
export default await usuarioFetch;

// async await
const obtenerUsuario = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Error en peticion');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const usuarioAsyncAwait = await obtenerUsuario();


const obtenerUsuarioAsyncAwait = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Error en peticion');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export { obtenerUsuarioAsyncAwait };

