import { getDefaultValuesForLocalStorageGetMethod } from "./local-storage-default-values";
import { StorageValueType } from "../storage.constants";


export const getLocalStorageValueByKey = function (key: string, type: StorageValueType): unknown {
    const valueFromLocalStorage: string | null = localStorage.getItem(key);
    
    if (!valueFromLocalStorage) {
        return getDefaultValuesForLocalStorageGetMethod(type);
    }

    if (type === StorageValueType.JSON || type === StorageValueType.ARRAY) {
        return JSON.parse(valueFromLocalStorage);
    }

    if (type === StorageValueType.NUMBER) {
        return Number(valueFromLocalStorage);
    }

    return valueFromLocalStorage;
}

export const setValueToLocalStorage = function (key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
}

export const isLocalStorageHasKey = function (key: string): boolean {
    const localStorageKeys = Object.keys(localStorage);

    return localStorageKeys.length > 0 
    ? localStorageKeys.includes(key)
    : false;
}