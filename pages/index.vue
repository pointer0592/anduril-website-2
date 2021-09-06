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
    <grid-list id='esg-resources' :grid-title='exploreTitle' :grid-lead='exploreLead' :grid-items='exploreItems' />
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
      exploreTitle: 'Explore our Site',
      exploreLead: '',
      exploreItems: [
        {
          title: 'See if Our Services Can Help Overcome your Challenges',
          href: '/services',
          icon: 'badge-check',
          copy: 'Engage with us in KPI Strategy, Design, and Workflow to establish feedback loops and continuous defined improvement.'
        },
        {
          title: 'Sharing our Discoveries and Insights',
          href: '/insights',
          icon: 'light-bulb',
          copy: 'Knowledge is noisy unless converted to insight and applied to decisions. Read our insights blog.'
        },
        {
          title: 'Read our Bios',
          href: '/about',
          icon: 'user-group',
          copy: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.'
        },
        {
          title: 'Check our our ESG Resource Center',
          href: '/resources/esg-resource-center',
          icon: 'academic-cap',
          copy: 'Scan our collection of relevant news items, get answers to typical ESG questions and take advantage of our links to helpful resources'
        },
        {
          title: 'Time-test methodology',
          href: '/approach',
          icon: 'clock',
          copy: 'Learn about how we use the OODA Loop - Observe, Orient, Decide, Act  - within our KPI-driven approach.'
        },
        {
          title: 'Have Questions? Reach out.',
          href: '/contact',
          icon: 'question-mark-circle',
          copy: "Have a question or would you like to discuss an issue? Please reach out. We're eager to start a conversation"
        }
      ]
    }
  }
}
</script>
