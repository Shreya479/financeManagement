
export const setUserToken = (token) => {
  localStorage.setItem("token", token);
};

export const getUserTokenFromStorage = () => {
  return localStorage.getItem("token");
};
export const removeUserTokenFromStorage = () => {
  localStorage.removeItem("token");
};
