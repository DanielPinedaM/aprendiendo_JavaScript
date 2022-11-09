/* eslint-disable max-len */

/* NOTA: El codigo de este tutorial esta en esta carpeta
...\aprendiendo_JS\src\8_Programacion_orientada_a_objetos_(POO)\2_() {} Funciones_(sub-programas)\1_formas_de_llamar_(invocar,ejecutar)_una_funcion

Tutorial Jon Mircha
() {} Funciones (Sub-programas):
https://youtu.be/H6U1Pm7x60E

------------------------------------------------------------

¿Q ES UNA FUNCION?
() {} Funciones y sub-programas es lo mismo.

Una función es una parte de código que se repite
porque lo necesito usar en varias partes de mi programa,
entonces en ves de copiar y pegar muchas veces el mismo código,
es mejor crear una función
que haga esa tarea que necesito
y después usar esa función
las veces que necesite
en cualquier parte de mi programa,
así no tengo que estar copiando y pegando,
sino que con la función
puedo hacer una tarea las veces que necesite.
Por eso es que a la función también se le llama sub-programa,
porque las funciones son una parte del programa.

En JS las () {} funciones también son = {}; objetos

Cada función crea un alcance (scope).

Cada nombre de función es único,
NO pueden existir dos funciones con el mismo nombre

Es opcional que las funciones tengan return y parametros

Las funciones son de primera clase
porque puede asignarse a un valor,
pueden pasarse como argumentos
y usarse como un valor de retorno return

------------------------------------------------------------

PARTES (SINTAXIS) DE UNA FUNCION
TODAS las sintaxis de funciones
se escriben con un par de paréntesis y llaves () {}

1) Palabra Reservada (Function Keyword)
La palabra reservada function
indica q se está creando una nueva función,
aunque se pueden crear funciones
SIN la palabra reservada function
como por ejemplo las funciones flecha (arrow functions).

2) Nombre de la Función (Function Name)
Indica ¿cómo se llama la función?
y es el nombre con el cual se llama (invoca, ejecuta) la función.

Puede tener cualquier nombre.

Cada nombre de función es único,
NO pueden existir dos funciones con el mismo nombre.

3) Stack Overflow - Diferencia Entre Parámetros (Parameters) y Argumentos (Arguments)
https://stackoverflow.com/questions/12874467/what-is-the-difference-between-arguments-and-parameters-in-javascript

- Ambos, los parámetros y argumentos
van dentro de un par de paréntesis () separados por comas ,

- Los parámetros son las variables locales de las funciones
a las cuales se les asignan argumentos que son los datos de entrada.

- El argumento es el valor del parámetro.

- Los parámetros (variables) si tienen nombre,
en cambio los argumentos (valores) NO tienen nombre.

- Los argumentos se usan para llamar (invocar, ejecutar) la función.

4) return Valor de Retorno (Return Stament)
return Es el resultado después de ejecutar las tareas de la función.

return SIEMPRE se tiene que escribir de ultimo,
antes de cerrar la llave } de la función

Dentro de la función () {}
todo lo que este escrito antes del return se ejecuta (por eso tiene que ir de ultimo)
 y lo que este después del return se ignora (no se ejecuta).

5) {} Alcance (Scope) o Cuerpo (Body)
El alcance (scope) o cuerpo (body)
está delimitado por un par de llaves {}
que indican en donde empieza y termina la función. */
