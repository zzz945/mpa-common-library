<template lang="pug">
  a.image-button(href="javascript:;",
    @touchstart="onMouseDown",
    @touchend="onMouseUp",
    @mouseenter="onMouseEnter",
    @mouseleave="onMouseLeave",
    @mousedown="onMouseDown",
    @mouseup="onMouseUp",
    @click="onClick",
    :class="disabled?'disabled':curState",
    :style="style")
    slot
</template>

<script>

export default {
  name: 'ImageButton',
  components: {},
  props: {
    images: {
      type: Object,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      states: {},
      curState: 'normal',
    }
  },
  computed: {
    style () {
      const state = this.states[this.disabled?'disabled':this.curState] || {}
      return {
        background: `url(${state.url}) center/cover`,
        width: `${state.width}px`,
        height: `${state.height}px`
      }
    }
  },
  created () {
    if (this.images) {
      this.states.normal = this.images.normal
      this.states.hover = this.images.hover || this.states.normal
      this.states.pressed = this.images.pressed || this.states.hover
      this.states.disabled = this.images.disabled || this.states.normal
    }
  },
  methods: {
    onMouseEnter (e) {
      this.curState = 'hover'
    },
    onMouseLeave (e) {
      this.curState = 'normal'
    },
    onMouseDown (e) {
      this.curState = 'pressed'
    },
    onMouseUp (e) {
      this.curState = 'normal'
    },
    onClick (e) {
      if (!this.disabled)
        this.$emit('click', e)
    }
  },
  watch: {
  }
}

</script>

<style lang="stylus" scoped>

.image-button
  display: inline-block
.image-button.disabled
  cursor not-allowed

</style>