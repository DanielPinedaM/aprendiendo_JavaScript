/* 
Programa una función para 
convertir grados Celsius a Fahrenheit y viceversa.

1 grado Celsius    = 33.8 grados Fahrenheit
(1 °C × 9/5) + 32  = 33.8 °F

1 grado Fahrenheit = -17.2222 grados Celsius
(1 °F − 32) × 5/9  = -17.22 °C

Ejemplo: miFuncion(0,"c") devolverá 32°F.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=qMjGhYhmrFc&t=951s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const convertirGrados = (grados: number, unidad: 'c' | 'f'): string => {
  if (typeof grados !== 'number') return '';
  if (unidad !== 'c' && unidad !== 'f') return '';

  // convertir de grados Celsius a Fahrenheit
  if (unidad === 'c') {
    return `${grados}°C = ${grados * (9 / 5) + 32}°F`;

  // convertir de grados Fahrenheit a Celsius
  } else {
    return `${grados}°F = ${(grados - 32) * (5 / 9)}°C`;
  }
};

convertirGrados(1, 'c'); // '1°C = 33.8°F'
convertirGrados(1, 'f'); // '1°F = -17.22222222222222°C'

convertirGrados(0, 'c'); // '0°C = 32°F'
