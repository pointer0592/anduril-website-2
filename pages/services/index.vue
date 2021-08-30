<template>
  <div>
    <primary-hero
      hero-img='/hero-images/solutions-design'
      hero-title='Our Services'
      hero-lead='Think Deeper, See Further, Execute Faster'
      lead-color='orange'
      lead-weight='extrabold'
      lead-color-dark-shade='700'
      hero-copy='Anduril Partners can help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs)'
      />
    <project
      section-title="HomeLead"
      title="Data is everywhere."
      subtitle="Are you using it to drive better decisions?"
      text="Data, like water, is an abundant resource but it must be prepared and utilized for specific purposes. Our focus on modeling KPIs will equip your teams to execute with decisive data-driven decisions."
      text2="We help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs)."
      is-mockup
      :mobile-img-src="smallTechImg"
      :img-src="techImg"
      :avatar="avatarImg"
    />
    <div class='mx-auto'>
      <dropdown />
    </div>
    <why-anduril :features="features" />
    <esg-cta />
    <discover-cards :discover-cards="discoverCards" />
    <contact-form />
  </div>
</template>

<script>
import IconServer from '~/assets/svg/server.svg?inline'
import IconVariable from '~/assets/svg/variable.svg?inline'
import IconLighteningBolt from '~/assets/svg/lightning-bolt.svg?inline'
import IconTruck from '~/assets/svg/truck.svg?inline'
import IconSupport from '~/assets/svg/support.svg?inline'
import IconLightBulb from '~/assets/svg/light-bulb.svg?inline'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    IconServer,
    // eslint-disable-next-line vue/no-unused-components
    IconVariable,
    // eslint-disable-next-line vue/no-unused-components
    IconLighteningBolt,
    // eslint-disable-next-line vue/no-unused-components
    IconTruck,
    // eslint-disable-next-line vue/no-unused-components
    IconSupport,
    // eslint-disable-next-line vue/no-unused-components
    IconLightBulb
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  data () {
    return {
      discoverCards: [
        {
          area: 'Approach',
          link: '/approach-page',
          title: 'Time-test methodology',
          preview: 'Do you OODA? Observe, Orient, Decide, Act with our KPI driven approach-page.',
          src: ''
        },
        {
          area: 'Solutions',
          link: '/solutions',
          title: 'From data solutions to KPIs',
          preview: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.',
          src: ''
        },
        {
          area: 'Insights',
          link: '/insights',
          title: 'Sharing our discoveries and insights',
          preview: 'Knowledge is noisy unless converted to insight and applied to decisions. Lets discuss use cases.',
          src: ''
        },
        {
          area: 'About us',
          link: '/story',
          title: 'Our team',
          preview: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.',
          src: ''
        }
      ],
      logoCloud: [
        { name: 'EDS', src: 'eds', ext: 'svg' },
        { name: 'Arbor Advisors', src: 'arbor', ext: 'svg' },
        { name: 'Connacht Asset Managment', src: 'connacht', ext: 'svg' },
        { name: 'SESAMm', src: 'sesamm', ext: 'svg' },
        { name: 'Refined Technolgies', src: 'RTI', ext: 'svg' },
        { name: 'aiera', src: 'aiera', ext: 'svg' },
        { name: 'CRUX', src: 'crux', ext: 'svg' },
        { name: 'aptiviti', src: 'aptiviti', ext: 'svg' }
      ],
      logoCloudIpo: [
        { name: 'Datavore', src: 'datavore', ext: 'svg' },
        { name: 'Kensho', src: 'kensho', ext: 'svg' },
        { name: 'Prattle', src: 'prattle', ext: 'svg' }
      ],
      features: [
        {
          name: 'We understand data',
          icon: IconServer,
          description: 'We know data sources, data vendors, data applications & tools, and processes that allow you to understand what data is available and how to access it at the best price. '
        },
        {
          name: 'We understand KPI\'s',
          icon: IconVariable,
          description: 'We have been through hundreds of KPI development iterations and understand how to guide you through the process of building or modifying KPI\'s'
        },
        {
          name: 'We understand how data should drive KPI\'s',
          icon: IconLighteningBolt,
          description: 'Our experience in KPI development ensures that both KPI\'s and supporting data are developed and evaluated in parallel while rapidly moved from prototype to production'
        },
        {
          name: 'We deliver on your deadlines',
          icon: IconTruck,
          description: 'We match your sense of urgency without diluting the quality of our work'
        },
        {
          name: 'We have high capacity',
          icon: IconLightBulb,
          description: 'Our broad collective experience and work ethic allow us to handle your most complex issues'
        },
        {
          name: 'We\'ve walked in your shoes',
          icon: IconSupport,
          description: 'Our leadership team has deep industry experience and building their own companies'
        }
      ],
      cardRowTitle1: 'Discover',
      cardRowTitle2: 'Anduril',
      cards: [
        {
          cardTitle1: 'Our',
          cardTitle2: 'Story',
          cardIcon: 'story',
          cardBody: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.',
          buttonText: 'Background',
          buttonSrc: 'about'
        },
        {
          cardTitle1: 'Anduril',
          cardTitle2: 'Approach',
          cardIcon: 'approach-page',
          cardBody: ' Do you OODA? Observe, Orient, Decide, Act with our KPI driven approach-page.',
          buttonText: 'Approach',
          buttonSrc: 'approach-page'
        },
        {
          cardTitle1: 'Anduril',
          cardTitle2: 'Solutions',
          cardIcon: 'solutions',
          cardBody: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.',
          buttonText: 'Solutions',
          buttonSrc: 'solutions'
        },
        {
          cardTitle1: 'Anduril',
          cardTitle2: 'Insights',
          cardIcon: 'insights',
          cardBody: 'Knowledge is noisy unless converted to insight and applied to decisions. Lets discuss use cases.',
          buttonText: 'Insights',
          buttonSrc: 'insights'
        }
      ]
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
