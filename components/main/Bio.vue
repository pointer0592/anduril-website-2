
<template>
  <li>
    <div class="space-y-4">
      <div class="aspect-w-3 aspect-h-2">
        <cld-image
        :public-id="'team-headshots/' + teamImg + '.jpg'"
        :alt="teamName"
        quality="auto"
        fetch-format="auto"
        responsive
        loading="lazy"
        class="object-cover shadow-lg rounded-lg"
      />
      </div>

      <div class="space-y-2">
        <div class="text-lg font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1">
          <h3>{{ teamName }}</h3>
          <p class="text-orange-500">
            {{ teamRole }}
          </p>
        </div>
        <ul class="flex space-x-5">
          <li>
            <a :href="linkedinProfileLink" class="cursor-pointer">
              <span class="sr-only">LinkedIn</span>
              <icon-linked-in class="w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark:hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" />
            </a>
          </li>
          <li>
            <nuxt-link :to="bioLink" class="cursor-pointer">
              <span class="sr-only">Member Bio</span>
              <icon-book-open class="w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark:hover:text-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import aosMixin from '~/mixins/aos'
import IconBookOpen from '~/assets/svg/book-open.svg?inline'
import IconLinkedIn from '~/assets/svg/linkedin.svg?inline'

export default {
  name: 'Bio',
  components: {
    IconBookOpen,
    IconLinkedIn
  },
  mixins: [aosMixin],
  props: {
    teamImg: {
      type: String,
      default: ''
    },
    teamName: {
      type: String,
      default: ''
    },
    teamRole: {
      type: String,
      default: ''
    },
    linkedinProfileLink: {
      type: String,
      default: ''
    },
    bioLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
