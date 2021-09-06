<template>
  <div>
    <client-only>
      <cld-image
        :public-id='publicId'
        :alt='publicId'
        :quality='cloudQuality'
        :crop='cloudCrop'
        :width='cloudWidth'
        :rounded='cloudRounded'
        :fetch-format='cloudFetchFormat'
        :gravity='cloudGravity'
        :class='cloudClasses'
        :responsive='cloudIsResponsive'
        :loading='cloudLoading'
      >
        <cld-placeholder v-if='cloudPlaceholder' :type='cloudPlaceholder' />
      </cld-image>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'VCloudImage',
  props: {
    publicId: {
      type: String,
      required: true
    },
    cloudQuality: {
      type: String,
      default: 'auto'
    },
    cloudWidth: {
      type: String,
      default: 'auto'
    },
    cloudCrop: {
      type: String,
      default: 'fill'
    },
    cloudFetchFormat: {
      type: String,
      default: 'auto'
    },
    cloudLoading: {
      type: String,
      default: 'lazy'
    },
    cloudPlaceholder: {
      type: String,
      default: 'blur'
    },
    cloudRounded: {
      type: String,
      default: '0'
    },
    cloudGravity: {
      type: String,
      default: null
    },
    cloudClasses: {
      type: String,
      default: 'h-full w-full object-cover'
    },
    cloudIsResponsive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
