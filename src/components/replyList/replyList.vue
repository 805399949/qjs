<template>
  <div>
    <Table
      id="replyList"
      style="border: 0"
      :show-header="false"
      disabled-hover
      :columns="replyColumns"
      :data="replyData"
    ></Table>
  </div>
</template>

<style>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.active {
  transform-origin: left center;
  animation: fadeIn 1s;
  display: block;
}

.leave {
  transform-origin: left center;
  animation: fadeOut 1s reverse;
  display: none;
}
.ivu-table td.geryBg {
  background-color: #f5f5f5;
  position: relative;
}
#replyList .replyerAvator {
  background: #fff;
  border: 1px solid #dadada;
  border-top-color: #ededed;
  border-bottom: 0;
  padding: 10px 5px 5px;
  text-align: center;
}
#replyList .replyerBriefInfo {
  float: left;
  width: 43px;
  height: 36px;
  border-right: 1px solid #b1bdce;
}
#replyList .replyerBriefInfo:nth-child(3) {
  border-right: 0;
}
#replyList .enterAvator {
  position: absolute;
  z-index: 10;
  right: -400px;
  top: 46px;
  height: 188px;
  width: 418px;
  background: #fff;
  border: 1px solid #dadada;
  border-left: 0;
  border-top-color: #ededed;
  display: none;
  padding: 15px
}
#replyList .enterAvator h4 {
  height: 20px;
  line-height: 20px
}
</style>

<script>
export default {
  data: function() {
    return {
      show: true,
      isAvatorEnter: false,
      iBase: {
        Id: function(name) {
          return document.getElementById(name);
        },
        //设置元素透明度,透明度值按IE规则计,即0~100
        SetOpacity: function(ev, v) {
          ev.filters
            ? (ev.style.filter = "alpha(opacity=" + v + ")")
            : (ev.style.opacity = v / 100);
        }
      }
    };
  },
  computed: {
    replyColumns() {
      return [
        {
          title: "A",
          className: "geryBg leftCol", // 此处有效
          key: "a",
          width: "183",
          render: (h, p) => {
            return h(
              "div",
              {
                style: {
                  width: "100%",
                  verticalAlign: "top"
                }
              },
              [
                h(
                  "h4",
                  {
                    style: {
                      height: "36px",
                      lineHeight: "36px",
                      borderBottom: "1px dotted #b9bcc1",
                      textOverflow: "ellipsis",
                      fontSize: "14px",
                      marginBottom: "10px",
                      color: "#333",
                      fontWeight: "normal",
                      cursor: "pointer",
                      position: "relative"
                    }
                  },
                  "王老板"
                ),
                h(
                  "div",
                  {
                    class: "oUser",
                    attrs: {
                      userId: "10086"
                    }
                  },
                  [
                    h("div", { class: "replyerAvator" }, [
                      h("a", {}, [
                        h("img", {
                          style: {
                            maxWidth: "100%",
                            verticalAlign: "top",
                            height: "auto",
                            width: "120px",
                            maxHeight: "120px",
                            border: 0
                          },
                          attrs: {
                            src:
                              "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
                          }
                        })
                      ])
                    ]),
                    h(
                      "div",
                      {
                        class: "clearfix",
                        style: {
                          background: "#fff",
                          border: "1px solid #dadada",
                          borderTop: "0",
                          borderBottomColor: "#cccbcb",
                          boxShadow: "0 1px 0 rgba(0,0,0,.06)",
                          color: "#6f7a83",
                          margin: "0 0 20px",
                          padding: "5px 8px 10px",
                          textAlign: "center"
                        }
                      },
                      [
                        h(
                          "div",
                          {
                            class: "replyerBriefInfo"
                          },
                          [
                            h(
                              "a",
                              {
                                style: {
                                  color: "#2e3944"
                                }
                              },
                              "1"
                            ),
                            h(
                              "span",
                              {
                                style: {
                                  display: "block"
                                }
                              },
                              "主题"
                            )
                          ]
                        ),
                        h(
                          "div",
                          {
                            class: "replyerBriefInfo"
                          },
                          [
                            h(
                              "a",
                              {
                                style: {
                                  color: "#2e3944"
                                }
                              },
                              "11"
                            ),
                            h(
                              "span",
                              {
                                style: {
                                  display: "block"
                                }
                              },
                              "帖子"
                            )
                          ]
                        ),
                        h(
                          "div",
                          {
                            class: "replyerBriefInfo"
                          },
                          [
                            h(
                              "a",
                              {
                                style: {
                                  color: "#2e3944"
                                }
                              },
                              "100"
                            ),
                            h(
                              "span",
                              {
                                style: {
                                  display: "block"
                                }
                              },
                              "人气"
                            )
                          ]
                        )
                      ]
                    ),
                    h(
                      "div",
                      {
                        class: "enterAvator"
                      },
                      [
                        h('h4', {}, `真实姓名: ${'王老板'} `),
                        h('h4', {}, `银行卡号1:${"12345678987654321"}`),
                        h('h4', {}, `银行卡号2:${"12345678987654321"}`),
                        h('h4', {}, `收货地址1:${"内蒙古科尔沁左翼后旗"}`),
                        h('h4', {}, `收货地址1:${"内蒙古科尔沁右翼前旗"}`),
                        h('h4', {}, `手机号:${'18686868686'}`),
                        h('h4', {}, `wechatId:${'18686868686'}`)
                      ]
                    )
                  ]
                ),
                h('div', {}, [
                  h('p', {}, `注册时间: ${'2018-8-8'}`),
                  h('p', {}, `会员级别: ${'三级'}`),
                  h('p', {}, `会员有效期至: ${'2038-3-8'}`),
                  h('p', {}, `uid: ${'1008611'}`),
                  h('p', {}, `最后登陆时间: ${'2019-3-4'}`),
                  h('p', {}, `信用积分: ${'100'}`)
                ])
              ]
            );
          }
        },
        {
          title: "B",
          key: "b"
        }
      ];
    },
    replyData() {
      return [
        {
          a: "a",
          b: "b"
        }
      ];
    }
  },
  methods: {
    avatorEnter(e) {
      // console.log("enter");
      // this.isAvatorEnter = true;
      // let dom = e.target.getElementsByClassName("enterAvator")[0]
      // e.target.getElementsByClassName("enterAvator")[0].style.display = "block";
    },
    avatorLeave(e) {
      //
    }
  },
  created() {
    this.$nextTick(() => {
      let tableWrap = document.getElementById("replyList");
      let table = tableWrap.getElementsByTagName("table")[0];
      table.style.width = "980px";
    });
  },
  mounted() {
    // console.log($(".oUser"));
    // $(".oUser").on("hover", function(e) {
    //   console.log($(e));
    // });
    $(".oUser").hover(
      function() {
        console.log("enter", $(this).attr("userId"));
        $(this)
          .find(".enterAvator")
          .fadeIn();
      },
      function() {
        // 移出事件
        $(this)
          .find(".enterAvator")
          .fadeOut();
        console.log($(this).find(".enterAvator"));
      }
    );
  }
};
</script>