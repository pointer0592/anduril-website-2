<template>
  <div class='flex items-center' @click='toggleDarkMode()'>
  <span
    class='cursor-pointer rounded-0 inline-flex items-center justify-center bg-transparent text-white dark:text-yellow-300 hover:text-gray-300 dark-hover:text-yellow-400'>
    <component
      :is='themeIcon'
      class='h-6 w-6'
    />
  </span>
  </div>
</template>

<script>
import IconSun from '~/assets/svg/sun.svg?inline'
import IconMoon from '~/assets/svg/moon.svg?inline'

export default {
  name: 'ThemeToggleButton',
  components: {
    IconSun,
    IconMoon,
  },
  computed: {
    mode() {
      return this.$colorMode
    },
    themeIcon() {
      return this.$colorMode.preference === 'light' ? IconMoon : IconSun
    },
  },
  methods: {
    toggleDarkMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
>
