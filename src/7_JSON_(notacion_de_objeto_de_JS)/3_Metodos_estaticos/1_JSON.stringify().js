// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Documentación Oficial - JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

JSON.stringify() Convertir de Objeto Literal a Texto string

Sintaxis:

Donde...
-
Nombre del método

- */

/* --------------------------------------------------------------- */

// Ejemplo 1 - funcion para convertir a JSON.stringify()

const JSONstringify = (value) => {
  // solamente se puede hacer JSON.stringify() de un...
  // 1) array []
  if (Array.isArray(value)) return JSON.stringify(value);
  
  // 2) objeto literal {}
  // https://stackoverflow.com/questions/4320767/check-that-value-is-object-literal
  if (Object.prototype.toString.call(value) === '[object Object]'
      && typeof value === 'object') return JSON.stringify(value);

  return value;
};

JSONstringify({ uno: 1, dos: {tres: 3} }); // '{"uno":1,"dos":{"tres":3}}'
JSONstringify([1, "2", "a", {}]);          // '[1,"2","a",{}]'

JSONstringify(new Date());                 // 2024-08-08T03:11:15.319Z
JSONstringify("hola mundo");               // 'hola mundo'

/* --------------------------------------------------------------- */

// Ejemplo 2 - Convertir de Objeto Literal a Texto string

// Definir un objetoLiteral
const objetoLiteral = {
  // propiedad: valor,
    uno: 1,
    dos: 2,
    tres: 3,
  };
  console.log(objetoLiteral);
  /*
  {
    uno: 1,
    dos: 2,
    tres: 3
  }
  */
  
  // Q es de tipo objeto 'object'
  console.log(typeof objetoLiteral);
  // 'object'
  
  /* Y lo convierto a tipo texto string
  usando el metodo JSON.stringify() */
  const stringify = JSON.stringify(objetoLiteral);
  console.log(stringify);
  // '{"uno":1,"dos":2,"tres":3}'
  
  // typeof Verificar q es tipo string
  console.log(typeof stringify);                           // 'string'
  
  /* La variable stringify
  contiene el texto string '{"uno":1,"dos":2,"tres":3}'
  y NO '{uno:1,dos:2,tres:3}' */
  console.log(stringify === '{"uno":1,"dos":2,"tres":3}'); // true
  console.log(stringify === '{uno:1,dos:2,tres:3}');       // false
  
  // es decir '{"uno":1,"dos":2,"tres":3}' ES !== DIFERENTE DE '{uno:1,dos:2,tres:3}'
  console.log('{"uno":1,"dos":2,"tres":3}' !== '{uno:1,dos:2,tres:3}'); // true
  console.log('{"uno":1,"dos":2,"tres":3}' === '{uno:1,dos:2,tres:3}'); // false