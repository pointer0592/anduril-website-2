<template>
  <div class='flex-shrink-0'>
    <figure>
      <figcaption v-if='title' class='text-lg font-bold text-GunMetal dark:text-white pb-4'>{{ title }}</figcaption>

      <nuxt-img
        v-if='dark'
        provider="cloudinary"
:src="imageToggle"
        :alt='caption'
        :quality='quality'
        crop='fill'
        :format='fetchFormat'
        class='h-full w-full'
        :class='[ hasRing, isRounded ]'
        loading='lazy'
        />
      <nuxt-img
        v-else
        provider="cloudinary"
:src="`${prePath}${filename}`"
        :alt='caption'
        :quality='quality'
        crop='fill'
        :format='fetchFormat'
        class='h-full w-full'
        :class='[ hasRing, isRounded ]'
        loading='lazy'
        />

      <figcaption v-if='caption' class='text-center text-sm italic text-GunMetal dark:text-white'>
Source: {{ caption }}
      </figcaption>
    </figure>
  </div>
</template>

<script>

export default {
  name: 'MarkdownGenericImage',
  props: {
    title: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    fetchFormat: {
      type: String,
      default: 'auto'
    },
    quality: {
      type: String,
      default: 'auto'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    ring: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    prePath: {
      type: String,
      default: '/insights/inserts/'
    },
    filename: {
      type: String,
      default: null
    }
  },
  computed: {
    imageToggle() {
      return this.$colorMode.preference === 'light-mode' ? `/${this.prePath}/${this.filename}` : `/${this.prePath}/${this.filename}-dark`
    },
    hasRing() {
      return this.ring ? 'rounded-xl shadow-xl' : ''
    },
    isRounded() {
      return this.rounded ? 'dark:ring-gray-200 ring-GunMetal' : ''

    }
  }
}
</script>


<style>
figure img {
  @apply mx-auto;
}

.image-border img {
  @apply border;
}

.rounded-corners img {
  @apply rounded;
}
</style>
