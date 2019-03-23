<template>
    <div class="home-wrap">
        <v-header :selected="'home'"></v-header>
        <router-view></router-view>
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
        console.log(1)
    }
}
</script>

<style lang="less" scoped>
</style>
