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
        </div>
      </div>
          <content-image-horizontal :main-content='kpiDesignOne' ring />
          <content-image-horizontal :main-content='kpiDesignTwo' left  />
          <content-image-horizontal :main-content='kpiDesignThree'  />
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
      solutionImage: 'kpi-strategy-design',
      solutionTitle: 'KPI Strategy',
      solutionLead: 'Build your dashboard.',
      solutionLead2: 'Develop a robust suite of KPI’s and dashboards that you can trust and act upon.',
      kpiDesignOne:
        {
          icon: 'puzzle',
          title: 'KPI Development',
          text: 'An interactive process iteratively cycling through the three layers below until each KPI is validated and optimized: ',
          text2: 'Layer 1 - Hypothesis Formation: What fundamental questions will accurately achieve my business objectives?',
          text3: 'Layer 2 - KPI Development: How should data be formulated to produce optimal KPIs? What can and cannot be measured?',
          text4: 'Layer 3 - Data Validation: Are KPIs reliably supported and do they provide ground-truth perspective?',
          imgSrc: '/general-content/kpi-design',
          tag: 'li'
        },
      kpiDesignTwo:
        {
          icon: 'template',
          title: 'Dashboard Design',
          text: 'A canvas upon which KPI’s and signals are placed to represent current state while providing monitors & alerts, and initiating workflow activities.',
          text2: 'We pair graphic design experts with industry practitioners to generate maximum value in dashboard design.',
          quote: 'Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API\'s',
          quoteNameTitle: 'Sam Levinson, CEO, The Arbor Group',
          imgSrc: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630251520/general-content/kpi-mac-pic.jpg',
          mobileImgSrc: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630251520/general-content/kpi-mac-pic-mobile.jpg',
          tag: 'p'
        },
      kpiDesignThree:
        {
          icon: 'sparkles',
          title: 'Signal Development',
          text: 'Signals can be critically important in providing early warnings.',
          text2: 'As a complement to KPIs, they act as “scouts” that provide early indicators of changes that may impact KPIs. ',
          quote: 'Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API\'s',
          quoteNameTitle: 'Sam Levinson, CEO, The Arbor Group',
          imgSrc: '/general-content/kpi-mac-pic',
          tag: 'p'
        }
    }
  }
}
</script>

<style scoped>

</style>
