<template>
  <div class='-mr-2 flex items-center md:hidden' @click.prevent='toggle'>
    <div>
      <span class='sr-only'>{{ srOnlyText }}</span>
      <component
        :is='burgerIcon'
        class='ml-5 h-10 w-10 p-2 cursor-pointer rounded-0 inline-flex items-center justify-center bg-transparent'
        :class='burgerClasses'
        aria-hidden='true'
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import IconMenu from '~/assets/svg/menu.svg?inline'
import IconX from '~/assets/svg/x.svg?inline'

export default {
  name: 'TheBurger',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    IconMenu,
    // eslint-disable-next-line vue/no-unused-components
    IconX
  },
  computed: {
    burgerIcon() {
      return this.drawer ? 'icon-x' : 'icon-menu'
    },
    burgerClasses() {
      return this.drawer ? 'text-GunMetal dark:text-white hover:text-GunMetalLt dark-hover:bg-white dark-hover:bg-opacity-20' : 'text-white hover:bg-white hover:bg-opacity-20'
    },
    srOnlyText() {
      return this.drawer ? 'Close main menu' : 'Open main menu'
    },
    ...mapGetters({ drawer:  "header/getDrawerState" })
  },
  methods: {
    ...mapMutations({ toggle:  "header/toggle" })
  }
}
</script>
