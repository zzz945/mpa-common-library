<template lang="pug">

.search-select
  span {{(value || {}).name}}&nbsp;&nbsp;
  el-button(:disabled="disabled", @click="handleBtnClick") Select
  select-dlg(ref="selectDlg",
    :select="select",
    :innerComponent="innerComponent",
    @action="handleSelect")

</template>

<style lang="stylus" scoped>
</style>

<script>

import SelectDlg from './search-select-dlg.vue'

export default {
  name: 'search-select',
  props: {
    value: {},
    innerComponent: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    select: {
      type: Boolean|String,
      default: true,
    }
  },
  components: {
    SelectDlg,
  },
  data () {
    return {
    }
  },
  methods: {
    handleBtnClick () {
      this.$refs.selectDlg.open()
    },
    handleSelect (act, payload) {
      switch (act) {
        case 'select':
          this.$emit('input', payload)
          break
        default:
          break
      }
    }
  }
}
</script>
