import Home from '@/views/Home/Home.vue'
// import Forum from '@/views/Forum/Forum.vue'

export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Home,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/Qjs/Qjs')
    }]
  },
  {
    path: '/forum',
    name: 'forum',
    component: Home,
    children: [{
      path: 'forum_page',
      name: 'forum_page',
      component: () => import('@/views/Forum')
    }]
  },
  {
    path: '/search',
    name: 'search',
    component: Home,
    children: [{
        path: 'search_page',
        name: 'search_page',
        component: () => import('@/views/Search/searchIndex.vue')
      },
      {
        path: 'search_result',
        name: 'search_result',
        component: () => import('@/views/Search/searchResult.vue')
      },
    ]
  },
  {
    path: '/postList',
    name: 'postList',
    component: Home,
    children: [{
      path: 'postList_page/:pKey/:cKey',
      name: 'postList_page',
      component: () => import('@/views/postList/postList.vue')
    }]
  },
  {
    path: '/postDetail',
    name: 'postDetail',
    component: Home,
    children: [{
      path: 'postDetail_page/:postId',
      name: 'postDetail_page',
      component: () => import('@/views/PostDetail/PostDetail.vue')

    }]
  },
  {
    path: '/news',
    name: 'news',
    component: Home,
    children: [{
        path: 'news_list',
        name: 'news_list',
        component: () => import('@/views/News/newsList.vue')
      },
      {
        path: 'news_detail',
        name: 'news_detail',
        component: () => import('@/views/News/newsDetail.vue')
      }
    ]
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: Home,
    children: [
      {
        path: 'personalCenter_page',
        name: 'personalCenter_page',
        component: () => import('@/views/PersonalCenter/PersonalCenter')
      }
    ]
  }
]
