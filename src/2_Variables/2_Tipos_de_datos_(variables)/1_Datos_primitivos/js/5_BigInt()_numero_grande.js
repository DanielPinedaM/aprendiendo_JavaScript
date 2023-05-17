// @ts-nocheck

/* BigInt() positivo */
let numeroGrande = BigInt(999);
console.log(numeroGrande); /* 999n */
console.log(typeof numeroGrande); /* bigint */

/* BigInt() negativo */
numeroGrande = BigInt(-numeroGrande);
console.log(numeroGrande); /* -999n */

/* los numeros q terminan en n son BigInt() */
const numero1 = 999n;
console.log(typeof numero1); /* bigint */

/* convertir de string a BigInt() */
const numero2 = BigInt('-999');
console.log(typeof numero2); /* bigint */
console.log(numero2); /* -999n */

/* --------------------------------------------- */
/* COMPARACIONES

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#type_information

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#comparisons */

/* "Resultado extraño": Por esto NO debo mezclar tipo number con BigInt()
El operador de identidad (triple igual) === compara los TIPOS de datos
Como los dos números son 999 y son del mismo TIPO BigInt() entonces se imprime true */
console.log(typeof BigInt(999));          /* BigInt */
console.log(typeof 999n);                 /* BigInt */

console.log(BigInt(999) === BigInt(999)); /* true */
console.log(BigInt(999) === 999n);        /* true */

/* Un BigInt(999) y un number 999 son los mismos números,
pero como son de TIPOS de datos diferentes se imprime false */
console.log(typeof BigInt(999));          /* BigInt */
console.log(typeof 999);                  /* number */

console.log(BigInt(999) === 999); /* false */

/* El operador de igualdad (doble igual) ==
NO compara los tipos de datos,
solo compara si los números son iguales o diferentes,
en este caso se pregunta:
¿el numero 999 es lo mismo que el numero 999? y devuelve true */
console.log(BigInt(999) == 999); /* true */

/* DESIGUALDAD DE TIPO BigInt() y tipo number

/* a la izquierda hay un tipo BigInt() y a la derecha un tipo number */

/* menor q */
console.log(1n < 2);          /* true */

/* menor o igual q */
console.log(1n <= 1);         /* true */

/* mayor q */
console.log(BigInt(2n) > 2);  /* false */

/* mayor o igual q */
console.log(BigInt(2n) >= 2); /* true */

/* --------------------------------------------- */
/* Puedo hacer operaciones matemáticas con BigInt() usando los operadores
+ Suma
- Resta
* Multiplicación
/ División de números enteros (SIN decimal)
% Modulo
** Potenciación

NO se puede hacer las operaciones matemáticas que escribí ANTERIORMENTE con tipo BigInt() y number

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#operators */

/* suma y resta */
console.log(BigInt(-999) + BigInt(999)); /* -999n + 999n = 0n */

console.log(typeof BigInt(999));  /* BigInt */
console.log(typeof 1);            /* number */
console.log(BigInt(999) + 1);     /* TypeError */

/* multiplicacion */
console.log(BigInt(5) * BigInt(2)); /* 10n */
console.log(BigInt(5) * 2); /* TypeError */

/* División de números enteros (SIN decimal) */
console.log(BigInt(10) / BigInt(2)); /* 10n / 2n = 5n */

/* La division de BigInt() tiene un problema:
La división de BigInt() solamente da resultados de divisiones exactas,
NO da el resultado de la parte decimal.
En este ejemplo el resultado correcto es 5 / 2 = 2.5 */
console.log(BigInt(5) / BigInt(2)); /* 5n / 2n = 2n */

/* Modulo

Nota:
En realidad la solución al ejercicio
de saber si un numero es par o impar no se hace asi,
esto es solo para explicar este ejemplo */
if ((BigInt(10) % BigInt(2)) === 0n) {
  console.log('numero PAR');           /* numero PAR */
  console.log(BigInt(10) % BigInt(2)); /* 0n */
}

if ((BigInt(5) % BigInt(2)) !== 0n) {
  console.log('numero IMPAR');        /* numero IMPAR */
  console.log(BigInt(5) % BigInt(2)); /* 1n */
}

/* Potenciación */
console.log(BigInt(5) ** BigInt(2)); /* 5n^2n = 5n*5n = 25n */

/* --------------------------------------------- */
/* Array que contiene elementos tipo BigInt() */

const array = [3, 1n, BigInt(2)];
console.log(array);
/* [ 3, 1n, 2n ] */

/* .sort() Ordenar de menor a mayor (ascendente) */
console.log(array.sort());
/* [ 1n, 2n, 3 ] */

/* --------------------------------------------- */
/* Conversión entre los tipos de datos Boolean() y BigInt() */

/* 0 = false */
console.log(Boolean(0n));        /* false */
console.log(typeof Boolean(0n)); /* boolean */

/* 1 = true */
console.log(Boolean(1n));        /* true */
console.log(typeof Boolean(1n)); /* boolean */
