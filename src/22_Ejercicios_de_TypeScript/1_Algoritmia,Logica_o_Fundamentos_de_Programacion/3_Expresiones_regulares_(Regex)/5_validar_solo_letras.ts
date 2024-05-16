/* 
Usar typeof para validar 
si el parametro de una funcion 
es o no un string
*/

const admitirSoloLetras = (texto: string): boolean => typeof texto === 'string';

/* Diferencia entre:
- usar solamente typeof texto === 'string'
- usar typeof texto !== 'string' y expresion regular */
admitirSoloLetras("hola mundo");     // true
admitirSoloLetras("123");            // true -> NO evalua si el string contiene numeros
admitirSoloLetras("");               // true -> NO evalua caracter vacio ""
admitirSoloLetras(" ");              // true -> NO evalua espacio en blanco " "

// NO es un string
admitirSoloLetras(123);              // false
admitirSoloLetras(Symbol('id'));     // false
admitirSoloLetras(undefined);        // false
admitirSoloLetras(null);             // false
admitirSoloLetras(NaN);              // false
admitirSoloLetras(BigInt(999));      // false
admitirSoloLetras(true);             // false
admitirSoloLetras(false);            // false
admitirSoloLetras([1, 2, 3]);        // false
admitirSoloLetras({uno: 1, dos: 2}); // false

/* --------------------------------------------------- */

/* 
Expresion regular para validar 
si el parametro es o no un string, permitir:
- mayúscula (incluir la "Ñ" y vocales con tilde ÁÉÍÓÚ)
- minuscula (incluir la "ñ" y vocales con tilde áéíóú) */
const admitirSoloLetras2 = (texto: string): boolean => {
  if (typeof texto !== 'string') return false;

  return /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(texto.trim());
};

/* Diferencia entre:
- usar solamente typeof texto === "string"
- usar typeof texto === "string" y expresion regular */
admitirSoloLetras2("hola mundo");     // true
admitirSoloLetras2("123");            // false -> false porq "123" son numeros
admitirSoloLetras2("");               // false -> false porq caracter vacio    ""  NO contiene letras
admitirSoloLetras2(" ");              // false -> false porq espacio en blanco " " NO contiene letras

// NO es un string
admitirSoloLetras2(123);                // false
admitirSoloLetras2(Symbol('id'));       // false
admitirSoloLetras2(undefined);          // false
admitirSoloLetras2(null);               // false
admitirSoloLetras2(NaN);                // false
admitirSoloLetras2(BigInt(999));        // false
admitirSoloLetras2(true);               // false
admitirSoloLetras2(false);              // false
admitirSoloLetras2([1, 2, 3]);          // false
admitirSoloLetras2({ uno: 1, dos: 2 }); // false
