<template>
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='font-futura text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>
            {{ gridTitle }}
            </h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>
              {{ gridLead }}
            </p>
          </div>
        <div
          class='rounded-0 overflow-hidden shadow divide-y sm:divide-y-0 divide-gray-200 sm:grid sm:grid-cols-2 sm:gap-px'>
          <div v-for='(gridItem, gridIndex) in gridItems' :key='gridItem.title' class='text-GunMetal'
               :class="[gridIndex === 0 ? 'rounded-0 rounded-0 sm:rounded-0' : '', gridIndex === 1 ? 'sm:rounded-0' : '', gridIndex === gridItems.length - 2 ? 'sm:rounded-0' : '', gridIndex === gridItems.length - 1 ? 'rounded-0 rounded-0 sm:rounded-0' : '', 'relative group dark:bg-GunMetalDk bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500']">
            <div>
        <span
          class="dark:bg-GunMetalLt text-orange-500 bg-orange-50 rounded-lg inline-flex p-3">
          <component :is='gridItem.icon' class='h-6 w-6' aria-hidden='true' />
        </span>
            </div>
            <div class='mt-8'>
              <h3 class='font-futura text-lg font-medium'>
                <nuxt-link :to='gridItem.href' class='focus:outline-none text-GunMetal dark:text-white'>
                  <!-- Extend touch target to entire panel -->
                  <span class='absolute inset-0' aria-hidden='true' />
                  {{ gridItem.title }}
                </nuxt-link>
              </h3>
              <p class='mt-2 text-sm text-gray-500 dark:text-gray-200'>
                {{ gridItem.copy }}
              </p>
            </div>
            <span class='pointer-events-none absolute top-6 right-6 text-GunMetal dark:text-gray-300 dark:hover:text-gray-100 group-hover:text-gray-500'
                  aria-hidden='true'>
        <svg class='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
          <path
            d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
        </svg>
      </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'GridList',
  props: {
    gridTitle: {
      type: String,
      default: ''
    },
    gridLead: {
      type: String,
      default: ''
    },
    gridItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
