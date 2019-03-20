const ForumPage = resolve => {
  require.ensure([], (require) => {
      resolve(require('@/views/Forum/Forum.vue'));
  }, 'forum');
};

export default [
  {
      path: '/forum',
      meta: {
          title: '论坛',
      },
      name: 'forum_index',
      component: ForumPage,
  },
];