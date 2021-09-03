<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class='relative bg-gray-900'>
    <div class='relative h-56 bg-GunMetal dark:bg-GunMetalDk sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
      <img class='w-full h-full object-cover'
           src='https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1629404515/insights/esg-cover-website.jpg'
           alt='' />
    </div>
    <div class='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
      <div class='md:ml-auto md:w-1/2 md:pl-10'>
        <h2 class='text-base font-semibold uppercase tracking-wider text-gray-300'>
          Anduril Resource Center
        </h2>
        <p class='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
          We’re here to help
        </p>
        <p class='mt-3 text-lg text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
          scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
          duis.
        </p>
        <div class='mt-8'>
          <div class='inline-flex rounded-md shadow'>
            <nuxt-link to='/resources/esg-resource-center'
               class='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'>
              Visit our ESG Resources
              <v-icon name='external-link' class='-mr-1 ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
      export default {
        name: 'MediaBanner',
        props: {
          imageSrc: {
            type: String,
            default: ''
          },
          title: {
            type: String,
            default: ''
          },
          lead: {
            type: String,
            default: ''
          }
        }
      }
    </script>
