<template>
  <div>
    <transition enter-active-class='duration-150 ease-out' enter-from-class='opacity-0 scale-95'
                enter-to-class='opacity-100 scale-100' leave-active-class='duration-100 ease-in'
                leave-from-class='opacity-100 scale-100' leave-to-class='opacity-0 scale-95'>
      <div v-show='drawer' class='top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div
          class='rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div class='px-2 pt-12 pb-3'>
            <div v-for='item in sectionNames' :key='item.slug' class=''>
              <nuxt-link :to="'/' + item.slug"
                         class='font-futura block px-3 py-2 rounded-0 text-base font-bold text-GunMetal dark:text-white dark:text-gray-200 hover:text-orange-500 dark-hover:bg-GunMetal hover:bg-gray-50'>
                {{ item.label }}
              </nuxt-link>
              <div class='' />
              <div v-if='item.dropdown===true' class=''>
                <nuxt-link v-for='subNav in item.subNavs' :key='subNav.name' :to="subNav.tgt"
                           class='font-futura block pr-3 pl-6 py-2 rounded-0 text-xs font-semibold dark:text-white dark:text-gray-200 hover:text-orange-500 dark-hover:bg-GunMetal hover:bg-gray-50'>
                  {{ subNav.name }}
                </nuxt-link>
              </div>
            </div>
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TheMobilePanel',
  data() {
    return {
      sectionNames: process.env.navItems
    }
  },
  computed: {
    ...mapGetters({ drawer: 'header/getDrawerState' })
  },
  methods: {
    ...mapMutations({ externalClick:  "header/toggle" })
  }
}
</script>

<style lang='postcss' scoped>

.nuxt-link-exact-active {
  @apply text-orange-500
}
</style>
