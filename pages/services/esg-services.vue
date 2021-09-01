<template>
  <div>
    <primary-hero
      :hero-img='"/hero-images/" + solutionImage'
      :hero-title='solutionTitle'
    />
    <main class='bg-white dark:bg-GunMetal overflow-hidden'>
      <div class='mx-auto py-12 px-4 lg:max-w-7xl lg:px-8 sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none px-4 sm:px-6 lg:max-w-none lg:mx-0 pb-24'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>{{ solutionTitle }}</h2>
            <p class='text-2xl font-bold text-GunMetal dark:text-gray-300' data-aos='fade-up'>{{ solutionLead }}
            <span v-if='solutionLead2' class='text-2xl font-medium text-GunMetal dark:text-gray-300' data-aos='fade-up'>{{ solutionLead2 }}</span>
            </p>
          </div>
          <content-image-horizontal :main-content='esgOne' has-ring off-screen />
          <content-image-horizontal :main-content='esgTwo' image-left has-ring />
          <content-image-horizontal :main-content='esgThree' has-ring />
        </div>
      </div>
    </main>
    <contact-form />

  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: aosMixin,
  data() {
    return {
      solutionImage: 'esg-services-design',
      solutionTitle: 'ESG Services',
      solutionLead: 'Build your dashboard.',
      solutionLead2: 'Develop a robust suite of KPI’s and dashboards that you can trust and act upon.',
      esgOne:
        {
          icon: 'template',
          title: 'ESG Ramp Up',
          text: 'Provide orientation',
          imgSrc: '/general-content/esg-dashboard',
          tag: 'p'
        },
      esgTwo:
        {
          icon: 'puzzle',
          title: 'Materiality Assessment & Remediation',
          text: 'Software solutions will include a customized aggregation platform with dashboards, alerts and a scorecard that allow for granularity in setting specific criteria for an organization to use to achieve individual scores within each category of ESG. Shareholders and corporates can aggregate these views and see relative peer group rankings.',
          imgSrc: '/general-content/esg-dashboard',
          tag: 'p'
        },
      esgThree:
        {
          icon: 'template',
          title: 'Dashboard & Scorecard Design',
          text: 'Software solutions will include a customized aggregation platform with dashboards, alerts and a scorecard that allow for granularity in setting specific criteria for an organization to use to achieve individual scores within each category of ESG. Shareholders and corporates can aggregate these views and see relative peer group rankings.',
          imgSrc: '/general-content/esg-dashboard',
          tag: 'p'
        }
    }
  }
}
</script>

<style scoped>

</style>
