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
          href: "news_list"
        },
        {
          name: "论坛",
          icon: ["ixitong", "cipp"],
          href: "forum_page"
        },
        {
          name: "搜索",
          icon: ["ixitong", "cipp"],
          href: "search_page"
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
  computed: {
    selected () {
      console.log(this.$store.state.menu.selected)
      return this.$store.state.menu.selected
    }
  },
  methods: {
    menuselect(a) {
      this.$router.push({ name: a });
    },
    watchRoute() {
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
      })
    }
  },
  watch: {
    $route() {
      this.watchRoute();
    }
  },
  created() {
    // this.selected = this.$route.name || "home";
  },
  mounted() {
    this.watchRoute();
  }
};
</script>

<style lang="less" scoped>
</style>
