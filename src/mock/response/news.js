import Mock from 'mockjs';

// 新闻列表
Mock.mock(/news\/list/, {
  status: 200,
  message: 'OK',
  data: [
    {
      title: '文章1',
      describe: '简介1',
      author: '作者1',
      created: 1552432879333,
    },
    {
      title: '文章20',
      describe: '简介2',
      author: '作者2',
      created: 1552432879333,
    },
    {
      title: '文章3',
      describe: '简介3',
      author: '作者3',
      created: 1552432879333,
    },
    {
      title: '文章4',
      describe: '简介4',
      author: '作者4',
      created: 1552432879333,
    },
    {
      title: '文章5',
      describe: '简介5',
      author: '作者5',
      created: 1552432879333,
    },
    {
      title: '文章60',
      describe: '简介6',
      author: '作者6',
      created: 1552432879333,
    },
  ],
});