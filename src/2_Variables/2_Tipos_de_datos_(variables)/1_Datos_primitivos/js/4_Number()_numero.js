/* Tutorial Jon Mircha - Number() Numero
https://youtu.be/o4p6p1z2P5A
*/

// @ts-nocheck

const a = 2;
console.log(a); /* 2 */
console.log(typeof a); /* number  */

const b = new Number(1);
console.log(b); /* [Number: 1] */
console.log(typeof b); /* object */

const c = Number(3);
console.log(c); /* 3 */
console.log(typeof c); /* number */

const d = 7.19;
console.log(typeof d); /* number */
console.log(d); /* 7.19 */
/* .toFixed() aproximar a un # de decimales */
console.log(d.toFixed()); /* 7 */
console.log(d.toFixed(0)); /* 7 */
console.log(d.toFixed(1)); /* 7.2 */
console.log(d.toFixed(2)); /* 7.19 */
console.log(d.toFixed(5)); /* 7.19000 */

/* parte entera del # */
console.log(parseInt(d)); /* 7 */

/* parte decimal del # */
console.log(parseFloat(d));/* 7.19 */

console.log(`a+b = ${a}+${b} = ${a + b}`); /* a+b = 2+1 = 3 */

const e = '1.1';
console.log(typeof e); /* string */

/* ERROR 1
esta concatenando
1+1.1 NO es 11.1 */
console.log(`b+e = ${b}+${e} = ${b + e}`); /* b+e = 1+1.1 = 11.1 */

/* ERROR 2
parseInt solamente suma la parte entera del numero e,
NO tiene en cuenta el decimal  */
console.log(`b+e = ${b}+${e} = ${b + parseInt(e)}`); /* b+e = 1+1.1 = 2 */
/* parseInt() y parseFloat() son metodos del constructor Number
no importa si copio o no Number. el resultado es el mismo  */
/* console.log(Number.parseInt(e)); */ /* 1 */
console.log(parseInt(e));

/* SOLUCION
para solucionanlo hay q
convertir la variable e a tipo numero
usando parseFloat() */
console.log(`b+e = ${b}+${e} = ${b + parseFloat(e)}`); /* b+e = 1+1.1 = 2.1 */
/* console.log(Number.parseFloat(e)); */ /* 1.1 */

/* -------------------------------------------------------------------------------------------------------- */

/* 
- Usar BigInt() para:
* números MAYORES a aproximadamente 9 cuatrillones 
* números MENORES a aproximadamente -9 cuatrillones 
*/

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER */
console.log('el MAYOR number de JS es:', Number.MAX_SAFE_INTEGER);
/* (2^53) - 1 = 9 007 199 254 740 991 = aproximadamente 9 cuatrillones */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER */
console.log('el MENOR number de JS es:', Number.MIN_SAFE_INTEGER);
/* -[ (2^53) - 1 ] = -9 007 199 254 740 991 = aproximadamente -9 cuatrillones */
