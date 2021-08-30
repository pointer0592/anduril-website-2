<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white dark:bg-GunMetal">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 data-aos="fade-up" class="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">
        Why hire Anduril Partners?
      </h2>
      <p data-aos="fade-up" class="mt-4 max-w-3xl text-lg text-gray-500 dark:text-gray-200">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
      </p>
      <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name">
          <div>
            <span v-if="feature.icon" data-aos="fade-up" class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500">
              <v-icon :name="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div data-aos="fade-up" class="mt-6">
            <h3 class="text-lg font-medium dark:text-white text-GunMetalDk">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-base text-gray-700 dark:text-gray-200">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'WhyAnduril',
  mixins: [aosMixin],
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>
