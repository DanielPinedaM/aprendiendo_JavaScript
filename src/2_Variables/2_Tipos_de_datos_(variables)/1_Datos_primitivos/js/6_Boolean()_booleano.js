/* eslint-disable quotes */
// @ts-nocheck

/* --------------------------------------------------------------- */

/* Tutorial Jon Mircha - Boolean()- true y false - Booleano:
https://youtu.be/Csu9tRuuX0M

Un dato booleano boolean es un dato binario, es decir,
q solamente puede tomar dos valores que son true ó false 

Para crear valores booleanos...

1) Puedo usar directamente la palabra reservada true ó false
(forma MAS usada) */

const verdadero = true;
console.log(verdadero);         /* true */
console.log(typeof verdadero);  /* boolean */

if (verdadero) { /* verdadero === true */
  console.log('el valor por defecto del primer if() es true');
} else { /* verdadero !== true */
  console.log('false');
}
// 'el valor por defecto del primer if() es true'

const falso = false;
console.log(falso);         /* false */
console.log(typeof falso);  /* boolean */

if (falso) { /* falso === true */
  console.log('true');
} else  { /* falso !== true */
  console.log('el valor por defecto del primer else{} es false');
}
// 'el valor por defecto del primer else{} es false'

/* 2) Puedo usar el metodo Boolean()
(forma MENOS usada) */
const constructor1 = Boolean(true);
console.log(constructor1);            /* true */
console.log(typeof constructor1);     /* boolean */
console.log(constructor1 === true);   /* true */

const constructor0 = Boolean(false);
console.log(constructor0);            /* false */
console.log(typeof constructor0);     /* boolean */
console.log(constructor0 === false);  /* true */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_primitives_and_boolean_objects */

/* 3) El objeto new Boolean()
aunque esto es mala práctica
y NUNCA debes usarlo.
A continuación explicare porque:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_primitives_and_boolean_objects */

/* Los {} Objetos (Diccionarios) devuelven true */

console.log(Boolean({})); /* true */

/* new crea un nuevo objeto
Boolean() de tipo booleano */
const objeto = new Boolean(false);

console.log(objeto); /* [Boolean: false] */

/* new Boolean() ES UN OBJETO,
NO un dato primitivo de tipo booleano */
console.log(typeof objeto); /* object */

if (objeto) { /* objeto == true */
  console.log(`el objeto Boolean(false)
               se esta evaluando en el if () {}
               como si fuera true
               cuando en realidad
               ha sido definido como false`);
}

/* el objeto Boolean(false)
se esta evaluando en el if () {}
como si fuera true
cuando en realidad
ha sido definido como false */

/* la forma correcta de trabajar con booleanos
es usar las palarbas reservadas true y false */
if (false) { /* false === true */
  console.log('este codigo no se ejecuta');
}

if (true) { /* true === true */
  console.log('el valor por defecto del primer if() es true');
}
/* el valor por defecto del primer if() es true */

/* -------------------------------------------- */

/* Al convertir de booleano boolean a número number
1 es equivalente a true y 0 es equivalente a false

1 = true
0 = false  */

console.log(Boolean(0));            /* false */
console.log(typeof Boolean(0));     /* boolean */

console.log(Boolean(1));            /* true */
console.log(typeof Boolean(1));     /* boolean */

console.log(Number(true));          /* 1 */
console.log(typeof Number(true));   /* number */

console.log(Number(false));         /* 0 */
console.log(typeof Number(false));  /* number */

/* -------------------------------------------- */

/* Las cadenas de texto (string) vacías
con cualquier tipo de comillas
son equivalentes al booleano false */

/* CADENA DE TEXTO (STRING) VACIA

comillas... */
/* simples */
console.log(Boolean('')); /* false */
/* dobles */
console.log(Boolean("")); /* false */
/* invertidas */
console.log(Boolean(``)); /* false */

/* Cualquier cadena de texto (string) y espacios en blanco ' '
es equivalente a verdadero true */
/* ESPACIOS EN BLANCO */
console.log(Boolean('  '));          /* true */
console.log(Boolean("  "));          /* true */
console.log(Boolean(`  `));          /* true */

/* TEXTO (STRING) */
console.log(Boolean('hola mundo'));  /* true */
console.log(Boolean('0'));           /* true */
console.log(Boolean('1'));           /* true */
console.log(Boolean('false'));       /* true */

/* -------------------------------------------- */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion */

/* [] Arreglos (Arrays, Listas) */
console.log(Boolean([])); /* true */

if ([]) {
  console.log("[] Los array son verdaderos");
}
/* [] Los array son verdaderos */

if ([] == false) {
  console.log("[] == false");
}
/* [] == false */

if ([] === false) {
  console.log("este if () {} NO se ejecuta porq array y booleano son de diferentes tipos");
}

if ([] == true) {
  console.log("este if () {} NO se ejecuta");
}

if ([] === true) {
  console.log("este if () {} NO se ejecuta");
}

/* -------------------------------------------- */
/* Pseudo-codigo:
https://developer.mozilla.org/en-US/docs/Glossary/Boolean */

if ( /* condicion booleana */ ) {
  console.log("cuando sea true se ejecuta el codigo");
} else {
  console.log("o si es false se ejecuta este otro codigo");
}

while ( /* condicion booleana */ ) {
  /* ejecutar el codigo q esta aqui n veces 
  hasta q se termine de cumplir la condicion booleana */
}

for (let i = 0; i < 10; i++) {
  /* ejecutar
  i++ en orden ascendente
  desde i = 0 
  hasta i < 10 veces
  
  i < 10 es la condicion booleana

  0, 1, 2, 3... 10 */  
}

/* -------------------------------------------- */

/*
Truthy son los valores que son equivalentes a true
y falsy equivalentes a false

Documentación Oficial...
- Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy

- Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

// ///////////////// TRUTHY
/*
Todos los valores son true excepto
(cualquier valor que NO este en esta lista devuelve true):
false
0
-0
0n
''
""
``
null
undefined
NaN
*/

console.log(true);

console.log(Boolean(true));

/* ESPACIOS EN BLANCO con comillas... */
console.log(Boolean('  ')); /* simples */
console.log(Boolean("  ")); /* dobles */
console.log(Boolean(`  `)); /* invertidas */

console.log(Boolean('hola mundo'));

console.log(Boolean(1));
console.log(typeof Boolean(1)); /* boolean */

console.log(Boolean({})); /* {} Objetos (Diccionarios)  */

console.log(Boolean(new Date()));

console.log(Boolean([])); /* [] Arreglos (Arrays, Listas) */

console.log(Boolean(10n)); /* BigInt() */
console.log(Boolean(BigInt(10)));

console.log(Boolean(99));

console.log(Boolean(-99));

console.log(Boolean('0'));

console.log(Boolean('1'));

console.log(Boolean('false'));

console.log(Boolean(3.1416));

console.log(Boolean(-3.1416));

console.log(Boolean(Infinity));

console.log(Boolean(-Infinity));

console.log(Boolean(Symbol()));

// ///////////////// FALSY

console.log(false);

console.log(Boolean());

console.log(Boolean(false));

/* cadenas de texto vacias con comillas... */
console.log(Boolean('')); /* simples */
console.log(Boolean("")); /* dobles */
console.log(Boolean(``)); /* invertidas */

console.log(Boolean(0));
console.log(typeof Boolean(0)); /* boolean */

console.log(Boolean(-0));

console.log(Boolean(0n)); /* 0n es de tipo BigInt() */
console.log(Boolean(BigInt(0)));

console.log(Boolean(0.0));

console.log(Boolean(-0.0));

console.log(Boolean(0x0));

console.log(Boolean(null));

console.log(Boolean(undefined));

console.log(Boolean(NaN));

console.log(Boolean(String()));
console.log(Boolean(Number()));

/* .all esta obsoleto */
console.log(Boolean(document.all));
