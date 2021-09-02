<template>
  <div>
    <SocialHead
      :title='insight.title'
      :description='insight.description'
      :image="`https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630589031/insights/${insight.coverImg}.jpg`"
    />
    <primary-hero
      :hero-img="'insights/' + insight.coverImg"
      :hero-title='insight.title'
      :hero-lead='insight.description'
      :person-name='insight.author.name'
      :person-two-name='insight.authorTwo.name'
      :person-image='insight.author.image'
      :person-two-image='insight.authorTwo.image'
      :published='insight.published'
      :reading-time='insight.readingTime'
      :is-anduril='insight.author.anduril'
      :is-anduril2='insight.authorTwo.anduril'
      :bio='insight.author.bio'
      :title='insight.author.title'
      :company='insight.author.company'
      center
    >
      <div class='mt-4'>
        <tags :tags='insight.tags' />
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
          <nuxt-content :document='insight' />
          <slot />
        </div>
      </div>
    </div>

<!--    <div v-if='insight.pdf' class='mt-12 flex justify-center'>-->

<!--      <nuxt-link type='button'-->
<!--                 class='mx-auto'-->
<!--                 :to='file'-->
<!--                 target='_blank'-->
<!--                 rel='nofollow'>-->

<!--        <button type='button'-->
<!--                class='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-0 text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>-->
<!--          Download pdf-->
<!--          <v-icon name='icon-download' class='ml-3 -mr-1 h-5 w-5 text-white' aria-hidden='true' />-->
<!--        </button>-->
<!--      </nuxt-link>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  async asyncData({ params, $content }) {
    const insight = await $content('insights', params.insight)
      .fetch()
    return {
      insight
    }
  },
  mockupMobileSrc() {
    try {
      return this.insight.mobileImage
    } catch (error) {
      return this.insight.coverImg
    }
  },
  // file() {
  //   return '/pdfs/' + this.insight.pdf + '.pdf'
  // }
}
</script>
