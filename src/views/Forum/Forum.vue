<template>
  <div id="qjsForum">
    <ForumHeader/>
    <div id="wp" class="wp">
      <div class="wrap bbs_info">
        <ul>
          <li>
            <i class="chart"></i>
          </li>
          <template v-if='titInfo' v-for="items in titInfo">
            <li>
              <span>{{ items.title }}：</span>
              <em>{{ items.con }}</em>
            </li>
            <li class="line">
              <span>{{ items.line }}</span>
            </li>
          </template>
        </ul>
      </div>
      <div id="ct" class="wp cl re_ct">
        <div class="mn">
          <div class="fl bm">
            <div :id="item.parentKey" class="bm bmw cl" v-if='postSubareaList' v-for="(item, index1) in postSubareaList">
              <div class="bm_h cl">
                <span class="y">
                  分区版主:
                  <a href="home.php?mod=space&amp;username=cdsq" class="notabs" c="1">{{ item.parentModerator }}</a>
                </span>
                <h2>
                  <a href="forum.php?gid=184" style>{{ item.parentTitle }}</a>
                </h2>
              </div>
              <div class="bm_c" style>
                <table cellspacing="0" cellpadding="0" class="fl_tb">
                  <tbody>
                    <template v-for='(childItem, index2) in item.childList'>
                      <tr :id="childItem.childKey" class="fl_row">
                        <td class="fl_icn" style="width: 72px;">
                          <a
                            href="javascript:;"
                            @click="toChildPostList(item.parentKey, childItem.childKey, item.parentTitle, childItem.childTitle)" :parentKey="item.parentKey" :childKey="childItem.childKey"
                          >
                            <img
                              src="https://bbsimages.feng.com/data/attachment/common/19/common_36_icon.png"
                              align="left"
                              alt
                            >
                          </a>
                        </td>
                        <td>
                          <h2>
                            <a
                              href="javascript:;"
                              @click="toChildPostList(item.parentKey, childItem.childKey, item.parentTitle, childItem.childTitle)" :parentKey="item.parentKey" :childKey="childItem.childKey">
                              {{ childItem.childTitle }}
                            </a>
                            <span class="count">今日:<em>{{ childItem.childTodayPost }}</em></span>
                          </h2>
                          <p class="xg2">{{ childItem.childDes }}</p>
                          <p>
                            版主:
                            <span class="xi2">
                              <template v-for='bz in childItem.childModerator'>
                                <a href="javascript:;" class="notabs" c="1">{{ bz }}</a>,
                              </template>
                            </span>
                          </p>
                        </td>
                        <td class="fl_i">
                          <span class="xi2">
                            <span title="263857">{{ childItem.postNum }}万</span>
                          </span>
                          <span class="line">/</span>
                          <span class="xg1">
                            <span title="5878167">{{ childItem.replyPostNum }}万</span>
                          </span>
                        </td>
                        <td class="fl_by">
                          <div class="last_post">
                            <a href="javascript:;" class="user_pic">
                              <i class="mask"></i>
                              <img
                                src="https://face.feng.com/data/avatar/012/78/25/10_avatar_small.jpg"
                                height="42"
                                width="42"
                                :alt="childItem.lastPost.lastReplyUser"
                              >
                            </a>
                            <span class="reply">
                              <span>Re:</span>
                              <a
                                href="forum.php?mod=redirect&amp;tid=12095547&amp;goto=lastpost#lastpost"
                                class="xi2"
                              >{{ childItem.lastPost.lastReplyCon }}</a>
                            </span>
                            <cite>
                              by
                              <a href="home.php?mod=space&amp;username=cqfdsky">cqfdsky</a>,
                              <span title="2019-3-11 11:41">{{ childItem.lastPost.lastReplyTime }} 分钟前</span>
                            </cite>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForumHeader from '@/components/forumHeader'
import { getForumTitInfo, getPostSubareaList } from "@/api/forum";
import { getSessionItem } from '@/lib/util'
import { mapActions } from 'vuex'
import { setTimeout } from 'timers';

export default {
  name: "qjsForum",
  data() {
    return {
      titInfo: null,
      postSubareaList: null
    };
  },
  components: {
    ForumHeader
  },
  methods: {
    ...mapActions([
      'handleHeaderPath',
      "handleSelected"
    ]),
    //去子页面
    toChildPostList (pKey, cKey, secondPath, thirdPath) {
      this.handleHeaderPath({
        firstPath: '论坛',
        secondPath: {
          pKey,
          secondPath
        },
        thirdPath: {
          cKey,
          thirdPath
        }
      })
      this.$router.push({
        name: 'postList_page',
        params: {
          pKey,
          cKey         
        }
      })
    },
    // 请求渲染数据
    getPageRenderData () {
      getForumTitInfo(getSessionItem('token')).then(res => {
        this.titInfo = res.data.titInfo      
      }).catch(err => {
        console.log(err)
      })
      getPostSubareaList(getSessionItem('token')).then(res => {
        this.postSubareaList = res.data.subList
        this.$nextTick(() => {

          this.getlocal()
          // console.log($("#detrmb"))

        })//创建时执行跳转锚点位置
      }).catch(err => {
        console.log(err)
      })
    },
    //从本地找到id
    getlocal(){
        //找到锚点id
        let selectId = localStorage.getItem("toId");
        let toElement = document.getElementById(selectId);
        //如果对应id存在，就跳转
        if(selectId){
          // console.log(selectId,$('#' + selectId))
            toElement.scrollIntoView()
        }
    }
  },
  created () {
    this.handleSelected("forum_page") // 记录当前选择的menu是论坛页

    this.getPageRenderData() // 获取渲染页面的数据
    
  },
  mounted () {
    
    
  },
  //离开页面进行对localStorage  id销毁，避免其他入口进来有锚点问题
  destroyed(){
    localStorage.setItem("toId",'')
  }
};
</script>

<style>
.xg2 {
  color: #666;
}
.xi2,
.xi2 a,
.xi3 a {
  color: #5c7084;
}

/* 
* bbs_info style
*/
.bbs_info {
  background: #576979 url(../../assets/img/bg_hor.png) repeat-x 0 -208px;
  border-radius: 0 0 4px 4px;
  color: #fff;
  margin-bottom: 15px;
  height: 34px;
  text-shadow: 0 -1px 0 #39424c;
}
.bbs_info ul {
  padding: 0 4px;
}
.bbs_info li {
  float: left;
  padding: 8px 0 0 8px;
}
.bbs_info .chart {
  display: inline-block;
  background: url(../../assets/img/bg_hor.png) no-repeat -60px -302px;
  padding: 0;
  height: 20px;
  width: 20px;
  vertical-align: top;
}
/* 
* content style
*/
#ct {
  min-height: 300px;
  background: #fff;
  border: 1px solid #d7d7d7;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
#ct.re_ct {
  background: none;
  border: 0;
  box-shadow: none;
}
.mn {
  overflow: hidden;
}
.bm,
.bn {
  margin-bottom: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
.fl_tb .fl_g {
  padding: 16px 0 16px 20px;
}
.fl_tb td {
  padding: 16px 10px;
}
.fl_row td {
  border-top: 1px solid #c7c7c7;
}
.fl_g {
  vertical-align: top;
}
.fl_g .fl_icn_g a img {
  width: 72px;
  height: 72px;
}
img {
  border: 0;
  max-width: 100%;
}
.fl_icn_g {
  float: left;
  width: 72px;
}
.fl_g a {
  color: #5c7084;
}
.fl_icn_g {
  float: left;
  width: 72px;
}
.fl_g dl {
  margin-left: 72px;
  padding: 2px 10px 2px 20px;
}
.fl_g dt {
  margin-bottom: 8px;
}
.fl_g .last_post {
  margin: 0;
  padding: 3px 0 0;
}
.last_post {
  padding: 10px;
}
.fl_tb h2 {
  font-size: 14px;
  font-weight: bold;
}
.fl_tb .count {
  display: inline-block;
  background: #869fb3;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin: -3px 0 0 0.5em;
  padding: 1px 6px;
  vertical-align: middle;
  margin-top: 0;
}
.fl_tb .xg2 {
  color: #666;
}
.fl_tb p {
  color: #333;
  margin-top: 6px;
}
.fl_tb .count em {
  font-family: Arial;
}
.fl_i {
  color: #6f7a83;
  font-size: 14px;
  width: 150px;
  text-align: right;
  _width: 120px;
}
.fl_i .xi2,
.fl_i .line {
  color: #2e3944;
  margin-right: 0.2em;
}
.fl_by {
  width: 220px;
  _width: 240px;
}
.fl_by div {
  color: #6f7a83;
  margin-left: 10px;
  padding: 10px;
  width: 268px;
  *width: 288px;
  _width: 290px;
  word-wrap: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fl_by a {
  color: #5c7084;
}
.user_pic {
  display: inline-block;
  border-radius: 100%;
  vertical-align: middle;
}
.fl_by .user_pic {
  float: left;
  box-shadow: 0 0 3px #ccc;
  margin: -5px 10px 0 0;
}
.user_pic .mask {
  display: none;
}
.user_pic img {
  border-radius: 100%;
  vertical-align: top;
}
.fl_by .reply span {
  color: #2e3944;
  font-family: Arial;
  font-weight: bold;
}
.fl_by .reply .xi2 {
  text-overflow: ellipsis;
}
.fl_by div .xi2 {
  zoom: 1;
}
.fl_by cite {
  display: block;
}
</style>

