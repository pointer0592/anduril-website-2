<template>
  <div>
    <div class='bg-white dark:bg-GunMetal overflow-hidden mt-24'>
      <div class='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div
          class='hidden lg:block bg-gradient-to-b from-gray-50 dark:bg-gradient-to-b dark:from-GunMetalDarker dark:to-GunMetal absolute top-0 bottom-0 left-3/4 w-screen' />
        <div class='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
          <div class='mt-4'>
            <nuxt-link to='/about' class='text-lg font-bold text-GunMetal dark:text-white underline hover:text-gray-600 dark-hover:text-gray-200'>
              Back to Team
            </nuxt-link>
            <h2 class='font-futura mt-8 text-base  text-orange-500 font-semibold tracking-wide uppercase'>
              {{ bio.name }}
            </h2>
            <h3 class='font-futura mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              {{ bio.role }}
            </h3>
          </div>
        </div>
        <div class='mt-4 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div class='relative lg:row-start-1 lg:col-start-2'>
            <svg
              class='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
              width='404'
              height='384'
              fill='bg-gray-200'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x='0'
                  y='0'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x='0'
                    y='0'
                    width='4'
                    height='4'
                    class='text-gray-200 dark:text-GunMetalLt'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width='404' height='384' fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
            </svg>
            <div class='relative text-base mx-auto max-w-prose lg:max-w-none'>
              <figure>
                <div class='aspect-w-12 aspect-h-7 lg:aspect-none'>
<nuxt-img
                    provider="cloudinary"
:src="'/team-headshots/' + bio.image"
                    :alt='bio.name'
                    quality='auto'
                    format='jpg'
                    loading='lazy'
                    class='rounded-lg shadow-lg object-cover object-center'
                  />
</div>
              </figure>
            </div>
          </div>
          <div class='mt-8 lg:mt-0'>
            <div class='nuxt-content text-base mx-auto lg:max-w-none text-gray-500 leading-6'>
              <nuxt-content :document='bio' />
              <div class='mt-4'>
                <span class='mr-4'>Connect with {{ bio.name.substring(0, bio.name.indexOf(' ')) }}: </span>
                <a :href='bio.linkedinProfileLink' target='_blank' class='cursor-pointer'>
                  <span class='sr-only'>LinkedIn</span>
                  <LinkedInLogoIcon
                    class='mb-2 w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact-form />
  </div>
</template>

<script>
import LinkedInLogoIcon from '~/assets/svg/linkedin.svg?inline'

export default {
  components: {
    LinkedInLogoIcon
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  async asyncData({ $content, params }) {
    const bio = await $content('bios', params.bio).fetch()
    return {
      bio
    }
  }
}
</script>
