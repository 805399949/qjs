<template>
  <div class="search-wrap">
    <div class="search-input-wrap">
      <AutoComplete
        icon="ios-search"
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="搜索"
        size="large"
        style="width: 500px;
        margin-right: 15px;"
      >
      </AutoComplete>
      <Button type="primary" shape="circle">Search</Button>
    </div>
    <div class="hot-words">
      
    </div>
  </div>
</template>

<script>
import Header from '@/views/Public/header.vue';

export default {
  name: 'SearchIndex',
  components: {
    vHeader: Header,
  },
  data () {
    return {
      value3: '',
      data3: [],
    };
  },
  methods: {
    filterMethod (value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    },
  },
}
</script>

<style lang="less" scoped>
.search-wrap {
  // width: 100%;
  height: 400px;
  .search-input-wrap {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
  }
}
</style>

