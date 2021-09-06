<template>
<div>
    <primary-hero
      :hero-img='"/hero-images/services/" + service.heroImage'
      hero-title='Core Service'
      :hero-lead='`${coreService.title} Services`'
    /></div>
</template>

<script>

export default {
  async asyncData({ params, $content }) {
    const coreService = await $content('services/core-services', params.slug)
      .fetch()

    const coreServices = await $content('services/core-services')
      .where({ area: { $eq: coreService.title } })
      .fetch()

    return {
      coreService,
      coreServices
    }
  }
}
</script>

<style scoped>

</style>
