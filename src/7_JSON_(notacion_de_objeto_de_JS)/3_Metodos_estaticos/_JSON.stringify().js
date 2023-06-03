// @ts-nocheck

/*
Documentacion Oficial - JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

JSON.stringify() Convertir de Objeto Literal a Texto string

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Convertir de Objeto Literal a Texto string

// Definir un objetoLiteral
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

// Q es de tipo objeto 'object'
console.log(typeof objetoLiteral);
// 'object'

/* Y lo convierto a tipo texto string
usando el metodo JSON.stringify() */
const stringify = JSON.stringify(objetoLiteral);
console.log(stringify);
// '{"uno":1,"dos":2,"tres":3}'

// typeof Verificar q es tipo string
console.log(typeof stringify);                           // 'string'

/* La variable stringify
contiene el texto string '{"uno":1,"dos":2,"tres":3}'
y NO '{uno:1,dos:2,tres:3}' */
console.log(stringify === '{"uno":1,"dos":2,"tres":3}'); // true
console.log(stringify === '{uno:1,dos:2,tres:3}');       // false

// '{"uno":1,"dos":2,"tres":3}' ES !== DIFERENTE DE '{uno:1,dos:2,tres:3}'
console.log('{"uno":1,"dos":2,"tres":3}' !== '{uno:1,dos:2,tres:3}'); // true
console.log('{"uno":1,"dos":2,"tres":3}' === '{uno:1,dos:2,tres:3}'); // false
