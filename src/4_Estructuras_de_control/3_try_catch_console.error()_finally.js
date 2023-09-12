/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
try catch console.error() finally Manejo de Errores

Tutorial...
- Jon Mircha:
https://youtu.be/SPVL8uAezaw

- Midudev:
https://youtu.be/OhE-mEt37iA

https://youtu.be/FJ-w0tf3d_w

Documentacion Oficial...
- try catch finally
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

- console.error()
https://developer.mozilla.org/en-US/docs/Web/API/console/error

- throw
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

- Error
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

- Manejo de excepciones
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements

- Binding
https://developer.mozilla.org/en-US/docs/Glossary/Binding

1) try ejecuta un codigo q puede o no tener errores.

2) catch captura el error
y solamente se ejecuta cuando
en el try {} SI hay error.

3) console.error() imprime por consola el error

4) finally siempre se ejecuta DE ULTIMO,
despues de ejecutar el try y catch,
sin importar si hay o no errores.
Es opcional escribirlo. Ver: " Ejemplo 4 - ¿Cuando se ejecuta finally {} ? "

5) Evita q se detenga la ejecucion del codigo cuando hay errores

6) Puede anidar una o más sentencias try.
Si una sentencia try hija (interna) no tiene una bloque catch hijo,
se ejecuta el bloque catch de la sentencia try padre que la encierra.

7) Ejemplos de uso:
- Hacer peticiones HTTP (fetch y Axios)

- Mostrar al usuario final un mensaje de "Cargando..."
mientras se ejecuta la petición (loader)

- Conectar la base de datos con NodeJS (MongoDB, MySQL, etc.)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#description

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#syntax */

try {
  // codigo q puede tener errores
} catch (error) {
  // capturar el mensaje de error
  console.error(error);
} finally {
  // ejecutar siempre al final del try catch
}

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre console.log() y console.error()
https://developer.mozilla.org/en-US/docs/Web/API/console/log

https://developer.mozilla.org/en-US/docs/Web/API/console/error */

const saludar = 'hola mundo';

console.log(saludar);   // 'hola mundo'
console.error(saludar); // ❌ hola mundo

/* --------------------------------------------------------------- */

/* Ejemplo 2:
https://youtu.be/SPVL8uAezaw

try {} se ejecuta completo sin errores

catch no se ejecuta porq no hay errores

finally siempre se ejecuta */

try {
  console.log('try: codigo q puede tener errores');
} catch (error) { // capturar mensaje de error
  console.error(error);
} finally {
  console.log('finally: ejecutar siempre al final del try catch');
}
/*
try: codigo q puede tener errores
finally: ejecutar siempre al final del try catch
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Orden de ejecución de try catch console.error() finally
https://youtu.be/SPVL8uAezaw

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#unconditional_catch_block

1) En try {} imprime 1 porque esa linea de codigo no tiene error

2) variableNoDefinida; es un error por lo q no se imprime el 2

3) catch (error) {} captura el error,
imprime el 3, imprime el error e imprime el 4

5) finally {} se ejecuta al final e imprime el 5 */

try {
  console.log(1);
  variableNoDefinida;
  console.log(2);
} catch (error) {
  console.log(3);
  console.error(error);
  console.log(4);
} finally {
  console.log(5);
}
/*
1
3
❌ ReferenceError: variableNoDeclarada is not defined at <anonymous>:3:3
4
5
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - ¿Cuando se ejecuta finally {} ?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block

1) Se ejecuta try {} SIN errores, NO se ejecuta catch y se ejecuta finally {}

2) Se encuentra un error en try {}, se ejecuta catch y se ejecuta finally {} */

// ERROR: SIEMPRE se tiene q escribir try catch y opcionalmente finally
try {
  abrirArchivo();  // esta linea se ejecuta y da error porq la funcion no esta definida
} finally {
  cerrarArchivo(); // ReferenceError: cerrarArchivo is not defined
}

// esta linea NO se ejecuta
console.log("hola mundo");

/* --------------------------------------------------------------- */

/* Ejemplo 5 - finally {} en declaración de flujo de control (MALA PRACTICA):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block 

finally se ejecuta inmediatamente antes de que se ejecute 
una declaración de flujo de control ( return, throw, break, continue) 
en el try bloque o catch bloque.

Se ejecuta el try {}, como se encuentra un error entonces se ejecuta el catch
y de ultimo se devuelve el valor de retorno 3 del finally {} */

const hacerAlgo = () => {
  try {
    variableNoDefinida;
    return 1;
  } catch (error) {
    console.error(error); // ❌ ReferenceError: variableNoDefinida is not defined at hacerAlgo 
    return 2;
  } finally {             
    return 3;
  }
}

hacerAlgo();
// 3

/* --------------------------------------------------------------- */

/* Ejemplo 5 Básico - throw new Error() Mensaje de error personalizado
https://youtu.be/SPVL8uAezaw

Saber si una variable es o no de tipo numero number

Recordatorio:
Ver:
" 4.3.1.5.1) ¿El Dato No es un Numero NaN? - Diferencia Entre isNaN() y Number.isNaN() " */

try {
  const numero = '1.1';

  if (Number.isNaN(numero) || typeof numero !== 'number') {
    console.log('error personalizado');
    throw new Error('la variable NO es de tipo numero');
  }

  const elevadoAlCuadrado = numero * numero;
  console.log(elevadoAlCuadrado);
} catch (error) {
  console.error(error);
} finally {
  console.log('finally: ejecutar siempre al final del try catch');
}
/*
error personalizado
❌ Error: la variable NO es de tipo numero at <anonymous>:6:11 (anónimo) @ VM13:12
finally: ejecutar siempre al final del try catch
*/

/* --------------------------------------------------------------- */

/* Ejemplo 6 Avanzado - throw new Error() Mensaje de error personalizado
https://youtu.be/OhE-mEt37iA */

// ❌ MALA PRACTICA:
const validarUsuario = ({ name, age, email } = {}) => {
  if (!name) throw new Error('name is required');
  if (!age) throw new Error('age is required');
  if (!email) throw new Error('email is required');
};

try {
  validarUsuario();
} catch (err) {
  // err es una instancia de tipo Error
  console.error(err instanceof Error); // true
  console.error(err);                  // ❌ Error: name is required
}

/* --- */

/* ✅ BUENA PRACTICA:
Esto oculta el error q contiene la conexion a la base de datos
q es informacion sensible q nunca se debe mostrar por consola */

const createErrorFactory = function (name) {
  // La clase BusinessError extiene a la clase Error
  return class BusinessError extends Error {
    constructor(message) {
      // llamar constructor de la clase  Error
      super(message);
      this.name = name;
    }
  };
};

const ConnectionError = createErrorFactory('ConnectionError');
console.log(ConnectionError);
// BusinessError()

const ValidationError = createErrorFactory('ValidationError');
console.log(ValidationError);
// BusinessError()

const validateUser2 = ({ name, age, email } = {}) => {
  // conexion a la base de datos
  if (!name) throw new ValidationError('name is required');
  if (!age) throw new ValidationError('age is required');
  if (!email) throw new ValidationError('email is required');

  // llamar a la base de datos para guardar el usuario
  try {
    mongodb.connect();
  } catch (err) {
    throw new ConnectionError('database is not available');
  }
};

const obj = {
// propiedad: valor,
  name: 'Daniel',
  age: 99,
  email: 'hola_mundo@gmail.com',
};
console.log(obj);
/* 
{
  name: 'Daniel',
  age: 99,
  email: 'hola_mundo@gmail.com',
};
*/

try {
  validateUser2(obj);
} catch (e) {
  console.error(e);

  if (e instanceof ConnectionError) {
    // Re-intentar conexion a la base de datos después 1000 milisegundos = 1 segundo
    setTimeout(() => {
      validateUser2(obj);
    }, 1000);
  }

  if (e instanceof ValidationError) {
    // mostrarEnUIModalDeValidacionError()
  }
}

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Consumir API REST con Fetch + Promise + Manejo de Errores
https://youtu.be/FJ-w0tf3d_w

https://rapidapi.com/hub?utm_source=midudev&utm_medium=DevRel&utm_campaign=DevRel */

const url = 'https://api.alegra.com/api/v1/invoices';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Basic cGluZWRhLmRhbmllbDcwMEBnbWFpbC5jb206NWQ1ZmZmY2M5MDUwNjgwODMzODM=',
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
/*
[
  {
    "id": "1",
    "date": "2023-09-02",
    "termsConditions": "Autorizo intereses por mora en caso de incumplir pagos",
    "client": {
      "id": "1",
      "name": "Daniel Pineda",
      "identification": "123",
      "phonePrimary": null,
      "phoneSecondary": null,
      "fax": null,
      "mobile": null,
      "email": null,
      "address": {
        "address": null,
        "department": null,
        "city": null
      },
      "identificationObject": {
        "type": "CC",
        "number": "123"
      }
    }
  }
]
*/

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Diferencia entre catch y throw new TypeError()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#catch_binding

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

catch contiene el nombre del error por defecto,
en cambio throw new TypeError() crea mensajes de error personalizados

Puedo acceder a ambos usando la desestructuracion */

// ✅ FORMA CORRECTA
try {
  throw new TypeError('crear nuevo mensaje de error');
} catch ({ name, message }) {
  console.error(name);    // ❌ TypeError
  console.error(message); // ❌ crear nuevo mensaje de error
}

// ❌ FORMA INCORRECTA
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  let name;    // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}

/* --------------------------------------------------------------- */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#catch_binding */

try {
  throw "este NO es un objeto Error";
} catch (e) {
  console.error(e?.message);          // ❌ undefined
  console.error(e);                   // ❌ 'este NO es un objeto Error'
  console.log(!(e instanceof Error)); // true

  if (!(e instanceof Error)) {        // e NO es una instancia de la clase Error
    e = new Error(e);                 // convertir e en una instancia de la clase Error
  }
  console.error(e.message);           // ❌ 'este NO es un objeto Error'
  console.error(e);                   // ❌ Error: 'este NO es un objeto Error' at <anonymous>:8:9
  console.log(Error);                 // ƒ Error() { [native code] }
}

/* --------------------------------------------------------------- */

// Ejemplo 10 - Saber si un string se puede o no convertir a JSON

const esUnJSON = (string) => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const json = '{"uno":1, "dos":2}'
console.log(json);
// '{"uno":1, "dos":2}'

esUnJSON(json);
// true

const saludar = "hola mundo";
esUnJSON(saludar); 
// false
// Error: 'Unexpected token 'h', "hola mundo" is not valid JSON'

/* --------------------------------------------------------------- */

/* Ejemplo 11 - Detectar el tipo de error
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_blocks

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError */

try {
  funcionNoDefinida();
} catch (e) {
  console.error(e);
  // ❌ ReferenceError: funcionNoDefinida is not defined at <anonymous>:2:3
  
  // Tipos de errores
  if (e instanceof TypeError) {
    console.error("el tipo de error es TypeError");
  } else if (e instanceof RangeError) {
    console.error("el tipo de error es RangeError");
  } else if (e instanceof EvalError) {
    console.error("el tipo de error es EvalError");
  }  else {
    throw new Error("otro tipo de error")
  }

  console.error(e);
  // ❌ Uncaught Error: otro tipo de error at <anonymous>:14:11
}

/* --------------------------------------------------------------- */

/* Ejemplo 12 - Anidar try catch console.error() finally
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks */

try {
  try {
    throw new Error("1-throw new Error"); // crear mensaje de error personalizado
  } finally {
    console.log("2-finally");             // ejecutar despues del try anterior
  }
} catch (e) {
  console.error("3-catch", e.message);    // imprimir mensaje de error personalizado
}
/*
'2-finally'
❌ 3-catch 1-throw new Error
*/

/* --------------------------------------------------------------- */

/* Ejemplo 13 - Anidar try catch console.error() finally
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks */

try {
  try {
    throw new Error("1-throw new Error"); // crear mensaje de error personalizado
  } catch (e) {
    console.error("2-catch", e.message);  // imprimir mensaje de error personalizado
  } finally {
    console.log("3-finally");             // ejecutar despues del try catch anterior
  }
} catch (e) {
  console.error("4-catch", e.message);    // NO se ejecuta porq el error ya se capturo en el catch anterior
} finally {
  console.log("5-finally");               // finally siempre se ejecuta de ultimo
}
/*
❌ 2-catch 1-throw new Error
'3-finally'
'5-finally'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 14 - Anidar try catch console.error() finally
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks

Cualquier excepción (error) 
dado será capturada solo una vez 
por el catch (padre) bloque más cercano 
a menos que se vuelva a lanzar. 
Por supuesto, cualquier nueva excepción 
generada en el bloque (hijo) "interno" 
(porque el código en el catchbloque puede hacer algo que arroje), 
será detectada por el bloque (padre) "externo". */

try {   // (padre) "externo"
  try { // (hijo)  "interno" 
    throw new Error("1-throw new Error"); // crear mensaje de error personalizado
  } catch (e) {
    console.error("2-catch", e.message);  // imprimir mensaje de error personalizado
    throw e;                              // throw e; capturar mensaje de error "1-throw new Error" -> nueva excepción en  (hijo) "interno" 
  } finally {
    console.log("3-finally");             // ejecutar finally despues del try catch anterior
  }
} catch (e) {
  console.error("4-catch", e.message);    // imprimir mensaje de error capturado en throw e;
}
/*
❌ 2-catch 1-throw new Error
'3-finally'
❌ 4-catch 1-throw new Error
*/

/* --------------------------------------------------------------- */

/* Ejemplo 15
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#returning_from_a_finally_block

El ULTIMO finally {} con un return SIEMPRE es el 
valor es el valor de retorno de todo el try-catch-finally 
SIN IMPORTAR los return de los otros try-catch
NI las excepciones lanzadas dentro del bloque catch */

const hacerAlgo2 = () => {
  try {
    try {
      throw new Error("1-throw new Error");
    } catch (e) {
      console.error("2-catch", e.message); // ❌ 2-catch 1-throw new Error
      throw e;
    } finally {                            // este es el ultimo finally {}
      console.log("3-finally");            // '3-finally'
      return "4-return";                   // return detiene la ejecucion de la funcion aqui
    }
  } catch (e) {
    console.error("5-catch", e.message);   // NO se lanza el error "1-throw new Error" porq en el finally hay un return
                                           // Lo mismo se aplicaría a cualquier valor devuelto dentro de este catch
  }
}

const valorDeRetorno = hacerAlgo2();
console.log(valorDeRetorno);               // '4-return'

/* --------------------------------------------------------------- */

/* Ejemplo 16 - Mas ejemplos de throw:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#examples */
