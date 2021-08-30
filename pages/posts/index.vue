<template>
  <div>
    <primary-hero
      hero-img='/hero-images/chess-design'
      hero-title='Anduril Insights'
      hero-lead='Blog Posts and Current Events'
    />
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <app-search-input />
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Anduril Posts and Insights</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
            <p data-aos='fade-up' class='text-large text-GunMetalDk dark:text-white w-full pt-1 pb-4'>Sort by
              tag:</p>
            <div class='flex flex-wrap items-start content-around justify-start text-xs font-medium mt-2'>
              <chip
                class='text-sm mr-2 text-GunMetal border-1 border-GunMetal dark:text-white dark:dark:border-1 dark:border-white hover:bg-gray-200 dark:hover:bg-GunMetalLt'
                text='All'
                clickable
                :class="{ selected: pageParam === 'all' }"
                @chip-clicked='pageParam'
              />
              <chip
                v-for='tag in getAllTags(tags)'
                :key='tag.slug'
                :text='tag'
                class='text-sm mr-2 text-GunMetal border-1 border-GunMetal dark:text-white dark:dark:border-1 dark:border-white hover:bg-gray-200 dark:hover:bg-GunMetalLt hover:border-orange-500 dark:hover:border-orange-500'
                :class='tagClass(tag)'
                :active='isSelectedTag(tag)'
                clickable
                @chip-clicked='sortByTag'
              />
            </div>

          </div>
          <transition-group
            name='page'
            tag='div'
            class='mt-12 mx-auto max-w-md grid gap-8 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl'
          >
            <div
              v-for='post in filteredPosts'
              :key='post.slug'
            >
              <post-card
                :post='post'
              />
            </div>
          </transition-group>

        </div>
      </div>
    </section>
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Relevant New Articles</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
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
            <post-card
              :post='article'
            />
          </div>
        </transition-group>

      </div>
    </section>
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Newsletters</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.</p>
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
            <post-card
              :post='newsletter'
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
import getAllTags from '~/mixins/sort-by-tag'
import sortByTag from '~/mixins/get-all-tags'

export default {
  mixins: [sortByTag, getAllTags, aosMixin],
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .where({
        isLive: true
      })
      .where({ category: { $contains: 'Blog' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    const news = await $content('posts', params.slug)
      .where({
        isLive: true
      })
      .where({ category: { $contains: 'News' } })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    const tags = await $content('posts', params.slug)
      .where({
        isLive: true
      })
      .only(['tags'])
      .fetch()

    const newsletters = await $content('newsletters', params.slug)
      .where({
        isLive: true
      })
      .sortBy('published', 'desc')
      .without('body')
      .fetch()
    return {
      posts,
      tags,
      news,
      newsletters
    }
  },
  data() {
    return {
      byTag: ''
    }
  },
  head() {
    return {
      title: this.posts.title,
      description: this.posts.description,
      meta: [
        // Twitter Card
        {
          hid: 'description',
          name: 'description',
          content: this.posts.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.posts.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.posts.description
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.posts.title
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.posts.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.posts.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882145/og/default_ff6rsr.jpg'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882145/og/default_ff6rsr.jpg'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      return this.byTag
        ? this.posts.filter(post => post.tags.includes(this.byTag))
        : this.posts
    }
  }
}
</script>
