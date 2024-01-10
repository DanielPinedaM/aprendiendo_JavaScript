/* Documentación Oficial - String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode */

/*
|-----------------|-------------------|
| Numero          | Texto             |
| UTF-16 decimal  |                   |
|-----------------|-------------------|
| 104             | h                 |
|-----------------|-------------------|
| 111             | o                 |
|-----------------|-------------------|
| 108             | l                 |
|-----------------|-------------------|
| 97              | a                 |
|-----------------|-------------------|
| 32              | espacio en blanco |
|-----------------|-------------------|
| 109             | m                 |
|-----------------|-------------------|
| 117             | u                 |
|-----------------|-------------------|
| 110             | n                 |
|-----------------|-------------------|
| 100             | d                 |
|-----------------|-------------------|
| 111             | o                 |
|-----------------|-------------------|

String.fromCharCode()
convierte de formato de codificacion UTF-16 a texto

dentro del par de parentesis ()
van los numeros UTF-16 que quiero convertir a texto

Lista completa de caracteres UTF-16:
https://www.fileformat.info/info/charset/UTF-16/list.htm

const NombreVariable = String.fromCharCode(num1, num2, ..., numN) */
const holaMundo = String.fromCharCode(104, 111, 108, 97, 32, 109, 117, 110, 100, 111);

console.log(holaMundo);
// hola mundo

console.log(typeof holaMundo);
// string
