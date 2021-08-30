<template>
  <li>
    <div class='space-y-4'>
      <div class='aspect-w-3 aspect-h-2' data-aos="fade-up">
        <client-only>
        <cld-image
          :public-id="'/team-headshots/' + bio.image"
          :alt='bio.name'
          quality='auto'
          fetch-format='png'
          responsive
          loading='lazy'
          class='object-cover shadow-lg rounded-lg'
        />
        </client-only>
      </div>

      <div class='space-y-2'>
        <div class='text-lg font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1'>
          <h3 data-aos="fade-up">{{ bio.name }}</h3>
          <p class='text-orange-500' data-aos="fade-up">
            {{ bio.role }}
          </p>
        </div>

        <div class='text-sm font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1' data-aos="fade-up">
          <p>
            {{ bio.intro | truncate(200)}}
          </p>
        <nuxt-link :to="bio.path">
          <p class='text-base text-gray-500 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-300' data-aos="fade-up">
            more...</p>
        </nuxt-link>
        </div>
        <ul class='flex space-x-5'>
          <li>
            <a :href='bio.linkedinProfileLink' class='cursor-pointer' data-aos="fade-up">
              <span class='sr-only'>LinkedIn</span>
             <v-icon name='linkedin'
                class='w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark:hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500' />
            </a>
          </li>
          <li>
            <nuxt-link :to='bio.path' class='cursor-pointer' data-aos="fade-up">
              <span class='sr-only'>Member Bio</span>
              <v-icon name='book-open'
                class='w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark:hover:text-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500' />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'Bio',
  mixins: [aosMixin],
  props: {
    bio: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
