/* 
Programa una función que reciba un número 
y evalúe si es palindromo (capicúa) o no 
(que se lee igual en un sentido que en otro)
Ejemplo: miFuncion(2002) devolverá true.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=MRmvOTkd7CE&t=244s
*/

const palindromo = (numero: number): boolean => {
  if (!numero) {
    console.warn('No ingresaste numero');
    return false;
  }

  if (typeof numero !== 'number') {
    console.log('El valor', numero, 'NO es un numero');
    return false;
  }

  const numeroString: string =  numero.toString();
  const invertirString: string = numeroString.split("").reverse().join("");

  return invertirString === numeroString;
};

palindromo(2002); // true
palindromo(98);   // false

// ❌ error TS1489: No se permiten decimales con ceros a la izquierda.
palindromo(09);
