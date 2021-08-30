export default {
  methods: {
    getAllTags() {
      const fullList = [];
      this.tags.forEach((post) => {
        const postTags = post.tags;
        fullList.push(...postTags);
      });
      const allSoloTags = [...new Set(fullList)];
      const sorted = allSoloTags.sort((el1, el2) => {
        const a = el1.toLowerCase();
        const b = el2.toLowerCase();
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      return sorted;
    },
    pageParam() {
      return this.$route.params.tag || 'all';
    }
  }
}
