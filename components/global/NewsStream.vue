<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='relative mx-auto divide-y-2 divide-gray-200 dark:divide-white lg:max-w-7xl'>
        <div>
          <h2 class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
            {{ newsTitle }}
          </h2>
          <div class='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
            <p class='text-xl text-gray-500 dark:text-gray-200'>
              {{ newsLead }}
            </p>
          </div>
        </div>
        <div class='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          <div v-for='link in newsStream' :key='link.title'>
              <p class='text-xl font-semibold text-GunMetal dark:text-white'>
                {{ link.title }}
              </p>
              <p class='text-xs font-semibold uppercase text-gray-500 dark:text-gray-200 mt-2'>
                <span class='font-bold'>Source:</span>&nbsp;<a :href="`www.${link.source}`" class='underline hover:text-gray-700 dark-hover:text-gray-50'>{{ link.source }}</a>&nbsp;&middot;&nbsp;<span class='font-bold'>Published:</span>&nbsp;{{ link.date | formatdate }}
              </p>
              <div class='border border-t border-1 border-orange-500 w-16 mt-4 mb-2'/>
              <p class='mt-3 text-base text-gray-500 dark:text-gray-200'>
                {{ link.description | truncate(200) }}
              </p>
            <div class='mt-3'>
              <a :href='link.href' class='text-base font-semibold text-orange-500 hover:text-orange-500'>
                Read full story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'newsStream',
  props: {
    newsTitle: {
      type: String,
      default: ''
    },
    newsLead: {
      type: String,
      default: ''
    },
    newsStream: {
      type: Array,
      default: () => []
    }
  }
}
</script>
