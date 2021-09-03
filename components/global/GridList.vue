<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='bg-white dark:bg-GunMetal relative max-w-lg mx-auto divide-y-2 divide-gray-200 dark:divide-GunMetal lg:max-w-7xl'>
        <div class='pb-6'>
          <h2 class='text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
            {{ gridTitle }}
          </h2>
          <div class='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
            <p class='text-xl text-gray-500 dark:text-gray-200'>
              {{ gridLead }}
            </p>
          </div>
        </div>
        <div
          class='rounded-lg dark:bg-GunMetalDarker bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
          <div v-for='(gridItem, gridIndex) in gridItems' :key='gridItem.title' class='text-GunMetal dark:text-white'
               :class="[gridIndex === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', gridIndex === 1 ? 'sm:rounded-tr-lg' : '', gridIndex === gridItems.length - 2 ? 'sm:rounded-bl-lg' : '', gridIndex === gridItems.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group dark:bg-GunMetalLt bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500']">
            <div>
        <span
          :class="[gridItem.iconBackground, gridItem.iconForeground, 'rounded-lg inline-flex p-3']">
          <v-icon :name='gridItem.icon' class='h-6 w-6' aria-hidden='true' />
        </span>
            </div>
            <div class='mt-8'>
              <h3 class='text-lg font-medium'>
                <a :href='gridItem.href' class='focus:outline-none'>
                  <!-- Extend touch target to entire panel -->
                  <span class='absolute inset-0' aria-hidden='true' />
                  {{ gridItem.title }}
                </a>
              </h3>
              <p class='mt-2 text-sm text-gray-500 dark:text-gray-200'>
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis
                et quo et molestiae.
              </p>
            </div>
            <span class='pointer-events-none absolute top-6 right-6 text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-100 group-hover:text-gray-700'
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
import VIcon from '~/components/global/VIcon'

export default {
  name: 'GridList',
  components: { VIcon },
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
