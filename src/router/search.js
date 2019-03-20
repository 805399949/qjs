const SearchPage = resolve => {
  require.ensure([], (require) => {
      resolve(require('@/views/Search/searchIndex.vue'));
  }, 'search');
};

export default [
  {
      path: '/search',
      meta: {
          title: '搜索',
      },
      name: 'search_index',
      component: SearchPage,
  },
];