/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Stack Overflow - Diferencia Entre .slice() y .substring()
https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

https://es.stackoverflow.com/questions/300523/diferencias-entre-substr-substring-y-slice-javascript

Documentación Oficial...
- .slice() en string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

- .substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

Recordatorio:
.slice() tambien sirve para ARRAY, ver:
...\aprendiendo_JS\src\6_Arreglos_(arrays,listas)\3_Metodos\2_Metodos_de_instancia\4_.slice().js

Para lo que voy a explicar a continuación,
antes se usaba otro método,
pero actualmente está obsoleto y NO se debe usar

Documentación Oficial - .substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr

Esto lo explicare con un ejemplo.
Tengo dos variables, una con un string: */
const string = 'hola mundo';

// Y otra con el número de caracteres .length
const numeroCaracteres = string.length;
console.log(`# total de CARACTERES (letras) contando desde 1: ${numeroCaracteres}`);
// # total de CARACTERES (letras) contando desde 1: 10

/* ----- SIMILITUDES: -----
1) Ambos .slice() y .substring()
sirven para extraer una parte (sub-string)
de un string de acuerdo a sus posiciones (índices).

2) Con ambos .slice() y .substring()
puedo imprimir desde un carácter
hasta otro carácter (indexStart, indexEnd)

Extraer de un string una parte (sub-string)
que va DESDE esta posición (índice) indexStart
HASTA esta otra posición indexEnd,
NO se incluye la ULTIMA posición indexEnd,
el sub-string va hasta UNA POSICION ANTES del indexEnd

En la posición (índice) 3 está el carácter (letra) 'a'

(1, 3) de 'hola mundo' imprimir las posiciones 1 hasta 2, NO se imprime la posición 3 */
// slice()
console.log(string.slice(1, 3));    // 'ol'
// .substring()
console.log(string.substring(1, 3));// 'ol'

/* 3) Para ambos .slice() y .substring()
Cuando se copia un solo número
dentro del par de paréntesis indexStart
se devuelve los carácter iniciando
en la posición (índice) indicada
hasta el final del string.

(1) Imprimir el string
A PARTIR del segundo carácter
que es la posición 1

SI se incluye el carácter de la posición 1
y NO se incluye el carácter de la posición 0 */
// .slice()
console.log(string.slice(1));     // 'ola mundo'
// .substring(
console.log(string.substring(1)); // 'ola mundo'

/* 4) Ambos .slice() y .substring()
devuelven una parte (sub-string, sub-cadena)
que está dentro de un string
SIN modificar el string original
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#return_value

El string 'hola mundo' NO se ha modificado: */
console.log(string); // 'hola mundo'

/* 5) Ambos .slice() y .substring()
tienen la misma sintaxis:

.slice(indexStart, indexEnd)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#syntax

.substring(indexStart, indexEnd)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#syntax

Donde...
- .slice() y .substring()
Es el nombre del método.

- indexStart
Numero de posición (índice)
del PRIMER carácter
que se extrae en el sub-string,
el sub-string empieza
A PARTIR de esta posición,
es obligatorio.

- indexEnd
ULTIMO número de posición (índice)
donde TERMINA el sub-string,
el sub-string termina
HASTA esta posición,
es opcional.

6) Ambos .slice() y substring()
devuelven un CARÁCTER EN BLANCO '' cuando...

6.1) indexStart = indexEnd

Ambos números son IGUALES */
// (999, 999)
console.log(string.slice(999, 999));     // ''
console.log(string.substring(999, 999)); // ''

// (1, 1)
console.log(string.slice(1, 1));     // ''
console.log(string.substring(1, 1)); // ''

/* 6.2) .indexStart >= .length

Escribo un solo número .indexStart
dentro del par de paréntesis ()
que sea MAYOR O IGUAL QUE
la longitud del string .length

'hola mundo'.length imprime 10,
entonces se imprime un carácter en blanco ''
cuando dentro del par de paréntesis
escribo (10) ó un número mayor a 10 */
// numeroCaracteres = 'hola mundo'.length = 10
console.log(string.slice(numeroCaracteres));     // ''
console.log(string.substring(numeroCaracteres)); // ''

// 999 > 10
console.log(string.slice(999));     // ''
console.log(string.substring(999)); // ''

/* 7.1) indexStart <= -.length
El numero dentro del par de paréntesis indexStart
es MENOR O IGUAL al numero de caracteres .length pero NEGATIVO.

Ejemplo: 'hola mundo'.length imprime 10 (positivo),
entonces -10 (negativo)
ó un número menor a -10 (negativo)
imprime el string completo 'hola mundo'

7.2) Escribo (0) dentro del par de paréntesis

7.3) NO escribo nada dentro del par de paréntesis ()

7.4) Dentro del par de paréntesis ()
hay algo que NO se puede convertir
a tipo Number(), es decir NaN */
// .slice()
console.log(string.slice(-numeroCaracteres));                                     // 'hola mundo' -> numero de caracteres .length NEGATIVO
console.log(string.slice(-999));                                                  // 'hola mundo' -> numero MENOR a .length NEGATIVO
console.log(string.slice(0));                                                     // 'hola mundo' -> .slice(0)
console.log(string.slice());                                                      // 'hola mundo' -> .slice()
console.log(string.slice('este string NO se puede convertir a tipo number'));     // 'hola mundo'
console.log(string.slice(NaN));                                                   // 'hola mundo' -> .slice(NaN)

// .substring()
console.log(string.substring(-numeroCaracteres));                                 // 'hola mundo' -> numero de caracteres .length NEGATIVO
console.log(string.substring(-999));                                              // 'hola mundo' -> numero MENOR a .length NEGATIVO
console.log(string.substring(0));                                                 // 'hola mundo' -> .substring(0)
console.log(string.substring());                                                  // 'hola mundo' -> .substring()
console.log(string.substring('este string NO se puede convertir a tipo number')); // 'hola mundo'
console.log(string.substring(NaN));                                               // 'hola mundo' -> .substring(NaN)

/* 8) Ambos .slice() y .substring()
aproximan los números DECIMALES al MENOR entero más cercano,
aunque copiar números decimales
dentro del par de paréntesis ()
de .slice() y .substring() es mala practica */
// .slice()
console.log(string.slice(2.9));     // 'la mundo' -> 2.9 se aproxima a 2
console.log(string.slice(2));       // 'la mundo'

console.log(string.slice(5.1));     // 'mundo'    -> 5.1 se aproxima a 5
console.log(string.slice(5));       // 'mundo'

// .substring()
console.log(string.substring(2.9)); // 'la mundo'
console.log(string.substring(2));   // 'la mundo'

console.log(string.substring(5.1)); // 'mundo'
console.log(string.substring(5));   // 'mundo'

/* 9) Si es posible,
ambos .slice() y .substring()
convierten a tipo Number()
lo que esta escrito dentro del par de paréntesis () */
// tipo string '2' se convierte a number 2
console.log(string.slice('2'));     // 'la mundo'
console.log(string.substring('2')); // 'la mundo'

/* 10) Carácter en blanco '' */
// .slice()
console.log(''.slice());                  // ''
console.log(''.slice(0));                 // ''
console.log(''.slice(-1));                // ''
console.log(''.slice(-999));              // ''
console.log(''.slice(999));               // ''
console.log(''.slice(''.length));         // ''
console.log(''.slice(''.length - 1));     // ''

// .substring()
console.log(''.substring());              // ''
console.log(''.substring(0));             // ''
console.log(''.substring(-1));            // ''
console.log(''.substring(-999));          // ''
console.log(''.substring(999));           // ''
console.log(''.substring(''.length));     // ''
console.log(''.substring(''.length - 1)); // ''

/* ----- DIFERENCIAS: -----
1) La sintaxis para usar
.slice() y .substring()
con números negativos es diferente:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#using_substring_with_length_property

La sintaxis de .slice()
es mejor para números negativos

Con .slice() solamente hay que copiar
dentro del par de paréntesis ()
el número negativo,
en cambio con .substring()
tengo que restarle el número a .length

Las posiciones (índices)
negativas de 'hola mundo'
son desde -1 hasta -10

Imprimir los dos -2
últimos caracteres (letras)
de 'hola mundo' que son 'do'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#using_slice_with_negative_indexes */
// dentro de .slice() copio el # negativo
console.log(string.slice(-2));                       // 'do'

/* FORMA CORRECTA: dentro de .substring() restarle un # a .length()
   RECORDATORIO: const numeroCaracteres = string.length; */
console.log(string.substring(numeroCaracteres - 2)); // 'do'

// ERROR: un # negativo dentro de .substring() imprime el string completo
console.log(string.substring(-2));                   // 'hola mundo'

/* (-5, -2)
De 'hola mundo' imprimir
las posiciones -5 hasta -3,
NO se imprime la posición -2 */
// .slice()
console.log(string.slice(-5, -2));                                         // 'mun'

// .substring()
console.log(string.substring(numeroCaracteres - 5, numeroCaracteres - 2)); // 'mun'

/* 2) La sintaxis de .slice() y .substring()
para obtener el ultimo carácter es diferente

El ultimo carácter (letra)
de 'hola mundo' que es la 'o' */
// .slice()
console.log(string.slice(numeroCaracteres - 1));     // 'o'          -> string.slice(string.length - 1)
console.log(string.slice(-1));                       // 'o'

// .substring()
console.log(string.substring(numeroCaracteres - 1)); // 'o'          -> FORMA CORRECTA: string.substring(string.length - 1)
console.log(string.substring(-1));                   // 'hola mundo' -> ERROR: .substring() NO sirve con # negativos

/* 3) SI indexStart > indexEnd
entonces se INTERCAMBIAN los números dentro de .substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#using_substring */
// (indexStart, indexEnd)
console.log(string.substring(0, 1)); // 'h' -> como 0 (indexStart) > 1 (indexEnd) entonces es lo mismo q (1, 0)
console.log(string.substring(1, 0)); // 'h'

/* en cambio, .slice() NO intercambia los números

SI indexStart > indexEnd
entonces .slice() devuelve un carácter en blanco ' ' */
console.log(string.slice(0, 1)); // 'h' -> imprimir desde la posicion (indice) 0 hasta 1
console.log(string.slice(1, 0)); // ''  -> como 0 (indexStart) > 1 (indexEnd) entonces .slice() imprime caracter en blanco ''
