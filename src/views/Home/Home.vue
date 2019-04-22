<template>
<<<<<<< HEAD
  <div class="home-wrap">
    <v-header v-if='isRouterAlive'>
      <a slot="logo" href="javascript:;" @click="handleClickLogo">
        <img src="@/assets/img/logo.png" alt>
      </a>
    </v-header>
    <router-view class="routerView"></router-view>
    <v-footer></v-footer>
  </div>
=======
    <div class="home-wrap">
        <v-header></v-header>
        <div class="routerView">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
>>>>>>> temp
</template>

<script>
import Header from "@/views/Public/header";
import Footer from "@/views/Public/footer";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    vHeader: Header,
    vFooter: Footer
  },
  data() {
    return {
        isRouterAlive: true
    };
  },
  methods: {
    ...mapActions([
        "handleSelected"
    ]),
    handleClickLogo() {
      this.handleSelected("home")
      this.$router.push({
          name: 'home'
      })
      this.reload()
    },
    reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }   
  },
  created() {
       this.handleSelected("home")
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.routerView {
  background: #ececec url(../../assets/img/bg.png) repeat fixed;
  padding: 10px;
}
* {
	word-wrap:break-word;
}
body,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,.pr,.pc {
	margin:0;
	padding:0;
}
h1,h2,h3,h4,h5,h6 {
	font-size:100%;
}
body {
	font:12px/1.5 "\5FAE\8F6F\96C5\9ED1",Arial,HELVETICA;
	color:#333;
}
img {
	border:0;
	max-width:100%;
}
ol,ul {
	list-style:none;
}
:link,:visited,ins {
	text-decoration:none;
}
table {
	border-collapse:collapse;
	border-spacing:0;
	empty-cells:show;
}
sub,sup {
	font-size:100%;
	vertical-align:baseline;
}
blockquote,q {
	quotes:"\201C" "\201D" "\2018" "\2019";
}
blockquote:before,blockquote:after,q:before,q:after {
	content:"";
	content:none;
}
input,button,textarea,select,optgroup,option {
	font-family:inherit;
	font-size:inherit;
	font-style:inherit;
	font-weight:inherit;
}
button,input,select,textarea {
	font-family:inherit;
	font-size:100%;
	margin:0;
}
button::-moz-focus-inner,input::-moz-focus-inner {
	border:0;
	padding:0;
}
textarea {
	overflow:auto;
	resize:vertical;
	vertical-align:top;
}
i,cite,em,address {
	font-style:normal;
}
a {
	color:#666;
	text-decoration:none;
}
a:hover {
	color:#333;
	text-decoration:none;
}
a:hover * {
	cursor:pointer;
}
ul li,.xl li {
	list-style:none;
}
</style>
