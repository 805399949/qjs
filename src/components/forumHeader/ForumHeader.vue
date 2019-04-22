<template>
  <div>
    <div class="wrap quick_services">
      <div class="user_links">
        <div class="my oUserLink">
          <a href="javascript:void(0)">
            <Icon class="user" size="28" type="ios-contact-outline"/>我的威锋
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:;">
            <Dropdown>
              <Icon type="md-reorder" class="subject" size="28"/>
              <a href="javascript:void(0)">主题</a>
              <DropdownMenu slot="list">
                <DropdownItem>主题1</DropdownItem>
                <DropdownItem>主题2</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-undo-outline" class="reply" size="28"/>回复
          </a>
        </div>
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-star-outline" class="fav" size="28"/>收藏
          </a>
        </div>
        <!--<li><a href="home.php?mod=space&amp;do=friend"><i class="friend"><b></b></i>好友</a></li>-->
        <div class="oUserLink">
          <a href="javascript:void(0)">
            <Icon type="ios-chatbubbles-outline" class="newscommon" size="28"/>评论
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
      <div class="links">
        <!-- <li><a href="userapp.php">社区应用</a></li> -->
        <div class="oUserLink">
          <a href="javascript:void(0)">最新热门</a>
        </div>
        <div class="oUserLink">
          <a href="javascript:void(0)">精华区</a>
        </div>
        <!-- <li><a href="#">社区服务</a></li>
            <li><a href="#">会员列表</a></li>
        <li><a href="#">统计排行</a></li>-->
      </div>
    </div>
  </div>
</template>

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

