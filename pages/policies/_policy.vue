<template>
  <div>
    <primary-hero
      hero-img='/hero-images/chess'
      hero-title='Our Policies'
      :hero-lead='page.title'
      lead-color='orange'
      lead-weight='extrabold'
      center
    >
      <div class='mt-2 pb-20'>
        <p class='text-center text-sm leading-loose text-gray-200'>
          Effective Date: {{ page.effective | formatdate }}
        </p>
        <p class='text-center text-sm leading-loose text-gray-200'>
          Reading time approx: {{ page.readingTime | formattime }} min read
        </p>
      </div>
    </primary-hero>
    <div>
      <div class='relative py-6 text-gray-600 dark:text-gray-200 bg-white dark:bg-GunMetal overflow-hidden'>
        <div data-aos='fade-up' class='mx-auto py-6 px-4 sm:px-6 lg:px-8 px-4 nuxt-content' aria-hidden='true'>
          <nuxt-link to='/' class='text-orange-500 underline hover:text-orange-600'>
            home
          </nuxt-link>
        </div>
        <div data-aos='fade-up' class='mx-auto py-12 px-4 sm:px-6 lg:py-30 lg:px-8 px-4 nuxt-content'
             aria-hidden='true'>
          <nuxt-content :document='page' />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ params, $content }) {
    const page = await $content('policies', params.policy).fetch()
    return {
      page
    }
  }
}
</script>
