import types from './types/alertTypes';

export const setSuccessAlert = (message: string) => {
  return { type: types.SUCCESS, message };
};

export const setErrorAlert = (message: string) => {
  return { type: types.ERROR, message };
};

export const setClearAlert = () => {
  return { type: types.CLEAR };
};
