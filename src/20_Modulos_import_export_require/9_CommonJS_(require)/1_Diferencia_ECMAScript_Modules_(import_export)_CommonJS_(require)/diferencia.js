/* eslint-disable max-len */
/*
¿Diferencias, Similitudes y Cuál Usar Entre import export ECMAScript Modules y require CommonJS?

DenoJS
https://deno.com/blog/commonjs-is-hurting-javascript

BunJS
https://bun.sh/blog/commonjs-is-not-going-away

Tutorial - Midudev
https://www.youtube.com/watch?app=desktop&v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1&t=1794s

https://www.youtube.com/watch?app=desktop&v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1&t=2131s

                                      |------------------------------------|------------------------------------|
                                      | ECMAScript Modules                 | CommonJS                           |
|-------------------------------------|------------------------------------|------------------------------------|
| ¿Está obsoleto?                     | ❌                                 | ✔️                                 |
|                                     | Buena Práctica                     | Mala Práctica                      |
|-------------------------------------|------------------------------------|------------------------------------|
| Exportar                            |
|                                     |
|                                     |
|                                     |
|-------------------------------------|
| Exportar por defecto                |
|                                     |
|                                     |
|                                     |
|-------------------------------------|------------------------------------|------------------------------------|
| ¿Es Necesario Escribir la Extensión | ❌                                 | ❌                                 |
| en CommonJS y ES Modules?           |------------------------------------|------------------------------------|
|                                     | En Vanilla JavaScript cuando NO se escribe la extension .js da error    |
|                                     | ❌ GET http://127.0.0.1:5501/src/ math net::ERR_ABORTED 404 (Not Found) |
|                                     |                                                                         |
|                                     | Resolve Extensions:                                                     |
|                                     | En cambio, en proyectos reales con frameworks y librerías               |
|                                     |  (NodeJS, NestJS, Angular, React, Vue, etc.)                            |
|                                     | SI se puede importar sin nombre de extensión                            |
|-------------------------------------|-------------------------------------------------------------------------|
|
|
|

*/

/* --------------------------------------------------- */
