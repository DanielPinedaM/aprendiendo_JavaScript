/* 
Programa una clase llamada Pelicula.

La clase recibirá un objeto {} al momento de instanciarse con los siguentes datos: 
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
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados.
  - Crea un método estático que devuelva los géneros aceptados.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados https://www.imdb.com/feature/genre/ 
  Action, 
  Adult, 
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
  Western */

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

    // ejecutar metodos (funciones)
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPaises(paises);
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
      console.error(
        '❌ La propiedad',
        propiedad,
        'es un',
        typeof propiedad,
        'deberia ser un tipo string'
      );
      return false;
    }

    if (typeof valor !== 'string') {
      console.error(
        '❌ El valor',
        valor,
        'de la propiedad',
        propiedad,
        'es un',
        typeof valor,
        'deberia ser un tipo string'
      );
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
    if (!this.validarCadena(propiedad, valor)) {
      return false;
    }

    if (!this.validarTipoNumero(longitud)) {
      return false;
    }

    if (valor.length > longitud) {
      console.error(
        `❌ El valor ${valor} de la propiedad ${propiedad} NO puede contener mas de ${longitud} caracteres`
      );
      return false;
    }

    return true;
  }

  esNumeroEntero(numero: number): boolean {
    if (!this.validarTipoNumero(numero)) {
      return false;
    }

    if (Number.isInteger(numero)) {
      return true;
    } else {
      console.error('❌ numero', numero, 'NO es entero');
      return false;
    }
  }

  validarNumeroDeDigitos(numero: number, digitos: number): boolean {
    if (!this.validarTipoNumero(numero)) {
      return false;
    }

    if (!this.validarTipoNumero(digitos)) {
      return false;
    }

    // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
    const cantidadDeDigitosDelNumero: number =
      (Math.log10((numero ^ (numero >> 31)) - (numero >> 31)) | 0) + 1;
    if (cantidadDeDigitosDelNumero === digitos) {
      return true;
    } else {
      console.error(
        '❌ ',
        numero,
        'tiene',
        cantidadDeDigitosDelNumero,
        'digitos, deberia tener',
        digitos,
        'digitos'
      );
      return false;
    }
  }

  esArreglo(arreglo: any[]): boolean {
    if (Array.isArray(arreglo)) {
      return true;
    } else {
      console.error('❌ ', arreglo, 'es un tipo', typeof arreglo, 'deberia ser un tipo array []');
      return false;
    }
  }

  todosLosElementosDelArregloSonString(arreglo: string[]): boolean {
    if (!this.esArreglo(arreglo)) {
      return false;
    }

    const resultado: boolean = !arreglo.some((item: string) => typeof item !== 'string');
    if (resultado) {
      return true;
    } else {
      console.error('❌ en el array', arreglo, 'todos los elementos deben ser tipo string');
      return false;
    }
  }

  /*
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   █ Validar datos en especifico, estos metodos (funciones) dependen de las "Validaciones genericas" █
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
  validarIMDB(id: string): boolean {
    const propiedad: string = 'IMDB id';

    if (!this.validarCadena(propiedad, id)) {
      return false;
    }

    if (!/^([a-záéíóúüñ]){2}([0-9]){7}$/.test(id)) {
      console.error(
        `❌ ${propiedad} ${id} no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
      );
      return false;
    }

    console.info(`✔️ ${propiedad} ${id} correcto`);
    return true;
  }

  validarTitulo(titulo: string): boolean {
    const propiedad: string = 'Titulo';

    if (!this.validarCadena(propiedad, titulo)) {
      return false;
    }

    // Valida que el título no rebase los 100 caracteres
    if (!this.validarLongitudCadena(propiedad, titulo, 100)) {
      return false;
    }

    console.info(`✔️ ${propiedad} ${titulo} correcto`);
    return true;
  }

  validarDirector(director: string): boolean {
    const propiedad: string = 'Director';

    if (!this.validarCadena(propiedad, director)) {
      return false;
    }

    // Valida que el director no rebase los 50 caracteres
    if (!this.validarLongitudCadena(propiedad, director, 50)) {
      return false;
    }

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

    // Valida que el país o paises sea introducidos en forma de arreglo.
    if (!this.todosLosElementosDelArregloSonString(paises)) {
      console.error(
        `❌ ${propiedad}`,
        paises,
        'debe ser un array [] con todos los elementos tipo string'
      );
      return false;
    }

    console.info(`✔️ ${propiedad} (${paises.length})`, paises, 'correcto');
    return true;
  }
}

const objPelicula: IPelicula = {
  id: 'tt4154796',
  titulo: 'Avengers',
  director: 'Christopher Nolan',
  estreno: 2010,
  paises: ['USA', 'Colombia'],
  generos: ['Action', 'Sci-Fi'],
  calificacion: 8.8,
};

const pelicula = new Pelicula(objPelicula);
// ✔️ IMDB id tt4154796            correcto
// ✔️ Titulo Avengers              correcto
// ✔️ Director Christopher Nolan   correcto
// ✔️ Año de estreno 2010          correcto
// ✔️ Paises [ 'USA', 'Colombia' ] correcto