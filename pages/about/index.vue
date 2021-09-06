<template>
  <section>
    <primary-hero
      hero-img='/hero-images/team-design'
      hero-title='About Us'
      hero-copy="We're looking forward to starting a conversation"
    />
    <section-navigation :nav-links='navLinks' />
    <main-section-header id='anduril-bios' :has-line=false section-title='Our Team' section-lead='We represent a growing culmination of
              experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments,
              to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend
              disciplines with a focus on outcomes. We look forward to including you in the discussion.'>
      <ul
        class='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
        data-aos='fade-up'>
        <Bio
          v-for='bio in bios'
          :key='bio.slug'
          :bio='bio'
        />
      </ul>
    </main-section-header>
    <main-section-header id='how-we-work' section-title='How we work'
                         section-lead='Donec in orci sapien. In facilisis tellus quis quam auctor, vel suscipit quam malesuada. Maecenas aliquam, est nec egestas aliquet, tellus mauris bibendum urna, quis sollicitudin sem risus ac dolor.'>
    </main-section-header>
    <main-section-header id='our-values' section-title='Our Values'
                         section-lead='Nunc non ornare turpis. In tincidunt tincidunt odio, a sagittis ante ornare sed. Ut pharetra nibh odio, ac porttitor lorem vestibulum eu. Pellentesque at turpis in justo faucibus feugiat. Fusce sit amet sem eget felis imperdiet viverra eget ac elit. Ut non blandit mauris.'>
    </main-section-header>
    <expandable-list
      :expandable-items='faqs'
    />
    <contact-form />
  </section>
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
      navLinks: [
        { name: 'Bios', id: 'anduril-bios' },
        { name: 'How We Work', id: 'how-we-work' },
        { name: 'Our Values', id: 'our-values' }
      ],
      bioTitle: 'Our Team',
      bioLead: 'We represent a growing culmination of experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments, to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend disciplines with a focus on outcomes. We look forward to including you in the discussion.',
      faqs: [
        {
          question: 'Vivamus at diam vulputate sem sollicitudin dignissim?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices auctor luctus. Quisque nisi eros, molestie eget nisl condimentum, lobortis faucibus quam.'
        },
        {
          question: 'Etiam eu libero eu risus accumsan scelerisque ac ut magna?',
          answer:
            'Donec facilisis euismod congue. Nulla venenatis sapien arcu, quis sollicitudin velit lobortis et. Nam quis facilisis lacus. Morbi ut diam dictum, elementum metus non, dignissim metus. Proin nec quam lacinia ex venenatis euismod. Maecenas vulputate sagittis varius. Quisque vitae lacus in arcu ultrices ullamcorper.'
        },
        {
          question: 'Cras metus lectus, imperdiet sed vestibulum eget, egestas quis lacus. Cras maximus rhoncus sagittis. Mauris tellus justo, mattis quis est a, mattis posuere diam. Nulla facilisi?',
          answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        }
      ]
    }
  }
}
</script>
