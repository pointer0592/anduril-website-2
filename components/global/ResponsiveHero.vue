<template>
  <div class='relative bg-white dark:bg-GunMetal overflow-hidden'>
    <div class='max-w-7xl mx-auto'>
      <div
        class='relative z-10 pb-8 bg-white dark:bg-GunMetal sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
        <svg
          class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-GunMetal transform translate-x-1/2'
          fill='currentColor' viewBox='0 0 100 100' preserveAspectRatio='none' aria-hidden='true'>
          <polygon points='50,0 100,0 50,100 0,100' />
        </svg>
        <main class='mt-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-40'>
          <div class='sm:text-center lg:text-left'>
            <h3 v-if='heroLead'
                class='mb-2 font-semibold uppercase mt-2 text-xs text-orange-500 sm:text-sm sm:max-w-xl sm:mx-auto md:text-sm lg:mx-0'>
              {{ heroLead }}
            </h3>
            <h1
              class='text-4xl tracking-tight font-extrabold text-GunMetal dark:text-white font-futura sm:text-5xl md:text-6xl'>
              <span class='block xl:inline'>{{ heroTitle }}</span>
              {{ ' ' }}
              <span v-if='heroTitleTwo' class='block font-futura text-orange-500 xl:inline'>{{ heroTitleTwo }}</span>
            </h1>
            <p v-if='heroCopy'
               class='mt-3 text-sm text-gray-500 dark:text-gray-200 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0'>
              {{ heroCopy }}
            </p>
            <div v-if='personName'
                 class='border border-t border-1 border-gray-300 w-20 my-6'
                 :class='divPlacement' />
            <div v-if='personName' class='text-base font-bold text-gray-200 hover:text-gray-300'
                 :class='divPlacement'>
              <span v-if="personTwoName&&isAnduril&&bio!==''">Authors:</span><span v-else>Author:</span>
              <nuxt-link v-if='isAnduril' :to="'/about/' + personImage"
                         class='hover:underline text-gray-200 hover:text-gray-300'>
                {{ personName }}
              </nuxt-link>
              <a v-if='!isAnduril&&bio' :href='bio'
                 target='_blank'
                 rel='noopener noreferrer'
                 class='hover:underline text-black text-gray-200 hover:text-gray-300'>
                {{ personName }}<span v-if='title'>,&nbsp;{{ title }}</span><span v-if='company'>
,&nbsp;{{ company
                }}
</span>
              </a>
              <span v-if="personName&&!isAnduril&&bio===''">{{ personName }}</span>
              <span v-if='personTwoName'>&</span>
              <nuxt-link v-if='personTwoName&&isAnduril2' :to="'/about/' + personTwoImage"
                         class='hover:underline text-gray-200 hover:text-gray-300'>
                {{ personTwoName }}
              </nuxt-link>
              <span v-if='personTwoName&&!isAnduril'>{{ personTwoName }}</span>
            </div>
            <p v-if='personName'
               class='mt-2 text-base font-bold text-gray-200 hover:text-gray-300'
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
        </main>
      </div>
    </div>
    <div class='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
      <nuxt-img
        provider='cloudinary'
        :src='heroImg'
        :alt='heroTitle'
        quality='auto'
        crop='fill'
        format='auto'
        class='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
        loading='lazy'
      />
      <span class='absolute inset-0 mix-blend-multiply' :class='mixBlendColor' />
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'ResponsiveHero',
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
    personImage: {
      type: String,
      default: ''
    },
    personTwoImage: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    title: {
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
    heroTitleTwo: {
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
      default: 'font-medium'
    },
    leadColors: {
      type: String,
      default: 'text-gray-200 hover:text-gray-300'
    },
    copyCase: {
      type: String,
      default: 'base'
    },
    copyWeight: {
      type: String,
      default: 'base'
    },
    copyColor: {
      type: String,
      default: 'text-gray-200 hover:text-gray-300'
    },
    isAnduril: {
      type: Boolean,
      default: true
    },
    isAnduril2: {
      type: Boolean,
      default: true
    },
    bio: {
      type: String,
      default: ''
    },
    mixBlendColor: {
      type: String,
      default: ''
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
      return this.full ? 'text-6xl lg:text-8xl tracking-wider' : 'text-6xl lg:text-6xl tracking-wide'
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
