<template>
    <div class="home-wrap">
        <v-header></v-header>
    </div>
</template>

<script>

import Header from '@/views/Public/header'

export default {
    name: 'Home',
    components: {
        vHeader: Header,
    }
}
</script>

<style lang="less" scoped>
    .home-wrap {
        width: 1160px;
        margin: 0 auto;
    }
</style>
