<template>
  <div>
    <primary-hero
      :hero-img='"/hero-images/services/" + service.heroImage'
      :hero-title='service.area'
      :hero-lead='service.title'
    />
      <card-rows :card-items='services'>
        <template slot='title'>
          <h2 class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
            Our&nbsp;<span class='text-orange-500'>{{ service.area }}</span>&nbsp;services
          </h2>
        </template>
      </card-rows>
    <contact-form />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: aosMixin,
  async asyncData({ $content, params }) {
    const service = await $content('services/sub-services', params.slug )
      .fetch()

    const services = await $content('services/sub-services')
      .where({ area: { $eq: service.area } })
      .fetch()

    const coreServices = await $content('services/core-services')
      .fetch()

    return {
      service,
      services,
      coreServices
    }
  }
}
</script>

<style scoped>

</style>
