/*
Resumen: Definir Variables - ¿Diferencia y Cual Usar Entre var let y const?

1) NUNCA usar var

2) Usar let cuando necesite cambiar (re-asignar) el valor de la variable.

3) Usar const cuando el valor de la variable NO cambie (inmutabilidad / re-asignar).

|--------------------------|-------------|----------------------|--------------------------|
| Características          | var         | let                  | const                    |
|                          | 💩          | 🥈                   | 🥇                      |
|--------------------------|-------------|----------------------|--------------------------|
| Se guarda en el          | ✓           | X                    | X                        |
| scope (objeto) global    |             |                      |                          |
|--------------------------|-------------|----------------------|--------------------------|
| Scope de función         | ✓           | ✓                    | ✓                        |
|--------------------------|-------------|----------------------|--------------------------|
| Scope de bloque          | X           | ✓                    | ✓                        |
|--------------------------|-------------|----------------------|--------------------------|
| Elevación (hoisting)     | ✓           | X                    | X                        |
|                          | Declaración | Zona Muerta Temporal | Zona Muerta Temporal     |
|--------------------------|-------------|----------------------|--------------------------|
| ¿Se tiene que definir    | X           | X                    | ✓                        |
| un valor inicial         |             |                      |                          |
| (inicializar variable)?  |             |                      |                          |
|--------------------------|-------------|----------------------|--------------------------|
| ¿Se puede re-asignar     | ✓           | ✓                    | X NO en datos primitivos |
| el valor de la variable  |             |                      |                          |
| (inmutabilidad)?         |             |                      | ✓ SI en datos compuestos |
|--------------------------|-------------|----------------------|--------------------------|
| ¿Se puede re-declarar?   | ✓           | X                    | X                        |
|--------------------------|-------------|----------------------|--------------------------|

*/
