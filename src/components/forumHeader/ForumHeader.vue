<template>
  <div>
    <div class="wrap quick_services">
      <ul class="user_links">
        <li class="my">
          <a href="home.php?mod=space&amp;uid=0">
            <Icon class="user" size="28" type="ios-contact-outline"/>我的威锋
          </a>
        </li>
        <li>
          <a href="forum.php?mod=guide&amp;view=my">
            <Icon type="md-reorder" class="subject" size="28"/>主题
          </a>
        </li>
        <li>
          <a href="forum.php?mod=guide&amp;view=my&amp;type=reply">
            <Icon type="ios-undo-outline" class="reply" size="28"/>回复
          </a>
        </li>
        <li>
          <a href="home.php?mod=space&amp;do=favorite&amp;view=me">
            <Icon type="ios-star-outline" class="fav" size="28"/>收藏
          </a>
        </li>
        <!--<li><a href="home.php?mod=space&amp;do=friend"><i class="friend"><b></b></i>好友</a></li>-->
        <li>
          <a href="forum.php?mod=guide&amp;view=comm">
            <Icon type="ios-chatbubbles-outline" class="newscommon" size="28"/>评论
          </a>
        </li>
        <!--<li><a href="plugin.php?id=trends&amp;square=square"><i class="doing"><b></b></i>动态</a></li>-->
        <!-- <li class="hide">
          <a href="#">
            <i class="mark">
              <b></b>
            </i>书签
          </a>
        </li>-->
      </ul>
      <ul class="links">
        <!-- <li><a href="userapp.php">社区应用</a></li> -->
        <li>
          <a href="forum.php?mod=guide&amp;view=hot">最新热门</a>
        </li>
        <li>
          <a href="forum.php?mod=guide&amp;view=digest">精华区</a>
        </li>
        <!-- <li><a href="#">社区服务</a></li>
            <li><a href="#">会员列表</a></li>
        <li><a href="#">统计排行</a></li>-->
      </ul>
    </div>
  </div>
</template>

<style>
/* 
* quick_services style
*/
.quick_services {
  background: url(../../assets/img/bg_hor.png) repeat-x;
  border-radius: 5px 5px 0 0;
  color: #fff;
  margin-bottom: 6px;
  height: 44px;
}
.quick_services li {
  float: left;
  font-size: 12px;
  text-shadow: 0 -1px 0 #45535f;
}
.quick_services .user_links {
  padding-top: 7px;
  height: 44px;
}
.quick_services .user_links li {
  padding: 0 10px 0 14px;
}
.quick_services .user_links .my {
  float: right;
  padding-right: 16px;
}
.quick_services li .user {
  background-position: -140px -44px;
  font-size: 28px;
}
.quick_services li i {
  margin: -3px 5px 0 0;
  vertical-align: middle;
  *margin-top: 0;
}
.quick_services li a {
  color: #fff;
}
.quick_services .user_links li a {
  display: inline-block;
  line-height: 28px;
  vertical-align: top;
}
.quick_services .links {
  display: inline;
  float: right;
  margin: -30px 120px 0 0;
}
.quick_services .links li {
  padding-left: 12px;
}
</style>

