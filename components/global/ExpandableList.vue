<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='relative mx-auto divide-y-2 divide-orange-500 dark:divide-orange-500 divide-opacity-25 dark:divide-opacity-25 lg:max-w-7xl'>
        <h2 class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
          {{ expandableTitle }}
        </h2>
        <div class='mt-6 pt-10'>
          <dl class='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12'>
            <div v-for='item in expandableItems' :key='item.id'>
              <dt class='text-lg leading-6 font-medium text-GunMetal dark:text-white'>
                {{ item.question }}
              </dt>
              <dd class='mt-2 text-base text-orange-500'>
                {{ item.answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'ExpandableList',
  mixins: [aosMixin],
  props: {
    expandableTitle: {
      type: String,
      default: 'Frequently Asked Questions'
    },
    expandableLead: {
      type: String,
      default: ''
    },
    expandableItems: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>
