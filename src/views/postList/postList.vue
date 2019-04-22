<template>
  <div>
    <ForumHeader/>
    <div class="wp" style="padding-bottom: 15px">
      <div id="pt" class="bbs_info crumbs">
        <div class="crumbs_inner" v-if="headerPath">
          <a @click="handlePathClick('/home')" href="javascript:;" class="home" title="首页">钱交所</a>
          <em>»</em>
          <a
            @click="handlePathClick('/forum/forum_page')"
            href="javascript:;"
          >{{ headerPath.firstPath }}</a>
          <em>›</em>
          <a href="javascript:;">{{ headerPath.secondPath.secondPath }}</a>
          <em>›</em>
          <a href="javascript:;">{{ headerPath.thirdPath.thirdPath }}</a>
        </div>
      </div>
      <div class="postListContent wp">
        <div class="categoryDes">
          <div class="bm_h cl">
            <span class="o" @click="toggle_collapse()" title="收起/展开"></span>
            <h2>
              <a href="thread-htm-fid-657.html">{{ headerPath.thirdPath.thirdPath }}</a>
            </h2>
          </div>

          <div class="forum_info">
            <a href="javascript:;" class="icon">
              <img src="../../assets/img/logo.png" height="72" width="72" :alt="headerPath.thirdPath.thirdPath">
            </a>

            <div class="forum_funs clearfix">
              <ul>
                <li>
                  <a href="javascript:;" id="a_favorite">
                    <i class="fav"></i>收藏本版
                    <em id="number_favorite">
                      (<b id="number_favorite_num">{{ subareaInfo && subareaInfo.followers ? subareaInfo.followers : 0 }}</b>)
                    </em>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    title="RSS"
                  >
                    <i class="rss"></i>订阅本版
                  </a>
                </li>
              </ul>
            </div>
            <div class="forum_props">
              <div class="count">
                <span>今日回帖:</span>
                <em>{{ subareaInfo && subareaInfo.todayReply ? subareaInfo.todayReply : 0 }}</em>
                <span>全部主题:</span>
                <em>{{ subareaInfo && subareaInfo.totalPosts ? subareaInfo.totalPosts : 0 }}</em>
                <span>全部回帖:</span>
                <em>{{ subareaInfo && subareaInfo.allReply ? subareaInfo.allReply : 0 }}</em>
              </div>
              <div class="desc">{{ subareaInfo && subareaInfo.subareaDes ? subareaInfo.subareaDes : '暂无介绍' }}</div>
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
            <div class="inner" v-html="subareaInfo && subareaInfo.subareaNotice ? subareaInfo.subareaNotice : '暂无介绍'"></div>
          </div>
        </div>
        <div class="pgt1" style="overflow: hidden; margin-bottom: 10px">
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
            <Select :model.sync="postSubjectType" size="small" style="width:80px" placeholder="全部主题">
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
            <div slot="fastPostingTitle">
              <Select
                v-model="fastPostingType"
                style="width:150px; margin: 0px 10px 10px 0px"
                placement="top-start"
                placeholder="选择主题分类"
              >
                <Option
                  v-for="item in postConTypeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
              <Input
                id="postTitInput"
                v-model="fastPostingTitle"
                placeholder="最多输入120个字符"
                @keyup.native="handlePostTitInput()"
                clearable
                style="width: 350px; margin: 0px 10px 10px 0px"
              />
              <span id="subjectchk">
                还可输入
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
import ForumHeader from "@/components/forumHeader"
import { setToken, getToken } from "@/lib/util"
import {
  getRelativeTime,
  isMillisecond,
  getDate,
  checkLength
} from "@/lib/tools"
import { getPostList } from "@/api/forum"
import EditorBar from "@/components/editor"
import { mapActions } from "vuex"

export default {
  name: "postList",
  data() {
    return {
      //   headerPath: null
      sendPostLoading: false, // 发帖lodaing
      postSubjectType: "", // 帖子主题类型
      fastPostingTitle: "", // 发帖的帖子标题
      fastPostingType: "", // 发帖的帖子类型
      titMaxLen: 120, // 标题最大字符串长度
      editor: {
        detail: ""
      },
      isClear: false, // 清空发帖框内容
      postConTypeList: [
        {
          value: "allType",
          label: "全部主题"
        },
        {
          value: "votePost",
          label: "投票"
        }
      ],
      postTotalNum: null, // 帖子总数 (用于分页)
      // 帖子列表
      postList: {
        columns: [],  // 表格每一列的渲染规则
        data: [], // 列表数据
        globalTopData: [], // 从列表数据中分离出的全局置顶帖
        localTopData: [] // 从列表数据中分离出的局部置顶帖
      },
      subareaInfo: null
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
      return this.$store.state.headerPath;
    }
  },
  methods: {
    ...mapActions(["handleSelected"]),
    toggle_collapse() {
      console.log(1);
    },
    // 点击头部路径 进行跳转
    handlePathClick(path) {
      console.log(this.headerPath);
      if (path === "/home") {
        this.handleSelected("home");
        this.$router.push({
          path
        })
      } else {
        this.$router.push({
          path
        })
      }
    },
    getDateTimeStamp(dateStr) {
      return Date.parse(dateStr.replace(/-/gi, "/"));
    },
    change() {
      console.log("change");
      console.log(this.editor.detail);
    },
    handlePostTitInput() {
      console.log(123123);
      checkLength(this.fastPostingTitle, "postTitInput", "checklen", this.titMaxLen);
    },
    fastPosting() {
      this.sendPostLoading = !this.sendPostLoading;
    }
  },
  created() {
    this.handleSelected("forum_page");
    // 获取页面数据
    getPostList(getToken(), {
      type: this.headerPath.secondPath.secondPath,
      name: this.headerPath.thirdPath.thirdPath
    })
      .then(res => {
        this.subareaInfo = res.data.currentSubareaInfo

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
                  click: () => {}
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
              let postTitCol = [
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
                    attrs: {
                      postId: params.row.postId
                    },
                    on: {
                      click: () => {
                        let currentParams = this.$route.params;
                        currentParams.postId = params.row.postId;
                        currentParams.postTit = params.row.postTit;
                        this.$router.push({
                          name: "postDetail_page",
                          params: currentParams
                        });
                      }
                    }
                  },
                  params.row.postTit
                )
              ];
              for (let i = 1; i < Math.ceil(params.row.replyNum / 10); i++) {
                if (i <= 5)
                  postTitCol.push(
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
                  postTitCol.push(h("span", "..."));
                  postTitCol.push(
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
              postTitCol.push(
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
                    postTitCol
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
  }
};
</script>

<style lang="less" scoped>
@import url('./postList');
</style>


