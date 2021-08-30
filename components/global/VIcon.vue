<template>
  <div v-html="require(`~/assets/svg/${name}.svg?raw`)" />
</template>
<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
