// @ts-nocheck

/* Documentación Oficial - .parse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

.parse()

Sintaxis:

Donde...
-
Nombre del método

- */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - saber si puedo o no convertir de string a array u objeto con JSON.parse()
https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string */

const isValidJSONparse = (string) => {
  if (typeof string !== 'string') return false;

  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};

isValidJSONparse(JSON.stringify({ uno: 1, dos: { tres: 3 } })); // true
isValidJSONparse(JSON.stringify([1, '2', 'a', {}]));            // true

isValidJSONparse(new Date());                                   // false
isValidJSONparse('hola mundo');                                 // false

/* --------------------------------------------------------------- */
