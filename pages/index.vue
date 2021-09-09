<template>
  <div>
    <primary-hero
      hero-img='/hero-images/chess-design'
      hero-title='Anduril Partners'
      hero-lead='Think Deeper, See Further, Execute Faster'
      hero-copy='Anduril Partners can help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs)'
      />
    <stats
      header='This is the header'
      lead='This is the lead'
      :stats='stats'
    />
    <why-anduril :features="whyAnduril" />
    <esg-cta />
    <grid-list id='esg-resources' :grid-title='exploreTitle' :grid-lead='exploreLead' :grid-items='exploreItems' />
    <contact-form />
  </div>
</template>

<script>
import BadgeCheckIcon from '~/assets/svg/badge-check.svg?inline'
import LightBulbIcon from '~/assets/svg/light-bulb.svg?inline'
import AcademicCapIcon from '~/assets/svg/academic-cap.svg?inline'
import LighteningBoltIcon from '~/assets/svg/lightning-bolt.svg?inline'
import ServerIcon from '~/assets/svg/server.svg/?inline'
import VariableIcon from '~/assets/svg/variable.svg?inline'
import TruckIcon from '~/assets/svg/truck.svg?inline'
import SupportIcon from '~/assets/svg/support.svg?inline'
import QuestionMarkCircleIcon from '~/assets/svg/question-mark-circle.svg?inline'
import ClockIcon from '~/assets/svg/clock.svg?inline'
import UserGroupIcon from '~/assets/svg/user-group.svg?inline'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BadgeCheckIcon,
    // eslint-disable-next-line vue/no-unused-components
    LightBulbIcon,
    // eslint-disable-next-line vue/no-unused-components
    LighteningBoltIcon,
    // eslint-disable-next-line vue/no-unused-components
    AcademicCapIcon,
    // eslint-disable-next-line vue/no-unused-components
    ServerIcon,
    // eslint-disable-next-line vue/no-unused-components
    VariableIcon,
    // eslint-disable-next-line vue/no-unused-components
    TruckIcon,
    // eslint-disable-next-line vue/no-unused-components
    SupportIcon,
    // eslint-disable-next-line vue/no-unused-components
    ClockIcon,
    // eslint-disable-next-line vue/no-unused-components
    QuestionMarkCircleIcon,
    // eslint-disable-next-line vue/no-unused-components
    UserGroupIcon
  },
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
      whyAnduril: [
        {
          name: 'We understand data',
          icon: ServerIcon,
          description: 'We know data sources, data vendors, data applications & tools, and processes that allow you to understand what data is available and how to access it at the best price. '
        },
        {
          name: 'We understand KPI\'s',
          icon: VariableIcon,
          description: 'We have been through hundreds of KPI development iterations and understand how to guide you through the process of building or modifying KPI\'s'
        },
        {
          name: 'We understand how data should drive KPI\'s',
          icon: LighteningBoltIcon,
          description: 'Our experience in KPI development ensures that both KPI\'s and supporting data are developed and evaluated in parallel while rapidly moved from prototype to production'
        },
        {
          name: 'We deliver on your deadlines',
          icon: TruckIcon,
          description: 'We match your sense of urgency without diluting the quality of our work'
        },
        {
          name: 'We have high capacity',
          icon: LightBulbIcon,
          description: 'Our broad collective experience and work ethic allow us to handle your most complex issues'
        },
        {
          name: 'We\'ve walked in your shoes',
          icon: SupportIcon,
          description: 'Our leadership team has deep industry experience and building their own companies'
        }
      ],
      exploreTitle: 'Explore our Site',
      exploreLead: '',
      exploreItems: [
        {
          title: 'See if Our Solutions Can Help Overcome your Challenges',
          href: '/solutions',
          icon: BadgeCheckIcon,
          copy: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.'
        },
        {
          title: 'Sharing our Discoveries and Insights',
          href: '/insights',
          icon: LightBulbIcon,
          copy: 'Knowledge is noisy unless converted to insight and applied to decisions. Read our insights blog.'
        },
        {
          title: 'Read our Bios',
          href: '/about',
          icon: UserGroupIcon,
          copy: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.'
        },
        {
          title: 'Check our our ESG Resource Center',
          href: '/resources/esg-resource-center',
          icon: AcademicCapIcon,
          copy: 'Scan our collection of relevant news items, get answers to typical ESG questions and take advantage of our links to helpful resources'
        },
        {
          title: 'Time-test methodology',
          href: '/approach',
          icon: ClockIcon,
          copy: 'Learn about how we use the OODA Loop - Observe, Orient, Decide, Act  - within our KPI-driven approach.'
        },
        {
          title: 'Have Questions? Reach out.',
          href: '/contact',
          icon: QuestionMarkCircleIcon,
          copy: "Have a question or would you like to discuss an issue? Please reach out. We're eager to start a conversation"
        }
      ]
    }
  }
}
</script>
