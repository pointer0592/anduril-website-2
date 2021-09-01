<template>
  <div>
    <PreLoader v-if='showHideSpinner' />
    <div id='scroll-progress-container'>
      <div class='scroll-progress' :style="{'width': progressWidth+'%'}"></div>
    </div>
    <div class='relative overflow-hidden bg-white dark:bg-GunMetal flex flex-col'>
      <the-header />
      <nuxt />
      <the-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      showHideSpinner: true,
      progressWidth: 0
    }
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

.nuxt-content {
  @apply text-gray-600 dark:text-gray-200 prose sm:prose-sm lg:prose-lg mx-auto;
}

.nuxt-content h1 {
  @apply mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl;
}

.nuxt-content h2 {
  @apply text-3xl text-center font-bold text-gray-900 dark:text-white;
}

.nuxt-content h3 {
  @apply block text-xl text-center text-orange-500 font-bold tracking-wide uppercase;
}

.nuxt-content h4 {
  @apply block text-xl text-GunMetal dark:text-gray-300 font-bold;
}

.nuxt-content h5 {
  @apply block text-xl text-orange-500 font-extrabold uppercase;
}

.nuxt-content p {
  @apply prose prose-sm lg:prose-lg xl:prose-xl leading-8 text-GunMetal dark:text-gray-300;
}

.nuxt-content ul, .nuxt-content ol {
  @apply prose prose-sm lg:prose-lg xl:prose-xl leading-8 text-GunMetal dark:text-gray-300;
}

.nuxt-content ul > li::before, .nuxt-content ol > li::before {
  @apply text-gray-800 dark:text-gray-200;
}

.nuxt-content hr {
  @apply w-3/5 mx-auto;
}

.nuxt-content .nuxt-link-active {
  @apply text-orange-500 dark:text-orange-500 underline font-bold hover:text-orange-600 dark-hover:text-orange-600;
}

.nuxt-content p a {
  @apply text-GunMetal dark:text-gray-300 underline hover:text-orange-600;
}

.nuxt-content a {
  @apply text-GunMetal dark:text-gray-300 underline hover:text-orange-600;
}

.nuxt-content strong {
  @apply leading-8 text-GunMetal dark:text-gray-300;
  font-weight: 700 !important;
}

:root {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html {
  @apply box-border text-white;
  height: 100%;
}

*,
*:before,
*:after {
  @apply box-border m-0;
}

/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply flex items-center text-center mx-auto;
}

#__layout,
#__nuxt {
  @apply h-full;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-GunMetal;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-GunMetalDk;
}

/* Track */
.dark-mode ::-webkit-scrollbar-track {
  @apply bg-white;
}

/* Handle */
.dark-mode ::-webkit-scrollbar-thumb {
  @apply bg-gray-600;
}

/* Handle on hover */
.dark-mode ::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-800;
}
</style>
