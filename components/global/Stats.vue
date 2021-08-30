<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class='bg-gray-50 dark:bg-GunMetalLt pt-12 sm:pt-16'>
      <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='max-w-4xl mx-auto text-center'>
          <h2 class='text-3xl font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
            {{ header }}
          </h2>
          <p class='mt-3 text-xl text-gray-500 dark:text-gray-200 sm:mt-4'>
            {{ lead }}
          </p>
        </div>
      </div>
      <div class='mt-10 pb-12 bg-white dark:bg-GunMetal sm:pb-16'>
        <div class='relative'>
          <div class='absolute inset-0 h-1/2 bg-gray-50 dark:bg-GunMetalLt' />
          <div class='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div  data-aos="fade-up" class='max-w-4xl mx-auto'>
              <dl class='rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                <div v-for='stat in stats' :key='stat.label'
                     class='flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r'>
                  <dt class='order-2 mt-2 text-lg leading-6 font-medium text-gray-500'>
                    {{ stat.label }}
                  </dt>
                  <dd class='order-1 text-5xl font-extrabold text-orange-500'>
                    {{ stat.number }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'Stats',
  mixins: [aosMixin],
  props: {
    header: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    },
    stats: {
      type: Array,
      required: true
    }
  }
}
</script>
