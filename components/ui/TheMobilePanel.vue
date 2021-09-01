<template>
  <div>
    <transition enter-active-class='duration-150 ease-out' enter-from-class='opacity-0 scale-95'
                enter-to-class='opacity-100 scale-100' leave-active-class='duration-100 ease-in'
                leave-from-class='opacity-100 scale-100' leave-to-class='opacity-0 scale-95'>
      <div v-if='drawer' class='top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div
          class='rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div class='px-5 pt-4 flex items-center justify-between'>
            <div>
              <nuxt-link to='/'>
                <IconLogo class='h-10 w-10 text-orange-500 hover:text-GunMetalDk dark-hover:text-white'
                          aria-hidden='true' />
              </nuxt-link>
            </div>
            <div class='inline-flex items-center'>
              <theme-toggle-button class='mr-2' />
              <the-burger />
            </div>
          </div>
          <div class='px-2 pt-2 pb-3'>
            <nuxt-link v-for='item in sectionNames' :key='item.slug' :to="'/' + item.slug"
                       class='block px-3 py-2 rounded-md text-base font-bold text-GunMetal dark:text-white dark:text-gray-200 hover:text-orange-500 dark-hover:bg-GunMetal hover:bg-gray-50'>
              {{ item.label }}
            </nuxt-link>
          </div>
          <nuxt-link to='/contact'
             class='block w-full px-5 py-3 text-center font-extrabold text-orange-500 bg-gray-200 hover:bg-gray-300'>
            Contact Us
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconLogo from '~/assets/svg/anduril-logo.svg?inline'

export default {
  name: 'TheMobilePanel',
  components: {
    IconLogo
  },
  data() {
    return {
      sectionNames: process.env.navItems
    }
  },
  computed: {
    ...mapGetters({ drawer:  "header/getDrawerState" })
  }
};
</script>

<style lang='postcss' scoped>

.nuxt-link-exact-active {
  @apply text-orange-500
}
</style>
