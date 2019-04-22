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
    name: '_home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Qjs/Qjs')
      }
    ]
  },
  {
    path: '/forum',
    name: 'forum',
    component: Home,
    children: [
      {
        path: 'forum_page',
        name: 'forum_page',
        component: () => import('@/views/Forum')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Home,
    children: [
      {
        path: 'search_page',
        name: 'search_page',
        component: () => import('@/views/Search/searchIndex.vue')
      }
    ]
  },
  {
    path: '/postList',
    name: 'postList',
    component: Home,
    children: [
      {
        path: 'postList_page/:pKey/:cKey',
        name: 'postList_page',
        component: () => import('@/views/postList/postList.vue')
      }
    ]
  },
  {
    path: '/postDetail',
    name: 'postDetail',
    component: Home,
    children: [
      {
        path: 'postDetail_page/:postId',
        name: 'postDetail_page',
        component: () => import('@/views/PostDetail/PostDetail.vue')
      }
    ]
  }
]
