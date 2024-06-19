/* 
Programa una función que elimine cierto patrón de caracteres de un texto dado, 
Ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Expresion regular      █
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=U4buFGcd_eg&t=1292s
*/

const eliminarCaracteres = (texto: string = "", patron: string = ""): string | null => {
    if(!texto) {
        console.warn("no ingresaste texto");
        return null;
    }

    if(!patron) {
        console.warn("no patron de caracteres");
        return null;
    }

    // new RegExp -> Expresion regular
    // patron     -> lo q se busca en texto
    // i          -> omitir mayusculas y minusculas
    // g          -> buscar en todo el texto
    // ""         -> NO reemplazar caracteres en texto
    return texto.replace(new RegExp(patron, "ig"), "");
}

// eliminar "xyz"
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");   // '1, 2, 3, 4 y 5'

// eliminar "letras desde la a hasta la z"
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]"); // '1, 2, 3, 4  5'
