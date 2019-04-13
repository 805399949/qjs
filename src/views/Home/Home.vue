<template>
    <div class="home-wrap">
        <v-header></v-header>
        <div class="routerView">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>

import Header from '@/views/Public/header';
import Footer from '@/views/Public/footer';

export default {
    name: 'Home',
    components: {
        vHeader: Header,
        vFooter: Footer,
    },
    data() {
        return {

        }
    },
    mounted () {

    }
}
</script>

<style lang="less" scoped>
.routerView {
    background: #ececec url(../../assets/img/bg.png) repeat fixed;
}
</style>
