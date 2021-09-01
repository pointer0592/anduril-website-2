<template>
  <div class='flex items-center' @click='toggleDarkMode()'>
  <span
    class='cursor-pointer rounded-0 inline-flex items-center justify-center bg-transparent text-white dark:text-yellow-300 dark-hover:text-white hover:text-yellow-300'>
    <component
      :is='themeIcon'
      class='h-10 w-10 p-2'
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
      return this.$colorMode.preference === 'light-mode' ? 'icon-moon' : 'icon-sun'
    },
  },
  methods: {
    toggleDarkMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light-mode' ? 'dark-mode' : 'light-mode'
    },
  },
}
</script>
>
