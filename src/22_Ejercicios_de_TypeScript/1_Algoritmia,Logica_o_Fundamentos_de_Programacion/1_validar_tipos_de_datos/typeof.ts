/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Funciones para validar tipo de dato █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

/* --------------------------------------------------- */

// solamente tipo NUMERO, NO admite NaN. Ejemplo: 99
const esNumero = (item: any): boolean => typeof item === 'number' && Number.isNaN(item) === false;

esNumero(99);  // true -> 99   SI es un numero
esNumero(0.9); // true -> 0.9  SI es un numero

esNumero('1'); // false -> '1' NO es un numero
esNumero(NaN); // false -> NaN NO es un numero

/* --------------------------------------------------- */

// string que contenga numero. Ejemplo: '99'
const esStringNumero = (item: any): boolean => typeof item === 'string' && /^-?\d+(\.\d+)?$/.test(item.trim());

esStringNumero('0.9');   // true -> "0.9" es un string q contiene un numero DECIMAL
esStringNumero('99');    // true ->  "0.9" es un string q contiene un numero ENTERO
esStringNumero('-99');   // true ->  "0.9" es un string q contiene un numero NEGATIVO
esStringNumero('-99.1'); // true ->  "0.9" es un string q contiene un numero NEGATIVO Y DECIMAL

// todo esto devuelve false porq NO es un string ""
esStringNumero([]);    // false
esStringNumero(0.9);   // false
esStringNumero(99);    // false
esStringNumero(-99);   // false
esStringNumero(-99.1); // false

/* --------------------------------------------------- */

const esLetra = (item: any): boolean => typeof item === 'string' && /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(item.trim());

// 1) solamente tipo STRING
esLetra([]); // false -> [] NO es tipo string

// 2) SI admite MAYUSCULAS y minusculas 
esLetra("Hola"); // true 

// 3) SI admite vocales con tilde
esLetra("á é í ó ú ü Á É Í Ó Ú Ü"); // true

// 4) SI admite ñ minuscula y Ñ MAYUSCULA
esLetra("ñato aÑo"); // true

// 5) NO admite NaN
esLetra(NaN); // false

// 6) el texto NO puede contener numeros, 1 es un numero
esLetra('hola 1 mundo'); // false

// 7) Ejemplo completo
esLetra('HolÁ mundó Ñ'); // true

/* --------------------------------------------------- */

/*
Crear funcion q cumpla con las siguientes condiciones:
1) La funcion recibe como parametros 
el array y tipo de dato 
q se valida en los elementos del array

2) La funcion devuelve un booleano

3) Validar el tipo de dato de todos los elementos de un array

4) SI necesitas validar q los elementos del array sean tipo numero, 
   entonces, validar
   solamente tipo NUMERO, NO admitir NaN
 */

const todosLosElementosDelArraySonDelTipo = (array: any[], tipo: string): boolean => {
  if (tipo === 'number') {
    // solamente tipo NUMERO, NO admitir NaN. Ejemplo: 99
    return array.every((item: any) => typeof item === 'number' && !Number.isNaN(item));
  } else {
    return !array.some((item: any) => typeof item !== tipo);
  }
};

// 'string'
todosLosElementosDelArraySonDelTipo(['a', 'b', 'c'], 'string');          // true -> TODOS los elementos del array son tipo STRING
todosLosElementosDelArraySonDelTipo(['a', {}, 'c'], 'string');           // false -> {} NO es tipo string

// 'number'
todosLosElementosDelArraySonDelTipo([1, 2, 3], 'number');               // true -> TODOS los elementos del array son tipo NUMBER
todosLosElementosDelArraySonDelTipo([1, 2, NaN, 3], 'number');          // false -> el elemento NaN NO es un numero
todosLosElementosDelArraySonDelTipo([1, 2, 'hola mundo', 3], 'number'); // false -> el elemento "hola mundo" NO es un numero
