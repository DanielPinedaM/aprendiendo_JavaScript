/* 
¿JS es de un solo subproceso (single threaded) o de varios subprocesos (multi thread)? 
https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd

JS es de un solo subproceso, 
esto significa q:
- Ejecuta UNA SOLA tarea a la vez.

- Cada tarea se ejecuta en orden, 
primero termina de ejecutar una parte del código, 
después sigue con el otro y así sucesivamente.

Sin embargo, 
JS es asíncrono y tiene un motor V8, 
explicare con un ejemplo q significa esto:



EJEMPLO:
JS se ejecuta en el siguiente orden:
1) El código se ejecuta línea por línea de arriba hacia abajo.

2) Lo q NO es asíncrono se ejecuta DE PRIMERO, 
es decir, primero se imprime el 1 y 3.

3) Cuando JS llega a la función asíncrona setTimeout() 
NO detiene la ejecución del código, 
se envía la petición a la API 
y se sigue ejecutando las siguientes líneas de código.

4) Lo q es asíncrono se ejecuta de ULTIMO, 
es decir, el setTimeout()

5) Se imprime undefined 
porq es su valor por defecto, 
porq aún no se tiene una respuesta de la API

6) Se espera 1000 milisegundos antes de ejecutar el setTimeout() 

7) Se obtiene la respuesta de la API

8) Se imprime el 2
*/

/* PRIMERO se ejecuta el 1 y 3 porq NO son asincronos */
console.log(1);

/* como esto es una funcion asincrona se ejecuta de ULTIMO */
setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

/*
RESULTADO

1
3
undefined
2
*/