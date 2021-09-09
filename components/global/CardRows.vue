<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='relative mx-auto divide-y-2 divide-gray-200 dark:divide-white lg:max-w-7xl'>
        <div>
          <h2 v-if='cardTitle' class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
            {{ cardTitle }}
          </h2>
          <slot name='title' />
          <template slot='lead'>
          <div  v-if='cardLead' class='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
            <p class='text-xl text-gray-500 dark:text-gray-200'>
              {{ cardLead }}
            </p>
          <slot name='lead' />
          </div>
          </template>
        </div>
        <div
          class='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-full grid grid-cols-1 sm:max-w-5xl md:grid-cols-2 lg:max-w-7xl'
        :class='largeGrid'>
          <div v-for='card in cardItems' :key='card.id' class='flex flex-col rounded-0 shadow-lg overflow-hidden'>
            <div class='flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <nuxt-link v-if='card.areaLink' :to='card.areaLink'>
                <p data-aos='fade-up' class='text-sm font-medium text-orange-600 my-0'>
                  {{ card.area }}
                </p>
                </nuxt-link>
                <p v-else data-aos='fade-up' class='text-sm font-medium text-orange-600 my-0'>
                  {{ card.area }}
                </p>
                <div class='block mt-1'>
                  <p data-aos='fade-up' class='font-futura text-xl font-bold text-gray-900 dark:text-gray-100 my-0'>
                    {{ card.title }}
                  </p>
                  <p data-aos='fade-up' class='mt-1 text-base text-gray-500 dark:text-gray-400'>
                    {{ card.description }}
                  </p>
                </div>
              </div>
              <div v-if='card.readMore' data-aos='fade-up' class='inline-flex justify-end'>
                <nuxt-link v-if='card.link' :to="card.link">
                  <p data-aos='fade-up'
                     class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent underline'>
                    learn more...
</p>
                </nuxt-link>
                <nuxt-link v-else :to="card.slug">
                  <p data-aos='fade-up'
                     class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent underline'>
                    learn more...
</p>
                </nuxt-link>
              </div>
              <div v-else data-aos='fade-up' class='inline-flex justify-end mt-2'>
                <nuxt-link v-if='card.tgt' :to="`${card.path}`"
                           class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
                  <span v-if='card.linkLabel'>to&nbsp;{{ card.linkLabel }}</span>
                  <span v-else>to&nbsp;{{ card.title }}</span>
                  <arrow-right />
                </nuxt-link>
                <nuxt-link v-else :to="`${card.prePath}${card.slug}`"
                           class='inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent'>
                  <span v-if='card.linkLabel'>to&nbsp;{{ card.linkLabel }}</span>
                  <span v-else>to&nbsp;{{ card.title }}</span>
                  <arrow-right />
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
import ArrowRight from '~/components/global/ArrowRight'

export default {
  name: 'CardRows',
  components: { ArrowRight },
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
