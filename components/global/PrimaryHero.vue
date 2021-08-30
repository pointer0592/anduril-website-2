<template>
  <section class=''>
    <div class='relative' :style='heroSize'>
      <!-- Hero card -->
      <div class='max-w-full mx-auto'>
        <div class='absolute inset-0'>
          <cld-image
            v-if='heroImg&&!isMockup'
            :public-id='heroImg'
            :alt='heroTitle'
            quality='auto'
            crop='fill'
            fetch-format='auto'
            class='h-full w-full object-cover z-1'
            responsive
            loading='lazy'
          />
          <div class='absolute inset-0 bg-gray-500 mix-blend-multiply' />
        </div>

      </div>
      <div class='pb-36 my-auto h-full'>
        <div
          class='relative xl:px-32 lg:px-24 px-4 max-w-full flex flex-col justify-end bg-GunMetal dark:bg-white bg-transparent dark:bg-transparent h-full'
          :class='sectionAlignment'
        >
          <h1 class='font-extrabold'
              :class='[ textPlacement, primaryTextSize ]'>
            <span class='block text-white'>{{ heroTitle }}</span>
          </h1>
          <p v-if='heroLead'
             class='mt-4 text-orange-500 font-bold'
             :class='[ heroLeadClasses, textPlacement, leadTextSize ]'>
            {{ heroLead }}
          </p>
          <p v-if='heroCopy'
             class='mt-6 max-w-md text-gray-200 font-medium text-sm lg:text-base'
             :class='[ heroCopyClasses, textPlacement ]'>
            {{ heroCopy }}
          </p>
          <div v-if='personName'
               class='border border-t border-1 border-gray-300 w-20 my-6'
               :class='divPlacement' />
          <div v-if='personName' class='text-base font-bold text-gray-200 hover:text-gray-300'
               :class='divPlacement'>
            <span v-if='personTwoName'>Authors:</span><span v-else>Author:</span>
            <nuxt-link :to="'/bios/' + personNameSlug"
                       class='hover:underline text-gray-200 hover:text-gray-300'>
              {{ personName }}
            </nuxt-link>
            <span v-if='personTwoName'>&</span>
            <nuxt-link v-if='personTwoName' :to="'/bios/' + personTwoNameSlug"
                       class='hover:underline text-gray-200 hover:text-gray-300'>
              {{ personTwoName }}
            </nuxt-link>
          </div>
          <slot />
          <p v-if='personName'
             class='mt-2 text-base font-bold text-gray-200'
             :class='textPlacement'>
            <span class='text-base font-bold'>Published:</span> {{ published | formatdate }}
            <span aria-hidden='true'>
                          &middot;
                        </span>
            <span class='text-base font-bold'> {{ readingTime | formattime }} min read </span>
          </p>
          <div v-if='heroLinkCopy' class='mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center'
               :class='divPlacement'
          >
            <nuxt-link v-if="heroLinkType==='nuxt'" :to='heroLinkPath'
                       class='flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8'>
              {{ heroLinkCopy }}
            </nuxt-link>
            <a v-if="heroLinkType==='href'" :href='heroLinkPath'
               class='flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8'>
              {{ heroLinkCopy }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slugify from 'slugify'
import aosMixin from '~/mixins/aos'

export default {
  name: 'PrimaryHero',
  mixins: [aosMixin],
  props: {
    center: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    videoSrc: {
      type: String,
      default: ''
    },
    smallMockupImg: {
      type: String,
      default: ''
    },
    personName: {
      type: String,
      default: ''
    },
    personTwoName: {
      type: String,
      default: ''
    },
    readingTime: {
      type: Number,
      default: 0
    },
    published: {
      type: String,
      default: ''
    },
    heroImg: {
      type: String,
      default: ''
    },
    heroImgBlend: {
      type: String,
      default: 'screen'
    },
    heroTitle: {
      type: String,
      default: ''
    },
    heroCopy: {
      type: String,
      default: ''
    },
    heroLead: {
      type: String,
      default: ''
    },
    heroLinkType: {
      type: String,
      default: 'nuxt'
    },
    heroLinkCopy: {
      type: String,
      default: ''
    },
    heroLinkPath: {
      type: String,
      default: '/'
    },
    leadCase: {
      type: String,
      default: 'uppercase'
    },
    leadWeight: {
      type: String,
      default: 'sm'
    },
    leadColors: {
      type: String,
      default: 'text-gray-200'
    },
    copyCase: {
      type: String,
      default: 'base'
    },
    copyWeight: {
      type: String,
      default: 'base'
    },
    copyColors: {
      type: String,
      default: 'text-gray-200'
    },
    isMockup: { type: Boolean, default: false }
  },
  data() {
    return {
      isOpen: false,
      sectionNames: process.env.navItems,
      view: {
        atTopOfPage: true
      }
    }
  },
  computed: {
    primaryTextSize() {
      return this.full ? 'text-6xl lg:text-8xl tracking-wider' : 'text-4xl lg:text-6xl tracking-wide'
    },
    leadTextSize() {
      return this.full ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'
    },
    sectionAlignment() {
      return this.center ? 'items-center' : ''
    },
    textPlacement() {
      return this.center ? 'text-center' : ''
    },
    divPlacement() {
      return this.center ? 'mx-auto' : 'mr-auto'
    },
    heroSize() {
      return this.full ? { 'height': '100vh' } : { 'height': '80vh' }
    },
    personNameSlug() {
      return slugify(this.personName).toLowerCase()
    },
    personTwoNameSlug() {
      return slugify(this.personTwoName).toLowerCase()
    },
    heroCopyClasses() {
      const { copyCase, copyWeight } = this
      const heroCopyClasses = []

      switch (copyCase) {
        case 'uppercase':
          heroCopyClasses.push(`uppercase`)
          break
        case 'base':
        default:
          heroCopyClasses.push(``)
      }

      switch (copyWeight) {
        case 'light':
          heroCopyClasses.push(`font-light`)
          break
        case 'medium':
          heroCopyClasses.push(`font-medium`)
          break
        case 'semibold':
          heroCopyClasses.push(`font-semibold`)
          break
        case 'bold':
          heroCopyClasses.push(`font-bold`)
          break
        case 'extrabold':
          heroCopyClasses.push(`font-extrabold`)
          break
        case 'base':
        default:
          heroCopyClasses.push(`font-medium`)
      }

      return heroCopyClasses

    },
    heroLeadClasses() {
      const { leadCase, leadWeight } = this
      const heroLeadClasses = []

      switch (leadCase) {
        case 'lowercase':
          heroLeadClasses.push(``)
          break
        case 'base':
        default:
          heroLeadClasses.push(`uppercase`)
      }

      switch (leadWeight) {
        case 'light':
          heroLeadClasses.push(`font-light`)
          break
        case 'medium':
          heroLeadClasses.push(`font-medium`)
          break
        case 'semibold':
          heroLeadClasses.push(`font-semibold`)
          break
        case 'bold':
          heroLeadClasses.push(`font-bold`)
          break
        case 'extrabold':
          heroLeadClasses.push(`font-extrabold`)
          break
        case 'base':
        default:
          heroLeadClasses.push(`font-medium`)
      }

      return heroLeadClasses

    }
  }
}
</script>
