<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class='bg-white dark:bg-GunMetal'>
    <div class='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
      <div class='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div>
          <h2 class='text-3xl font-extrabold text-GunMetal dark:text-white' data-aos="fade-up">
            {{ title }}
          </h2>
          <p v-if='blurb' class='mt-4 text-lg text-gray-500 dark:text-gray-200' data-aos="fade-up">Can’t find the answer you’re looking for? Reach out to our <a href="mailto:info@andurilpartners.ai?subject=Question%20for%20Anduril%20Partners"
                                                                                                              target="_blank" class='font-medium text-orange-500 hover:text-orange-700'>{{ blurb }}</a> team.</p>
        </div>
        <div class='mt-12 lg:mt-0 lg:col-span-2'>
          <dl class='space-y-12'>
            <div v-for='item in items' :key='item.issue'>
              <dt class='text-lg leading-6 font-medium text-GunMetal dark:text-white' data-aos="fade-up">
                {{ item.issue }}
              </dt>
              <dd class='mt-2 text-base text-gray-500 dark:text-gray-200' data-aos="fade-up">
                {{ item.response }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'ExpandableList',
  mixins: [aosMixin],
  props: {
    blurb: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>
