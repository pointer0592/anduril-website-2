<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class='relative bg-orange-800'>
    <div class='absolute inset-0'>
      <client-only>
        <cld-image
          :public-id='imageSrc'
          :alt='imageSrc'
          quality='auto'
          fetch-format='auto'
          crop='fill'
          loading='lazy'
          class='w-full h-full object-cover'
        />
      </client-only>
      <div class='absolute inset-0 bg-GunMetal mix-blend-multiply' aria-hidden='true' />
    </div>
    <div class='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
      <h1 class='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>{{ title }}</h1>
      <p class='mt-6 text-xl font-bold text-orange-500 max-w-3xl'>{{ lead }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaBanner',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    }
  }
}
</script>
