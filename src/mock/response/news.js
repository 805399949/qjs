import Mock from 'mockjs';

// 新闻列表
Mock.mock(/news\/list/, {
  status: 200,
  message: 'OK',
  data: [
    {
      img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
      title: '文章1',
      describe: '简介1',
      author: '作者1',
      created: 1552432879333,
    },
    {
      img: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
      title: '文章2',
      describe: '简介2',
      author: '作者2',
      created: 1552432879333,
    },
    {
      img: 'http://img5.imgtn.bdimg.com/it/u=3943723512,1898909937&fm=26&gp=0.jpg',
      title: '文章3',
      describe: '简介3',
      author: '作者3',
      created: 1552432879333,
    },
    {
      img: 'http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg',
      title: '文章4',
      describe: '简介4',
      author: '作者4',
      created: 1552432879333,
    },
    {
      img: 'http://img15.3lian.com/2015/f2/57/d/93.jpg',
      title: '文章5',
      describe: '简介5',
      author: '作者5',
      created: 1552432879333,
    },
    {
      img: 'http://img1.3lian.com/2015/w15/48/d/23.jpg',
      title: '文章6',
      describe: '简介6',
      author: '作者6',
      created: 1552432879333,
    },
    {
      img: 'http://img15.3lian.com/2015/f2/57/d/93.jpg',
      title: '文章7',
      describe: '简介5',
      author: '作者5',
      created: 1552432879333,
    },
    {
      img: 'http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg',
      title: '文章8',
      describe: '简介4',
      author: '作者4',
      created: 1552432879333,
    },
    {
      img: 'http://img5.imgtn.bdimg.com/it/u=3943723512,1898909937&fm=26&gp=0.jpg',
      title: '文章9',
      describe: '简介3',
      author: '作者3',
      created: 1552432879333,
    },
    {
      img: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
      title: '文章10',
      describe: '简介2',
      author: '作者2',
      created: 1552432879333,
    },
    {
      img: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
      title: '文章11',
      describe: '简介2',
      author: '作者2',
      created: 1552432879333,
    },
    {
      img: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
      title: '文章12',
      describe: '简介2',
      author: '作者2',
      created: 1552432879333,
    },
  ],
});