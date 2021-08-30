<template>
  <div class="bg-GunMetal dark:bg-gray-200 article-divider" :class="marginClasses" />
</template>

<script>
export default {
  name: 'MarkdownDivider',
  props: {
    mt: {
      type: String,
      default: '8',
    },
    mb: {
      type: String,
      default: '8',
    },
  },
  computed: {
    marginClasses() {
      return `mt-${this.mt} mb-${this.mb}`;
    },
  },
};
</script>

<style scoped>
.article-divider {
  height: 1px;
}
</style>
