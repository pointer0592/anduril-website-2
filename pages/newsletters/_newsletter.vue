<template>
  <div>
    <primary-hero
      hero-img="/hero-images/newsletter-design"
      hero-title='Anduril Newsletter'
      :hero-lead='newsletter.category'
    >
      <div class='mt-4'>
        <tags :tags='newsletter.tags' />
      </div>
    </primary-hero>
    <div>
      <div class='relative py-6 text-gray-600 dark:text-gray-200 bg-white dark:bg-GunMetal overflow-hidden'>
        <div data-aos='fade-up' class='mx-auto py-6 px-4 sm:px-6 lg:px-8 px-4 nuxt-content' aria-hidden='true'>
          <nuxt-link to='/insights' class='text-orange-500 underline hover:text-orange-600'>
            Back to Insights
          </nuxt-link>
        </div>
        <div data-aos='fade-up' class='mx-auto py-12 px-4 sm:px-6 lg:py-30 lg:px-8 px-4 nuxt-content'
             aria-hidden='true'>
          <nuxt-content :document='newsletter' />
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  async asyncData({ params, $content }) {
    const newsletter = await $content('newsletters', params.newsletter)
      .fetch()
    return {
      newsletter
    }
  },
  head() {
    return {
      title: this.newsletter.title,
      description: this.newsletter.description,
      meta: [
        // Twitter Card
        {
          hid: 'description',
          name: 'description',
          content: this.newsletter.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.newsletter.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.newsletter.description
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.newsletter.title
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://res.cloudinary.com/www-andurilpartners-ai/image/upload/c_scale,q_auto,h_300/${this.newsletter.coverimg}.jpg`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.newsletter.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.newsletter.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/www-andurilpartners-ai/image/upload/c_scale,q_auto,h_300/${this.newsletter.coverimg}.jpg`
        }
      ]
    }
  }
}
</script>
