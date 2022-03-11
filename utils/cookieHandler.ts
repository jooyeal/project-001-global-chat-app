const MAX_AGE = 60 * 60 * 8;

export const setAuthToCookie = (token: string) => {
  let today = new Date();
  today.setDate(today.getDate() + MAX_AGE * 1000);
  document.cookie = `token=${token};expires=${today.toDateString()};`;
};

export const getAuthCookie = () => {
  const cookie = document.cookie;
  const tokenCookie = cookie.split(";")[1].split("=")[1];
  return tokenCookie;
};

export const removeAuthCookie = () => {
  document.cookie = `token='';expires=-1;`;
};
