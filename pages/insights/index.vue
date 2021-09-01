<template>
  <div>
    <primary-hero
      hero-img='/hero-images/insights-design'
      hero-title='Anduril Insights'
      hero-copy='Blog Posts and Current Events'
    />
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Search all content</h2>
            <app-search-input data-aos='fade-up' />
            </div>
          </div>
        </div>
    </section>
    <section id='anduril-insights' class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Anduril Posts and Insights</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
          </div>
          <transition-group
            name='page'
            tag='div'
            class='mt-12 mx-auto max-w-md grid gap-8 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl'
          >
            <div
              v-for='insight in insights'
              :key='insight.slug'
            >
              <insight-card
                :insight='insight'
              />
            </div>
          </transition-group>

        </div>
      </div>
    </section>
    <section id='anduril-news-items' class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>News Articles</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
          </div>

        </div>
        <transition-group
          name='page'
          tag='div'
          class='mt-12 mx-auto max-w-md grid gap-8 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl'
        >
          <div
            v-for='article in news'
            :key='article.slug'
          >
            <insight-card
              :insight='article'
            />
          </div>
        </transition-group>

      </div>
    </section>
    <section id='anduril-newsletters' class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Newsletters</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
          </div>

        </div>
        <transition-group
          name='page'
          tag='div'
          class='mt-12 mx-auto max-w-md grid gap-8 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl'
        >
          <div
            v-for='newsletter in newsletters'
            :key='newsletter.slug'
          >
            <newsletter-card
              :newsletter='newsletter'
            />
          </div>
        </transition-group>

      </div>
    </section>
    <contact-form />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: aosMixin,
  async asyncData({ $content, params }) {
    const insights = await $content('insights')
      .where({
        isLive: true
      })
      .where({ category: { $contains: 'Blog' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    const news = await $content('insights')
      .where({
        isLive: true
      })
      .where({ category: { $contains: 'News' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    const tags = await $content('insights')
      .where({
        isLive: true
      })
      .only(['tags'])
      .fetch()

    const newsletters = await $content('newsletters')
      .where({
        isLive: true
      })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    return {
      insights,
      tags,
      news,
      newsletters
    }
  }
}
</script>
