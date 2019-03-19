import Home from '@/views/Home/Home.vue'
// import Forum from '@/views/Forum/Forum.vue'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
    },
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/forum',
  //   name: 'forum',
  //   component: Forum
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  // }
]
