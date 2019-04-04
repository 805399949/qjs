<template>
  <div>
    <ForumHeader/>
    <div class="wp" style="padding-bottom: 15px">
      <div id="pt" class="bbs_info crumbs">
        <div class="crumbs_inner" v-if="headerPath">
          <a href="./" class="home" title="首页">钱交所</a>
          <em>»</em>
          <a href="forum.php">{{ headerPath.firstPath }}</a>
          <em>›</em>
          <a href="forum.php?gid=223">{{ headerPath.secondPath }}</a>
          <em>›</em>
          <a href="thread-htm-fid-602.html">{{ headerPath.thirdPath }}</a>
        </div>
      </div>
      <div class="postListContent wp">
        <div class="categoryDes">
          <div class="bm_h cl">
            <span class="o" id="forum_rules_657_trigger" @click="toggle_collapse()" title="收起/展开"></span>
            <span class="y pipe">&nbsp;</span>
            <span class="y">
              <a
                id="forumarchive"
                href="javascript:;"
                class="fa_achv hide"
                onmouseover="showMenu(this.id)"
              >存档</a>
              <span class="pipe hide">|</span>
            </span>
            <h2>
              <a href="thread-htm-fid-657.html">{{ headerPath.thirdPath }}</a>
            </h2>
          </div>

          <div class="forum_info">
            <a href="thread-htm-fid-671.html" class="icon">
              <img src="../../assets/img/logo.png" height="72" width="72" alt="iPhone XR 综合讨论区">
            </a>

            <div class="forum_funs clearfix">
              <ul>
                <li>
                  <a
                    href="home.php?mod=spacecp&amp;ac=favorite&amp;type=forum&amp;id=671&amp;handlekey=favoriteforum"
                    onclick="showWindow(this.id, this.href, 'get', 0);"
                    id="a_favorite"
                  >
                    <i class="fav"></i>收藏本版
                    <em id="number_favorite">
                      (
                      <b id="number_favorite_num">8551</b>)
                    </em>
                  </a>
                </li>
                <li>
                  <a
                    href="forum.php?mod=rss&amp;fid=671&amp;auth=d446%2BVioEtC%2Fd3p7JaDadAEI9Syf0nVVuR%2FwD7FjfLMrJquUGlJYrzHmXgHu3xsOFVQ"
                    target="_blank"
                    title="RSS"
                  >
                    <i class="rss"></i>订阅本版
                  </a>
                </li>
              </ul>
            </div>
            <div class="forum_props">
              <div class="count">
                <span>今日:</span>
                <em>1621</em>
                <span>主题:</span>
                <em>14581</em>
                <span>帖子数:</span>
                <em>222748</em>
              </div>
              <div class="desc">iPhone XR，多彩机身，超长续航，搭配顶尖Liquid LCD屏，哪一面都是亮点！</div>
            </div>
          </div>
          <div class="forum_rules" style>
            <div class="s_title">
              <h3>
                <i class="sound"></i>版块公告
              </h3>
              <i class="f_l"></i>
              <i class="f_r"></i>
            </div>
            <div class="inner">
              <a
                href="https://bbs.feng.com/read-htm-tid-7940899.html"
                target="_blank"
              >威锋网 威锋论坛总版规-规章制度[细则] 点击阅读</a>
              <br>
              <br>本版块为Apple秋季发布会综合讨论区，为保持良好的讨论环境，请遵守以下版规：
              <br>1、禁止一切形式的广告、代购、求购、黄牛党炫耀帖、政治帖及涉黄内容
              <br>2、禁止QQ、QQ群、微信、微博、网赚等一切形式的推广信息，禁止外链广告
              <br>3、谢绝冒名发布原创帖
              <br>4、谢绝人身攻击，谢绝粗口，谢绝涉及政治的言论
              <br>5、谢绝纯表情、纯标点、乱码以及其他一切无意义的发贴回帖，禁止刷版刷分
              <br>6、谢绝标题党、谣言、误导、假消息，标题请勿用任何无意义符号加长
              <br>7、诚意分享请直接贴出资源，禁止要求锋友留邮箱、加QQ或关注微信等分享方式
              <br>8、发布等级庆祝贴散分、求加分者将删帖并扣除该帖所得积分以警告！严重者禁言处理
              <br>
              <br>友情提示：发布交易帖及隐性代购帖请移步交易区或二手区，否则严惩
            </div>
          </div>
        </div>
        <div id="pgt1" style="overflow: hidden; margin-bottom: 10px">
          <div class="pager cl">
            <div class="back_pg">
              <a href="forum.php">
                <Icon type="ios-arrow-back" size="20"/>返回论坛
              </a>
            </div>
            <Page
              v-if="postTotalNum"
              :total="postTotalNum"
              :page-size="20"
              show-elevator
              show-sizer
            />
          </div>
          <a href="forum.php?mod=post&amp;action=newthread&amp;fid=671" class="new_thread">
            <span>
              <i class="dot"></i>发帖
            </span>
          </a>
          <!--a id="post_reply" class="new_thread post_reply" title="回复" onclick="showWindow('reply', this.href);return false;" href="forum.php?mod=post&amp;action=reply&amp;fid=68&amp;tid=6826197">
            <span>回复</span>
          </a-->
        </div>
        <div class="categoryDesCon cl">
          <div class="th">
            <Select v-model="posConType" size="small" style="width:80px" placeholder="全部主题">
              <Option
                v-for="item in postConTypeList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
            <span class="pipe">|</span>
            <Tag color="#576979">最新</Tag>
            <span class="pipe">|</span>
            <Tag color="#576979">热门</Tag>
            <span class="pipe">|</span>
            <Tag color="#576979">精华</Tag>
            <span class="pipe">|</span>
            <Tag color="#576979">更多</Tag>
          </div>
          <div class="postList">
            <Table
              class="globalTopPost"
              stripe
              :columns="postList.columns"
              :data="postList.globalTopData"
              :show-header="false"
            ></Table>
            <Table
              class="localTopPost"
              stripe
              :columns="postList.columns"
              :data="postList.localTopData"
              :show-header="false"
            ></Table>
            <div
              class="ivu-card-head"
              style="background:#F0F0F0; border: 1px solid #D6D6D6; font-size: 14px"
            >
              <p style=" color: #666;">
                板块主题
                <Icon
                  type="md-refresh"
                  style="font-size: 14px; margin-left: 5px; font-weight: bold"
                />
              </p>
            </div>
            <Table
              class="normalTopPost"
              stripe
              :columns="postList.columns"
              :data="postList.data"
              :show-header="false"
            ></Table>
          </div>
        </div>
        <div id="pgbtn" class="pgbtn">
          <a href="javascript:;" class="fast_next">
            <span>
              下一页
              <i></i>
            </span>
          </a>
        </div>
        <div id="pgt2" style="overflow: hidden">
          <div class="pager cl">
            <div class="back_pg">
              <a href="forum.php">
                <Icon type="ios-arrow-back" size="20"/>返回论坛
              </a>
            </div>
            <Page
              v-if="postTotalNum"
              :total="postTotalNum"
              :page-size="20"
              show-elevator
              show-sizer
            />
          </div>
          <a href="javascript:;" class="new_thread">
            <span>
              <i class="dot"></i>发帖
            </span>
          </a>
          <!--a id="post_reply" class="new_thread post_reply" title="回复" onclick="showWindow('reply', this.href);return false;" href="forum.php?mod=post&amp;action=reply&amp;fid=68&amp;tid=6826197">
            <span>回复</span>
          </a-->
        </div>
        <div class="fastPosting">
          <div class="bm_h">
            <h2>快速发帖</h2>
          </div>
          <Editor-bar :isClear="isClear" @change="change">
            <div slot="postTitle">
              <Select v-model="coinType" style="width:150px; margin: 0px 10px 10px 0px" placement="top-start" placeholder="选择主题分类">
                <Option
                  v-for="item in postConTypeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
              <Input id="postTitInput" v-model="postTitle" placeholder="最多输入120个字符" @keyup.native="handlePostTitInput()" clearable style="width: 350px; margin: 0px 10px 10px 0px" />
              <span id="subjectchk">还可输入
              <strong id="checklen" style="color: #FF0000">{{ titMaxLen }}</strong>
                  个字符
              </span>
            </div>
          </Editor-bar>
          <p slot="fastSendPost" class="fastSendPost">
            <Button type="primary" :loading="sendPostLoading" @click="fastPosting">
                <span v-if="!sendPostLoading">发表帖子</span>
                <span v-else>Loading...</span>
            </Button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForumHeader from "@/components/forumHeader";
import { setToken, getToken } from "@/lib/util";
import { getRelativeTime, isMillisecond, getDate, checkLength } from "@/lib/tools";
import { getPostList } from "@/api/forum";
import EditorBar from "@/components/editor";
export default {
  name: "postList",
  data() {
    return {
      //   headerPath: null
      sendPostLoading: false,
      posConType: "",
      postTitle: "",
      coinType: "",
      titMaxLen: 120,
      editor: {
        detail: ""
      },
      isClear: false,
      postConTypeList: [
        {
          value: "全部主题",
          label: "allType"
        },
        {
          value: "投票",
          label: "votePost"
        }
      ],
      postTotalNum: null,
      postList: {
        columns: [],
        data: [],
        globalTopData: [],
        localTopData: []
      }
    };
  },
  components: {
    ForumHeader,
    EditorBar
  },
  computed: {
    headerPath() {
      // 当前页面层级
      let headerPath = JSON.parse(window.localStorage.getItem("headerPath"));
      if (this.$store.state.headerPath === 0 && headerPath) {
        this.$store.commit("setHeaderPath", headerPath); //同步操作
      }
      console.log(headerPath);
      return this.$store.state.headerPath;
    }
  },
  created() {
    // 获取页面数据
    getPostList(getToken(), {
      type: this.headerPath.secondPath,
      name: this.headerPath.thirdPath
    })
      .then(res => {
        console.log(res);
        // this.postList.data = res.data.postList;
        // 分离全局置顶数据 (测试阶段 暂时截取4条)
        for (let i = 0; i < res.data.postList.length; i++) {
          if (res.data.postList[i].postTopType === 0) {
            this.postList.globalTopData.push(res.data.postList[i]);
            if (this.postList.globalTopData.length > 3) break;
          }
        }

        // 分离当前版块置顶数据 (测试阶段 暂时截取2条)
        for (let i = 0; i < res.data.postList.length; i++) {
          if (res.data.postList[i].postTopType === 1) {
            this.postList.localTopData.push(res.data.postList[i]);
            if (this.postList.localTopData.length >= 2) break;
          }
        }

        // 分离普通帖子数据
        for (let i = 0; i < res.data.postList.length; i++) {
          if (res.data.postList[i].postTopType === 2) {
            this.postList.data.push(res.data.postList[i]);
            if (this.postList.data.length >= 20) break;
          }
        }

        // 帖子总数 (测试阶段 为请求数据长度-置顶帖数量)
        this.postTotalNum = res.data.postList.length - 6;

        // 表格每一列的渲染规则
        this.postList.columns = [
          {
            // 第一列图标列
            title: "icon",
            key: "icon",
            width: "59",
            className: "shortPadding",
            tooltip: true,
            render: (h, params) => {
              let iconType, iconTypeDes, iconColor, iconBorder;
              if (params.row.postTopType !== 2) {
                iconType = "md-arrow-round-up";
                if (params.row.postTopType === 0) {
                  iconTypeDes = "全站置顶帖";
                  iconColor = "#ffad00";
                  iconBorder = "2px solid #ffad00";
                } else {
                  iconTypeDes = "本版置顶帖";
                  iconColor = "#96cb33";
                  iconBorder = "2px solid #96cb33";
                }
              } else {
                if (params.row.postConType === 0) {
                  iconType = "ios-hand";
                  iconTypeDes = "投票贴";
                  iconColor = "#ff4f5b";
                  iconBorder = "0";
                } else if (params.row.postConType === 1) {
                  iconType = "md-list-box";
                  iconTypeDes = "主题帖";
                  iconColor = "#89949b";
                  iconBorder = "0";
                }
              }
              return h("Icon", {
                style: {
                  cursor: "pointer",
                  fontSize: "20px",
                  borderRadius: params.row.postTopType !== 2 ? "12px" : "0",
                  border: iconBorder
                },
                props: {
                  // type: params.row.postType === 0 ? "md-list-box" : "ios-podium"
                  type: iconType,
                  color: iconColor
                },
                domProps: {
                  title: iconTypeDes
                },
                on: {
                  click: () => {
                    console.log(111);
                  }
                }
              });
            }
          },
          {
            // 第二列内容列
            title: "con",
            key: "con",
            width: "610",
            render: (h, params) => {
              let postConPgt = [
                h(
                  "p",
                  {
                    style: {
                      display: "inline",
                      cursor: "pointer",
                      color: params.row.postTopType !== 2 ? "#EE1B2E" : "#666",
                      fontSize: "14px"
                      // width: "450px"
                    },
                    on: {
                      click: () => {
                        console.log(111);
                      }
                    }
                  },
                  params.row.postCon
                )
              ];
              for (let i = 1; i < Math.ceil(params.row.replyNum / 10); i++) {
                if (i <= 5)
                  postConPgt.push(
                    h(
                      "span",
                      {
                        style: {
                          padding: "2px 4px",
                          color: "#666",
                          cursor: "pointer"
                        },
                        on: {
                          mouseenter: function(e) {
                            e.target.style.background = "#F2F2F2";
                            e.target.style.color = "#007CD5";
                          },
                          mouseout: function(e) {
                            e.target.style.background = "transparent";
                            e.target.style.color = "#515a6e";
                          }
                        }
                      },
                      i
                    )
                  );
                else {
                  postConPgt.push(h("span", "..."));
                  postConPgt.push(
                    h(
                      "span",
                      {
                        style: {
                          padding: "2px 4px",
                          color: "#666",
                          cursor: "pointer"
                        },
                        on: {
                          mouseenter: function(e) {
                            e.target.style.background = "#F2F2F2";
                            e.target.style.color = "#007CD5";
                          },
                          mouseout: function(e) {
                            e.target.style.background = "transparent";
                            e.target.style.color = "#666";
                          }
                        }
                      },
                      Math.ceil(params.row.replyNum / 10)
                    )
                  );
                  break;
                }
              }
              postConPgt.push(
                h("Icon", {
                  style: {
                    cursor: "pointer",
                    fontSize: "20px"
                  },
                  props: {
                    type: "md-images",
                    color: "#19b076"
                  },
                  on: {
                    click: () => {
                      console.log(111);
                    }
                  }
                })
              );
              return h(
                "div",
                {
                  style: {
                    fontSize: "14px"
                  }
                },
                [
                  h(
                    "div",
                    {
                      style: {
                        display: "inline-block"
                      }
                    },
                    postConPgt
                  )
                ]
              );
            }
          },
          {
            title: "author",
            key: "author",
            width: "120",
            render: (h, params) => {
              return h("div", [
                h(
                  "p",
                  {
                    style: {}
                  },
                  params.row.postingInfo.userName
                ),
                h(
                  "p",
                  getRelativeTime(
                    this.getDateTimeStamp(params.row.postingInfo.time)
                  )
                )
              ]);
            }
          },
          {
            title: "replyCheck",
            key: "replyCheck",
            render: (h, params) => {
              return h("div", [
                h("p", params.row.replyNum),
                h("p", params.row.lookPostNum)
              ]);
            }
          },
          {
            title: "lastReply",
            key: "lastReply",
            width: "120",
            render: (h, params) => {
              return h("div", [
                h("p", params.row.lastReply.userName),
                h(
                  "p",
                  getRelativeTime(
                    this.getDateTimeStamp(params.row.lastReply.time)
                  )
                )
              ]);
            }
          }
        ];
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {
    // 微调iview部分样式
    let _this = this;
    let th = document.getElementsByClassName("th")[0];
    let thSelect = th.getElementsByClassName("ivu-select-selection")[0];
    let thSelectText = th.getElementsByClassName("ivu-select-placeholder")[0];
    let thSelectIcon = th.getElementsByClassName("ivu-icon")[0];
    thSelect.style.cssText = "background-color:#576979; border:0; height:32px";
    thSelectText.style.cssText = "height: 32px; line-height: 32px; color: #fff";
    thSelectIcon.style.color = "#fff";
    //=================================================================================
  },
  methods: {
    toggle_collapse() {
      console.log(1);
    },
    getDateTimeStamp(dateStr) {
      return Date.parse(dateStr.replace(/-/gi, "/"));
    },
    change() {
      console.log("change");
      console.log(this.editor.detail);
    },
    handlePostTitInput () {
      console.log(123123)
      checkLength(this.postTitle, 'postTitInput', 'checklen', this.titMaxLen)
    },
    fastPosting () {
      this.sendPostLoading = !this.sendPostLoading
    }
  }
};
</script>

<style lang="less" scoped>
.crumbs {
  color: #fff;
  text-shadow: 0 -1px 0 #4b5967;
  clear: both;
  overflow: hidden;
}
.bbs_info {
  background: #576979 url(../../assets/img/bg_hor.png) repeat-x 0 -208px;
  border-radius: 0 0 4px 4px;
  color: #fff;
  margin-bottom: 15px;
  height: 34px;
  text-shadow: 0 -1px 0 #39424c;
}
.crumbs .crumbs_inner {
  padding: 0 10px;
}

.crumbs a,
.crumbs em,
.crumbs .current {
  display: inline-block;
  color: #fff;
  line-height: 34px;
  vertical-align: top;
}

.crumbs em,
.crumbs .home {
  background: url(../../assets/img/bg_hor.png) no-repeat -150px -312px;
  line-height: 99px;
  margin: 0 8px;
  height: 34px;
  width: 14px;
  overflow: hidden;
}

.crumbs .home {
  background-position: -120px -302px;
  margin: 7px 0 0 10px;
  height: 20px;
  width: 20px;
}

.bm_h {
  background: #74889b url(../../assets/img/bg_hor.png) repeat-x 0 -346px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 1px 3px #bcbcbc;
  color: #fff;
  font-size: 14px;
  line-height: 42px;
  height: 42px;
  // margin-bottom: 5px;
  padding: 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.32);
}

.postListContent {
  background: none;
  border: 0;
  box-shadow: none;
  width: auto;
  min-height: 300px;
}

.postListContent .categoryDes {
  background: #fff;
  box-shadow: 0 1px 3px #bcbcbc;
  margin-bottom: 10px;
  padding-bottom: 5px;
  .forum_info {
    padding: 24px 20px 20px 120px;
    min-height: 66px;
    .icon {
      margin: -2px 0 0 -92px;
      position: absolute;
    }
    .forum_funs {
      font-size: 0;
      height: 0;
      position: relative;
      ul {
        font-size: 12px;
        position: absolute;
        right: 0;
        top: 0;
      }
      li {
        float: left;
        padding-left: 15px;
        a {
          color: #666;
        }
      }
      i {
        display: inline-block;
        background: url(../../assets/img/bg_hor.png) no-repeat -24px -388px;
        cursor: pointer;
        margin: -3px 0.3em 0 0;
        height: 22px;
        width: 22px;
        overflow: hidden;
        vertical-align: middle;
        *margin-top: 0;
      }
      .fav {
        background-position: -48px -388px;
      }
      em {
        color: #f26c4f;
        font-family: Arial;
        margin-left: 0.4em;
      }
    }
    .forum_props {
      color: #333;
      font-size: 14px;
      .count {
        margin-bottom: 5px;
        em {
          margin-right: 1em;
        }
      }
      em,
      a {
        color: #6f7a83;
        margin-left: 0.4em;
      }
      .desc {
        color: #666;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
  .forum_rules {
    .s_title {
      border-bottom: 1px solid #c5c5c5;
      margin-bottom: 20px;
      height: 10px;
      position: relative;
      h3 {
        background: #fff;
        color: #333;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.2;
        margin: -1px 0 0 -58px;
        width: 116px;
        position: absolute;
        left: 50%;
        top: 0;
        text-align: center;
        i {
          display: inline-block;
          background: url(../../assets/img/bg_hor.png) no-repeat 0 -388px;
          margin: -3px 0.3em 0 0;
          height: 22px;
          width: 22px;
          vertical-align: middle;
          overflow: hidden;
          *margin-top: 0;
        }
      }
      .f_l,
      .f_r {
        background: url(../../assets/img/bg_hor.png) no-repeat 0 -410px;
        margin-top: 9px;
        height: 1px;
        width: 72px;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
      }
      .f_r {
        background-position: 0 -411px;
        left: auto;
        right: 0;
      }
    }
    .inner {
      color: #666;
      line-height: 1.9;
      padding: 10px 30px 20px;
      overflow: hidden;
      a {
        color: #6f7a83;
      }
    }
  }
}

.pager {
  float: right;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px #bcbcbc;
  padding: 0 5px;
  .ivu-page {
    float: left;
    margin: 5px 0;
  }
  .back_pg {
    float: left;
    height: 42px;
    a {
      height: 100%;
      line-height: 42px;
      color: #333333;
      padding: 0 20px 0 15px;
      margin-left: 5px;
    }
  }
}

.new_thread,
.new_thread span,
.new_thread i {
  float: left;
  background: url(../../assets/img/bg_hor.png) no-repeat 100% -412px;
  padding-right: 40px;
  height: 46px;
  -webkit-transition: all linear 0.2s;
  -moz-transition: all linear 0.2s;
  -ms-transition: all linear 0.2s;
  transition: all linear 0.2s;
}
.new_thread {
  background-position: 0 -412px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  padding: 0 0 0 20px;
  text-shadow: 0 0 5px rgba(0, 107, 183, 0.8);
}
.new_thread i {
  background-position: -76px -388px;
  margin: 6px 14px 0 0;
  padding: 0;
  height: 24px;
  width: 28px;
}
.categoryDesCon {
  position: relative;
  margin-bottom: 10px;
  .th {
    background: #576979;
    color: #fff;
    padding: 0 15px;
  }
}
.pgbtn {
  margin-bottom: 10px;
  zoom: 1;
  overflow: hidden;
  a {
    display: block;
    background: #eee;
    border: 1px solid #dcdcdc;
    box-shadow: 0 1px 0 #cbcbcb, inset 0 1px 0 #fff;
    color: #666;
    font-size: 16px;
    line-height: 20px;
    padding: 12px;
    letter-spacing: 0.4em;
    text-align: center;
    text-shadow: 0 1px 0 #fff;
    -webkit-transition: all linear 0.2s;
    -moz-transition: all linear 0.2s;
    -ms-transition: all linear 0.2s;
    transition: all linear 0.2s;
  }
  a:hover {
    background: #fff;
  }
}
.fastSendPost {
  line-height: 30px;
  padding-top: 10px;
}
</style>


