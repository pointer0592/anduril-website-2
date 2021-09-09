<template>
  <li>
    <div class="space-y-4">
      <div class="aspect-w-3 aspect-h-2" data-aos="fade-up">
        <nuxt-img
          provider="cloudinary"
          :src="'/headshots/' + bio.image"
          :alt="bio.name"
          loading="lazy"
          class="object-cover shadow-lg rounded-lg"
        />
      </div>

      <div class="space-y-4">
        <div class="font-futura text-GunMetal dark:text-white leading-6 space-y-1">
          <h3 data-aos="fade-up" class="font-futura font-bold text-2xl">{{ bio.name }}</h3>
          <p class="text-orange-500 font-futura uppercase text-base font-bold" data-aos="fade-up">
            {{ bio.role }}
          </p>
        </div>

        <div class="text-base font-base text-GunMetal dark:text-white leading-6 space-y-2"
             data-aos="fade-up">
          <p>
            {{ bio.intro | truncate(300) }}
          </p>
          <div class="flex items-center justify-between">
            <nuxt-link :to="`/about/${bio.slug}`">
              <p class="pt-2 font-futura text-base font-semibold hover:underline text-GunMetal dark:text-white"
                 data-aos="fade-up">
                Full Bio
              </p>
            </nuxt-link>
            <a :href="bio.linkedinProfileLink" class="cursor-pointer" data-aos="fade-up">
              <span class="sr-only">LinkedIn</span>
              <LinkedInLogoIcon
                class="w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import aosMixin from "~/mixins/aos";
import LinkedInLogoIcon from "~/assets/svg/linkedin.svg?inline";

export default {
  name: "Bio",
  components: {
    LinkedInLogoIcon
  },
  mixins: [aosMixin],
  props: {
    bio: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
