<template>
  <div class='flex flex-col rounded-0 shadow-lg hover:shadow-xl overflow-hidden'>
    <nuxt-link :to="'/posts/' + post.slug"
               @click.native="track('blog', 'view blog post', `single post: ${post.slug}`)"
    >
      <div v-if='post.coverimg&&!post.isMockup' data-aos="fade-up" class='flex-1'>
        <cld-image
          :public-id="'/posts/' + post.coverimg"
          :alt='post.title'
          quality='auto'
          crop='fill'
          fetch-format='auto'
          class='h-48 w-full object-cover z-1'
          responsive
          loading='lazy'
        >
          <cld-placeholder type='blur' />
        </cld-image>
      </div>
      <div v-if='post.videoSrc' data-aos="fade-up" class='h-48 w-full object-cover lazyload'>
        <video loop autoplay muted>
          <source :src='post.videoSrc' type='video/mp4'>
          Your browser does not support the video tag.
        </video>
      </div>
    </nuxt-link>
    <div class='flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between'>
      <nuxt-link :to="'/posts/' + post.slug" class='block mt-2'>
        <div class='flex-1 h-40'>
          <p data-aos="fade-up" class='text-xs font-medium text-orange-500'>
            {{ post.category }}
          </p>
          <p data-aos="fade-up" class='text-lg font-semibold text-GunMetal dark:text-white pt-2 leading-6'>
            {{ post.title }}
          </p>
          <div class='pt-2'>
            <p v-if='post.lead' data-aos="fade-up" class='text-sm text-gray-500 dark:text-gray-200'>
              {{ post.lead | truncate(150) }}
            </p>
            <p v-else data-aos="fade-up" class='h-24 mt-3 text-sm text-gray-500 dark:text-gray-200'>
              {{ post.description | truncate(150) }}
            </p>
          </div>
        </div>
      </nuxt-link>
      <div data-aos="fade-up" class='h-8'>
        <nuxt-link :to="'/posts/' + post.slug">
          <p data-aos="fade-up" class='text-base text-gray-500 dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-300'>
            more...</p>
        </nuxt-link>
      </div>

      <div class='h-16 mt-6 flex items-center space-x-4'>
        <div v-if='post.author.image' data-aos="fade-up" class='flex overflow-hidden' :class='avatarSpace'>
          <cld-image
            v-if='post.author.name'
            :public-id="'/team-headshots/' + post.author.image"
            :alt='post.author.name'
            quality='auto'
            fetch-format='auto'
            crop='fill'
            loading='lazy'
            class='h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload'
          />
          <cld-image
            v-if='post.authorTwo.name'
            :public-id="'/team-headshots/' + post.authorTwo.image"
            :alt='post.authorTwo.name'
            quality='auto'
            fetch-format='auto'
            crop='fill'
            loading='lazy'
            class='h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload'
          />
        </div>
        <div>
          <div v-if='post.author.name' data-aos="fade-up"
               class='flex items-center flex-wrap text-sm font-medium text-GunMetal dark:text-white'>
            <nuxt-link :to="'/team/' + post.author.image"
                       class='hover:underline hover:text-GunMetalLt dark:hover:text-gray-300'>
              {{ post.author.name }}
            </nuxt-link>
            <span v-if='post.authorTwo.name'>&nbsp; & &nbsp;</span>
            <nuxt-link v-if='post.authorTwo.image' :to="'/team/' + post.authorTwo.slug"
                       class='hover:underline hover:text-GunMetalLt dark:hover:text-gray-300'>
              {{ post.authorTwo.name }}
            </nuxt-link>
          </div>
          <div data-aos="fade-up" class='mt-2 text-xs font-medium text-GunMetal dark:text-white'>
            <span class='font-medium'>Published:</span> {{ post.published | formatdate }}
            <span aria-hidden='true'>&middot;</span>
            <span class='font-medium'> {{ post.readingTime | formattime }} min read </span>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import track from '@/mixins/track'

export default {
  name: 'PostCard',
  mixins: [aosMixin, track],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    avatarSpace() {
      return this.post.authorTwo.image ? '-space-x-1 pr-8' : 'pr-2'
    }
  }
}
</script>
