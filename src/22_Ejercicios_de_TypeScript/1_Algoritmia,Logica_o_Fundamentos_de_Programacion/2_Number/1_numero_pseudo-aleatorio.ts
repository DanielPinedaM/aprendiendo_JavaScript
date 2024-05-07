/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                            █
 █ https://www.youtube.com/watch?v=MRmvOTkd7CE&t=53s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const pseudoaleatorio = (): number => Math.round((Math.random() * 100) + 500);

pseudoaleatorio();

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Math.random() █
 █ Math.ceil()   █
 █ Math.floor()  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

Número entero y pseudo-aleatorio desde un número hasta otro número

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil */

const pseudoaleatorio2 = (min: number, max: number): number => {
  // Math.ceil() Redondear "hacia ARRIBA", al número entero MAYOR mas cercano
  min = Math.ceil(min);
  console.log(min);
  /*
  10
  10
  
  500
  500
  */

  // Math.floor() Redondear "hacia ABAJO", al número entero MENOR mas cercano
  max = Math.floor(max);
  console.log(max);
  /*
  20
  20
  
  600
  600
  */

  // Math.random() número pseudo-aleatorio entre 0 y 1
  return Math.floor(Math.random() * (max - min + 1) + min);
};

pseudoaleatorio2(10, 20);   // 15
pseudoaleatorio2(10, 20);   // 14

pseudoaleatorio2(500, 600); // 535
pseudoaleatorio2(500, 600); // 529
