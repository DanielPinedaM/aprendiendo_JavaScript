/* 
Programa una clase llamada Pelicula.

* La clase recibirá un objeto {} al momento de instanciarse con los siguentes datos:
  - ID de la película en IMDB. https://www.imdb.com/
  - titulo
  - director
  - año de estreno
  - país o países de origen
  - géneros
  - calificación en IMBD

* Validaciones:
  - Todos los datos del objeto son obligatorios.
  - Valida que el ID IMDB tenga 9 caracteres, los primeros 2 sean letras minusculas y los 7 restantes números. 
    Ejemplo:
      ID IMDB: tt4154796 
      Web: https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_1
  - Validar que el título no rebase los 100 caracteres.
  - Validar que el director no rebase los 50 caracteres.
  - Validar que el año de estreno sea un número entero de 4 dígitos.
  - Validar que el país o paises sea introducidos en forma de arreglo.
  - Validar que los géneros sean introducidos en forma de arreglo.
  - Validar que los géneros introducidos esten dentro de los géneros aceptados.
  - Validar que la calificación sea un número entre 0 y 10
  - Validar los siguientes géneros aceptados https://www.imdb.com/feature/genre/ 
    Adult, 
    Action, 
    Adventure, 
    Animation, 
    Biography, 
    Comedy, 
    Crime, 
    Documentary, 
    Drama,
    Family,
    Fantasy,
    Film Noir,
    Game-Show,
    History,
    Horror,
    Musical,
    Music,
    Mystery,
    News,
    Reality-TV,
    Romance,
    Sci-Fi,
    Short,
    Sport,
    Talk-Show,
    Thriller,
    War,
    Western

* Métodos (Funciones):
  - Crea un método estático que devuelva los géneros aceptados.
  - Crea un método que devuelva toda la ficha técnica de la película.

* Instancias de la clase:
  - A partir de un arreglo con la información de 3 películas 
    genera 3 instancias de la clase de forma automatizada 
    e imprime la ficha técnica de cada película. */

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=LqXh7jOfLlM&t=106s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

interface IPelicula {
  id: string;
  titulo: string;
  director: string;
  estreno: number;
  paises: string[];
  generos: string[];
  calificacion: number;
}

// Programa una clase llamada Pelicula
class Pelicula {
  id: string;
  titulo: string;
  director: string;
  estreno: number;
  paises: string[];
  generos: string[];
  calificacion: number;

  // La clase recibirá un objeto {} al momento de instanciarse con los siguentes datos:
  constructor({ id, titulo, director, estreno, paises, generos, calificacion }: IPelicula) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.paises = paises;
    this.generos = generos;
    this.calificacion = calificacion;

    // ejecutar metodos (funciones) con VALIDACIONES
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPaises(paises);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  // Crea un método estático que devuelva los géneros aceptados
  static get arrayGenerosAceptados(): string[] {
    return ["action", "adult", "adventure", "animation", "biography", "comedy", "crime", "documentary", "drama","family","fantasy","film noir","game-show","history","horror","musical","music","mystery","news","reality-tv","romance","sci-fi","short","sport","talk-show","thriller","war","western"];
  }

  static mensajeGenerosAceptados(): string {
    const arrayGenerosAceptados: string[] = Pelicula.arrayGenerosAceptados;
    const mensaje = `los generos aceptados son: (${arrayGenerosAceptados.length}) [${arrayGenerosAceptados.join(", ")}]`;
    console.info(mensaje);

    return mensaje;
  }

  /*
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   █ Validaciones genericas █
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

  // validar q la propiedad valor si exista y sea un String()
  validarCadena(propiedad: string, valor: string): boolean {
    if (!propiedad) {
      console.error(`❌ La propiedad ${propiedad} es falsy`);
      return false;
    }

    if (!valor) {
      console.error(`❌ El valor ${valor} de la propiedad ${propiedad} es falsy`);
      return false;
    }

    if (typeof propiedad !== 'string') {
      console.error('❌ La propiedad', propiedad, 'es un', typeof propiedad, 'deberia ser un tipo string');
      return false;
    }

    if (typeof valor !== 'string') {
      console.error('❌ El valor', valor, 'de la propiedad', propiedad, 'es un', typeof valor, 'deberia ser un tipo string');
      return false;
    }

    return true;
  }

  // validar tipo de dato Number()
  validarTipoNumero(numero: number): boolean {
    if (!(typeof numero === 'number' && Number.isNaN(numero) === false)) {
      console.error('❌ ', numero, 'es un tipo', typeof numero, 'deberia ser un tipo number');
      return false;
    }

    return true;
  }

  // validar longitud .length de string
  validarLongitudCadena(propiedad: string, valor: string, longitud: number): boolean {
    if (!this.validarCadena(propiedad, valor)) return false;
    

    if (!this.validarTipoNumero(longitud)) return false;
    

    if (valor.length > longitud) {
      console.error(`❌ El valor ${valor} de la propiedad ${propiedad} NO puede contener mas de ${longitud} caracteres`);
      return false;
    }

    return true;
  }

  esNumeroEntero(numero: number): boolean {
    if (!this.validarTipoNumero(numero)) return false;

    if (Number.isInteger(numero)) return true;

    console.error('❌ numero', numero, 'NO es entero', Number.isInteger(numero));
    return false;
  }

  // valida q un numero tenga cierta cantidad de digitos
  validarNumeroDeDigitos(numero: number, digitos: number): boolean {
    if (!this.validarTipoNumero(numero)) return false;

    if (!this.validarTipoNumero(digitos)) return false;

    // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
    const cantidadDeDigitosDelNumero: number = (Math.log10((numero ^ (numero >> 31)) - (numero >> 31)) | 0) + 1;
    if (cantidadDeDigitosDelNumero === digitos) return true;
    
    console.error('❌ ', numero, 'tiene', cantidadDeDigitosDelNumero, 'digitos, deberia tener', digitos, 'digitos');
    return false;
  }

  esArreglo(arreglo: any[]): boolean {
    if (Array.isArray(arreglo)) return true;
    
    console.error('❌ ', arreglo, 'es un tipo', typeof arreglo, 'deberia ser un tipo array []');
    return false;
  }

  todosLosElementosDelArregloSonString(arreglo: string[]): boolean {
    if (!this.esArreglo(arreglo)) return false;

    const esArrayDeString: boolean = !arreglo.some((item: string) => typeof item !== 'string');
    if (esArrayDeString) return true;
    
    console.error('❌ en el array', arreglo, 'todos los elementos deben ser tipo string');
    return false;
  }

  arrayVacio(arreglo: any[]): boolean {
    if (!this.esArreglo(arreglo)) return true;
    

    if (!arreglo.length) {
      console.error('❌ la logitud del array', arreglo, 'no puede ser cero');
      return true;
    }

    return false;
  }

  // verificar si todos los elementos de un array están presentes en otro array
  // elementos  array con elementos a buscar para saber si contiene o no elementos permitidos
  // permitidos array de elementos permitidos
  todosLosElementosEstanPermitidos = (elementos: any[], permitidos: any[]): boolean => elementos.every((elemento) => permitidos.includes(elemento.trim().toLowerCase()))

  // ¿El numero X esta entre el numero A y B?
  // SI incluye el numero minimo y maximo
  // Ejemplo:
  // numeroEstaEntreRangoNumerico(1, 1, 10);  true  porq 1  está entre 1 y 10, SI se incluye el numero minimo q en este caso es 1
  // numeroEstaEntreRangoNumerico(11, 1, 10); false porq 11 NO está entre 1 y 10
  numeroEstaEntreRangoNumerico = (numero: number, minimo: number, maximo: number): boolean => !(numero < minimo || numero > maximo);

  /*
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   █ Validar datos en especifico, estos metodos (funciones) dependen de las "Validaciones genericas" █
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
  validarIMDB(id: string): boolean {
    const propiedad: string = 'IMDB id';

    if (!this.validarCadena(propiedad, id)) return false;

    if (!/^([a-záéíóúüñ]){2}([0-9]){7}$/.test(id)) {
      console.error(`❌ ${propiedad} ${id} no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
      return false;
    }

    console.info(`✔️ ${propiedad} ${id} correcto`);
    return true;
  }

  validarTitulo(titulo: string): boolean {
    const propiedad: string = 'Titulo';

    if (!this.validarCadena(propiedad, titulo)) return false;

    // Valida que el título no rebase los 100 caracteres
    if (!this.validarLongitudCadena(propiedad, titulo, 100)) return false;

    console.info(`✔️ ${propiedad} ${titulo} correcto`);
    return true;
  }

  validarDirector(director: string): boolean {
    const propiedad: string = 'Director';

    if (!this.validarCadena(propiedad, director)) return false;

    // Valida que el director no rebase los 50 caracteres
    if (!this.validarLongitudCadena(propiedad, director, 50)) return false;
    

    console.info(`✔️ ${propiedad} ${director} correcto`);
    return true;
  }

  validarEstreno(estreno: number): boolean {
    const propiedad: string = 'Año de estreno';
    const digitos: number = 4;
    const error: string = `❌ ${propiedad} ${estreno} debe ser un número entero de ${digitos} dígitos`;

    // Valida que el año de estreno sea un número entero de 4 dígitos
    if (!this.esNumeroEntero(estreno)) {
      console.error(error);
      return false;
    }

    if (!this.validarNumeroDeDigitos(estreno, digitos)) {
      console.error(error);
      return false;
    }

    console.info(`✔️ ${propiedad} ${estreno} correcto`);
    return true;
  }

  validarPaises(paises: string[]): boolean {
    const propiedad: string = 'Paises';
    const error: string = `❌ ${propiedad} ${paises} debe ser un array con todos los elementos tipo string`;

    // Valida que el país o paises sea introducidos en forma de arreglo
    if (this.arrayVacio(paises)) {
      console.error(error);
      return false;
    }
 
    if (!this.todosLosElementosDelArregloSonString(paises)) {
      console.error(error);
      return false;
    }

    console.info(`✔️ ${propiedad} (${paises.length})`, paises, 'correcto');
    return true;
  }
  
  validarGeneros(generos: string[]): boolean {
    const propiedad: string = 'Generos';
    const error: string = `❌ ${propiedad} ${generos} debe ser un array con todos los elementos tipo string`;

    //Valida que los géneros sean introducidos en forma de arreglo
    if (this.arrayVacio(generos)) {
      console.error(error);
      return false;
    }
 
    if (!this.todosLosElementosDelArregloSonString(generos)) {
      console.error(error);
      return false;
    }

    // Valida que los géneros introducidos esten dentro de los géneros aceptados    
    if (!this.todosLosElementosEstanPermitidos(generos, Pelicula.arrayGenerosAceptados)) {
      console.error(`❌ el array ${propiedad} (${generos.length}) [${generos.join(", ")}] contiene elemento NO aceptados`);
      Pelicula.mensajeGenerosAceptados();
      return false;
    }

    console.info(`✔️ ${propiedad} (${generos.length})`, generos, 'correcto');
    return true;
  }

 validarCalificacion(calificacion: number): boolean {
  const propiedad: string = 'Calificacion';
  const minimo: number = 0;
  const maximo: number = 10
  const error: string = `❌ rango numerico de ${propiedad} ` + calificacion + ` invalido tiene q ser un numero desde ${minimo} hasta ${maximo}`;

  if (!this.validarTipoNumero(calificacion)) {
    console.error(error);
    return false;
  }

  // Valida que la calificación sea un número entre 0 y 10
  if (!this.numeroEstaEntreRangoNumerico(calificacion, minimo, maximo)) {
    console.error(error);
    return false;
  }

  console.info(`✔️ ${propiedad}`, calificacion, "correcto");
  return true;
 }

 // Crea un método que devuelva toda la ficha técnica de la película
 fichaTecnica(): IPelicula {
  const fichaTecnicaPelicula: IPelicula = {
    id: this.id,
    titulo: this.titulo,
    director: this.director,
    estreno: this.estreno,
    paises: this.paises,
    generos: this.generos,
    calificacion: this.calificacion,
  } 

  console.info("Ficha técnica de la película \n", fichaTecnicaPelicula);

  return fichaTecnicaPelicula;
 }
}

const fichaTecnicaPelicula: IPelicula = {
  id: 'tt4154796',
  titulo: 'Avengers',
  director: 'Christopher Nolan',
  estreno: 2010,
  paises: ['USA', 'Colombia'],
  generos: ['Action', 'Sci-Fi'],
  calificacion: 8.8,
};

const pelicula = new Pelicula(fichaTecnicaPelicula);
// ✔️ IMDB id tt4154796 correcto
// ✔️ Titulo Avengers correcto
// ✔️ Director Christopher Nolan correcto
// ✔️ Año de estreno 2010 correcto
// ✔️ Paises (2) [ 'USA', 'Colombia' ] correcto
// ✔️ Generos (2) [ 'Action', 'Sci-Fi' ] correcto
// ✔️ Calificacion 8.8 correcto

pelicula.fichaTecnica();
// Ficha técnica de la película
// {
//   id: 'tt4154796',
//   titulo: 'Avengers',
//   director: 'Christopher Nolan',
//   estreno: 2010,
//   paises: [ 'USA', 'Colombia' ],
//   generos: [ 'Action', 'Sci-Fi' ],
//   calificacion: 8.8
// }



// A partir de un arreglo con la información de 3 películas 
// genera 3 instancias de la clase de forma automatizada 
// e imprime la ficha técnica de cada película
const peliculas: IPelicula[] = [
  {
    id: 'tt0758758',
    titulo: 'Into the Wild',
    director: 'Sean Penn',
    estreno: 2007,
    paises: ['USA'],
    generos: ['Adventure', 'Biography', 'Drama'],
    calificacion: 8.1,
  },
  {
    id: 'tt0479143',
    titulo: 'Rocky Balboa',
    director: 'Sylvester Stallone',
    estreno: 2006,
    paises: ['USA'],
    generos: ['Action', 'Drama', 'Sport'],
    calificacion: 7.1,
  },
  {
    id: 'tt0468569',
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    estreno: 2008,
    paises: ['USA', 'UK'],
    generos: ['Action', 'Crime', 'Drama'],
    calificacion: 9.0,
  }
]

const instanciasDeLaClase = (peliculas: IPelicula[]): void => peliculas.forEach((item: IPelicula) => new Pelicula(item).fichaTecnica())

instanciasDeLaClase(peliculas);
// Ficha técnica de la película 
//  {
//   id: 'tt0758758',
//   titulo: 'Into the Wild',
//   director: 'Sean Penn',
//   estreno: 2007,
//   paises: [ 'USA' ],
//   generos: [ 'Adventure', 'Biography', 'Drama' ],
//   calificacion: 8.1
// }
// ✔️ IMDB id tt0479143 correcto
// ✔️ Titulo Rocky Balboa correcto
// ✔️ Director Sylvester Stallone correcto
// ✔️ Año de estreno 2006 correcto
// ✔️ Paises (1) [ 'USA' ] correcto
// ✔️ Generos (3) [ 'Action', 'Drama', 'Sport' ] correcto
// ✔️ Calificacion 7.1 correcto

// Ficha técnica de la película 
//  {
//   id: 'tt0479143',
//   titulo: 'Rocky Balboa',
//   director: 'Sylvester Stallone',
//   estreno: 2006,
//   paises: [ 'USA' ],
//   generos: [ 'Action', 'Drama', 'Sport' ],
//   calificacion: 7.1
// }
// ✔️ IMDB id tt0468569 correcto
// ✔️ Titulo The Dark Knight correcto
// ✔️ Director Christopher Nolan correcto
// ✔️ Año de estreno 2008 correcto
// ✔️ Paises (2) [ 'USA', 'UK' ] correcto
// ✔️ Generos (3) [ 'Action', 'Crime', 'Drama' ] correcto
// ✔️ Calificacion 9 correcto

// Ficha técnica de la película 
//  {
//   id: 'tt0468569',
//   titulo: 'The Dark Knight',
//   director: 'Christopher Nolan',
//   estreno: 2008,
//   paises: [ 'USA', 'UK' ],
//   generos: [ 'Action', 'Crime', 'Drama' ],
//   calificacion: 9
// }
