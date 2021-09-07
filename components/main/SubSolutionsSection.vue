<template>
  <div>
    <section class='relative overflow-hidden'>
      <div class='bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-0 sm:py-0'>
        <div class='relative mx-auto lg:max-w-7xl'>
          <div v-for='(solution, serviceIdx) in solutionItems' :key='solution.name'
               class='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'>
            <div
              class='px-4 sm:px-0 bg-gray-100 overflow-hidden lg:max-w-7xl my-auto  rounded-xl shadow-lg'
              :class="[serviceIdx % 2 === 0 ? 'flex-auto lg:col-start-7' : 'lg:col-start-1', 'lg:row-start-1 lg:col-span-6']"
              data-aos='fade-up'>
              <v-cloud-image
                :public-id="`/solutions-page/${solution.heroImage}`"
                classes='w-full h-full'
                />
            </div>

            <div
              class='mx-auto pt-8 pb-12 px-4 sm:px-0 sm:pb-16 lg:max-w-7xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8'
              :class="[serviceIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7', 'lg:row-start-1 lg:col-span-6']"
              data-aos='fade-up'>
              <div class='lg:col-start-1'>
                <h2 id='features-heading2' class='font-futura font-medium text-orange-500' data-aos='fade-up'>{{ solution.tagline }}</h2>
                <p class='font-futura mt-4 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight' data-aos='fade-up'>{{ solution.title }}</p>
                <div class='border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16'/>
                <p class='mt-4 text-gray-500 dark:text-gray-200' data-aos='fade-up'>{{ solution.description}}</p>

                <dl class='mt-4 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2' data-aos='fade-up'>
                  <div v-for='subSolution in solution.subSolutions' :key='subSolution.name'>
                    <dt class='font-medium text-GunMetal dark:text-white font-futura' data-aos='fade-up'>{{ subSolution.name }}</dt>
                    <dd class='mt-2 text-gray-500 dark:text-gray-200' data-aos='fade-up'>{{ subSolution.description }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import aosMixin from '~/mixins/aos'

export default {
  name: 'SubSolutionsSection',
  mixins: aosMixin,
  props: {
    solutionItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
