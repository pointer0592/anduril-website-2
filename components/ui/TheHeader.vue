<template>
  <div class='z-20 relative bg-white dark:bg-GunMetal'>
    <!-- The Header-->
    <div class='relative'>
      <div>
        <nav
          class='flex-col xl:px-32 lg:px-24 px-4 max-w-full mx-auto m-auto w-screen bg-GunMetal bg-opacity-50'
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
                <v-icon name='anduril-full' class='h-8 w-auto sm:h-12 text-orange-500 hover:text-white md:text-white md:hover:text-orange-500'
                          aria-hidden='true' />
              </nuxt-link>
            </div>
            <div class='inline-flex items-center md:hidden'>
              <the-burger />
            </div>
            <div class='hidden md:inline-flex lg:inline-flex xl:space-x-10 lg:space-x-5 space-x-4 items-center'>
              <div v-for='item in sectionNames' :key='item.slug'>
                <div v-if='item.dropdown===true' v-click-outside='externalClick' class='relative'>
                  <!--              PopoverButton-->
                  <button
                    class='group inline-flex items-center text-white font-futura group-hover:text-orange-500 font-bold text-sm xl:text-base uppercase'
                    @click='isMenuOpen = !isMenuOpen'>
                    <span
                      class='text-white group-hover:text-orange-500 font-futura font-bold text-sm xl:text-base uppercase'
                      :class="[isMenuOpen ? 'text-orange-800' : '']"
                    >
                      {{ item.label }}
                    </span>
                    <v-icon :name='chevronFlip'
                            class='ml-2 h-5 w-5 text-white group-hover:text-orange-500'
                            :class="[isMenuOpen ? 'text-orange-800' : '']"
                            aria-hidden='true' />
                  </button>

                  <transition enter-active-class='transition ease-out duration-200'
                              enter-from-class='opacity-0 translate-y-1' enter-to-class='opacity-100 translate-y-0'
                              leave-active-class='transition ease-in duration-150'
                              leave-from-class='opacity-100 translate-y-0' leave-to-class='opacity-0 translate-y-1'>
                    <!--                PopoverPanel-->
                    <div
                      :class="isMenuOpen ? '' : 'hidden'"
                      class='absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-md lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                      <div class='rounded-0 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div class='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-1'>
                          <nuxt-link v-for='subNav in item.subNavs' :key='subNav.name' :to='subNav.tgt'
                                     class='-m-3 p-3 flex items-start rounded-0 hover:bg-orange-50'>
                            <div class='ml-4'>
                              <p class='font-futura text-base font-medium text-orange-500'>
                                {{ subNav.name }}
                              </p>
                              <p v-if='subNav.description' class='mt-1 text-sm text-gray-500'>
                                {{ subNav.description }}
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <nuxt-link v-else :to="'/' + item.slug"
                           class='font-futura text-white hover:text-orange-500 font-bold text-sm xl:text-base uppercase'>
                  {{ item.label }}
                </nuxt-link>
              </div>
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
import vClickOutside from 'v-click-outside'

export default {
  name: 'TheHeader',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isScrolled: false,
      isOpen: false,
      isMenuOpen: false,
      sectionNames: process.env.navItems,
      topSectionNames: process.env.topNavItems,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  computed: {
    ...mapGetters({ drawer: 'header/getDrawerState' }),
    chevronFlip() {
      return this.isMenuOpen ? 'chevron-up' : 'chevron-down'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    externalClick(event) {
      this.isMenuOpen = false
      // eslint-disable-next-line no-console
      console.log('The Header Outside Click: ', event)
    },
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
      // eslint-disable-next-line no-console
      console.log('isScrolled On')
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
