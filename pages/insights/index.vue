<template>
  <div>
    <primary-hero
      hero-img='/hero-images/insights-design'
      hero-title='Anduril Insights'
      hero-copy='Blog Posts and Current Events'
    />
    <section-navigation :nav-links='navLinks' />
    <main-section-header section-title='Search all content' :has-line=false is-tight>
            <app-search-input data-aos='fade-up' />
    </main-section-header>
    <main-section-header id='anduril-insights' section-title='Anduril Post and Insights' section-lead='Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.' :has-line=false :has-top-line=true top-line-color='orange' is-medium-top>
          <transition-group
            name='page'
            tag='div'
            class='mt-6 mx-auto max-w-md grid gap-8 sm:max-w-lg grid:col-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl'
          >
              <insight-card
              v-for='insight in insights'
              :key='insight.slug'
                :insight='insight'
              />
          </transition-group>
    </main-section-header>

    <main-section-header id='external-perspective-items' section-title='External Perspective' section-lead='Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.' :has-line=false :has-top-line=true top-line-color='orange' is-medium-top>
        <transition-group
          name='page'
          tag='div'
          class='mt-6 mx-auto max-w-md grid gap-8 sm:max-w-lg grid:col-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl'
        >
          <div
            v-for='extpost in extposts'
            :key='extpost.slug'
          >
            <insight-card
              :insight='extpost'
            />
          </div>
        </transition-group>
    </main-section-header>
    <main-section-header id='anduril-newsletter' section-title='Anduril Newsletters & Updates' section-lead='Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.' :has-line=false :has-top-line=true top-line-color='orange' is-medium-top>
        <transition-group
          name='page'
          tag='div'
          class='mt-6 mx-auto max-w-md grid gap-8 sm:max-w-lg grid:col-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl'
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
    </main-section-header>
    <main-section-header id='anduril-news-items' section-title='News Articles' section-lead='Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.' :has-line='false' :has-top-line=true top-line-color='orange' is-medium-top>
        <transition-group
          name='page'
          tag='div'
          class='mt-6 mx-auto max-w-md grid gap-8 sm:max-w-lg grid:col-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl'
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
    </main-section-header>
    <contact-form />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import MainSectionHeader from '~/components/global/MainSectionHeader'

export default {
  components: { MainSectionHeader },
  mixins: aosMixin,
  async asyncData({ $content, params }) {
    const insights = await $content('insights',{ deep: true })
      .where({
        isLive: true
      })
      .where({ category: { $eq: 'Anduril Post' } })
      .without('body')
      .fetch()

    const extposts = await $content('insights',{ deep: true })
      .where({
        isLive: true
      })
      .where({ category: { $eq: 'External Post' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()

    const news = await $content('insights',{ deep: true })
      .where({
        isLive: true
      })
      .where({ category: { $eq: 'News' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()

    const tags = await $content('insights',{ deep: true })
      .where({
        isLive: true
      })
      .only(['tags'])
      .fetch()

    const newsletters = await $content('newsletters',{ deep: true })
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
      extposts,
      newsletters
    }
  },
  data: () => {
    return {
      navLinks: [
        { title: 'Anduril Insights', slug: 'anduril-insights' },
        { title: 'External Insights', slug: 'external-perspective-items' },
        { title: 'Anduril Newsletter', slug: 'anduril-newsletters' },
        { title: 'News', slug: 'anduril-news-items' },
      ]
    }
  }
}
</script>
