<template>
  <div class='flex-shrink-0'>
    <figure>
      <figcaption v-if='title' class='text-lg font-bold text-GunMetal dark:text-white pb-4'>{{ title }}</figcaption>

      <v-cloud-image
        :public-id="'/insights/inserts/'+src"
        :alt='caption'
        quality='auto'
        cloud-crop='fill'
        cloud-fetch-format='auto'
        class='h-full w-full'
        cloud-loading='lazy'
          cloud-placeholder='blur'
        />

      <figcaption v-if='caption' class='text-center text-sm italic text-GunMetal dark:text-white'>Source: {{ caption }}
      </figcaption>
    </figure>
  </div>
</template>

<script>

export default {
  name: 'MarkdownImage',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    }
  }
}
</script>


<style>
figure img {
  @apply mx-auto;
}

.portrait-caption {
  max-width: 576px;
}

.image-border img {
  @apply border;
}

.rounded-corners img {
  @apply rounded;
}
</style>
