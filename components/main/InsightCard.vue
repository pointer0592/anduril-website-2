<template>
  <div class='flex flex-col rounded-0 shadow-lg hover:shadow-xl overflow-hidden'>
    <nuxt-link :to="insight.path"
    >
      <div v-if='insight.coverImg&&!insight.isMockup' data-aos="fade-up" class='flex-1'>
        <client-only>
        <cld-image
          :public-id="'/insights/' + insight.coverImg"
          :alt='insight.title'
          quality='auto'
          crop='fill'
          fetch-format='auto'
          class='h-48 w-full object-cover z-1'
          responsive
          loading='lazy'
        >
          <cld-placeholder type='blur' />
        </cld-image>
        </client-only>
      </div>
      <div v-if='insight.videoSrc' data-aos="fade-up" class='h-48 w-full object-cover lazyload'>
        <video loop autoplay muted>
          <source :src='insight.videoSrc' type='video/mp4'>
          Your browser does not support the video tag.
        </video>
      </div>
    </nuxt-link>
    <div class='flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between'>
      <nuxt-link :to="`/insights/${insight.slug}`" class='block mt-2'>
        <div class='flex-1 h-40'>
          <p data-aos="fade-up" class='text-xs font-medium text-orange-500'>
            {{ insight.category }}
          </p>
          <p data-aos="fade-up" class='text-lg font-semibold text-GunMetal dark:text-white pt-2 leading-6'>
            {{ insight.title }}
          </p>
          <div class='pt-2'>
            <p v-if='insight.lead' data-aos="fade-up" class='text-sm text-gray-500 dark:text-gray-200'>
              {{ insight.lead | truncate(150) }}
            </p>
            <p v-else data-aos="fade-up" class='h-24 mt-3 text-sm text-gray-500 dark:text-gray-200'>
              {{ insight.description | truncate(150) }}
            </p>
          </div>
        </div>
      </nuxt-link>
<div class='h-16 mt-6 flex items-center space-x-4'>
        <div v-if='insight.author.image' data-aos="fade-up" class='flex overflow-hidden' :class='avatarSpace'>
          <client-only>
          <cld-image
            v-if='insight.author.image'
            :public-id="'/headshots/' + insight.author.image"
            :alt='insight.author.name'
            quality='auto'
            fetch-format='auto'
            crop='fill'
            loading='lazy'
            class='h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload'
          />
          </client-only>
          <client-only>
          <cld-image
            v-if='insight.authorTwo.image'
            :public-id="'/headshots/' + insight.authorTwo.image"
            :alt='insight.authorTwo.name'
            quality='auto'
            fetch-format='auto'
            crop='fill'
            loading='lazy'
            class='h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload'
          />
          </client-only>
        </div>
        <div>
          <div v-if='insight.author.name' data-aos="fade-up"
               class='flex items-center flex-wrap text-sm font-medium text-GunMetal dark:text-white'>
            <nuxt-link v-if='insight.author.anduril' :to="'/about/' + insight.author.image"
                       class='hover:underline hover:text-GunMetalLt dark-hover:text-gray-300'>
              {{ insight.author.name }}
            </nuxt-link>
            <a v-if="insight.author.anduril===false&&insight.author.bio!==''" :href='insight.bio'
               target='_blank'
               rel='noopener noreferrer'
               class='hover:underline hover:text-GunMetalLt dark-hover:text-gray-300 cursor-pointer'>
              {{ insight.author.name }}<span v-if='insight.author.title'>,&nbsp;{{ insight.author.title }}</span><span v-if='insight.author.company'>,&nbsp;{{ insight.author.company }}</span>
            </a>
            <span v-if="!insight.author.anduril===false&&insight.author.bio===''">{{ insight.author.name }}</span>
            <span v-if='insight.authorTwo.name'>&nbsp; & &nbsp;</span>
            <nuxt-link v-if='insight.authorTwo.anduril' :to="'/about/' + insight.authorTwo.image"
                       class='hover:underline hover:text-GunMetalLt dark-hover:text-gray-300'>
              {{ insight.authorTwo.name }}
            </nuxt-link>
            <span v-if='insight.authorTwo.name&&!insight.authorTwo.anduril'>{{ insight.author.name }}</span>
          </div>
          <div data-aos="fade-up" class='mt-2 text-xs font-medium text-GunMetal dark:text-white'>
            <span class='font-medium'>Published:</span> {{ insight.published | formatdate }}
            <span aria-hidden='true'>&middot;</span>
            <span class='font-medium'> {{ insight.readingTime | formattime }} min read </span>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'InsightCard',
  mixins: aosMixin,
  props: {
    insight: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    avatarSpace() {
      return this.insight.authorTwo.image!=="" ? '-space-x-1 pr-8' : 'pr-2'
    }
  }
}
</script>
