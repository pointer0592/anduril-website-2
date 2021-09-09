<template>
  <div
    class='bg-orange-100 dark:bg-GunMetalDk relative m-0 flex text-GunMetal dark:text-white rounded-0 shadow-lg hover:shadow-xl overflow-hidden'>
    <div class='w-full flex flex-col'>
      <div class='p-4 pb-0 flex-1'>
        <component :is='logoToggle' data-aos='fade-up' class='h-20 w-auto p-4' />
        <p data-aos='fade-up' class='font-futura text-xs text-center font-bold text-orange-500 uppercase pt-2'>
          {{ newsletter.category }}
</p>
        <h3 data-aos='fade-up'
            class='text-base text-center font-extrabold text-GunMetal dark:text-white leading-6'>
          {{ newsletter.title }}
</h3>
        <p data-aos='fade-up' class='text-xs text-center font-bold text-GunMetalLighter dark:text-gray-200 uppercase pb-4'>
          {{ newsletter.published | formatdate }}
</p>
      </div>
      <div class='border border-b-1 border-GunMetal' />

      <div class='bg-gray-50 dark:bg-gray-600 px-6 py-8 flex flex-col justify-between'>
        <p data-aos='fade-up' class='text-sm text-gray-500 dark:text-white'>{{ newsletter.description }}</p>
        <div data-aos='fade-up' class='inline-flex justify-end'>
          <nuxt-link :to="`/newsletters/${newsletter.slug}`"
                     class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
            <span>read</span>
            <arrow-right />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterCard',
  props: {
    newsletter: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    logoToggle() {
      return this.$colorMode.preference === 'light-mode' ? this.newsletter.logo : `${this.newsletter.logo}-dark`
    }
  }
}
</script>

<style scoped>

</style>
