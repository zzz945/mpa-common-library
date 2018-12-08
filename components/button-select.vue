<template lang="pug">
  .button-select
    el-button(v-for="(item, i) in items", :key="i",
      :type="value===item?'primary':'default'",
      @click="handleClick")
      img(v-if="item.icon", :src="item.icon", :width="item.iconSize", :height="item.iconSize")
      span(v-text="item.label")
</template>

<style lang="stylus" scoped>

.button-select
  margin-top: -9px;
  .el-button
    height: 37px;
    border: none;
    box-shadow: 0px 4px 12px -4px #adadc1;
    padding: 0 10px;
    margin-top: 9px;
    // &:active,
    // &.el-button--primary
    //   background:linear-gradient(270deg,#857dd1 0%,#ac7dd1 100%);
  .el-button > span > *
    vertical-align middle
    margin-left: 10px


</style>

<script>


export default {
  name: 'button-select',
  props: ['items', 'value'],
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    if (!(this.items.length && this.items.includes(this.value))) this.$emit('input', this.items[0])
  },
  computed: {
  },
  watch: {
    items () {
      if (!(this.items.includes(this.value))) this.$emit('input', this.items[0])
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('input', item)
      this.$emit('change', item)
    }
  }
}
</script>
