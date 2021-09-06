<template>
    <div :id='mainContent.title' class='mt-24'>
      <div class='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
        <div class='px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0' :class='contentPlacement'>
          <div>
            <div>
              <span v-if='mainContent.icon' class='h-12 w-12 rounded-md flex items-center justify-center bg-orange-500'>
                <v-icon :name="mainContent.icon" class='h-6 w-6 text-white' aria-hidden='true' />
              </span>
            </div>
            <div class='mt-6'>
              <h2 data-aos='fade-up' class='font-futura text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200'>
                {{ mainContent.title }}
              </h2>
              <p data-aos='fade-up' class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                {{ mainContent.text }}
              </p>
              <ul v-if="mainContent.tag==='li'">
              <component :is='mainContent.tag' v-if='mainContent.text2' data-aos='fade-up' :class='listClasses' class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                {{ mainContent.text2 }}
              </component>
              <component :is='mainContent.tag' v-if='mainContent.text3' data-aos='fade-up' :class='listClasses' class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                {{ mainContent.text3 }}
              </component>
              <component :is='mainContent.tag' v-if='mainContent.text4' data-aos='fade-up' :class='listClasses' class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                {{ mainContent.text4 }}
              </component>
              </ul>
              <div v-if='mainContent.btnCopy' data-aos='fade-up' class='mt-6'>
                <nuxt-link :to="'/' + mainContent.btnLink"
                           class='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600'>
                  {{ mainContent.btnCopy }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div v-if='mainContent.quote' data-aos='fade-up'
               class='mt-8 border-t border-GunMetal dark:border-gray-200 pt-6'>
            <blockquote>
              <div>
                <p class='text-base text-gray-500 dark:text-gray-400'>
                  "{{ mainContent.quote }}"
                </p>
              </div>
              <footer class='mt-3'>
                <div class='flex items-center space-x-3'>
                  <div class='text-base font-medium text-gray-700 dark:text-gray-300'>
                    {{ mainContent.quoteNameTitle }}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div data-aos='imageFade' class='mt-12 sm:mt-16 lg:mt-0' :class='imageOrder'>
          <div :class='[ imagePlacement ]'>

            <v-cloud-image
              v-if='!left&&offScreen'
              :public-id='mainContent.imgSrc'
              :alt='mainContent.imgSrc'
              cloud-quality='auto'
              cloud-fetch-format='auto'
              class='lg:absolute lg:left-0 w-full lg:h-full lg:w-auto lg:max-w-none'
              cloud-loading='lazy'
                    :class='[ isRounded, hasRing ]'
            :cloud-is-responsive=false
          cloud-placeholder='blur'
            />


            <v-cloud-image
              v-if='left&&offScreen'
              :public-id='mainContent.imgSrc'
              :alt='mainContent.imgSrc'
              cloud-quality='auto'
              cloud-fetch-format='auto'
              cloud-classes='lg:absolute lg:right-0 w-full lg:h-full lg:w-auto lg:max-w-none'
              cloud-loading='lazy'
                    :class='[ isRounded, hasRing ]'
              :cloud-is-responsive=false
          cloud-placeholder='blur'
            />


            <v-cloud-image
              v-if='left&&!offScreen'
              :public-id='mainContent.imgSrc'
              :alt='mainContent.imgSrc'
              cloud-quality='auto'
              cloud-fetch-format='auto'
              class='lg:relative w-full lg:h-full lg:w-auto lg:max-w-none'
              cloud-loading='lazy'
                    :class='[ isRounded, hasRing ]'
          cloud-placeholder='blur'
            />


            <v-cloud-image
              v-if='!left&&!offScreen'
              :public-id='mainContent.imgSrc'
              :alt='mainContent.imgSrc'
              cloud-quality='auto'
              fetch-format='80'
              class='lg:relative w-full lg:h-full lg:w-auto lg:max-w-none'
              cloud-loading='lazy'
                    :class='[ isRounded, hasRing ]'
          cloud-placeholder='blur'
            />

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import slugify from 'slugify'
import aosMixin from '~/mixins/aos'

export default {
  name: 'ContentImageHorizontal',
  mixins: [aosMixin],
  props: {
    mainContent: {
      type: Object,
      default: () => {
      }
    },
    left: {
      type: Boolean,
      default: false
    },
    ring: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    offScreen: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    listClasses() {
      return this.mainContent.tag === 'li' ? 'list-inside list-disc' : ''
    },
    contentPlacement() {
      return this.left ? 'lg:py-32 lg:col-start-2' : 'lg:py-16'
    },
    imagePlacement() {
      return this.left ? 'pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:h-full lg:relative' : 'pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:h-full lg:relative'
    },
    imageOrder() {
      return this.left ? 'lg:start-col-1' : ''
    },
    hasRing() {
      return this.ring ? 'shadow-xl ring-1 ring-black dark:ring-white ring-opacity-5' : ''
    },
    isRounded() {
      return this.rounded ? 'rounded-xl shadow-xl' : ''
    },
    imageFade() {
      return this.left ? 'fade-right' : 'fade-left'
    },
    slug () {
      return slugify(this.mainContent.title, { lower: true })
    }
  }
}
</script>
