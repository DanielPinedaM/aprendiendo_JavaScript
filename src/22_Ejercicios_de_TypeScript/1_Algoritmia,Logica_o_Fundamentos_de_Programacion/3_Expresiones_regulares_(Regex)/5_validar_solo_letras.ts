/* 
Usar typeof para validar 
si el parametro de una funcion 
es o no un string
*/

const admitirSoloLetras = (texto: string): boolean => typeof texto === "string"

admitirSoloLetras("hola mundo");     // true

// NO es un string
admitirSoloLetras(123);              // false
admitirSoloLetras(Symbol('id'));     // ❌ ERROR TypeError: Cannot convert a Symbol value to a string
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
Crear expresion regular para validar 
si el parametro es o no un string, permitir:
- mayúscula (incluir la "Ñ" y vocales con tilde ÁÉÍÓÚ)
- minuscula (incluir la "ñ" y vocales con tilde áéíóú)
*/
const admitirSoloLetras2 = (texto: string): boolean => {
  if (typeof texto !== 'string') return false;

  return /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(texto);
};

admitirSoloLetras2('hola mundo');       // true

// NO es un string
admitirSoloLetras2(123);                // false
admitirSoloLetras2(Symbol('id'));       // ❌ ERROR TypeError: Cannot convert a Symbol value to a string
admitirSoloLetras2(undefined);          // false
admitirSoloLetras2(null);               // false
admitirSoloLetras2(NaN);                // false
admitirSoloLetras2(BigInt(999));        // false
admitirSoloLetras2(true);               // false
admitirSoloLetras2(false);              // false
admitirSoloLetras2([1, 2, 3]);          // false
admitirSoloLetras2({ uno: 1, dos: 2 }); // false
