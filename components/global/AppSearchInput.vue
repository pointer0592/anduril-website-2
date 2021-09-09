<template>
  <div>
    <div class='w-full mt-1 relative'>
      <div
        class='w-full relative'
        @keydown.down='increment'
        @keydown.up='decrement'
        @keydown.enter='go'
      >
        <label for='search' class='sr-only'>Search</label>
        <div class='relative'>
          <div class='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <IconSearch class='h-5 w-5 font-medium text-GunMetal dark:text-orange-500' aria-hidden='true'/>
          </div>
          <input
            id='search'
            ref='search'
            v-model='searchQuery'
            type='search'
            autocomplete='off'
            placeholder='Search'
            class='block w-full lg:w-1/2 pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-300 border border-1 border-GunMetal dark:border-white dark:bg-GunMetal dark:text-white text-GunMetal focus:border-gray-300 rounded-0 focus:outline-none focus:bg-white bg-white'
            @focus='onFocus'
            @blur='onBlur'
          />
        </div>
      </div>
    </div>
    <transition
      enter-active-class='transition ease-out duration-100'
      enter-class='transform opacity-0 scale-95'
      enter-to-class='transform opacity-100 scale-100'
      leave-active-class='transition ease-in duration-75'
      leave-class='transform opacity-100 scale-100'
      leave-to-class='transform opacity-0 scale-95'
    >
      <ul
        v-show='focus && (searching || results.length)'
        class='z-10 absolute w-full lg:w-1/2 flex-1 bg-white dark:bg-GunMetal rounded-0 border border-gray-300 overflow-hidden'
      >
        <li v-if='searching && !results.length' class='px-4 py-2'>
          Searching...
        </li>
        <li v-for='(result, index) of results'
            :key='result.slug'
            @mouseenter='focusIndex = index'
            @mousedown='go'
        >
          <NuxtLink
            :to="{
            name: 'article-slug',
            params: { slug: result.slug !== 'index' ? result.slug : undefined }
          }"
            class='flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-GunMetal hover:bg-gray-50 dark:text-white dark-hover:bg-GunMetalLighter'
            @click='focus = false'
          >
            <IconChevronRight class='w-3 h-3 mx-1 hidden sm:block' />
            {{ result.title }}
            <span class='font-base hidden text-orange-500 sm:block'>&nbsp;from&nbsp;<span class="font-semibold">{{ result.category }}</span></span>
          </NuxtLink>
          <div class='border-t border-gray-200 dark:border-gray-200'></div>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
  import IconSearch from '~/assets/svg/search.svg?inline'
  import IconChevronRight from '~/assets/svg/chevron-right.svg?inline'
export default {
  name: 'AppSearchInput',
    components: {
      IconSearch,
      IconChevronRight
    },
  props: {
    searchItem: {
      type: String,
      default: 'insights'
    }
  },
  data() {
    return {
      searchQuery: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      this.focusIndex = -1
      if (!searchQuery) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = await this.$content(this.searchItem)
        .sortBy('position', 'asc')
        .limit(12)
        .search(searchQuery)
        .fetch()
      this.searching = false
    }
  },
  mounted() {
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
    externalClick(event) {
      this.searchQuery = ''
      // eslint-disable-next-line no-console
      console.log('External click. Event: ', event)
    },
    onFocus() {
      this.focus = true
      this.$emit('focus', true)
    },
    onBlur() {
      this.focus = false
      this.$emit('focus', false)
    },
    keyup(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    increment() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++
      }
    },
    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--
      }
    },
    go() {
      if (this.results.length === 0) {
        return
      }
      const result =
        this.focusIndex === -1
          ? this.results[0]
          : this.results[this.focusIndex]
      const path = `/insights/${result.slug !== 'index' ? result.slug : ''}`
      this.$router.push(path)
      // Unfocus the input and reset the query.
      this.$refs.search.blur()
      this.searchQuery = ''
    }
  }
}
</script>
