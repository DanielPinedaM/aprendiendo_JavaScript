/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable max-len */
// @ts-nocheck

/*
.valueOf() Convertir de Tipo Objeto a Dato Primitivo

Documentación Oficial...
- String.prototype.valueOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

- Object.prototype.valueOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

.valueOf() es un metodo de String() y Object()

Sintaxis:
.valueOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf#syntax

Ejemplo 1 - Convertir constructor new String('') a dato primitivo
Crear un string
con el constructor new String('') (mala practica)
y despues convertirlo a dato primitivo string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf#examples

ESLint - no-new-wrappers:
https://eslint.org/docs/latest/rules/no-new-wrappers */

const stringObjeto = new String('hola mundo'); // MALA PRACTICA new String()
console.log(stringObjeto);                     // String {'hola mundo'}
console.log(typeof stringObjeto);              // object

const string1 = stringObjeto.valueOf();
console.log(string1);                          // 'hola mundo'
console.log(typeof string1);                   // string

const string2 = String(stringObjeto);          // BUENA PRACTICA
console.log(string2);                          // 'hola mundo'
console.log(typeof string2);                   // string

/* Con ambos String() y .valueOf()
obtengo el mismo resultado,
puedo convertir de Tipo Objeto new String()
a Dato Primitivo String

el string que converti con String()
es lo mismo que el que converti con .valueOf() */
console.log(string1 === string2);              // true

/* ------------------------------------------- */

/* .valueOf() NO es mala practica,
aunque como explique en
...aprendiendo_JS\src\2_Variables\4_Convertir_tipos_de_datos_(convertir_de_un_tipo_de_dato_a_otro)\tipado_dinamico,coercion.js
es mejor siempre usar String() y NO .valueOf()

veamos porque:

creo una variable const de tipo number */
const numero = 1;
console.log(numero);                  // 1
console.log(typeof numero);           // number

// .valueOf() NO esta convirtiendo el numero 1 a string
console.log(numero.valueOf());        // 1 -> es numero porq NO esta entre comillas ''
console.log(typeof numero.valueOf()); // number

// en cambio String() SI
console.log(String(numero));          // '1' -> las comillas '' significan q es string
console.log(typeof String(numero));  // string

/* ------------------------------------------- */

/* Ejemplo 2:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion

Object.prototype.valueOf():
- devuelve el dato primitivo del objeto especificado

- Convierte el valor de this en un objeto */

const objetoLiteral = {
  value: '42',
  valueOf() {
    return this.value;
  },
};
console.log(objetoLiteral);
/*
{
  value: '42',
  valueOf: [Function: valueOf]
}
*/

/* El valor de la propiedad value
es de tipo texto String() porq esta entre comillas "" */
console.log(objetoLiteral.value);        // '42'
console.log(typeof objetoLiteral.value); // 'string'

/* .valueOf() devuelve lo mismo q objetoLiteral.value
q es el numero '42' en tipo texto String() */

console.log(objetoLiteral.valueOf());                         // '42' -> .valueOf() MALA PRACTICA
console.log(objetoLiteral.value === objetoLiteral.valueOf()); // true
console.log(typeof objetoLiteral.valueOf());                  // 'string'

// En cambio, Number() convierte a tipo numero 42
console.log(Number(objetoLiteral));        // 42 -> Number() BUENA PRACTICA
console.log(typeof Number(objetoLiteral)); // 'number'

/* ------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#try_it */

function TipoNumero(n) {
  this.number = n;
}

TipoNumero.prototype.valueOf = function () {
  return this.number;
};

const objeto = new TipoNumero(4);
console.log(objeto);
// TipoNumero { number: 4 }

console.log(objeto + 3); // 4+3 = 7
// 7

/* ------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#using_valueof

.valueOf() devuelve el valor de this convertirdo en un objeto */

const objetoLiteral2 = { uno: 1 };
console.log(objetoLiteral2);                              // { uno: 1 }
console.log(objetoLiteral2.valueOf());                    // { uno: 1 }

console.log(objetoLiteral2.valueOf() === objetoLiteral2); // true

console.log(Object.prototype.valueOf.call('primitivo'));
/*
[String: 'primitivo'] ()

String {
    '0': 'p',
    '1': 'r',
    '2': 'i',
    '3': 'm',
    '4': 'i',
    '5': 't',
    '6': 'i',
    '7': 'v',
    '8': 'o',
    length: 9,
    __proto__: { ↔️ }
*/

/* ------------------------------------------- */

/* Ejemplo 5 - Sobre-escribir .valueOf() en objetos personalizados:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#overriding_valueof_for_custom_objects

Puedo crear una funcion sin parametros para ser invocada
en vez de usar .valueOf()

Agregar .valueOf() a clase Box */

class Box {
  #value;

  constructor(value) {
    this.#value = value;
  }

  valueOf() {
    return this.#value;
  }
}

/* Con el código anterior, cada vez que el objeto Box
se usa en un contexto en el que se va a representar
como un valor primitivo (pero no específicamente como una cadena),
JavaScript llama automáticamente a la función definida en el código anterior */
const box = new Box(1);

console.log(box);           // Box {}
console.log(box.valueOf()); // 1

console.log(box + 1);       // 2 -> 1+1 = 2
console.log(box == 1);      // true
console.log(box === 1);     // false

/* ------------------------------------------- */

/* Ejemplo 6:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#using_unary_plus_on_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive

El operador unario hace la conversion a tipo Number() numero,
lo q para la mayoria de los objetos sin @@toPrimitive
significa llamar a .valueOf()

Sin embargo, si el objeto no tiene .valueOf()
entonces se llama a .toString() */

+new Date();            // 1685226152865 -> la marca de tiempo actual, igual q new Date().getTime()
+{};                    // NaN           -> .toString() retorna "[object Object]"
+[];                    // 0             -> .toString() retorna un array de string vacio
+[1];                   // 1             -> .toString() retorna "1"
+[1, 2];                // NaN           -> .toString() retorna "1,2"
+new Set([1]);          // NaN           -> .toString() retorna "[object Set]"
+{ valueOf: () => 42 }; // 42
