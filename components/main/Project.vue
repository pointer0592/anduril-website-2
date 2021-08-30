<template>
  <div class='relative bg-white dark:bg-GunMetal py-8 overflow-hidden'>
    <div class='relative'>
      <div class='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
        <div class='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
          <div>
            <div>
              <span class='h-12 w-12 rounded-md flex items-center justify-center bg-orange-500'>
                <icon-share class='h-6 w-6 text-white' aria-hidden='true' />
              </span>
            </div>
            <div class='mt-6'>
              <h2 data-aos="fade-up" class='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200'>
                {{ title }}
              </h2>
              <p data-aos="fade-up" class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                {{ text }}
              </p>
              <p data-aos="fade-up" class='mt-4 text-lg font-semibold text-gray-500 dark:text-gray-400'>
                {{ text2 }}
              </p>
              <div data-aos="fade-up" class='mt-6'>
                <nuxt-link to='/services'
                           class='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600'>
                  Learn More
                </nuxt-link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class='mt-8 border-t border-gray-200 dark:border-gray-800 pt-6'>
            <blockquote>
              <div>
                <p class='text-base text-gray-500 dark:text-gray-400'>
                  &ldquo;Anduril has helped us source all of our data, on board it into our environment, and has helped
                  us build powerful API's&rdquo;
                </p>
              </div>
              <footer class='mt-3'>
                <div class='flex items-center space-x-3'>
                  <div class='flex-shrink-0'>
                    <icon-sam class='h-6 w-6 rounded-full' alt='avatar' />
                  </div>
                  <div class='text-base font-medium text-gray-700 dark:text-gray-300'>
                    Sam Levinson, CEO, The Arbor Group
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div data-aos="fade-left" class='mt-12 sm:mt-16 lg:mt-0'>
          <div class='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
            <mockup class='w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none' :img-src='imgSrc'
                    :mobile-img-src='mobileImgSrc' />
          </div>
        </div>
      </div>
    </div>
    <div class='mt-24'>
      <div data-aos="fade-up" class='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
        <div class='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
          <div>
            <div>
              <span class='h-12 w-12 rounded-md flex items-center justify-center bg-orange-500'>
                <icon-user-group class='h-6 w-6 text-white' aria-hidden='true' />
              </span>
            </div>
            <div class='mt-6'>
              <h2 class='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200'>
                Better understand your customers
              </h2>
              <p class='mt-4 text-lg text-gray-500 dark:text-gray-400'>
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                viverra dui tellus ornare pharetra.
              </p>
              <div class='mt-6'>
                <nuxt-link to='/'
                           class='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600'>
                  Get started
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
          <div class='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
            <img
              class='w-full rounded-xl shadow-xl ring-1 ring-black dark:ring-white ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
              data-aos="fade-right" :src='imgSrc' alt='Customer profile user interface'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import aosMixin from '~/mixins/aos'
import IconSam from '~/static/images/clients/headshots/sam_levinson.svg?inline'
import IconShare from '~/assets/svg/share.svg?inline'
import IconUserGroup from '~/assets/svg/user-group.svg?inline'

export default {
  name: 'Project',
  components: {
    IconShare,
    IconUserGroup,
    IconSam
  },
  mixins: [aosMixin],
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    videoSrc: {
      type: String,
      default: ''
    },
    mobileImgSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    text2: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    imgName: {
      type: String,
      default: ''
    },
    imgCaption: {
      type: String,
      default: ''
    },
    isMockup: { type: Boolean, default: false },
    isPadded: { type: Boolean, default: false },
    isCover: { type: Boolean, default: false }
  },
  data() {
    return {
      imgData: '/images/landing-page/' + this.imgName + '.jpg'
    }
  },
  computed: {
    slug() {
      return slugify(this.title, { lower: true })
    }
  }
}
</script>
