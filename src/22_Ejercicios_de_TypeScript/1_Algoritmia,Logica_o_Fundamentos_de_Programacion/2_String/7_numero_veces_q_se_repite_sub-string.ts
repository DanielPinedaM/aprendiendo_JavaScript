/* 
Programa una función para contar el número de veces que se repite una palabra en un texto largo.
Ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ .indexOf()                                         █
 █ https://www.youtube.com/watch?v=U4buFGcd_eg&t=383s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/

const textoEnCadena = (cadena: string, texto: string): number | null => {
  if (typeof cadena !== 'string') {
    console.warn('No ingresaste el texto largo');
    return null;
  }
  if (typeof texto !== 'string') {
    console.warn('No ingresaste la palabra a evaluar');
    return null;
  }

  let i: number = 0;
  let contador: number = 0;

  // while (i !== -1) iterar hasta encontrar el texto buscado
  // .indexOf() devuelve -1 cuando NO encuentra el texto buscado
  while (i !== -1) {
    // i = cadena.indexOf(texto, i) obtener la ultima aparicion del texto buscado
    i = cadena.indexOf(texto, i);

    // SI se encontro el texto buscado en la cadena,
    // entonces incremenar i y contador
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  return contador;
};

textoEnCadena('hola mundo adios mundo', 'mundo');
// 2
