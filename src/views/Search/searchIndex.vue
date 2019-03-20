<template>
  <div class="search-wrap">
    <v-header :selected="'search_index'"></v-header>
    <h1>搜索页</h1>
  </div>
</template>

<script>
import Header from '@/views/Public/header.vue';

export default {
  name: 'SearchIndex',
  components: {
    vHeader: Header,
  }
}
</script>

<style>

</style>

