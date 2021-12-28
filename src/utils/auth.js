import store from '../store'
const isLoggedIn = () => {
  return store.getters['auth/isLoggedIn']
}
/**
* Auth guard allows authenticated users only.
* @param to - next route
* @param from - previous route
* @param next - callback to transfer control to the next middleware
*/
export function requireAuth(to, from, next) {
  // next()
  if (isLoggedIn()) {
    next()
  } else {
    next({ path: '/register'})
  }
}
