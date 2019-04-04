import Vue from 'vue'
import Router from 'vue-router'

import routes from './router'
import searchRoutes from './search'
import forumRoutes from './forum'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo } from '@/lib/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
});

// router.addRoutes(searchRoutes);
// router.addRoutes(forumRoutes);

const LOGIN_PAGE_NAME = 'login'


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
    
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else if (token && to.name !== LOGIN_PAGE_NAME) {
    // 已登陆且跳转的不是登陆页
    next()
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
