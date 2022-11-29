/* eslint-disable array-callback-return */
// @ts-nocheck

/* Array.from() convierte el string a array
y ejecuta una funcion flecha () => {}
que recorre el array (string) */
const string = 'hola mundo';

Array.from(string, (elemento, i) => {
  console.log(`i=${i} / elemento='${elemento}'`);
});
/*
i=0 / elemento='h'
i=1 / elemento='o'
i=2 / elemento='l'
i=3 / elemento='a'
i=4 / elemento=' '
i=5 / elemento='m'
i=6 / elemento='u'
i=7 / elemento='n'
i=8 / elemento='d'
i=9 / elemento='o' */
