<style lang="less" scoped>
@import url("./personalCenter.less");
</style>

<template>
  <div id="profile" style="padding: 0">
    <div class="profile_heading">
      <div class="p_h_container">
        <Row>
          <Col :xs="6" :sm="6" :md="4" style="padding: 0 15px">
            <div
              class="profile__heading--avatar-warp"
              @mouseenter="enterAvatar"
              @mouseleave="leaveAvatar"
            >
              <a href="javascript:;">
                <img class="profile__heading--avatar avatar-160" :src="avatarSrc" alt="胡八一" />
              </a>
              <input
                ref="avatarFile"
                type="file"
                id="avatarFile"
                name="avatar"
                @change="getFile"
                class="file hide"
                accept="image/jpeg, image/jpg, image/png"
              />
              <div
                @click="choiceImg"
                :class="{'profile__avatar-uploader': true, 'hide': !changeAvatar, 'show': changeAvatar }"
              >
                <span>上传头像</span>
              </div>
            </div>
            <div class="profile__heading--social">
              <ul class="sn-inline profile__heading--social-item">
                <li>
                  <a class="opacity25 icon-sn-github" target="_blank" href="javascript:;"></a>
                </li>
                <li>
                  <a class="opacity25 icon-sn-weibo" target="_blank" href="javascript:;"></a>
                </li>
                <li>
                  <a class="opacity25 icon-sn-linkedin" target="_blank" href="javascript:;"></a>
                </li>
                <li>
                  <a class="opacity25 icon-sn-twitter" target="_blank" href="javascript:;"></a>
                </li>
                <li>
                  <a class="opacity25 icon-sn-facebook" target="_blank" href="javascript:;"></a>
                </li>
              </ul>
            </div>
          </Col>
          <Col :md="10" :sm="18" :xs="18" style="padding: 0 15px">
            <h2 class="profile__heading--name" style="font-size: 30px">
              胡八一
              <small class="ml15">
                <a href="/u/hubayi/about">查看完整档案</a>
              </small>
            </h2>
            <div class="profile__heading--award">
              <a class="profile__rank-btn" href="/u/hubayi/rank">
                <img src="https://cdn.segmentfault.com/v-5cc2cd8e/global/img/rp.svg" />
                <span class="h4">8</span>
                <span class="profile__rank-btn-text">声望</span>
              </a>
            </div>
            <div class="profile__heading--other">
              <span class="profile__heading--other-item">
                <Icon type="ios-pin" />
                <span class="profile__city">
                  北京
                  <span class="profile__heading-edit btn btn-xs" data-type="city">
                    <Icon type="ios-create" />编辑
                  </span>
                </span>
              </span>
              <span class="profile__heading--other-item">
                <Icon type="ios-school" />
                <span class="profile__school">
                  <span class="profile__heading--other-item-fgx hide">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span
                    class="profile__heading-edit btn btn-xs profile__heading-edit--init"
                    data-type="school"
                  >
                    <i class="fa fa-pencil hide" aria-hidden="true"></i>填写毕业院校
                  </span>
                </span>
              </span>
              <span class="profile__heading--other-item">
                <Icon type="ios-briefcase" />
                <span class="profile__company">
                  北京软控伟业科技有限公司
                  <span
                    class="profile__heading--other-item-fgx"
                  >&nbsp;&nbsp;|&nbsp;&nbsp;</span>助理
                  <span class="profile__heading-edit btn btn-xs" data-type="company">
                    <Icon type="ios-create" />编辑
                  </span>
                </span>
              </span>
            </div>
          </Col>
          <Col :md="10" :sm="24" :xs="24" class="profile__heading--desc" style="padding: 0 15px">
            <div class="profile__heading--desc-heading">
              <span class="profile__heading--desc-heading-dot-warp">
                <span class="profile__heading-dot profile__heading-dot--red"></span>
                <span class="profile__heading-dot profile__heading-dot--yellow"></span>
                <span class="profile__heading-dot profile__heading-dot--green"></span>
              </span>
              <div class="pull-right" style="float: right">
                <span
                  data-type="desc"
                  class="profile__heading-edit btn btn-xs profile__heading--desc-heading-edit"
                >
                  <Icon type="md-create" />编辑
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import { getpersonalData } from "@/api/personal";

export default {
  name: "PersonalCenter",
  data() {
    return {
      userInfoItem: null,
      changeAvatar: false, // 是否移入头像
      avatarSrc: require("../../assets/img/user-256.png") // 头像路径 暂时写死
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
    },
    enterAvatar() {
      // 鼠标移入头像
      this.changeAvatar = true;
    },
    leaveAvatar() {
      // 鼠标移出头像
      this.changeAvatar = false;
    },
    choiceImg() {
      // 更换头像
      this.$refs.avatarFile.dispatchEvent(new MouseEvent("click"));
    },
    getFile() {
      var _this = this;
      let imgInfo;
      const inputFile = this.$refs.avatarFile.files[0];
      if (inputFile) {
        if (
          inputFile.type !== "image/jpeg" &&
          inputFile.type !== "image/png" &&
          inputFile.type !== "image/gif"
        ) {
          alert("不是有效的图片文件！");
          return;
        }
        console.log(this.imgInfo);
        imgInfo = Object.assign({}, this.imgInfo, {
          name: inputFile.name,
          size: inputFile.size,
          lastModifiedDate: inputFile.lastModifiedDate.toLocaleString()
        });
        const reader = new FileReader();
        reader.readAsDataURL(inputFile);
        reader.onload = function(e) {
          _this.avatarSrc = this.result;
        };
      } else {
        return;
      }
    }
  },
  created() {},
  mounted() {
    let _this = this;
    if (!this.userInfo || !this.userInfo.isLogin) {
      this.$Message.error({
        content: "当前登陆已过期,请先登陆",
        duration: 4,
        closable: true,
        onClose() {
          // console.log(this)
        }
      });
    } else {
      getpersonalData(this.userInfo.user_id)
        .then(res => {
          this.userInfoItem = res.data;
          console.log(res);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>
