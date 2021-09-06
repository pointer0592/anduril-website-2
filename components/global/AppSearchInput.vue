<template>
  <div>
    <div class='w-80 mt-1 relative'>
      <div class='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <v-icon name='search' class='h-5 w-5 font-medium text-GunMetal dark:text-orange-500' aria-hidden='true' />
      </div>
      <input
        v-model='searchQuery'
        v-click-outside='externalClick'
        type='search'
        autocomplete='off'
        placeholder='Search'
        class='block w-80 pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-300 border border-1 border-GunMetal dark:border-white dark:bg-GunMetal dark:text-white text-GunMetal focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white'
      />
    </div>
    <transition
      enter-active-class='transition ease-out duration-100'
      enter-class='transform opacity-0 scale-95'
      enter-to-class='transform opacity-100 scale-100'
      leave-active-class='transition ease-in duration-75'
      leave-class='transform opacity-100 scale-100'
      leave-to-class='transform opacity-0 scale-95'
    >
      <ul v-if='insights.length'
        class='z-10 absolute w-80 flex-1 bg-white dark:bg-GunMetal rounded-md border border-gray-300 overflow-hidden'
      >
        <li v-for='insight of insights' :key='insight.slug'>
          <NuxtLink
            :to="'/insights/' + insight.slug"
            class='flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-GunMetal hover:bg-gray-50 dark:text-white dark-hover:bg-GunMetalLighter'
          >
            {{ insight.title }}
          </NuxtLink>
            <div class='border-t border-gray-200 dark:border-gray-200'></div>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'AppSearchInput',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      searchQuery: '',
      insights: []
    }
  },
  methods: {
    externalClick(event) {
      this.searchQuery = ''
      // eslint-disable-next-line no-console
      console.log('External click. Event: ', event)
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.insights = []
        return
      }
      this.insights = await this.$content('insights')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
