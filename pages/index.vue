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
    <why-anduril :features="features" />
    <esg-cta />
    <discover-cards :discover-cards="discoverCards" />
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
          src: ''
        },
        {
          area: 'Services',
          link: '/services',
          title: 'From data solutions to KPIs',
          preview: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.',
          src: ''
        },
        {
          area: 'Insights',
          link: '/posts',
          title: 'Sharing our discoveries and insights',
          preview: 'Knowledge is noisy unless converted to insight and applied to decisions. Lets discuss use cases.',
          src: ''
        },
        {
          area: 'About us',
          link: '/about',
          title: 'Our team',
          preview: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.',
          src: ''
        }
      ],
      features: [
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
          cardIcon: 'approach',
          cardBody: ' Do you OODA? Observe, Orient, Decide, Act with our KPI driven approach.',
          buttonText: 'Approach',
          buttonSrc: 'approach'
        },
        {
          cardTitle1: 'Anduril',
          cardTitle2: 'Services',
          cardIcon: 'solutions',
          cardBody: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.',
          buttonText: 'Solutions',
          buttonSrc: 'services'
        },
        {
          cardTitle1: 'Anduril',
          cardTitle2: 'Insights',
          cardIcon: 'posts',
          cardBody: 'Knowledge is noisy unless converted to insight and applied to decisions. Lets discuss use cases.',
          buttonText: 'Insights',
          buttonSrc: 'posts'
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
