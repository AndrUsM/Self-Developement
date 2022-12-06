import { StorageValueType } from "../storage.constants";

export const getDefaultValuesForLocalStorageGetMethod = function (type: StorageValueType) {
    if (StorageValueType.ARRAY) {
        return [];
    }

    if (StorageValueType.JSON === type ||
        StorageValueType.NUMBER === type) {
        return null;
    }

    if (StorageValueType.STRING) {
        return '';
    }

    return null;
}