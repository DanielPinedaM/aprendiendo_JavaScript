/* localStorage - listar todas las propiedad: valor */
export const localStorageListAll = (): any | null => {
  const length: number = localStorage.length;

  return length > 0 ? localStorage : null;
};

/* localStorage - Object.keys() - array con nombres de todas las propiedades */
export const localStorageProperties = (): string[] | [] => {
  const listAll = localStorageListAll();

  return listAll?.length > 0 ? Object.keys(listAll) : [];
};

/* localStorage - Object.values() - array con nombres de todos los valores */
export const localStorageValues = (): string[] | [] => {
  const listAll = localStorageListAll();

  return listAll?.length > 0 ? Object.values(listAll) : [];
};


/* localStorage - listar un solo valor de una propiedad en especifico */
export const localStorageListValue = (property: string): string | null => {
  return property ? localStorage.getItem(property) : null;
};

/* localStorage - buscar una propiedad */
export const localStorageSearch = (property: string): boolean => {
  if (!property) return false;

  const value: string | null = localStorageListValue(property);
  return value === null ? false : true;
};

/* localStorage - guardar una nueva propiedad: valor
"cuando NO existe lo creo"*/
export const localStorageSave = (property: string, value: string | number | null | undefined): boolean => {
  if (!property || (!value && value !== 0)) return false;

  const buscar: boolean = localStorageSearch(property);
  if (buscar) {
    return false;
  } else {
    localStorage.setItem(property, value.toString());
    return true;
  }
};

/* localStorage - actualizar (sobrescribir) el valor de una propiedad SI existe
"cuando SI existe lo actualizo" */
export const localStorageUpdate = (property: string, value: string | number | null | undefined): boolean => {
  if (!property || (!value && value !== 0)) return false;

  const buscar: boolean = localStorageSearch(property);
  if (buscar) {
    localStorage.setItem(property, value.toString());
    return true;
  } else {
    return false;
  }
};

/* localStorage - eliminar TODAS las propiedad: valor */
export const localStorageClearAll = (): boolean => {
  const length: number = localStorage.length;

  if (length > 0) {
    localStorage.clear();
    return true;
  } else {
    return false;
  }
};

/* localStorage - eliminar todas las propiedad: valor EXCEPTO una propiedad: valor existente en especifico
https://stackoverflow.com/questions/27258631/using-localstorage-clear-but-exclude-1-item */

export const localStorageDeleteExcept = (property: string): boolean => {
  if (!property) return false;

  const value: string | null = localStorageListValue(property);
  if (value === null) return false;

  const clearAll = localStorageClearAll();
  if (clearAll) {
    localStorage.setItem(property, value);
    return true;
  } else {
    return false;
  }
}

/* localStorage - eliminar UNA SOLA propiedad: valor en especifico */
export const localStorageDeleteSpecific = (property: string): boolean => {
  if (!property) return false;

  const buscar: boolean = localStorageSearch(property);
  if (buscar) {
    localStorage.removeItem(property);
    return true;
  } else {
    return false;
  }
};
