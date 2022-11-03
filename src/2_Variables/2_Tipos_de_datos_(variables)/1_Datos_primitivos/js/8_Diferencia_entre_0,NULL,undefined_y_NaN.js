/* eslint-disable use-isnan */
/* eslint-disable no-void */
/* eslint-disable prefer-const */
/* eslint-disable no-self-compare */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
// @ts-nocheck
/* eslint-disable no-multi-spaces */

/* Tutorial Jon Mircha - Diferencia Entre null Nulo, undefined Indefinido y NaN No es un Numero:
https://youtu.be/dux1Uv2eLfw

TODOS 0 Cero, null Nulo, undefined Indefinido y NaN No es un Numero
son datos (variables) primitivos.

1) 0 Cero
En el meme que tiene la imagen con el 0
el papel higiénico se acabó,
en cambio en la imagen que dice “Valor diferente de 0”
si hay papel higiénico porque hay alguna cantidad que NO es 0

Es un tipo de dato número number
con el que se puede hacer operaciones matemáticas
y que representa la ausencia de cualquier cantidad,
es como decir “nada”, “nadie”, “ninguno”…

2) null Nulo
En el meme hay un tubo de papel higiénico (portarrollos),
pero no se sabe ¿Cuál es el papel higiénico?.

Es una variable que NO tiene valor.

Es un dato que SI existe
pero no se sabe ¿Cuál es el dato?,
es como decir "nada", "vacío", "valor desconocido".

El programador inicializa INTENCIONALMENTE
la variable en null
para indicar que hasta el momento
no sabe que valor darle a la variable.

3) undefined Indefinido
En el meme hay una pared en blanco
porque se sabe que ahí debería estar el papel
pero no se ha puesto,
no se ha “inicializado”
el proceso para poner el papel higiénico.

Es una variable que NO tiene valor

Es un valor que no se ha asignado,
que no ha sido definido

Es el valor que JS le da AUTOMATICAMENTE
a la variable cuando NO se ha inicializado la variable.

4) NaN No es un Numero
En el meme el papel higiénico esta volteado
y es de color negro,
porque es extraño que eso suceda,
“no es un papel higiénico”.

Es cualquier “cosa” (dato)
que NO sea un número.
Es un error al resolver una operación matemática.

Recordatorio:
Con las funciones Number.isNaN() y isNaN()
puedo comprobar cuando un dato si es o no un numero NaN
esto se explica mejor en el archivo
9_Diferencia_entre_isNaN()_y_Number.isNaN().js
*/

/* ------------------------------------------- */
/// /////////////////////////// 0 Cero
/* 1/0 = Infinity
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity#using_infinity */

const uno = 1;
console.log(typeof uno);         /* number */
console.log(uno);                /* 1 */

const cero = 0;
console.log(typeof cero);        /* number */
console.log(cero);               /* 0 */

const resultado1 = uno / cero;
console.log(`${uno} / ${cero} = ${resultado1}`); /* 1/0 = Infinity */

console.log(typeof resultado1);  /* number */
console.log(typeof Infinity);    /* number */

/* ------------------------------------------- */
/// /////////////////////////// null Nulo:

/* el programador inicializa en null la variable INTENCIONALMENTE */
const nulo = null;
/* null en realidad es un dato primitivo
pero hay un error en JS
en el que typeof null imprime object,
cuando en realidad debería imprimir null */
console.log(typeof nulo);        /* object */
console.log(nulo);               /* null */

/* -- *** -- */
/* null es lo mismo q false
cuando se convierte de null a booleano Boolean()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null#difference_between_null_and_undefined */
console.log(Boolean(null));           /* false */
console.log(Boolean(null) === false); /* true */

/* -- *** -- */
/* null es lo mismo que cero 0
cuando se convierte de null a numero Number() */
console.log(Number(null));       /* 0 */
console.log(Number(null) === 0); /* true */
console.log(null * 99);          /* null*99 = 0*99 = 0 */

/* -- *** -- */
/* Comparando null y undefined
null y undefined son tipos de datos DIFERENTES.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null#difference_between_null_and_undefined */

console.log(typeof null);           // 'object' (en realidad deberia ser "null", esto es un error de JS)
console.log(typeof undefined);      // 'undefined'

console.log(undefined === null);    // false (operador de identidad, triple igual ===) (undefined y null son TIPOS de datos diferentes)
console.log(undefined  == null);    // true (operador de igualdad, doble igual == ) (undefined y null es una variable que NO tiene valor)

console.log(null === null);         // true
console.log(null  == null);         // true

console.log(Number(null));          // 0 (null es lo mismo q cero 0, al convertir de tipo null a number)
console.log(1 + null);              // 1 (1+null = 1+0 = 1)
console.log(Number(null) === 0);    // true
console.log(isNaN(1 + null));       // false (null se convierte en cero 0, es un numero cuando se hacen operaciones matematicas con null)

console.log(Number(undefined));     // NaN (undefined NO se puede convertir a tipo number)
console.log(isNaN(undefined));      // true (undefined NO es un numero NaN)
console.log(isNaN(1 + undefined));  // true (no se le puede sumar 1 a un dato que NO es un numero NaN)
console.log(1 + undefined);         // NaN (1+undefined = 1+NaN = NaN)
console.log(1 + NaN);               // NaN

/* Conversión y negación ! de tipos de datos null y undefined

el operador de negacion NOT ! es lo opuesto de...

el operador de doble negacion (Double NOT) !! y el constructor Boolean() son para convertir a tipo booleano

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#description */

console.log(!null);                                // true (lo opuesto de null es false)
console.log(!undefined);                           // true (lo opuesto de undefined es true)

// Convertir de tipo null a booleano
console.log(!!null);                               // false
console.log(Boolean(null));                        // false

// Convertir de tipo undefined a booleano
console.log(!!undefined);                          // false
console.log(Boolean(undefined));                   // false

// Comparar lo opuesto y la conversion de tipo undefined y null a booleano
console.log(!null === !undefined);                 // true
console.log(!!null === !!undefined);               // true
console.log(Boolean(null) === Boolean(undefined)); // true

/* ------------------------------------------- */
/// /////////////////////////// undefined Indefinido

/* undefined es lo mismo que No es un Numero NaN
cuando se convierte de undefined a número Number() */
console.log(Number(undefined));               /* NaN */
console.log(isNaN(Number(undefined)));        /* true */
console.log(Number.isNaN(Number(undefined))); /* true */

let indefinido;
console.log(indefinido);     /* undefined */

console.log(NaN + 1);        /* NaN */
console.log(indefinido + 1); /* undefined+1 = NaN+1 = NaN */

/* -- *** -- */
/* DIFERENCIA ENTRE null Y undefined y ¿CUANDO USAR null?

Creo una nueva variable que NO ha sido inicializada,
no le he dado un valor a la variable indefinido2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#strict_equality_and_undefined */
let indefinido2;

/* saber si el valor de una variable es undefined
https://stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null# */
// true no le he dado un valor a la variable indefinido2
console.log(typeof indefinido2 === 'undefined');

// Al imprimir la variable indefinido2 se imprime undefined
console.log(indefinido2);        // undefined

// Lo mismo sucede con el tipo de dato typeof
// que tambien es undefined
// porq hasta el momento no le he dado un valor a la variable indefinido2
console.log(typeof indefinido2); // undefined

/* inicializar variables en undefined es MALA PRACTICA
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#description */

indefinido2 = undefined;
console.log(indefinido2);        // undefined

/* lo correcto (BUENA PRACTICA) es inicializar una variable en null,
inicializo variables en null
cuando necesite crear una variable
pero ahun no se ¿cual es su valor? */
let vacio = null;
console.log(vacio);              // null

/* saber si el valor de una variable es null
https://stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null# */
console.log(vacio === null);     // true

/* Despues de q sepa el valor de la variable
puedo re-asignar la variable si es necesario */

vacio = 'hola mundo';            // re-asignar variable
console.log(vacio);              // hola mundo (es el valor de la variable)

/* -- *** -- */

/* ¿COMO SABER SI UNA VARIABLE HA SIDO DEFINIDA?
https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#strict_equality_and_undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#typeof_operator_and_undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined#void_operator_and_undefined

Hay varias formas...

1) Usando typeof
A proposito NO he creado la variable llamada variableNoDefinida */

// FORMA CORRECTA
if (typeof variableNoDefinida === 'undefined') {
  console.log('este codigo se ejecuta cuando 1. la variable NO existe 2. el valor de la variable es undefined');
} else { /* typeof variableNoDefinida !== 'undefined' */
  console.log('este codigo se ejecuta cuando se (inicializa) le da un valor a la variable');
}
/* este codigo se ejecuta cuando 1. la variable NO existe 2. el valor de la variable es undefined */

/* FORMA INCORRECTA
Esto da error ReferenceError */
if (variableNoDefinida === undefined) {
  console.log('error - este codigo NO se ejecuta');
}

/* 2) Usando el operador void
https://eslint.org/docs/latest/rules/no-void */

/* void 0 es lo mismo q undefined */
console.log(void 0 === undefined); /* true */

let x;
console.log(x); /* undefined */

// FORMA CORRECTA
if (x === void 0) {
  console.log('la variable x tiene el valor de undefined');
}
/* la variable x tiene el valor de undefined */

// FORMA INCORRECTA
if (variableNoDefinida === void 0) {
  console.log('error - este codigo NO se ejecuta');
}

/* ------------------------------------------- */
/// /////////////////////////// NaN No es un Numero

/* Validar que un string NO es un numero */
const noEsUnNumero = 'hola mundo';

if (isNaN(noEsUnNumero)) {
  console.log(`la variable noEsUnNumero es un tipo de dato ${typeof noEsUnNumero} NO es un numero NaN`);
} else {
  console.log('la variable SI es un numero');
}
/* la variable noEsUnNumero es un tipo de dato string NO es un numero NaN */

/* -- *** -- */
/* NO se puede hacer operaciones matemáticas
con un numero number y texto string
por eso el resultado del siguiente código es No es un Numero NaN */

const resultado2 = 1 * NaN;

console.log(typeof resultado2);   /* number */
console.log(resultado2);          /* NaN */

/* -- *** -- */
/* Comparaciones de NaN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan */

console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false

console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true

/* -- *** -- */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#silently_escaping_nan */

/* NO se puede convertir de tipo
No es un Numero NaN a numero number */
console.log(Number(NaN)); // NaN

/* Aunque hay una excepcion
en el q NaN elevado al exponente cero 0
da como resultado 1 (potenciacion) */
console.log(NaN ** 0);       // NaN ^ 0 = 1
console.log(NaN ** 0 === 1); // true
