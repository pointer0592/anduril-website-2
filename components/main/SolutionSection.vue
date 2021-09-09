<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-6 sm:py-24">
        <div class="relative mx-auto lg:max-w-7xl">
          <nuxt-link to="/solutions"
                     class="text-lg font-bold text-GunMetal dark:text-white underline hover:text-gray-600 dark-hover:text-gray-200">
            Back to Solutions
          </nuxt-link>
          <div class="min-h-screen flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 lg:self-start">
            <div
              class="mx-auto pt-8 pb-12 px-4 sm:px-0 lg:mr-20 sm:pb-16 lg:max-w-7xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:col-start-1 lg:col-span-8"
              data-aos="fade-up">
              <div class="lg:col-start-1">
                <h2 class="font-futura font-medium text-orange-500" data-aos="fade-up">
                  {{ solution.tagline }}
                </h2>
                <p
                  class="font-futura mt-2 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight"
                  data-aos="fade-up">
                  {{ solution.title }}
                </p>
                <div class="border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16" />

                <p class="mt-4 text-xl font-semibold text-gray-500 dark:text-gray-200" data-aos="fade-up">
                  {{ solution.description }}
                </p>

                <div v-for="item in solution.body" :key="item.lead">
                  <p class="font-futura mt-4 text-lg text-orange-500 uppercase font-semibold" data-aos="fade-up">
                    {{ item.lead }}
                  </p>
                  <div v-for="(para, index) in item.para" :key="`para-${index}`">
                    <p
                      class="mt-1 text-lg text-gray-500 dark:text-gray-200" data-aos="fade-up">
                      {{ para }}
                    </p>
                  </div>
                </div>

                <div class="pt-6">
                  <h3 class="font-futura text-orange-500 text-xl font-semibold">Focus Areas</h3>
                  <dl class="pt-2 grid grid-cols-1 gap-x-8 text-lg sm:grid-cols-2"
                      data-aos="fade-up">
                    <div v-for="subSolution in solution.subSolutions" :key="subSolution.name">
                      <dt
                        class="font-futura font-medium text-GunMetal dark:text-gray-200 font-bold font-futura underline dark:hover:text-gray-300 hover:text-GunMetalLt cursor-pointer text-base"
                        data-aos="fade-up">
                        <nuxt-link :to="`${subSolution.link}`">{{ subSolution.name }}</nuxt-link>
                      </dt>
                      <dd class="pb-2 mt-1 text-sm text-gray-500 dark:text-gray-200" data-aos="fade-up">
                        {{ subSolution.description }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3">
                <div class="hidden sm:block">
                  <div
                    class="absolute inset-y-0 left-1/3 w-screen bg-gray-50 dark:bg-GunMetalDk rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
                    data-aos="fade-left"></div>
                  <svg class="absolute top-8 right-1/3 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none"
                       viewBox="0 0 404 392" data-aos="fade-left">
                    <defs>
                      <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20"
                               patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-GunMetalLt"
                              fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                  </svg>
                </div>
                <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
                     data-aos="fade-left">
                  <nuxt-img
                    provider="cloudinary"
                    :src="`/solutions-page/solutions/${solution.bodyImage.src}`"
                    class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 dark:ring-1 dark:ring-white dark:ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    format="webp"
                    quality="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import aosMixin from "~/mixins/aos";

export default {
  name: "SolutionSection",
  mixins: aosMixin,
  props: {
    solution: {
      type: Object,
      default: () => {
      }
    }
  }
};
</script>
