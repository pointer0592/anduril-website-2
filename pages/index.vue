<template>
  <div>
    <primary-hero
      hero-img='/hero-images/chess-design'
      hero-title='Anduril Partners'
      hero-lead='Think Deeper, See Further, Execute Faster'
      lead-color='orange'
      lead-weight='extrabold'
      lead-color-dark-shade='700'
      hero-copy='Anduril Partners can help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs)'
      full
      />
    <stats
      header='This is the header'
      lead='This is the lead'
      :stats='stats'
    />
    <why-anduril :features="whyAnduril" />
    <esg-cta />
    <main class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Explore our Site</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>We represent a growing culmination of
              experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments,
              to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend
              disciplines with a focus on outcomes. We look forward to including you in the discussion.</p>
          </div>
          </div>
        </div>
    </main>
    <discover-cards :discover-cards="discoverCards" is-three />
    <contact-form />
  </div>
</template>

<script>

export default {
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  data () {
    return {
      stats: [
        { label: 'Pepperoni', number: '100k'},
        { label: 'Delivery', number: '24/7'},
        { label: 'Calories', number: '100%'}
      ],
      discoverCards: [
        {
          area: 'Approach',
          link: '/approach',
          title: 'Time-test methodology',
          preview: 'Do you OODA? Observe, Orient, Decide, Act with our KPI driven approach.',
          linkLabel: 'Read about our Approach'
        },
        {
          area: 'Services',
          link: '/services',
          title: 'From data solutions to KPIs',
          preview: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.',
          linkLabel: 'Check out our Services'
        },
        {
          area: 'Insights',
          link: '/insights',
          title: 'Sharing our discoveries and insights',
          preview: 'Knowledge is noisy unless converted to insight and applied to decisions. Lets discuss use cases.',
          linkLabel: 'Read our Insights'
        },
        {
          area: 'About us',
          link: '/about',
          title: 'Our team',
          preview: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.',
          linkLabel: 'Read our Bios'
        }
      ],
      whyAnduril: [
        {
          name: 'We understand data',
          icon: 'server',
          description: 'We know data sources, data vendors, data applications & tools, and processes that allow you to understand what data is available and how to access it at the best price. '
        },
        {
          name: 'We understand KPI\'s',
          icon: 'variable',
          description: 'We have been through hundreds of KPI development iterations and understand how to guide you through the process of building or modifying KPI\'s'
        },
        {
          name: 'We understand how data should drive KPI\'s',
          icon: 'lightning-bolt',
          description: 'Our experience in KPI development ensures that both KPI\'s and supporting data are developed and evaluated in parallel while rapidly moved from prototype to production'
        },
        {
          name: 'We deliver on your deadlines',
          icon: 'truck',
          description: 'We match your sense of urgency without diluting the quality of our work'
        },
        {
          name: 'We have high capacity',
          icon: 'light-bulb',
          description: 'Our broad collective experience and work ethic allow us to handle your most complex issues'
        },
        {
          name: 'We\'ve walked in your shoes',
          icon: 'support',
          description: 'Our leadership team has deep industry experience and building their own companies'
        }
      ],
    }
  },
  computed: {
    techImg() {
      return require('~/static/images/home/kpi-mac-pic.jpg')
    },
    smallTechImg() {
      return require('~/static/images/home/kpi-mac-pic-mobile.jpg')
    },
    avatarImg() {
      return require('~/static/images/clients/headshots/sam_levinson.svg')
    }
  }
}
</script>
