<template>
  <div>
    <primary-hero
      :hero-img="'posts/' + post.coverimg"
      :hero-title='post.title'
      :hero-lead='post.description'
      :person-name='post.author.name'
      :person-two-name='post.authorTwo.name'
      :published='post.published'
      :reading-time='post.readingTime'
      center
    >
      <div class='flex flex-wrap items-start content-around justify-start text-xs font-medium mt-2 space-x-1'>
        <tags :tags='post.tags' />
      </div>
    </primary-hero>
    <post :page='post'>

      <div v-if='post.pdf' class='mt-12 flex justify-center'>

        <nuxt-link type='button'
                   class='mx-auto'
                   :to='file'
                   target='_blank'
                   rel='nofollow'>

          <button type='button'
                  class='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-0 text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>
                  Download pdf
            <v-icon name='icon-download' class='ml-3 -mr-1 h-5 w-5 text-white' aria-hidden='true' />
          </button>
        </nuxt-link>
      </div>
    </post>
  </div>
</template>

<script>

export default {
  async asyncData({ params, $content }) {
    const post = await $content('posts', params.slug)
      .fetch()
    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
      description: this.post.description,
      meta: [
        // Twitter Card
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
        // Facebook OpenGraph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://res.cloudinary.com/www-andurilpartners-ai/image/upload/c_scale,q_auto,h_300/${this.post.coverimg}.jpg`,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/www-andurilpartners-ai/image/upload/c_scale,q_auto,h_300/${this.post.coverimg}.jpg`,
        },
      ],
    }
  },
  computed: {
    mockupMobileSrc() {
      try {
        return this.post.mobileImage
      } catch (error) {
        return this.post.coverimg
      }
    },
    file() {
      return '/pdfs/' + this.post.pdf + '.pdf'
    },
  }
}
</script>
