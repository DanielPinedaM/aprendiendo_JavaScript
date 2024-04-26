/*
Tutorial - Jon Mircha
https://youtu.be/3o5d-tdVscU?si=wv28RhWylyKRZhEw

Programa una función que
cuente el número de caracteres de una cadena de texto.
Ejemplo: miFuncion('Hola Mundo') devolverá 10
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .length █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length */

// # de caracteres en string
const string: string = 'Hola Mundo';
console.log(string.length);        // 10

// # de elementos en arrayp
const array: number[] = [1, 2, 3];
console.log(array.length);         // 3

// .length NO funciona en objeto literal
const obj = {};
console.log(obj.length);           // undefined

// # de parametros en funcion
const funcionFlecha = (uno, dos) => `holaMundo - ${uno} - ${dos}`;
console.log(funcionFlecha.length); // 2

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Longitud de:        █
 █ - '' string         █
 █ - [] array          █
 █ - {} objeto literal █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const longitud1 = (dato: any): number | null => {
  // validar SI dato es un '' string ó [] array
   if (typeof dato === 'string' || dato instanceof String || Array.isArray(dato)) {
     return dato.length;

   // validar SI dato es un {} objeto literal
   } else if (dato && Object?.getPrototypeOf(dato) === Object?.prototype) {
     return Object.keys(dato).length + Object.getOwnPropertySymbols(dato).length;
   } else {
     return null;
   }
};

longitud1('Hola Mundo'); // 10
longitud1([1, 2, 3]);    // 3
longitud1({              // 2
  uno: 1,
  dos: 2
});

longitud1(null);         // null
longitud1(undefined);    // null
longitud1(NaN);          // null

longitud1(123);          // null
longitud1(BigInt(99));   // null

longitud1(true);         // null
longitud1(false);        // null

longitud1(Symbol('ID')); // null

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */

const longitud2 = (string: string): number => {
    let contador: number = 0;

    for (const _ of string) {
      contador++;
    }

    return contador;
};
longitud2('Hola Mundo');
 10

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */

const longitud3 = (string): number => {
  let contador: undefined | string | number;

  for (const i in string) {
    contador = i;
  }

  return Number(contador) + 1;
}
longitud3('Hola Mundo');
 10

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://youtu.be/FMubfnVET74 */

const longitud4 = (string: string): number => {
  const array: string[] = string.split('');
  const map: number[] = array.map((_, i) => i);

  return map[map.length - 1] + 1;
}
longitud4('Hola Mundo');
// 10

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=Xh8p7aZBiaw&t=179s */

function contarCaracteres(cadena: string = ""): void {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}
contarCaracteres();             // "No ingresaste ninguna cadena"
contarCaracteres(" ");          // `La cadena " " tiene 1 caracteres`)
contarCaracteres("hola mundo"); // `La cadena "hola mundo" tiene 10 caracteres`)



const contarCaracteres2 = (cadena: string = ""): void => !cadena ? 
                                                            console.warn("No ingresaste ninguna cadena") 
                                                         : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres2();             // "No ingresaste ninguna cadena"
contarCaracteres2(" ");          // `La cadena " " tiene 1 caracteres`)
contarCaracteres2("hola mundo"); // `La cadena "hola mundo" tiene 10 caracteres`)
