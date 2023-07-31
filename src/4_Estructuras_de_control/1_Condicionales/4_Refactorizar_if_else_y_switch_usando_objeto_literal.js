// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Refactorizar if () {} else {} y switch Usando Objeto Literal {}

Tutorial - Refactorizar if () {} else {} y switch ...
- Antonio Sarosi:
https://www.youtube.com/watch?v=5QRRCerA22E&t=905s

- Midudev:
https://youtu.be/0NlsJuwFsrQ

https://youtu.be/UrcxotUmThU
*/

/* --------------------------------------------------------------- */

/* 1) Object.freeze() sirve para q NO se pueda modificar
los valores buscados (blue, red, green) */
const getColor = (color) => {
  const defaultValue = '#fff';

  const hexadecimal = Object.freeze({ // objeto INmutable
    // propiedad: valor,
    blue: '#0000ff',
    red: '#FF0000',
    green: '#008000',
  });

  return hexadecimal[color] ?? defaultValue;
};

/* if () {} SI el color existe en el obteto literal {}
retornar un numero hexadecimal */
getColor('blue');  // '#0000ff'
getColor('red');   // '#FF0000'
getColor('green'); // '#008000'

/* else {} SINO existe entonces se retorna el valor por defecto
que es blanco const defaultValue = '#fff';

NO se esta ejecutando funciones (metodos),
se esta retornando el valor directamente */

// String() texto
getColor('hola mundo'); // '#fff'
getColor('');           // '#fff'
getColor(' ');          // '#fff'

// Number() numero
getColor(123);          // '#fff'

// Boolean() booleano
getColor(true);         // '#fff'
getColor(false);        // '#fff'

// BigInt() Numero grande
getColor(BigInt(999));  // '#fff'

// Symbol() Símbolo (ID, Identificador Único)
getColor(Symbol('ID')); // '#fff'

// nulo
getColor(null);         // '#fff'
// indefinido
getColor(undefined);    // '#fff'
getColor(); // '#fff'
// No Es Un Numero
getColor(NaN);          // '#fff'

// Array
getColor([]);           // '#fff'
// Objeto Literal
getColor({});           // '#fff'

/* 2) Tambien puedo hacer lo mismo de antes,
pero ejecutando funciones (metodos),
es decir, dependiendo del color
puedo ejecutar el codigo q yo quiera
y retornar el numero hexadecimal */

const getColor2 = (color2) => {
  const defaultValue = () => {
    console.log('blanco');
    return '#fff';
  };

  const hexadecimal = Object.freeze({
    blue: () => { // funcion (metodo)
      // codigo a ejecutar cuando el color sea "blue"
      console.log('azul');
      return '#0000ff'; // valor de retorno
    },
    red: () => {
      console.log('rojo');
      return '#FF0000';
    },
    green: () => {
      console.log('verde');
      return '#008000';
    },
  });

  return hexadecimal[color2] ? hexadecimal[color2]() : defaultValue();
};

getColor2('blue');
/*
"azul"
'#0000ff'
*/
