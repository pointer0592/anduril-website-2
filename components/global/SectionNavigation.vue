<template>
  <section class='bg-white dark:bg-GunMetal relative'>
    <div class='bg-white dark:bg-GunMetal pb-6 pt-3'>
      <div class='relative mx-auto lg:max-w-7xl'>
          <ul class='mx-auto flex items-center justify-center space-x-4 lg:space-x-8 px-4 sm:px-6 lg:px-8'>
            <li v-for='link in navLinks' :key='link.name' class='group'>
              <nuxt-link v-scroll-to='`#${link.slug}`' :to='`#${link.slug}`'
                         class='font-futura text-sm lg:text-lg font-medium text-GunMetal dark:text-white group-hover:text-orange-500 dark-hover:group-hover:text-orange-500'>
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      <div class='mt-3 border border-t-1 border-GunMetal dark:border dark:border-t-1 dark:border-white'/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionNavigation',
  props: {
    navLinks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
