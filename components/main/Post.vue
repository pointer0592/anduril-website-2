<template>
  <div>
    <div class='relative py-6 text-gray-600 dark:text-gray-200 bg-white dark:bg-GunMetal overflow-hidden'>
      <div data-aos="fade-up" class='mx-auto py-6 px-4 sm:px-6 lg:px-8 px-4 nuxt-content' aria-hidden='true'>
        <nuxt-link to='/posts' class='text-orange-500 underline hover:text-orange-600'>
          Back to Posts
        </nuxt-link>
      </div>
      <div data-aos="fade-up" class='mx-auto py-12 px-4 sm:px-6 lg:py-30 lg:px-8 px-4 nuxt-content' aria-hidden='true'>
        <nuxt-content :document='post' />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'Post',
  mixins: [aosMixin],
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
</style>
