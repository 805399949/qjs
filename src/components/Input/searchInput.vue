<template>
  <div class="search-input clearfix">
    <AutoComplete
      icon="ios-search"
      v-model="value3"
      :data="data3"
      :filter-method="filterMethod"
      placeholder="搜索"
      size="large"
      style="width: 500px;
        margin-right: 15px;
        text-align:left"
    >
    </AutoComplete>
    <Button type="primary" shape="circle" @click="handleSearch">Search</Button>
  </div>
</template>

<script>

export default {
  name: 'SearchIndex',
  components: {
    
  },
  data () {
    return {
      value3: '',
      data3: ['xixi', 'haha', 'hoho'],
    };
  },
  methods: {
    filterMethod (value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    },
    handleSearch () {
      console.log(this.value3, this.$router);
      this.$router.push({
        path: '/search/search_result',
      });
    }
  },
}
</script>

<style lang="less" scoped>
  
</style>
