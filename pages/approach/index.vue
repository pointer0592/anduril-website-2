<template>
  <div>
    <primary-hero
      hero-img='/hero-images/approach-design'
      hero-title='Our Approach'
      hero-lead='This is how we approach things'
      hero-copy="We're looking forward to starting a conversation"
    />
    <div class='relative bg-white dark:bg-GunMetal py-8 overflow-hidden'>
      <content-image-horizontal :main-content='mainContent' />
      <content-image-horizontal :main-content='mainContent' off-screen />
      <content-image-horizontal :main-content='mainContent2' is-mockup image-left />
      <content-image-horizontal :main-content='mainContent2' is-mockup />
      <content-image-horizontal :main-content='mainContent' image-left has-ring />
      <content-image-horizontal :main-content='mainContent' image-left off-screen has-ring />
    </div>
    <expandable-list
      :faqs='faqs'
    />
    <contact-form />
  </div>
</template>

<script>
export default {
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  async asyncData({ $content }) {
    const bios = await $content('bios').sortBy('level', 'asc').fetch()
    return {
      bios
    }
  },
  data: () => {
    return {
      mainContent:
        {
          // eslint-disable-next-line no-undef
          icon: 'share',
          title: 'Data is everywhere.',
          text: 'Data, like water, is an abundant resource but it must be prepared and utilized for specific purposes. Our focus on modeling KPIs will equip your teams to execute with decisive data-driven decisions.',
          text2: 'We help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs).',
          btnCopy: 'Learn More',
          btnLink: 'about-us',
          quote: 'Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API\'s',
          quoteNameTitle: 'Sam Levinson, CEO, The Arbor Group',
          imgSrc: '/general-content/kpi-mac-pic'
        },
      mainContent2:
        {
          // eslint-disable-next-line no-undef
          icon: 'share',
          title: 'Data is everywhere.',
          text: 'Data, like water, is an abundant resource but it must be prepared and utilized for specific purposes. Our focus on modeling KPIs will equip your teams to execute with decisive data-driven decisions.',
          text2: 'We help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs).',
          btnCopy: 'Learn More',
          btnLink: 'about-us',
          quote: 'Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API\'s',
          quoteNameTitle: 'Sam Levinson, CEO, The Arbor Group',
          imgSrc: 'home/kpi-mac-pic',
          mobileImgSrc: 'home/kpi-mac-pic-mobile'
        },
      lead: 'Our Team',
      intro: 'We represent a growing culmination of experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments, to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend disciplines with a focus on outcomes. We look forward to including you in the discussion.',
      heroCopy: 'This is a test',
      faqs: [
        {
          question: 'How do you make holy water?',
          answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          question: 'How do you make holy water?',
          answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          question: 'How do you make holy water?',
          answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        }
      ]
    }
  }
}
</script>
