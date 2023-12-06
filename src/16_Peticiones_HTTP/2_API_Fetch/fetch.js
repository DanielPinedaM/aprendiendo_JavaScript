// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Fetch en Vanilla JS...
- Midudev
https://youtu.be/FJ-w0tf3d_w

- Jon Mircha:
https://www.youtube.com/watch?v=dYB1UlGGmfk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=109

https://www.youtube.com/watch?v=GP8OCiJLeN4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=110

- Documentacion Oficial:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- JavaScript Info:
https://javascript.info/fetch
*/

/* --------------------------------------------------------------- */

// Ejemplo 1

const url = 'https://jsonplaceholder.typicode.com/todos/1';
console.log(url);
// 'https://jsonplaceholder.typicode.com/todos/1'

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error('Mensaje de error', error));
/*
Promise { <pending> }
{
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}
*/
