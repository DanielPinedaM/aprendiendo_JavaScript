/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 *****************************************************
 * funciones para CRUD y buscar en el sessionStorage *
 ***************************************************** */

export interface ISessionStorageObject {
  [key: string]: string;
}

type TSessionStorageValue = string | number | null | undefined | boolean | Date | any[] | object;

const errorMessage = (functionName: string, property: any, value?: TSessionStorageValue) => {
  if (value) {
    console.error(
      `❌ error en sessionStorage al ejecutar la funcion ${functionName}(`,
      property,
      ',',
      value,
      ')',
      'porque la propiedad ',
      property,
      'tiene que ser un string que no sea vacio "" \n \nel valor de la propiedad es ',
      value,
      '\n \nsessionStorage solamente admite guardar propiedades y valores que son tipo string'
    );
  } else {
    console.error(
      `❌ error en sessionStorage al ejecutar la funcion ${functionName}(`,
      property,
      ')',
      'porque la propiedad ',
      property,
      'tiene que ser un string que no sea vacio "" \n \nsessionStorage solamente admite guardar propiedades y valores que son tipo string'
    );
  }
};

const convertToString = (value: TSessionStorageValue): TSessionStorageValue => {
  // solamente se puede hacer JSON.stringify() de un
  // 1) array []
  if (Array.isArray(value)) return JSON.stringify(value);

  // 2) objeto literal {}
  if (Object.prototype.toString.call(value) === '[object Object]' && typeof value === 'object')
    return JSON.stringify(value);

  return value;
};

/* saber si puedo o no convertir de string a array u objeto con JSON.parse() */
const isValidJSONparse = (string: string): boolean => {
  if (typeof string !== 'string') return false;

  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};

/* sessionStorage - listar todas las propiedad: valor en un objeto literal {} */
export const sessionStorageListAll = (): ISessionStorageObject | null => {
  const storageObject: ISessionStorageObject = {};
  const length: number = sessionStorage.length;

  if (!length) return null;

  for (let i: number = 0; i < length; i++) {
    const key: string | null = sessionStorage.key(i);

    if (key) {
      const value: string | null = sessionStorage.getItem(key);
      storageObject[key] = value ?? '';
    }
  }

  return storageObject;
};

/* sessionStorage - Object.keys() - array [] con nombres de todas las propiedades */
export const sessionStorageProperties = (): string[] | null => {
  const listAll: ISessionStorageObject | null = sessionStorageListAll();

  return listAll ? Object.keys(listAll) : null;
};

/* sessionStorage - Object.values() - array [] con nombres de todos los valores */
export const sessionStorageValues = (): string[] | null => {
  const listAll: ISessionStorageObject | null = sessionStorageListAll();

  return listAll ? Object.values(listAll) : null;
};

/* sessionStorage - listar un solo valor de una propiedad en especifico */
export const sessionStorageListValue = (property: string): string => {
  if (!property) {
    errorMessage('sessionStorageListValue', property);
    return '';
  }

  const value: string | null = sessionStorage.getItem(property);

  if (value === null) return '';
  if (isValidJSONparse(value)) return JSON.parse(value);
  return value;
};

/* sessionStorage - buscar una propiedad */
export const sessionStorageSearch = (property: string): boolean => {
  if (!property) {
    errorMessage('sessionStorageSearch', property);
    return false;
  }

  const value: string | null = sessionStorage.getItem(property);
  return value !== null ? true : false;
};

/* sessionStorage - guardar una nueva propiedad: valor
   "cuando NO existe lo creo" */
export const sessionStorageSave = (property: string, value: TSessionStorageValue): boolean => {
  if (!property) {
    errorMessage('sessionStorageSave', property, value);
    return false;
  }

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    return false;
  } else {
    const stringValue: TSessionStorageValue = convertToString(value);
    sessionStorage.setItem(property, stringValue as string);
    return true;
  }
};

/* sessionStorage - actualizar (sobrescribir) el valor de una propiedad SI existe
   "cuando SI existe lo actualizo" */
export const sessionStorageUpdate = (property: string, value: TSessionStorageValue): boolean => {
  if (!property) {
    errorMessage('sessionStorageUpdate', property, value);
    return false;
  }

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    const stringValue: TSessionStorageValue = convertToString(value);
    sessionStorage.setItem(property, stringValue as string);
    return true;
  } else {
    // NO se puede actualizar el valor de una propiedad q no existe
    return false;
  }
};

/*
SIEMPRE se guarda una propiedad: valor

Cuando NO existe la propiedad en sessionStorage, GUARDA una NUEVA propiedad: valor
y cuando SI existe la propiedad en sessionStorage, ACTUALIZA (sobrescribe) el valor de la propiedad existente

sessionStorageSaveAndUpdate() combina lo q hace sessionStorageSave() y sessionStorageUpdate()
sessionStorageSaveAndUpdate() = sessionStorageSave() + sessionStorageUpdate() */
export const sessionStorageSaveAndUpdate = (
  property: string,
  value: TSessionStorageValue
): boolean => {
  if (!property) {
    errorMessage('sessionStorageSaveAndUpdate', property, value);
    return false;
  }

  const stringValue: TSessionStorageValue = convertToString(value);
  sessionStorage.setItem(property, stringValue as string);

  return true;
};

/* sessionStorage - eliminar TODAS las propiedad: valor */
export const sessionStorageClearAll = (): boolean => {
  const length: number = sessionStorage.length;

  if (length > 0) {
    sessionStorage.clear();
    return true;
  } else {
    return false;
  }
};

/* sessionStorage - eliminar TODAS las propiedad: valor EXCEPTO las q estan en el array properties

Ejemplo:
eliminar TODAS las propiedades EXCEPTO 'token' y 'nombre'
sessionStorageDeleteExcept(['token', 'nombre']) */
export const sessionStorageDeleteExcept = (properties: string[]): boolean => {
  if (!sessionStorage.length) {
    console.error("❌ error: NO existen propiedades en el sessionStorage para eliminar  \n", sessionStorage)
    return false;
  }

  if (!Array.isArray(properties)) {
    console.error(
      '❌ error: el parametro',
      properties,
      'de la funcion sessionStorageDeleteExcept(',
      properties,
      ') tiene q ser un array de string con las propiedades del sessionStorage que NO se eliminan'
    );
    return false;
  }

  if (!properties.length) {
    console.error(
      '❌ error: el parametro',
      properties,
      'de la funcion sessionStorageDeleteExcept(',
      properties,
      ') tiene q ser un array de string con minimo uno o mas elementos \n\nel parametro',
      properties,
      'tiene ',
      properties.length,
      'elemento(s)'
    );
    return false;
  }

  const propertiesLength: number = properties.length;

  for (let i: number = 0; i < propertiesLength; i++) {
    const property: string = properties[i];

    if (typeof property !== 'string') {
      errorMessage('sessionStorageDeleteExcept', property);
      return false;
    }
  }

  const sessionStorageKeys: string[] = sessionStorageProperties()!;

  // eliminar las propiedad: valor del sessionStorage q NO estan en el parametro properties: string[]
  sessionStorageKeys.forEach((property: string) => {
    if (!(properties.includes(property))) {
      sessionStorage.removeItem(property);
    }
  })

  if (propertiesLength === sessionStorage.length) {
    return true;
  } else {
    return false;
  }
};

/* sessionStorage - eliminar UNA SOLA propiedad: valor en ESPECIFICO */
export const sessionStorageDeleteSpecific = (property: string): boolean => {
  if (!property) {
    errorMessage('sessionStorageDeleteSpecific', property);
    return false;
  }

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    sessionStorage.removeItem(property);
    return true;
  } else {
    return false;
  }
};
