/* sessionStorage - listar todas las propiedad: valor en un objeto literal {} */
export const sessionStorageListAll = (): any | null => {
  return sessionStorage.length > 0 ? sessionStorage : null;
}

/* sessionStorage - Object.keys() - array [] con nombres de todas las propiedades */
export const sessionStorageProperties = (): string[] => {
  const listAll: any | null = sessionStorageListAll();

  return listAll?.length > 0 ? Object?.keys(listAll) : [];
};

/* sessionStorage - Object.values() - array [] con nombres de todos los valores */
export const sessionStorageValues = (): string[] => {
  const listAll: any | null = sessionStorageListAll();

  return listAll?.length > 0 ? Object?.values(listAll) : [];
};

/* sessionStorage - listar un solo valor de una propiedad en especifico */
export const sessionStorageListValue = (property: string): string => {
  if (!property) return "";

  const value: string | null = sessionStorage.getItem(property);
  return value ? value : "";
};

/* sessionStorage - buscar una propiedad */
export const sessionStorageSearch = (property: string): boolean => {
  if (!property) return false;

  const value: string = sessionStorageListValue(property);
  return value === "" ? false : true;
};

/* sessionStorage - guardar una nueva propiedad: valor
   "cuando NO existe lo creo" */
export const sessionStorageSave = (property: string, value: string | number | null | undefined): boolean => {
  if (!property || (!value && value !== 0)) return false;

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    return false;
  } else {
    sessionStorage.setItem(property, value.toString());
    return true;
  }
};

/* sessionStorage - actualizar (sobrescribir) el valor de una propiedad SI existe
   "cuando SI existe lo actualizo" */
export const sessionStorageUpdate = (property: string, value: string | number | null | undefined): boolean => {
  if (!property || (!value && value !== 0)) return false;

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    sessionStorage.setItem(property, value.toString());
    return true;
  } else {
    return false;
  }
};

/*
SIEMPRE se guarda una propiedad: valor

Cuando NO existe la propiedad en sessionStorage, GUARDA una NUEVA propiedad: valor
y cuando SI existe la propiedad en sessionStorage, ACTUALIZA (sobrescribe) el valor de la propiedad existente

sessionStorageSaveAndUpdate() combina lo q hace sessionStorageSave() y sessionStorageUpdate()
sessionStorageSaveAndUpdate() = sessionStorageSave() + sessionStorageUpdate() */
export const sessionStorageSaveAndUpdate = (property: string, value: string | number | null | undefined): boolean => {
  if (!property || (!value && value !== 0)) return false;

  sessionStorage.setItem(property, value.toString());

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

/* sessionStorage - eliminar todas las propiedad: valor EXCEPTO UNA propiedad: valor existente en especifico
https://stackoverflow.com/questions/27258631/using-localstorage-clear-but-exclude-1-item */
export const sessionStorageDeleteExcept = (property: string): boolean => {
  if (!property) return false;

  const value: string | null = sessionStorageListValue(property);
  if (value === "") return false;

  const clearAll: boolean = sessionStorageClearAll();
  if (clearAll) {
    sessionStorage.setItem(property, value);
    return true;
  } else {
    return false;
  }
}

/* sessionStorage - eliminar UNA SOLA propiedad: valor en especifico */
export const sessionStorageDeleteSpecific = (property: string): boolean => {
  if (!property) return false;

  const buscar: boolean = sessionStorageSearch(property);
  if (buscar) {
    sessionStorage.removeItem(property);
    return true;
  } else {
    return false;
  }
};
