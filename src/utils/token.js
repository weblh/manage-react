// 封装和token相关的方法 存 取 删

const TOKENKEY = 'token';
// 存储token
 function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}
 function getToken() {
  return localStorage.getItem(TOKENKEY);
}
 function removeToken() {
  return localStorage.removeItem(TOKENKEY);
}

export { setToken, getToken, removeToken }; 
