<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal pt-2 pb-4 px-4 sm:px-6 lg:px-8 my-8'>
      <div class='relative mx-auto divide-y-2 divide-orange-500 dark:divide-orange-500 divide-opacity-25 dark:divide-opacity-25 lg:max-w-7xl'>
        <h3 class='font-futura text-2xl text-GunMetal dark:text-white'>{{ cardTitle }}</h3>
        <div
          class='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-full grid grid-cols-1 sm:max-w-5xl md:grid-cols-2 lg:max-w-7xl'
          :class='largeGrid'>
          <div v-for='card in cardItems' :key='card.id' class='flex flex-col rounded-0 shadow-lg overflow-hidden'>
            <div class='flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p v-if='card.area' data-aos='fade-up' class='text-sm font-medium text-orange-600 my-0'>
                  {{ card.area }}
                </p>
                <div class='block mt-1'>
                  <p data-aos='fade-up' class='text-xl font-futura font-bold text-gray-900 dark:text-gray-100 my-0'>
                    {{ card.title }}
                  </p>
                  <p v-if='card.description' data-aos='fade-up' class='mt-1 text-base text-gray-500 dark:text-gray-400'>
                    {{ card.description }}
                  </p>
                </div>
              </div>
              <div data-aos='fade-up' class='inline-flex justify-end mt-2'>
                <a v-if='card.link&&card.linkLabel' :href='card.link'
                   class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
                  <v-icon name='external-link' class='h-6 w-6 ml-2' />
                  <span>{{ card.linkLabel }}</span>
                </a>
                <nuxt-link v-if='card.internalLink&&card.linkLabel' :to='card.internalLink'
                           class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
                  <v-icon name='external-link' class='h-6 w-6 ml-2' />
                  <span>{{ card.linkLabel }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'SmallCardRows',
  mixins: [aosMixin],
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    cardLead: {
      type: String,
      default: ''
    },
    cardItems: {
      type: Array,
      required: true
    },
    largeGridCols: {
      type: String,
      default: '3'
    }
  },
  computed: {
    largeGrid() {
      return `lg:grid-cols-${this.largeGridCols}`
    }
  }
}
</script>
