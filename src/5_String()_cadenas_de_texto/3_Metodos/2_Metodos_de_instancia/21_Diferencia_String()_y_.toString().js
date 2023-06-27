/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Convertir a Texto

Stack Overflow - Diferencia Entre String() y .toString()
https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring

Documentacion Oficial...
- String()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

- .toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString

Recordatorio:
Ver:
...aprendiendo_JS\src\2_Variables\4_Convertir_tipos_de_datos_(convertir_de_un_tipo_de_dato_a_otro)\tipado_dinamico,coercion.js */

console.log(String(null));         // 'null'
console.log(null.toString());      // TypeError

console.log(String(undefined));    // 'undefined'
console.log(undefined.toString()); // TypeError
