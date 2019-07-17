<template>
  <div id="postDetail">
    <ForumHeader/>
    <div class="wp">
      <div id="pt" class="bbs_info crumbs">
        <div class="crumbs_inner" v-if="headerPath">
          <a href="./" class="home" title="首页">钱交所</a>
          <em>»</em>
          <a href="forum.php">{{ headerPath.firstPath }}</a>
          <em>›</em>
          <a href="forum.php?gid=223">{{ headerPath.secondPath.secondPath }}</a>
          <em>›</em>
          <a href="thread-htm-fid-602.html">{{ headerPath.thirdPath.thirdPath }}</a>
          <em>›</em>
          <a href="thread-htm-fid-602.html">{{ $route.params.postTit }}</a>
        </div>
      </div>
      <div class="pgt1" style="overflow: hidden; margin-bottom: 10px">
        <div class="pager">
          <Page :total="100" :page-size="20" show-elevator show-sizer/>
        </div>
      </div>
      <div class="postContentWrap">
        <div class="postConHead">
          <div class="postConHeadL">
            <span class="postReadNum">
              <em>115</em>阅读
            </span>
            <span class="pipe">|</span>
            <span class="postReplyNum">
              <em>15</em>回复
            </span>
          </div>
          <div class="postConHeadR">
            <h4 class="postConTit">
              我在华强北自己花了3800组装了一个无面容 ID双卡256的max
              <a href="javascript:;">[复制链接]</a>
            </h4>
            <div class="postHandle">
              <span @click="postTitHandle('del')">
                <Icon type="ios-trash" size="20" color="#fff"/>
              </span>
              <span @click="postTitHandle('print')">
                <Icon type="ios-print" size="20" color="#fff"/>
              </span>
              <span @click="postTitHandle('previous')">
                <Icon type="md-arrow-round-back" size="20" color="#fff"/>
              </span>
              <span @click="postTitHandle('next')">
                <Icon type="md-arrow-round-forward" size="20" color="#fff"/>
              </span>
            </div>
          </div>
        </div>
        <ReplyTable></ReplyTable>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

.crumbs {
  color: #fff;
  text-shadow: 0 -1px 0 #4b5967;
  clear: both;
  overflow: hidden;
  .crumbs_inner {
    padding: 0 10px;
  }
  a,
  em,
  .current {
    display: inline-block;
    color: #fff;
    line-height: 34px;
    vertical-align: top;
  }
  em,
  .home {
    background: url(../../assets/img/bg_hor.png) no-repeat -150px -312px;
    line-height: 99px;
    margin: 0 8px;
    height: 34px;
    width: 14px;
    overflow: hidden;
  }
  .home {
    background-position: -120px -302px;
    margin: 7px 0 0 10px;
    height: 20px;
    width: 20px;
  }
}
.bbs_info {
  background: #576979 url(../../assets/img/bg_hor.png) repeat-x 0 -208px;
  border-radius: 0 0 4px 4px;
  color: #fff;
  margin-bottom: 15px;
  height: 34px;
  text-shadow: 0 -1px 0 #39424c;
}

#postDetail .pgt1 .pager {
  display: inline-block;
  float: right;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 4px;
}
.postConHead {
  background: url(../../assets/img/bg_hor.png) repeat-x 0 -346px;
  border-radius: 5px 5px 0 0;
  height: 42px;
  overflow: hidden;
  width: 100%;
  .postConHeadL {
    display: inline-block;
    width: 184px;
    background: url(../../assets/img/bg_hor.png) repeat-x 0 1px;
    color: #fff;
    height: 42px;
    text-shadow: 0 0 3px #1e3143;
    vertical-align: top;
    line-height: 1.4;
    padding: 3px 10px 0;
    em {
      font-style: normal;
    }
    .postReadNum,
    .postReplyNum {
      float: left;
      padding-right: 10px;
      white-space: nowrap;
      overflow: hidden;
    }
    .postReadNum em,
    .postReplyNum em {
      display: block;
      font-family: Arial;
      font-size: 14px;
    }
    .pipe {
      border-left: 1px dotted #33424f;
      border-right: 1px dotted #6e8293;
      margin: 0 14px;
      padding: 0;
      height: 35px;
      width: 0;
      overflow: hidden;
      float: left;
      color: #ccc;
    }
  }
  .postConHeadR {
    display: inline-block;
    width: 796px;
    height: 42px;
    line-height: 42px;
    padding: 0 14px 0 10px;
    vertical-align: top;
    .postConTit {
      float: left;
      width: 85%;
      display: inline;
      color: #fff;
      font-size: 16px;
      font-weight: normal;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      a {
        color: #fff;
        margin-left: 5px;
        font: 12px/1.5 "\5FAE\8F6F\96C5\9ED1", Arial, HELVETICA;
      }
    }
    .postHandle {
      float: right;
    }
  }
}
</style>

<script>
import ForumHeader from "@/components/forumHeader";
import { mapActions } from "vuex";
import ReplyTable from "@/components/replyList/replyList"

export default {
  name: "postDetail",
  data() {
    return {
      
    }
  },
  components: {
    ForumHeader,
    ReplyTable
  },
  computed: {
    headerPath() {
      // 当前页面层级
      let headerPath = JSON.parse(window.localStorage.getItem("headerPath"));
      if (this.$store.state.headerPath === 0 && headerPath) {
        this.$store.commit("setHeaderPath", headerPath); //同步操作
      }
      return this.$store.state.headerPath;
    }
  },
  methods: {
    ...mapActions(["handleHeaderPath", "handleSelected"]),
    postTitHandle(handleType) {
      switch (handleType) {
        case "del":
          alert("垃圾帖")
          break;
        case "print":
          alert("打印")
          break;
        case "previous":
          alert("上个帖子")
          break;
        case "next":
          alert("下个帖子")
          break;
      }
    }
  },
  created() {
    this.handleSelected("forum_page")
  },
  mounted() {
    
  }
}
</script>


