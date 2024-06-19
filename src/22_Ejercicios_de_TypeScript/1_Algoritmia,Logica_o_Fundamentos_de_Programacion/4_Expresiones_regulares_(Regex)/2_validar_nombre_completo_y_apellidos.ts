/* 
Programar funcion para 
validar nombre completo con apellidos

permitir:
- mayúscula (incluir la "Ñ" y vocales con tilde ÁÉÍÓÚ)
- minuscula (incluir la "ñ" y vocales con tilde áéíóú)

Ejemplo: 
miFuncion("Daniel Pineda") devuelve true.

miFuncion("Daniel") devuelve false.



Solucion Stack Overflow:

- normalizeString
https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript

- NO permitir numeros
https://stackoverflow.com/questions/38110419/is-there-a-difference-between-d-and-d#

- validateFullName
https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
*/

/* --------------------------------------------------- */

const normalizeString = (string: string | any): string | any => {
  if (typeof string === 'string' || string instanceof String) {
    return string
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  return string;
};

const validateFullName = (texto: string): boolean => {
  // validar q parametro texto sea un string
  if (typeof texto !== 'string') return false;

  texto = texto.trim();

  // NO permitir espacios en blanco " "
  if (texto === '') return false;

  // NO permitir caracteres especiales
  if (/[!@#$€%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(texto)) return false;

  // NO permitir numeros
  if (/\d/.test(texto)) return false;

  texto = normalizeString(texto);

  /*
  ^ inicio de línea
  [a-zA-Z]{2,} exceptuará un nombre con al menos dos caracteres
  \s buscará espacios en blanco entre nombre y apellido
  [a-zA-Z]{1,} necesita al menos 1 carácter
  \'?-? posibilidad de **'** o **-** para apellidos dobles y con guiones
  [a-zA-Z]{2,} exceptuará un nombre con al menos dos caracteres
  \¿s? posibilidad de otro espacio en blanco
  ([a-zA-Z]{1,})? posibilidad de un segundo apellido
  */

  return /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(texto);
};

// if (typeof texto !== 'string') return false;
validateFullName([1, 2, 3]);  // false
validateFullName({ uno: 1 }); // false
validateFullName(0);          // false
validateFullName(null);       // false
validateFullName(undefined);  // false
validateFullName(NaN);        // false
validateFullName(true);       // false
validateFullName(false);      // false

// if (texto.trim() === "") return false;
validateFullName('');  // false
validateFullName(' '); // false

// nombres invalidos
validateFullName('daniel');        // false
validateFullName('daniel pin€d@'); // false
validateFullName('dan13l p1ned9'); // false

// nombre completo valido
validateFullName(' María José García López '); // true
validateFullName('daniel Pineda');             // true
validateFullName('Antoño López');              // true
