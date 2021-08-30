<template>
  <!--eslint-disable-next-line vue/require-component-is-->
  <component
    :is="container"
    data-aos="fade-up"
    class="w-fit h-fit px-3 mb-1 border rounded-full py-1"
    @click="onClick"
  >
    <span>{{ text }}</span>
  </component>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'Chip',
  mixins: [aosMixin],
  props: {
    text: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    container() {
      return this.clickable ? 'button' : 'span'
    }
  },
  methods: {
    onClick() {
      return (
        this.clickable &&
        this.$emit('chip-clicked', this.active ? '' : this.text)
      )
    }
  }
}
</script>
