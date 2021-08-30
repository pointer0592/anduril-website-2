<template>
  <div class='bg-white dark:bg-GunMetal'>
    <div class='relative overflow-hidden'>
      <!-- Blog section -->
      <div class='relative py-24 sm:py-18 lg:py-30'>
        <div class='max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:pt-20 sm:pb-8 lg:max-w-7xl lg:pt-18 lg:px-8'>
          <h2 class='text-3xl font-extrabold text-GunMetal dark:text-white tracking-tight' data-aos="fade-up">
            Explore our Site
          </h2>
          <p class='mt-4 max-w-3xl text-lg text-gray-500 dark:text-gray-200' data-aos="fade-up">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam
            sit nisl euismod mattis in.
          </p>
        </div>
        <div
          class='mt-12 mx-auto max-w-full px-4 grid grid-cols-1 gap-8 md:gap-4 sm:max-w-5xl sm:px-6 lg:px-8 lg:grid-cols-4 md:grid-cols-2 lg:max-w-7xl'>
          <div v-for='card in discoverCards' :key='card.id' class='flex flex-col rounded-0 shadow-lg overflow-hidden'>
            <div class='flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p data-aos="fade-up" class='text-sm font-medium text-orange-600 my-0'>
                  <nuxt-link :to='card.link' class='hover:underline'>
                    {{ card.area }}
                  </nuxt-link>
                </p>
                <nuxt-link :to='card.link' class='block mt-1'>
                  <p data-aos="fade-up" class='text-xl font-semibold text-gray-900 dark:text-gray-100 my-0'>
                    {{ card.title }}
                  </p>
                  <p data-aos="fade-up" class='mt-1 text-base text-gray-500 dark:text-gray-400'>
                    {{ card.preview }}
                  </p>
                </nuxt-link>
              </div>
              <div data-aos="fade-up" class='inline-flex justify-end'>
                <nuxt-link :to='card.link'
                           class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
                  <span>go to {{ card.area }}</span>
                  <icon-arrow-right class='h-6 w-6 ml-2' />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import IconArrowRight from '~/assets/svg/arrow-right.svg?inline'

export default {
  name: 'DiscoverCards',
  components: {
    IconArrowRight
  },
  mixins: [aosMixin],
  props: {
    discoverCards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped />
