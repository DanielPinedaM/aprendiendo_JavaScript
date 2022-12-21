/* eslint-disable array-callback-return */
// @ts-nocheck

/* Tutorial de Midudev:
https://youtu.be/Mz9HSiXSSVU */

const objetoLiteral = {
// propiedad: valor,
  noticias: [1, 2],
  perfiles: {
    usuarios: [3, 4],
  },
};
console.log(objetoLiteral);
/*
{
  noticias: [ 1, 2 ],
  perfiles: {
             usuarios: [ 3, 4 ]
            }
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/
Object.keys(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} : ${valor}`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/
console.log(Object.values(objetoLiteral));

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Convertir de objeto literal {} a array [],
el array contiene [propiedad, valor]
*/
Object.entries(objetoLiteral).map((entry) => {
  const [propiedad, valor] = entry;
  console.log({ propiedad, valor });
});
