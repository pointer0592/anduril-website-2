<template>
  <div class='relative bg-white dark:bg-GunMetal'>
    <!-- The Header-->
    <div class='relative'>
      <div v-if='!drawer'>
        <nav
          class='relative xl:px-32 lg:px-24 px-4 max-w-full mx-auto flex-col m-auto w-screen bg-GunMetal bg-opacity-50'
          :class="[ showNavbar ? 'show-navbar' : 'hide-navbar' ]"
        >

          <div class='hidden md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 py-1.5'>
            <div class='inline-flex items-center justify-end pt-3 pb-2 m-auto top-0 md:space-x-5 bg-transparent w-full'>
              <nuxt-link v-for='item in topSectionNames' :key='item.slug' :to="'/' + item.slug"
                         class='text-white hover:text-orange-500 font-medium text-sm xl:text-base'>
                {{ item.label }}
              </nuxt-link>
            </div>
            <theme-toggle-button class='ml-5' />
          </div>
          <div class='hidden md:block border border-b-1 border-white' />
          <div
            class='inline-flex items-center justify-between py-3 m-auto top-0 md:space-x-2 bg-transparent w-full'
            aria-label='Global'>
            <div class='flex justify-start lg:flex-0'>
              <nuxt-link to='/'>
                <span class='sr-only'>Anduril</span>
                <IconLogo class='h-8 w-auto sm:h-12 text-white hover:text-orange-500'
                          aria-hidden='true' />
              </nuxt-link>
            </div>
            <div class='inline-flex items-center md:hidden'>
              <theme-toggle-button />
              <the-burger />
            </div>
            <div class='hidden md:inline-flex lg:inline-flex xl:space-x-10 lg:space-x-5 space-x-4 items-center'>
              <nuxt-link v-for='item in sectionNames' :key='item.slug' :to="'/' + item.slug"
                         class='text-white hover:text-orange-500 hover:border-b hover:border-orange-500 font-bold text-sm xl:text-base uppercase'>
                {{ item.label }}
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
      <the-mobile-panel />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconLogo from '~/assets/svg/anduril-full.svg?inline'

export default {
  name: 'TheHeader',
  components: {
    IconLogo
  },
  data() {
    return {
      isScrolled: false,
      isOpen: false,
      sectionNames: process.env.navItems,
      topSectionNames: process.env.topNavItems,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  computed: {
    ...mapGetters({ drawer: 'header/getDrawerState' })
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }  // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.isScrolled = currentScrollPosition > 50
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>


<style lang='postcss' scoped>

.nuxt-link-exact-active {
  @apply text-orange-500;
}


</style>

