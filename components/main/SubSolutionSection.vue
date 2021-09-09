<template>
  <div>
    <section class='relative overflow-hidden'>
      <div class='bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-6 sm:py-24'>
        <div class='relative mx-auto lg:max-w-5xl'>
          <div
            class='mx-auto pt-8 pb-12 px-4 sm:px-0 sm:pb-16 lg:max-w-3xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8'
            data-aos='fade-up'>
            <div class='lg:col-start-1'>
              <h2 id='features-heading2' class='font-futura font-medium text-orange-500' data-aos='fade-up'>
                {{ solution.tagline }}
</h2>
              <p
                class='font-futura mt-2 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight'
                data-aos='fade-up'>
{{ solution.title }}
</p>
              <div class='border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16' />
              <p class='mt-4 text-xl font-semibold text-gray-500 dark:text-gray-200' data-aos='fade-up'>{{ solution.description }}</p>
              <div v-if="solution.body.title!==''">
                <p v-for='(para, index) in solution.body' :key='`para-${index}`'
                   class='mt-4 text-lg text-gray-500 dark:text-gray-200' data-aos='fade-up'>
{{ para }}
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import aosMixin from '~/mixins/aos'

export default {
  name: 'SubSolutionSection',
  mixins: aosMixin,
  props: {
    solution: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>
