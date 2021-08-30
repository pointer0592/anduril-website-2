export default {
  methods: {
    tagClass(tag) {
      return {
        'text-orange-500 dark:text-orange-500 border-1 dark:border-1 border-orange-500 dark:border-orange-500 active:border-orange-500 dark:active:border-orange-500 font-bold active': this.isSelectedTag(tag)
      }
    },
    sortByTag(selected) {
      this.byTag = selected
    },
    isSelectedTag(tag) {
      return this.byTag === tag
    }
  }
}
