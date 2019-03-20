<template>
  <div class="nav-wrap">
    <Menu
      :active-name="selected"
      @on-select="menuselect"
      theme="light"
      ref="child"
      mode="horizontal"
      :open-names="openname"
    >
      <template v-for="item in listdata">
        <template v-if="item.child && item.child.length > 0">
          <Submenu :name="item.name">
            <template slot="title">
              <Icon :class="item.icon"></Icon>
              {{item.name}}
            </template>
            <template v-for="sub in item.child">
              <MenuItem :name="sub.href">{{sub.name}}</MenuItem>
            </template>
          </Submenu>
        </template>
        <template v-else>
          <MenuItem :name="item.href">
            <div :class="item.icon"></div>
            <div class="layout-text">{{item.name}}</div>
          </MenuItem>
        </template>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "menulist",
  props: {
    selected: {
      type: String,
      default: "home",
    },
  },
  data() {
    return {
      listdata: [
        {
          name: "钱交所",
          icon: ["ixitong", "cipp"],
          href: "home"
        },
        {
          name: "资讯",
          icon: ["ixitong", "cipp"],
          href: "report"
        },
        {
          name: "论坛",
          icon: ["ixitong", "cipp"],
          href: "forum_index"
        },
        {
          name: "搜索",
          icon: ["ixitong", "cipp"],
          href: "search_index"
        },
        {
          name: "工具",
          icon: ["ianswer", "cipp"],
          child: [
            {
              name: "四版币箱号",
              href: "sbxh"
            },
            {
              name: "五版币箱号",
              href: "wbxh"
            },
            {
              name: "五版币条码",
              href: "wbtm"
            }
          ]
        },
        {
          name: "APP",
          icon: ["im-extension", "cipp"],
          href: "app"
        }
      ],
      openname: []
    };
  },
  methods: {
    menuselect(a) {
      console.log(a,'a')
      this.$router.push({ name: a });
    },
    watchRoute() {
      console.log(this.$route.name, 'wr')
      if (
        this.$refs.child &&
        this.$route.name != "submenu1" &&
        this.$route.name != "submenu2"
      ) {
        this.openname = [];
        this.$refs.child.$children[2].opened = false;
      } else {
        this.openname = ["设置"];
      }
      this.$nextTick(() => {
        this.$refs.child.updateOpened();
      });
    }
  },
  watch: {
    $route() {
      this.watchRoute();
    }
  },
  mounted() {
    this.watchRoute();
  }
};
</script>

<style lang="less" scoped>
.nav-wrap {

}
</style>
