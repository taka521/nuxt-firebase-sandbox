export default function ({ store, route, redirect }) {
  
  // サーバ時のみ
  if (!process.server) return;

  if (!store.getters.isAuthenticated && route.name !== 'login') {
    redirect("/login")
  }

  if (store.getters.isAuthenticated && route.name === 'login') {
    redirect("/")
  }

}