
/**
 * token 处理
 */

const TOKEN_KEY = `access_token`;

export default {
  get() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? JSON.parse(token) : null;
  },
  set(value) {
    return localStorage.setItem(TOKEN_KEY, JSON.stringify(value));
  },
  del() {
    return localStorage.removeItem(TOKEN_KEY)
  }
}