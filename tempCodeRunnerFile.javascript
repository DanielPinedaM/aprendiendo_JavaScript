const array = ['amarillo', 'azul', 'rojo'];

console.log('# de elementos (propiedad .length):', array.length);
// # de elementos (propiedad .length): 3

// recorrer (iterar) array
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(`posicion i = ${i} / elemento = ${element}`);
}
/*
posicion i = 0 / elemento = amarillo
posicion i = 1 / elemento = azul
posicion i = 2 / elemento = rojo
*/
