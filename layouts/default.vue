<template>
  <div>
    <PreLoader v-if='showHideSpinner' />
    <div id='scroll-progress-container'>
      <div class='scroll-progress' :style="{'width': progressWidth+'%'}"></div>
    </div>
      <the-header />
      <nuxt />
      <the-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Default',
  data() {
    return {
      showHideSpinner: true,
      progressWidth: 0
    }
  },
  head: {
    titleTemplate: '%s | Anduril Partners'
  },
  computed: {
    ...mapGetters({ drawer:  "header/getDrawerState" })
  },
  beforeCreate() {
    this.showHideSpinner = true
  },
  mounted() {
    window.addEventListener('scroll', this.scrollPosition)
    this.showHideSpinner = false
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollPosition)
  },
  methods: {
    scrollPosition() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.progressWidth = (winScroll / height) * 100
    }
  }
}
</script>

<style lang='postcss'>
nav {
  z-index: 10;
}
.show-navbar {
  @apply fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.hide-navbar {
  @apply hidden;
  transform: translate3d(0, -100%, 0);
}

#scroll-progress-container {
  @apply z-50;
  position: fixed;
  top: 0;
  width: 100%;
  height: .5em;
  background: transparent;
}

#scroll-progress-container .scroll-progress {
  height: .5em;
  @apply bg-orange-500;
}

</style>
