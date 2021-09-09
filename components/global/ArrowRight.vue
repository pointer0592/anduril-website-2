<template>
  <ArrowRightIcon name='arrow-right' class='ml-2' :class='[height, width]' />
</template>

<script>
import ArrowRightIcon from '~/assets/svg/arrow-right.svg?inline'
export default {
  name: 'ArrowRight',
  components: {
    ArrowRightIcon
  },
  props: {
    height: {
      type: String,
      default: 'h-6'
    },
    width: {
      type: String,
      default: 'w-6'
    }
  }
}
</script>
