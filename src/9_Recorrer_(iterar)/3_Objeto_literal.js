/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* Tutorial de Midudev:
https://youtu.be/Mz9HSiXSSVU */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/*
Con todas las siguientes formas,
obtengo el mismo resultado:

uno  ➜ 1
dos  ➜ 2
tres ➜ 3

EXCEPTO con Object.values()
que SOLAMENTE itera los valores del objetoLiteral {}

1
2
3
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while () █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

Esto es MALA PRACTICA:
https://eslint.org/docs/latest/rules/no-restricted-syntax

https://eslint.org/docs/latest/rules/guard-for-in

INCOMPLETO
*/
for (const propiedad in objetoLiteral) {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/
Object.keys(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/
Object.values(objetoLiteral).map((valor) => {
  console.log(valor);
});

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
  console.log(`${propiedad} ➜ ${valor}`);
});
