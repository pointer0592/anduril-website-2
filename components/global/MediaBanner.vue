<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class='relative bg-gray-900'>
    <div class='relative h-56 bg-GunMetal dark:bg-GunMetalDk sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
      <img class='w-full h-full object-cover'
           :src='mediaBanner.image'
           :alt='mediaBanner.title' />
    </div>
    <div class='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
      <div class='md:ml-auto md:w-1/2 md:pl-10'>
        <h2 class='font-futura text-base font-semibold uppercase tracking-wider text-gray-300'>
          {{ mediaBanner.mediaCaption }}
        </h2>
        <p class='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
          {{ mediaBanner.title }}
        </p>
        <p class='mt-3 text-lg text-gray-300'>
          {{ mediaBanner.copy }}
        </p>
        <div class='mt-8'>
          <div class='inline-flex rounded-md shadow'>
            <nuxt-link :to="mediaBanner.link"
                       class='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'>
              {{ mediaBanner.linkLabel }}
              <v-icon name='external-link' class='-mr-1 ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaBanner',
  props: {
    mediaBanner: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
