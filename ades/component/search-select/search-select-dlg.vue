<template lang="pug">
el-dialog(
  :visible.sync="dialogVisible",
  width="80%")
  component(:is="innerComponent",
    :select="select",
    :disableAdd="true",
    :disableEdit="true",
    :disableDelete="true",
    @action="handleSearchAction")
  span(slot="footer")
    el-button(@click="close") 取 消
    el-button(type="primary", :disabled="!selected", @click="handleConfirm") 确 定
</template>

<style lang="stylus" scoped>
</style>

<script>

export default {
  name: 'class-adviser-select-dlg',
  props: ['innerComponent', 'select'],
  data () {
    return {
      dialogVisible: false,
      selected: null,
    }
  },
  methods: {
    open () {
      this.dialogVisible = true
    },
    close () {
      this.dialogVisible = false
    },
    handleSearchAction(act , payload) {
      switch (act) {
        case 'select':
          this.selected = payload
          break
        default:
          break
      }
    },
    handleConfirm () {
      this.$emit('action', 'select', this.selected)
      this.close()
    }
  }
}
</script>
