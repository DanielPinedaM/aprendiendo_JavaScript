/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable dot-notation */
// @ts-nocheck

/*
Tutorial:
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4103s

?. Encadenamiento Opcional (Optional Chaining)...
- Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval

- JavaScript Info:
https://javascript.info/optional-chaining

?. Sirve para:
- Acceder al VALOR de...
  * Un objeto literal, ver:
    " Ejemplo 1 - Sintaxis de ?. "
    " Ejemplo 6 - Acceder al valor de una propiedad de un objeto literal {} usando el ?? operador coalescente nulo y ?. encadenamiento opcional "

  * new Map(), ver:
    " Ejemplo 11 - ?. y new Map(); "

- Ejecutar un MÉTODO (funcion dentro del valor de un objeto literal), ver:
  " Ejemplo 5 - obj.method?.(args) - ?. en metodo "

- Acceder a un ELEMENTO de un array, ver:
  " Ejemplo 9 - ?. para Acceder a un ELEMENTO de un array (mala practica) "

?. Devuelve undefined cuando NO existe la propiedad en el objeto literal, ver:
" Ejemplo 2 - Diferencias y similitudes entre notación de punto y ?. encadenamiento opcional "
https://developer.mozilla.org/en-US/docs/Glossary/Nullish

Usar ?. cuando sea probable q la propiedad del objeto literal NO exista

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#syntax

obj?.prop
obj?.[prop]

obj.method?.()
obj.method?.(args)

Donde...
- obj
Es el nombre de la variable q guarda el objeto literal

- ?.
Es el operador de encadenamiento opcional

- prop y [prop]
Nombre de la propiedad q contiene el objeto literal,
con ambos prop y [prop] obtengo el mismo resultado

- method
Nombre del metodo (funcion) q contiene el objeto literal.
El metodo puede llamarse SIN argumentos obj.method?.()
ó CON argumentos obj.method?.(args)

- (args)
Argumentos (parametros) del metodo (funcion)
*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Sintaxis de ?.
https://javascript.info/optional-chaining#summary */

const person = {
// propiedad: valor,
  name: 'Daniel',
  saludar(apellido) {
    // metodo
    return `mi nombre es ${this.name} y mi apellido es ${apellido}`;
  },
};
console.log(person);
/*
{
  name: 'Daniel',
  saludar: [Function: saludar]
}
*/

/*
obj?.prop
Solamente ?.

En el objeto person acceder al valor de la propiedad name */
console.log(person?.name);
// 'Daniel'

/*
obj?.[prop]
corchetes [] y ?.

Con ambos obj?.prop y obj?.[prop] obtengo el mismo resultado

Segun ESLint Airbnb obj?.[prop] es mala practica:
https://eslint.org/docs/latest/rules/dot-notation */
console.log(person?.['name']);
// 'Daniel'

/*
obj.method?.(args)
Metodo CON argumentos

En el objeto person ejecutar el metodo saludar()
y pasarle el argumento (apellido) 'Pineda' */
console.log(person?.saludar?.('Pineda'));
// 'mi nombre es Daniel y mi apellido es Pineda'

/*
obj.method?.()
Metodo SIN argumentos

En el argumento apellido se imprime undefined
porq llame el metodo SIN pasarle el argumento apellido */
console.log(person?.saludar?.());
// 'mi nombre es Daniel y mi apellido es undefined'

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Diferencias y similitudes entre notación de punto y ?. encadenamiento opcional

Documentacion Oficial...
- Notacion de punto:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#dot_notation

- Diferencia entre notación de punto y ?. encadenamiento opcional
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#description

SIMILITUDES:
Ambos notacion de punto y ?. encadenamiento opcional
sirven para acceder al valor de un objeto literal

https://www.youtube.com/watch?v=lVqHiTCIRQg&t=4103s */

const person2 = {
// propiedad: valor,
  name: 'ryan',
  address: {
    city: 'london', // objeto anidado
  },
};

// Imprimir todo el objeto literal {}
console.log(person2);
/*
{
  name: 'ryan',
  addres: {
    city: 'london'
  }
}
*/

// Imprimir valor del objeto anidado
console.log(person2.address.city);
// 'london'

/* DIFERENCIAS:
Cuando se accede al valor de un objeto literal
que NO existe con la notacion de punto, da error

ERROR: el valor de esta propiedad NO existe
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#stacking_the_optional_chaining_operator */
// console.log(person2.location.propiedadInexistente);
/*
Uncaught TypeError:
Cannot read properties of undefined
(reading 'propiedadInexistente')
at Object.<anonymous>
*/

/* En cambio, el ?. encadenamiento opcional
devuelve undefined y NO da error (buena practica)

IMPORTANTE:
Cuando voy acceder al valor de un objeto anidado
usar la notacion de punto para las propiedades q SI existen
y el ?. encadenamiento opcional para las q NO existen.

En este ejemplo uso notacion de punto para person2.address
porq el objeto llamado person2 SI tiene la propiedad addres
y para person2.address?.propiedadInexistente uso ?.
porq puede q si exista o no la propiedadInexistente,
en este caso debido a esto,
no es necesario usar ?. en todo el codigo person2?.address?.propiedadInexistente */
console.log(person2.address?.propiedadInexistente);
// undefined

/* ALTERNATIVAS A ?. (mala practica)
NO deberias usar estas alternativas, deberias usar ?.
esto solo lo copio para aprender

1) Este if () {} NO imprime nada porq en el objeto NO existe person.location */
if (person2.location) {
  console.log(person2.location.city);
}

/* 2) Validar con un AND &&
q cada una de las propiedades existan */
let propiedadAnidada = person2.location && person2.location.city;
console.log(propiedadAnidada);
// undefined

// 3)
const temp = person2.location;

propiedadAnidada = temp === null || temp === undefined ? undefined : temp.second;
console.log(propiedadAnidada);
// undefined

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Evaluación de Corto-circuito (Short-circuiting Evaluation):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#short-circuiting

https://javascript.info/optional-chaining#short-circuiting */

// Objeto literal {}
const obj3 = {
// propiedad: valor,
  saludar: () => 'hola mundo', // metodo
};
console.log(obj3);
// { saludar: [Function: saludar] }

/* Ejecutar metodo saludar()
con la sintaxis obj.method?.(args) (ver Ejemplo 5) */
console.log(obj3.saludar?.());
// 'hola mundo'

// Inicializar contador en 0
let i = 0;
console.log(i);
// 0

/*
?. detiene la ejecucion del codigo exactamente en el momento
en que encuentra una propiedad q NO existe.
En este ejemplo SI se ejecuta obj3 porq SI existe,
despues se DETIENE la ejecucion en obj3.propiedadInexistente?.(i++)
porq en el objeto obj3 NO existe la propiedad propiedadInexistente y devuelve undefined.
Esto lo demuestro porq i sigue siendo 0 */
console.log(obj3.propiedadInexistente?.(i++)); // undefined
console.log(i);                                // 0

/* En cambio, cuando SI existe el nombre del objeto y TODAS las propiedades,
SI se ejecuta por completo obj3.saludar?.(i++) y i aumenta en 1 */
console.log(obj3.saludar?.(i++));              // 'hola mundo'
console.log(i);                                // 1

// Hacer q i sea 0 otra vez
i = 0;
console.log(i);
// 0

/* Lo q explique anteriormente
SOLAMENTE funciona cuando
NO uso parentesis (operador de agrupación).

?. Devuelve undefined porq NO existen las propiedades a y b en el objeto obj3 */
console.log(obj3.a?.b);
// undefined

/* En cambio, cuando SI uso parentesis se ejecuta el resto de las propiedades.
Devuelve error porq SI se esta ejecutando por completo (obj3?.a).b

Fijate q en esta parte (obj3?.a) estoy usando ?.
entonces el error NO es por eso,
el error es por usar la notacion de punto aqui (obj3?.a).b
por eso es q el error dice "no se puede leer la propiedad b" */
/*
console.log(
  (obj3?.a).b
);
*/
/* TypeError: Cannot read properties of undefined (reading 'b')
https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining */

// Lo anterior (obj3?.a).b es lo mismo q esto:
const temp2 = obj3?.a;
console.log(temp2);
// undefined

// (obj3?.a).b
// const prop = temp2.b;
// TypeError: Cannot read properties of undefined (reading 'b')

/* --------------------------------------------------------------- */

/*
Ejemplo 4:
Este Ejemplo 4 lo escribi en otra seccion, ver:
" Ejemplo 6 - Acceder al valor de una propiedad de un objeto literal {} usando el ?? operador coalescente nulo y ?. encadenamiento opcional "
*/

/* --------------------------------------------------------------- */

/* Ejemplo 5 - obj.method?.(args) - ?. en metodo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#optional_chaining_with_function_calls */

const persona = {
// propiedad: valor,
  nombre: 'Daniel',
  saludar(apellido) {
    // metodo
    return `mi nombre es ${this.nombre} y mi apellido es ${apellido}`;
  },
};
console.log(persona);
/*
{
  nombre: 'Daniel',
  saludar: [Function: saludar]
}
*/

/* Ejecutar metodo (funcion) saludar() con ?.

obj.method?.(args)
('Pineda') es el argumento (args) del metodo method */
console.log(persona.saludar?.('Pineda'));
// 'mi nombre es Daniel y mi apellido es Pineda'

/* ?. devuelve undefined porq
el metodo persona.metodoInexistente?.() NO existe  */
console.log(persona.metodoInexistente?.());
// undefined

/* ?. da error cuando:
1) SI existe una propiedad en el objeto literal
2) Esa misma propiedad NO es un metodo (funcion del objeto literal)
3) Ejecuto esa misma propiedad como si fuera un metodo con obj.method?.(args)

En el objeto persona SI existe la propiedad nombre,
pero cuando lo ejecuto como si fuera un metodo persona?.nombre?.() da error
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError */
// console.log(persona?.nombre?.())
// TypeError: persona?.nombre is not a function

/* ?. acceder al valor de la propiedad nombre del objeto persona */
console.log(persona?.nombre);
// 'Daniel'

/* --------------------------------------------------------------- */

/* Ejemplo 6:
?. NO sirve para variables no definidas

?. da error porq NO existe la variable objetoNoDefinido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#description */

// console.log(objetoNoDefinido?.nombrePropiedad);
/*
ReferenceError: objetoNoDefinido is not defined
at Object.<anonymous>
*/

/* --------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#optional_chaining_with_function_calls */

// datos primitivos
const nullValue = null;
const undefinedValue = undefined;

/* En caso de q el objeto sea null o undefined
usar ?. despues del nombre del objeto */
console.log(nullValue?.propiedadInexistente); // undefined
console.log(undefinedValue?.propiedadInexistente); // undefined

/* --------------------------------------------------------------- */

/* Ejemplo 8:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#optional_chaining_with_expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation

https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md

Puedo acceder al valor de una propiedad de un objeto literal {}
usando juntos ?. y notacion de corchetes []
aunque hacer esto es MALA PRACTICA
porq permite q en seguridad informatica
se pueda hacer ataques de inyección de objetos  */

const obj = { uno: 1 };
console.log(obj);
// { uno: 1 }

const valor = obj?.['uno'];
console.log(valor);
// 1

/* --------------------------------------------------------------- */

/* Ejemplo 9 - ?. para Acceder a un ELEMENTO de un array (mala practica)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#optional_chaining_with_expressions */

function obtenerValorArray(array, i) {
  return array?.[i];
}

const array = [1, 2, 3]; // elementos
//             0  1  2   // posiciones (indices)
console.log(array);
// (3) [1, 2, 3]

// El elemento 1 esta en la posicion (indice) 0
console.log(obtenerValorArray(array, 0));
// 1

/* No importa si uso o no ?.
en el caso de los array []
siempre se devuelve undefined
cuando el numero de posicion (indice) no existe.
Como obtengo el mismo resultado,
entonces no tiene sentido (es mala practica) usar ?. con arrays */
console.log(obtenerValorArray(array, 999)); // undefined
console.log(array[999]);                    // undefined
console.log(array.at(999));                 // undefined

/* La funcion obtenerValorArray() devuelve undefined
cuando se ejecuta SIN argumentos */
console.log(obtenerValorArray()); // undefined

/* --------------------------------------------------------------- */

/* Ejemplo 10:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#optional_chaining_not_valid_on_the_left-hand_side_of_an_assignment */

// Crear objeto literal vacio {}
const obj2 = {};
console.log(obj2);
// {}

/* Usando la notacion de punto
nombreObjetoLiteral.nombreNuevaPropiedad = nuevoValor;
puedo agregar una nueva propiedad: valor, al objeto literal {} */
obj2.uno = 1;
console.log(obj2);
// { uno: 1 }

/* Pero NO lo puedo hacer con ?. porq da error.
NO se puede usar ?. en el lado izquierdo del operador de asignacion =
para agregar una nueva propiedad: valor, */
// obj2?.dos = 2;
// Parsing error: Optional chaining cannot appear in left-hand side

/* --------------------------------------------------------------- */

/* Ejemplo 11 - ?. y new Map();
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#basic_example */

// Crear new Map() vacio
const map = new Map();
console.log(map);
// Map(0) {size: 0}

// .set(key, value) Agregar una nueva propiedad: valor, a new Map()
map.set('uno', { dos: 'tres' });
console.log(map);
/* Map(1) { 'uno' => { dos: 'tres' } }
                              ↑ */

/* Devuelve 'tres' porq SI existe el valor de la propiedad
Acceder al valor de la propiedad dos
para el miembro de 'uno' q esta en un new Map() */
let valor2 = map.get('uno')?.dos;
console.log(valor2);
// 'tres'

/* ?. devuelve undefined porq
NO existe la propiedadInexistente en new Map() */
valor2 = map.get('uno')?.propiedadInexistente;
console.log(valor2);
// undefined

/* --------------------------------------------------------------- */

/* Ejemplo 12 - ?. y callbacks (controladores de eventos)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#dealing_with_optional_callbacks_or_event_handlers

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

Si usa callbacks o métodos de recuperación de un objeto
con una asignación de desestructuración,
es posible que tenga valores inexistentes
que no puede llamar como funciones
a menos que haya probado su existencia.
Usando ?. puede evitar esta prueba adicional: */

// Callback q imprime mensaje de error
const parametroError = () => console.log('callback - ocurrio un error');

/* cuando NO uso ?. se usa un if()
para validar q exista el callback */
const hacerAlgo = (parametroError) => {
  try {
    // se ejecuta el catch porq NO esta definida la funcionInexistente();
    funcionInexistente();
  } catch (err) {
    // SIN ?.
    if (parametroError) { // SI existe parametroError entonces imprimir el mensaje de error
      parametroError(err.message);
    }
  }
};
hacerAlgo(parametroError);
// 'callback - ocurrio un error'

/* en cambio cuando SI uso ?.
se elimina el if() */
const hacerAlgo2 = (parametroError) => {
  try {
    funcionInexistente();
  } catch (err) {
    // CON ?.
    parametroError?.(err.message); // Sin excepción si parametroError() es undefined
  }
};
hacerAlgo2(parametroError);
// 'callback - ocurrio un error'
