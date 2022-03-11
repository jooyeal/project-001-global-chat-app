export const setLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  const localStorageValue = localStorage.getItem(key);
  return localStorageValue;
};
