<template lang="pug">
  span.multi-state-button
    image-button(
      v-for="(item, name) in states",
      v-show="value === name",
      :key="name",
      :class="name",
      :images="item.images",
      :disabled="disabled",
      @click="onClick")
</template>

<script>

import ImageButton from './image-button.vue'

export default {
  name: 'MultiStateButton',
  components: {
    ImageButton
  },
  props: {
    states: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  watch: {
    state () {
    }
  },
  methods: {
    onClick (e) {
      this.$emit('input', this.states[this.value].next)
    },
  },
}
</script>