<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class='relative overflow-hidden'>

    <section>
      <div class='pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
        <div class='mx-auto max-w-7xl lg:px-8'>
          <div class='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div
              class='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
              <div class='lg:py-24'>
                <a href='#'
                   class='inline-flex items-center text-white bg-GunMetal rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                  <span
                    class='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-orange-500 rounded-full'>We're hiring</span>
                  <span class='ml-4 text-sm'>Visit our careers page</span>
                  <IconChevronRight class='ml-2 w-5 h-5 text-orange-500' aria-hidden='true' />
                </a>
                <h1
                  class='mt-4 text-4xl tracking-tight font-extrabold dark:text-white text-GunMetalDk sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span class='block'>A better way to</span>
                  <span class='block text-orange-500'>ship web apps</span>
                </h1>
                <p class='mt-3 text-base dark:text-gray-300 text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat.
                </p>
              </div>
            </div>
            <div class='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
              <div class='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                <client-only>
                <cld-image
                  :public-id='heroImg'
                  :alt='heroTitle'
                  quality='auto'
                  width='100%'
                  fetch-format='auto'
                  class='h-full w-full object-cover'
                  responsive
                  loading='lazy'
                >
                  <cld-placeholder type='blur' />
                </cld-image>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import IconChevronRight from '~/assets/svg/chevron-right.svg?inline'

export default {
  name: 'MainHero',
  components: {
    IconChevronRight
  },
  mixins: [aosMixin],
  props: {
    heroImg: {
      type: String,
      default: ''
    },
    heroTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false,
      sectionNames: process.env.navItems
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
