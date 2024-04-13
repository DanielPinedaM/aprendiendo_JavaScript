// @ts-nocheck
// fetch request

/* --------------------------------------------------- */

// fetch
const usuarioFetch = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
export default await usuarioFetch;

// async await
const obtenerUsuario = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

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
