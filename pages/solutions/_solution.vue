<template>
  <section>
    <primary-hero
      :hero-img="`/solutions-page/${solution.heroImage}`"
      :hero-title="`${solution.title}`"
      mix-blend-color='bg-gray-600'
    />

    <solution-section id='anduril-core' :solution='solution' />
    <media-banner v-if="solution.banner.bannerTitle!==''" id='solution.banner.title' :media-banner='solution.banner' />
    <solution-card-rows :card-items='solutions'>
      <template slot='title'>
        <h2 class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
          <span class='text-orange-500'>{{ solution.title }}</span>&nbsp;solutions
        </h2>
      </template>
    </solution-card-rows>
    <contact-form />
  </section>
</template>
<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: aosMixin,
  async asyncData({ $content, params }) {
    const solution = await $content('solutions', params.solution )
      .fetch()

    const solutions = await $content('solutions')
      .where({ title: { $ne: solution.title } })
      .sortBy('order', 'asc')
      .fetch()

    return {
      solutions,
      solution
    }
  },
  data() {
    return {
      blockQuote: {
        name: 'Yogi',
        title: 'CFO',
        company: 'IBM',
        copy: 'Ya gotta do what ya gotta do'
      },
      navLinks: [
        { name: 'Core Solutions', id: 'anduril-core' },
        { name: 'All Solutions', id: 'anduril-solutions' },
        { name: 'ESG Resources Center', id: 'esg-resource-center' }
      ],
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
  }
}
</script>
