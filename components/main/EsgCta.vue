<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-GunMetal dark:bg-white">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-30 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 data-aos="fade-up" class="font-futura font-bold tracking-tight">
        <span class="block text-4xl mb-2 text-white dark:text-GunMetal ">Need help developing an ESG strategy?</span>
        <span class="block text-2xl text-orange-500">We've got you covered.</span>
      </h2>
      <div data-aos="fade-up" class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-0 shadow">
          <nuxt-link to="/" class="inline-flex items-center justify-center px-5 pt-3 pb-2 border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 dark:text-orange-500 dark:text-orange-500 bg-white dark-hover:text-orange-700 hover:text-orange-700">
            <span>Learn more</span>
            <icon-arrow-right class='h-6 w-6 ml-2'/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import IconArrowRight from '~/assets/svg/arrow-right.svg?inline'
export default {
  name: 'EsgCta',
  components: {
    IconArrowRight
  },
  mixins: [aosMixin]
}
</script>

<style scoped>

</style>
