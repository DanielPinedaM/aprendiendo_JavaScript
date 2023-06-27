// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentacion Oficial...
- .trim()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

- .trimStart() ó .trimLeft()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart

- .trimEnd() ó .trimRight()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd

- Espacio en blanco ' '
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space

Eliminar espacios en blanco ' ' de un string al...

1) .trim() - principio y final */
console.log('   a b   '.trim());                               // 'a b'

/* Si junto ambos metodos
.trimStart() y .trimEnd()
entonces obtengo el mismo resultado que .trim() */
console.log('   a b   '.trimStart().trimEnd());                // 'a b'
console.log('   a b   '.trimLeft().trimRight());               // 'a b'

console.log('   a b   '.trimEnd().trimStart());                // 'a b'
console.log('   a b   '.trimRight().trimLeft());               // 'a b'

// 2) .trimStart() ó .trimLeft() - principio (lado izquierdo)
console.log('   a b   '.trimStart());                          // 'a b   '
console.log('   a b   '.trimLeft());                           // 'a b   '

/* .trimStart() y .trimLeft() son lo mismo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#aliasing */
console.log('   a b   '.trimStart() === '   a b   '.trimLeft()); // true
console.log(String.prototype.trimLeft.name === 'trimStart');     // true

// 3) .trimEnd() ó .trimRigth() - final (lado derecho)
console.log('   a b   '.trimEnd());                            // '   a b'
console.log('   a b   '.trimRight());                          // '   a b'

/* .trimEnd() y .trimRigth() son lo mismo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#aliasing */
console.log('   a b   '.trimEnd() === '   a b   '.trimRight());  // true
console.log(String.prototype.trimRight.name === 'trimEnd');      // true

/* Todos estos metodos...
.trim()
.trim.Start()
.trim.End()

- NO afectan al string original

- Devuelven un nuevo string

- Eliminan los espacios en blanco ' '
al principo y final
NO eliminan espacios en blanco
ENTRE cada caracter

como el string 'a b' NO tiene espacios en blanco
al principio ni final
entonces se devuelve exactamente el mismo string */
console.log('a b'.trim());      // 'a b'
console.log('a b'.trimStart()); // 'a b'
console.log('a b'.trimEnd());   // 'a b'
