<template>
  <div>
    <div class="wrap quick_services">
      <div class="user_links">
        <div class="my oUserLink">
          <a href="javascript:void(0)" @click="myQjs">
            <Icon class="user" size="28" type="ios-contact-outline"/>我的钱交所
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:;">
            <Dropdown>
              <Icon type="md-reorder" class="subject" size="28"/>
              <a href="javascript:void(0)">我的主题</a>
            </Dropdown>
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-undo-outline" class="reply" size="28"/>我的回复
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-star-outline" class="fav" size="28"/>我的收藏
          </a>
        </div>
        <!--<li><a href="home.php?mod=space&amp;do=friend"><i class="friend"><b></b></i>好友</a></li>-->
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-chatbubbles-outline" class="newscommon" size="28"/>我的评论
          </a>
        </div>
        <!--<li><a href="plugin.php?id=trends&amp;square=square"><i class="doing"><b></b></i>动态</a></li>-->
        <!-- <li class="hide">
          <a href="#">
            <i class="mark">
              <b></b>
            </i>书签
          </a>
        </li>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumHeader',
  data () {
    return {
      //
    }
  },
  methods: {
    myQjs () {
      // console.log(this.$store.state.user.userInfo)
      // 点击我的钱交所 
      this.$store.state.user.userInfo !== 'false'
      ? this.$router.push({
        name: 'personalCenter_page'
      })
      : this.$Message.error({
        content: '您尚未登陆,请先登陆',
        duration: 4,
        closable: true
      });
    }
  }
}
</script>


<style scoped lang="less">
/* 
* quick_services style
*/
.quick_services {
  background: url(../../assets/img/bg_hor.png) repeat-x;
  border-radius: 5px 5px 0 0;
  color: #fff;
  margin-bottom: 6px;
  .oUserLink {
    float: left;
    font-size: 12px;
  }
  a {
    color: #fff;
  }
  .user_links {
    padding-top: 7px;
    height: 37px;
    .oUserLink {
      padding: 0 10px 0 14px;
    }
    .my {
      float: right;
      padding-right: 16px;
    }
    .user {
      background-position: -140px -44px;
      font-size: 28px;
    }
    i {
      margin: -3px 5px 0 0;
      vertical-align: middle;
      *margin-top: 0;
    }
  }
  .links {
    display: inline;
    float: right;
    margin: -30px 120px 0 0;
    a {
      display: inline-block;
      line-height: 28px;
      vertical-align: top;
    }
    .oUserLink {
      padding-left: 12px;
    }
  }
}
</style>

