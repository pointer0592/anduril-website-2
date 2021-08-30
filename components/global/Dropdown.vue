<template>
  <div
    v-on-clickaway='!isMenuOpen'
    class='relative inline-block text-left text-gray-800'
  >
    <div>
      <span class='rounded-md shadow-sm'>
        <button
          id='options-menu'
          aria-expanded='true'
          type='button'
          class='inline-flex items-center justify-between w-full rounded-md border border-gray-300 h-10 px-4 py-4 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150 btn-focus'
          aria-haspopup='true'
          @click='isMenuOpen = !isMenuOpen'
        >
          <span> {{ dropdownPlaceholder }} </span>
          <img
            src='https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=grey-800'
            class='-mr-1 ml-2 h-5 w-5'
          />
        </button>
      </span>
    </div>
    <transition
      enter-active-class='transition ease-out duration-100'
      enter-class='transform opacity-0 scale-95'
      enter-to-class='transform opacity-100 scale-100'
      leave-active-class='transition ease-in duration-75'
      leave-class='transform opacity-100 scale-100'
      leave-to-class='transform opacity-0 scale-95'
    >
      <div
        v-if='isMenuOpen'
        class='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20'
      >
        <div
          class='rounded-md bg-white shadow-xs'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div v-for='dropdown in dropdowns' :key='dropdown.label'>
            <div class='py-1'>
              <nuxt-link :to='dropdown.link' class='p-4 flex items-center space-x-2'>
                <span> {{ dropdown.label }} </span>
              </nuxt-link>
            </div>
            <div class='border-t border-gray-100'></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    dropdownPlaceholder: {
      type: String,
      default: ''
    },
    dropdowns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style scoped>

</style>
