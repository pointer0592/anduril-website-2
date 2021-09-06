<template>
  <section>
    <primary-hero
      hero-img='/hero-images/solutions-design'
      hero-title='Our Services'
      lead-weight='extrabold'
      lead-color-dark-shade='700'
      hero-copy=''
    />

    <section-navigation :nav-links='navLinks' />
    <services-section id='anduril-core' section-title='Our Core Services' :section-lead='ourServicesLead'
                      is-centered is-tight-bottom
                      :service-items='coreServices' />
    <card-rows id='anduril-services' card-title='Our Services' card-lead='' :card-items='services' />
    <media-banner id='esg-resource-center' :media-banner='mediaBanner' />
    <contact-form />
  </section>
</template>
<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: aosMixin,
  async asyncData({ $content, params }) {
    const services = await $content('services/sub-services', params.slug)
      .sortBy('area', 'desc')
      .only([
        'title',
        'link',
        'area',
        'areaLink',
        'preview',
        'linkLabel',
        'slug',
        'prePath'
      ])
      .fetch()


    const coreServices = await $content('core-services')
      .fetch()


    return {
      services,
      coreServices
    }
  },
  data() {
    return {
      navLinks: [
        { name: 'Core Services', id: 'anduril-core' },
        { name: 'All Services', id: 'anduril-services' },
        { name: 'ESG Resources Center', id: 'esg-resource-center' }
      ],
      servicesTitle: 'Our Services',
      servicesLead: 'Morbi quis egestas orci, acpharetra tortor. Aliquam vitae nulla turpis. Sed vitae massa eros. Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos. Integer ac est ac tellus hendrerit',
      mediaBanner: {
        title: 'We’re here to help',
        mediaCaption: 'Anduril ESG Resource Center',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam ascelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt',
        image: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1629404515/insights/esg-cover-website.jpg',
        linkLabel: 'Visit our ESG Resources',
        link: '/resources/esg-resource-center'
      },
      ourServicesLead: 'Mauris faucibus eleifend tellus at vulputate. Mauris dignissim semper sapien at imperdiet. In id scelerisque justo. Aliquam erat volutpat. Suspendisse sit amet tortor quis eros luctus rhoncus eu quis nunc. Aenean augue elit, consequat ut imperdiet sed, vehicula iaculis nulla. Phasellus euismod iaculis turpis, in finibus turpis sollicitudin sit amet.',
      ourServices: [
        {
          caption: 'KPI Design',
          title: 'Minimal and thoughtful',
          copy:
            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
          imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
          serviceFeatures: [
            {
              name: 'Durable',
              description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.'
            },
            {
              name: 'Refillable',
              description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.'
            },
            {
              name: 'Thoughtfully designed',
              description:
                'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.'
            },
            {
              name: 'Locally made',
              description: 'Responsibly and sustainably made real close to wherever you are, somehow.'
            }
          ]
        },
        {
          caption: 'KPI Strategy',
          title: 'Minimal and thoughtful',
          copy:
            'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
          imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
          serviceFeatures: [
            {
              name: 'Durable',
              description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.'
            },
            {
              name: 'Refillable',
              description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.'
            },
            {
              name: 'Thoughtfully designed',
              description:
                'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.'
            },
            {
              name: 'Locally made',
              description: 'Responsibly and sustainably made real close to wherever you are, somehow.'
            }
          ]
        }
      ]
    }
  }
}
</script>
