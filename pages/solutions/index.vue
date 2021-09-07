<template>
<div>
    <primary-hero
      hero-img="/hero-images/solutions/kpi-design"
      hero-title='Our Solutions'
    />

    <section-navigation :nav-links='navList' />
    <main-section-header section-title='Our Solutions' section-lead='Core Solutions lead' is-centered has-top-line :has-line=false top-line-color='orange' />
    <solutions-section id='anduril-core' :solution-items='solutions' />
    <card-rows id='anduril-solutions' card-title='All Solutions' card-lead='' :card-items='subSolutions' />
</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const solutions = await $content('solutions' )
      .sortBy('order', 'asc')
      .fetch()

    const navLinks = await $content('solutions' )
      .only(['slug','title'])
      .fetch()

    const subSolutions = await $content('solutions/subsolutions')
      .fetch()

    return {
      solutions,
      subSolutions,
      navLinks
    }
  },
  data() {
    return {
      mediaBanner: {
        title: 'We’re here to help',
        mediaCaption: 'Anduril ESG Resource Center',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam ascelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt',
        image: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1629404515/insights/esg-cover-website.jpg',
        linkLabel: 'Visit our ESG Resources',
        link: '/resources/esg-resource-center'
      },
      ourSolutionsLead: 'Mauris faucibus eleifend tellus at vulputate. Mauris dignissim semper sapien at imperdiet. In id scelerisque justo. Aliquam erat volutpat. Suspendisse sit amet tortor quis eros luctus rhoncus eu quis nunc. Aenean augue elit, consequat ut imperdiet sed, vehicula iaculis nulla. Phasellus euismod iaculis turpis, in finibus turpis sollicitudin sit amet.',
    }
  },
  computed: {
    navList() {
      return this.navLinks.map(obj => ({ slug: obj.slug, title: obj.title }))
    }
  }
}
</script>
