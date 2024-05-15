/* 
VALIDAR CONTRASEÑA SEGURA, 
la contraseña debe contener AL MENOS:
1) 5 caracteres
2) un caracter especial
3) un numero
4) una mayúscula (incluir la "Ñ" y vocales con tilde ÁÉÍÓÚ)
5) una minuscula (incluir la "ñ" y vocales con tilde áéíóú)
*/

/* --------------------------------------------------- */

const contrasenaSegura = (contrasena: string): boolean => /^(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>/?])(?=.*[0-9])(?=.*[A-ZÑÁÉÍÓÚ])(?=.*[a-zñáéíóú]).{5,}$/.test(contrasena.trim());

console.log(contrasenaSegura('@1ÑñÁ')); // true -> cumple todas las condiciones

console.log(contrasenaSegura(' '));     // false -> tiene menos de 5 caracteres
console.log(contrasenaSegura(''));      // false -> tiene menos de 5 caracteress
console.log(contrasenaSegura('@1Ññ'));  // false -> tiene menos de 5 caracteres
console.log(contrasenaSegura('a1ÑñÁ')); // false -> falta caracter especial
console.log(contrasenaSegura('a@ÑñÁ')); // false -> falta numero
console.log(contrasenaSegura('@1ñña')); // false -> falta mayúscula
console.log(contrasenaSegura('@1ÑÑÁ')); // false -> falta minuscula

// NO es un string
contrasenaSegura(123);              // false
contrasenaSegura(Symbol('id'));     // ❌ ERROR TypeError: Cannot convert a Symbol value to a string
contrasenaSegura(undefined);        // false
contrasenaSegura(null);             // false
contrasenaSegura(NaN);              // false
contrasenaSegura(BigInt(999));      // false
contrasenaSegura(true);             // false
contrasenaSegura(false);            // false
contrasenaSegura([1, 2, 3]);        // false
contrasenaSegura({uno: 1, dos: 2}); // false