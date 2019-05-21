<template>
  <div>
    <div class="personalWrap">
      <div class="user_avatar">
        <div class="avatar_wrap">
          <img :src="userInfo.avator" alt="加载失败,请刷新" title="点击更换头像">
        </div>
      </div>
      <Form
        v-if="userInfoItem"
        id="personalForm"
        :model="userInfoItem"
        :label-width="100"
        style="padding-left: 50px"
      >
        <FormItem label="姓名：">
          <Input
            v-model="userInfoItem.name"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="身份证号：">
          <Input
            v-model="userInfoItem.IDCard"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="认证手机号：">
          <Input
            v-model="userInfoItem.userPhone"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="昵称：">
          <Input
            v-model="userInfoItem.nickname"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="认证邮箱：">
          <Input
            v-model="userInfoItem.userMail"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="地址1：">
          <Input
            v-model="userInfoItem.addres.addres1"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <FormItem label="地址2：">
          <Input
            v-model="userInfoItem.addres.addres2"
            style="width: 200px"
            readonly
            placeholder="Enter something..."
          />
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="银行卡1：">
              <Input
                v-model="userInfoItem.bankCard.bankCard1.num"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
          <Col span="10">
            <FormItem label="开户行：">
              <Input
                v-model="userInfoItem.bankCard.bankCard1.addres"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="持卡人">
              <Input
                v-model="userInfoItem.bankCard.bankCard1.name"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="银行卡2：">
              <Input
                v-model="userInfoItem.bankCard.bankCard2.num"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
          <Col span="10">
            <FormItem label="开户行：">
              <Input
                v-model="userInfoItem.bankCard.bankCard2.addres"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="持卡人">
              <Input
                v-model="userInfoItem.bankCard.bankCard2.name"
                readonly
                placeholder="Enter something..."
              />
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row style="padding: 0 25px" :gutter="16">
        <Col class="myPosts" span="12">
          <Card style>
            <p slot="title">
              <Icon type="ios-paper"/>我的帖子
            </p>
            <a href="#" slot="extra" @click.prevent="morePost">
              <Icon type="ios-loop-strong"></Icon>更多
            </a>
            <ul>
              <li v-for="item in myPostList">
                <Icon type="ios-paper"/>
                <a :href="item.url" target="_blank">{{ item.name }}</a>
              </li>
            </ul>
          </Card>
        </Col>
        <Col class="myReply" span="12">
          <Card style>
            <p slot="title">
              <Icon type="ios-paper"/>我的回复
            </p>
            <a href="#" slot="extra" @click.prevent="morePost">
              <Icon type="ios-loop-strong"></Icon>更多
            </a>
            <ul>
              <li v-for="item in myPostList">
                <Icon type="ios-paper"/>
                <a :href="item.url" target="_blank">{{ item.name }}</a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.personalWrap {
  margin: 0 auto;
  width: 980px;
  position: relative;
  background: #fff;
  padding-bottom: 50px;
}
.user_avatar {
  padding: 20px;
  .avatar_wrap {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
.myPosts,
.myReply {
  a {
    height: 25px;
    line-height: 25px;
    font-size: 15px;
    color: #333;
  }
}
</style>

<script>
import { getpersonalData } from "@/api/personal";

export default {
  name: "PersonalCenter",
  data() {
    return {
      userInfoItem: null,
      // {
      //   name: "王总",
      //   IDCard: "230125199408152853",
      //   userPhone: "18686866648",
      //   nickname: "王八蛋",
      //   userMail: "123456@250.com",
      //   bankCard: {
      //     bankCard1: {
      //       num: "1234567890098763",
      //       name: "王晟宇",
      //       addres: "内蒙古自治区科尔沁左翼后旗甘旗卡镇满斗村"
      //     },
      //     bankCard2: {
      //       num: "1234567890098765",
      //       name: "谢佳宇",
      //       addres: "辽宁省宽甸满族自治县灌水镇灌水加油站"
      //     }
      //   },
      //   addres: {
      //     addres1: "湖南省长沙市火星区",
      //     addres2: "河北省迁安市野鸡坨镇野鸡坨村"
      //   }
      // }
      myPostList: [
        {
          name: "The Shawshank Redemption",
          url: "https://movie.douban.com/subject/1292052/",
          rate: 9.6
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "Farewell to My Concubine",
          url: "https://movie.douban.com/subject/1291546/",
          rate: 9.5
        },
        {
          name: "Forrest Gump",
          url: "https://movie.douban.com/subject/1292720/",
          rate: 9.4
        },
        {
          name: "Life Is Beautiful",
          url: "https://movie.douban.com/subject/1292063/",
          rate: 9.5
        },
        {
          name: "Spirited Away",
          url: "https://movie.douban.com/subject/1291561/",
          rate: 9.2
        },
        {
          name: "Schindler",
          url: "https://movie.douban.com/subject/1295124/",
          rate: 9.4
        },
        {
          name: "The Legend of 1900",
          url: "https://movie.douban.com/subject/1292001/",
          rate: 9.2
        },
        {
          name: "WALL·E",
          url: "https://movie.douban.com/subject/2131459/",
          rate: 9.3
        },
        {
          name: "Inception",
          url: "https://movie.douban.com/subject/3541415/",
          rate: 9.2
        }
      ]
    };
  },
  computed: {
    userInfo() {
      let userInfo;
      typeof this.$store.state.user.userInfo === "object"
        ? (userInfo = this.$store.state.user.userInfo)
        : (userInfo = JSON.parse(this.$store.state.user.userInfo));
      return userInfo;
    }
  },
  methods: {
    morePost() {
      console.log("more");
    }
  },
  created() {
    let _this = this
    console.log(this.userInfo);
    if (!this.userInfo || !this.userInfo.isLogin) {
      this.$Message.error({
        content: '当前登陆已过期,请先登陆',
        duration: 4,
        closable: true,
        onClose () {
          console.log(_this.$router)
          _this.$router.push({
            name: 'forum_page'
          })
        }
      });
    }
  },
  mounted() {
    getpersonalData(this.userInfo.user_id)
      .then(res => {
        this.userInfoItem = res.data;
        // this.$nextTick(() => {
        //   $(".ivu-input").css({ border: "1px solid transparent" });
        // });
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>
