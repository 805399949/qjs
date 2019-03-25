<template>
  <div class="search-wrap">
    <div class="search-input-wrap clearfix">
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
      <div class="hot-words-title">热搜词</div>
      <div class="hot-words-cont">
        <span class="words-item" v-for="(item, index) in hotWords" :key="index">{{ item }}</span>
      </div>
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
      data3: ['xixi', 'haha', 'hoho'],
      hotWords: ['钱币', '科技', '邮票', '钱币', '美妆', '科技', '邮票', '美妆', '钱币'],
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
    z-index: 1;
  }
  .hot-words {
    position: absolute;
    left: 20%;
    top: 300px;
    .hot-words-title {
      display: inline-block;
      font-size: 20px;
      margin-right: 40px;
      vertical-align: top;
    }
    .hot-words-cont {
      display: inline-block;
      width: 500px;
      font-size: 14px;
      .words-item {
        display: inline-block;
        border: 1px solid #666666;
        line-height: 14px;
        padding: 5px 10px;
        border-radius: 5px;
        margin: 0 5px 15px 5px;
        cursor: pointer;
      }
    }
  }
}
</style>

