/* eslint-disable max-len */
/* eslint-disable no-bitwise */
// @ts-nocheck
/* eslint-disable no-constant-condition */
/* eslint-disable no-self-compare */

/* --------------------------------------------------------------- */

/*
Tutorial de Jon Mircha de operadores logicos
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=1323s

Documentación oficial...
&& AND
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

|| OR
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

! NOT (Negación)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

!! Double NOT Operator (Doble Negación)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!

?? Operador Coalescente Nulo (Nullish Coalescing Operator)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

Stack Overflow - !! Double NOT Operator (Doble Negación)
https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript */

/* --------------------------------------------------------------- */

/* && AND
TODAS las condiciones tienen q ser true
para que && AND devuelva true y SI se ejecute el codigo */
console.log((9 === 9));                                      // true
if ((9 === 9) && (8 === 8)) console.log('codigo ejecutado'); // 'codigo ejecutado'

/* cuando hay UNA SOLA o mas condiciones que son false,
entonces && AND devuelve false y NO se ejecuta el codigo del if() */
console.log('9' === 9);                // false
console.log(('9' === 9) && (9 === 9)); // false
if (('9' === 9) && (9 === 9)) console.log('este codigo NUNCA se ejecuta');

/* --- */

/* || OR
Si tengo 2 ó mas condiciones
y al menos una sola o mas se cumple (es verdadera),
entonces || OR devuelve true
y se ejecuta el codigo */
console.log(9 === 9);                                          // true
console.log(('9' === 9));                                      // false
console.log((9 === 9) || ('9' === 9));                         // true
if ((9 === 9) || ('9' === 9)) console.log('codigo ejecutado'); // 'codigo ejecutado'

/* En cambio,
si absolutamente todas las condiciones son falsas,
|| OR devuelve false
y NO se ejecuta el codigo del if() */
console.log(9 === '9');                  // false
console.log('9' === 9);                  // false
console.log((9 === '9') || ('9' === 9)); // false
if ((9 === '9') || ('9' === 9)) console.log('este codigo NUNCA se ejecuta');

/* --- */

/* ! NOT (Negación) es lo opuesto (contrario de)...

Lo opuesto de true (1) es false */
console.log(!true);  // false
console.log(!1);     // false

// y lo opuesto de false (0) es true
console.log(!false); // true
console.log(!0);     // true

/* --- */

/* !! Double NOT Operator (Doble Negación)
Niega dos veces la expresion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#converting_between_nots */

console.log(!!true);  // true
console.log(!!false); // false

/* Recordatorio:
Ver:
- " 4.3.1.3.1) Truthy (Verdadero) "
- " 4.3.1.3.2) Falsy (Falso) "

!! Se puede usar para convertir a booleano pero esto es MALA PRACTICA
https://youtube.com/shorts/RxxyJk4h9pU?feature=share */
console.log(!!1);            // true
console.log(!!0);            // false

console.log(!!'');           // false
console.log(!!'hola mundo'); // true

console.log(!!null);         // false
console.log(!!undefined);    // false
console.log(!!NaN);          // false

// se debe usar Boolean() (buena practica)
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false

console.log(Boolean(''));           // false
console.log(Boolean('hola mundo')); // true

console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false

/* --- */

/* ?? Operador Coalescente Nulo (Nullish Coalescing Operator)

Recordatorio:
Los operadores ?? y ??= tienen una similitud (NO hacen exactamente lo mismo), ver:
...src/3_Operadores/2_operadores_de_asignacion.js
en esta seccion " ??= ASIGNACION COALESCENTE NULA (NULLISH COALESCING ASSIGMENT) "

Tutorial de Midudev:
https://youtu.be/UYjZ0MDUkn0

Sintaxis:
operandoIzquierdo ?? operandoDerecho
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#syntax

Ejemplo 1 - explicacion del operador ??
Si operandoIzquierdo es null o undefined se devuelve operandoDerecho
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#try_it */

console.log(null ?? 'hola mundo');                // 'hola mundo'
console.log(undefined ?? 'hola mundo');           // 'hola mundo'

console.log((null || undefined) ?? 'hola mundo'); // 'hola mundo'
console.log((undefined || null) ?? 'hola mundo'); // 'hola mundo'

// cuando operandoIzquierdo NO es null NI undefined devuelve operando IZQUIERDO
console.log(0 ?? 'hola mundo');                  // 0
console.log(1 ?? 'hola mundo');                  // 1

console.log(!null ?? 'hola mundo');              // true
console.log(!undefined ?? 'hola mundo');         // true

console.log((null & undefined) ?? 'hola mundo'); // 0
console.log((undefined & null) ?? 'hola mundo'); // 0

console.log('' ?? 'hola mundo');                 // ''

console.log(true ?? 'hola mundo');               // true
console.log(false ?? 'hola mundo');              // false

console.log(NaN ?? 'hola mundo');                // NaN

// Ejemplo 2 - ambos operandos son null o undefined
console.log(undefined ?? undefined); // undefined
console.log(undefined ?? null);      // null
console.log(null ?? undefined);      // undefined

// Ejemplo 3 - guardar en variable el resultado del operador ??
const coalescenteNulo = '' ?? 'hola mundo';
console.log(coalescenteNulo);
// ''

/* Ejemplo 4:
Voy a explicar lo siguiente:
- Funciones y operador ??

- En que momento se detiene la ejecucion del operador ??
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#short-circuiting */

const A = () => {
  console.log('A funcion ejecutada');
  return undefined;
};

const B = () => {
  console.log('B funcion ejecutada');
  return false;
};

const C = () => {
  console.log('C funcion ejecutada');
  return 'hola mundo';
};

/* 1) Se ejecutan las funciones A() y C()

2) Como la funcion A() retorna undefined entonces se devuelve
el valor de retorno de la funcion C() q es 'hola mundo'

3) Se estan evaluando ambos operandos operandoIzquierdo A() y operandoDerecho C() */
console.log(A() ?? C());
/*
'A funcion ejecutada'
'C funcion ejecutada'
'hola mundo'
*/

/* 1) SOLAMENTE se ejecuta la funcion B()

2) NO se evalua el operandoDerecho C() porque
la funcion B() retorna false que es un valor DIFERENTE de null y undefined */
console.log(B() ?? C());
/*
'B funcion ejecutada'
false
*/

/* Ejemplo 5 - Diferencia entre ?? operador coalescente nulo (buena práctica) y || OR (mala práctica)
https://youtu.be/UYjZ0MDUkn0

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#assigning_a_default_value_to_a_variable

Al convertir de String() a Boolean()
los string q NO estan vacios se convierten a true

el equivalente de 'uno'
q es un tipo String() NO vacio
en tipo Boolean() es true */
console.log(Boolean('uno')); // true

/* || OR convierte TODOS los operandos a booleano Boolean()
|| devuelve 'uno' porq es el primer operando q es true de izquierda a derecha */
console.log('uno' || 'dos'); // 'uno'

/* Aqui sucede lo mismo:
|| Devuelve 10 porq es el primer operando q es true de izquierda a derecha */
console.log(10 || 2); // 10

// || OR devuelve el operando q es true
console.log(true || false);  // true
//           ↑

console.log(false || true);  // true
//                    ↑

// || Devuelve 'dos' porq al convertirlo a Boolean() es true
console.log(false || 'dos'); // 'dos'

// Al convertir caracter en blanco '' a Boolean() es false
console.log(Boolean('')); // false

/* Hay un caso especial:
Ambos valores false y '' al convertirlos a Boolean() son false */
console.log(Boolean(false)); // false
console.log(Boolean(''));    // false

// sin embargo || devuelve '' porq no hay otra expresión para evaluar
console.log(false || '');    // ''

// || OR devuelve 'dos' porque al convertir 'dos' a Boolean() es true
console.log('' || 'dos'); // false || true
// 'dos'

// cuando todos los operandos son false entonces || devuelve false
console.log(false || false); // false

/* ADVERTENCIA: ⚠️
Esta es la explicacion de
porq || OR es mala practica y ?? es buena practica

Hay un ERROR al usar 0 con || OR:
En Boolean() como 0 se convierte a false */
console.log(Boolean(0)); // false
console.log(Boolean(2)); // true

/* entonces || devuelve el 2 q es true
pero yo no necesito el 2, necesito el 0 */
console.log(0 || 2); // false || true
// 2

/* En cambio cuando uso el ?? operador coalescente nulo
se devuelve el operandoIzquierdo
q en este ejemplo son 0, NaN y false
porq NO son null NI undefined */
console.log(0 ?? 2);     // 0
console.log(NaN ?? 2);   // NaN
console.log(false ?? 2); // false

// ?? devuelve 2 porq el operandoIzquierdo es null o undefined
console.log(null ?? 2);      // 2
console.log(undefined ?? 2); // 2

/* Ejemplo 6 - Acceder al valor de una propiedad de un objeto literal {} usando el ?? operador coalescente nulo y ?. encadenamiento opcional
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#relationship_with_the_optional_chaining_operator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#combining_with_the_nullish_coalescing_operator */

const objetoLiteral = {
// propiedad: valor,
  propiedadObjeto: 'valor objeto',
  propiedadObjeto2: 'valor objeto 2',
};
console.log(objetoLiteral);
/*
{
  propiedadObjeto: 'valor objeto',
  propiedadObjeto2: 'valor objeto 2'
}
*/

/* Como la propiedad llamada propiedadObjeto
SI existe en el objetoLiteral
entonces se guarda su valor que es 'valor objeto' en la variable valor

.toUpperCase() convertir a MAYUSCULA el 'valor objeto'

objetoLiteral.propiedadObjeto?.toUpperCase() devuelve 'VALOR OBJETO' */
let valor = objetoLiteral.propiedadObjeto?.toUpperCase() ?? 'NO existe la propiedadInexistente en el objetoLiteral';
console.log(valor);
// 'VALOR OBJETO'

/* como la propiedad llamada propiedadInexistente
NO existe en el objetoLiteral
entonces se guarda el mensaje
"NO existe la propiedadInexistente en el objetoLiteral" en la variable valor

objetoLiteral.propiedadInexistente?.toUpperCase() devuelve undefined */
valor = objetoLiteral.propiedadInexistente?.toUpperCase() ?? 'NO existe la propiedadInexistente en el objetoLiteral';
console.log(valor);
// 'NO existe la propiedadInexistente en el objetoLiteral'
