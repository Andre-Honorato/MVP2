
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { userStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.beforeEach((to, from, next) => {
  const store = userStore()
  if (to.path === '/login' && store.user) {
    if (!store.user.active) {
      return next();
    }
    else {
      return next(false)
    }
  }
  if (to.path === '/bemVindo' && store.user) {
    if (store.user.finishedTutorial) {
      return next(false)
    }
    else {
      return next()
    }
  }
  if (to.path ==='/home' && !store.user) {
    return next('/login')
  }
  return next()
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
