<template>
  <div>
    <primary-hero
      :hero-img='"/hero-images/solutions/" + subSolution.heroImage'
      :hero-title='subSolution.area'
      :hero-lead='subSolution.title'
    />
    <sub-solution-section id='anduril-core' :solution='subSolution' />
    <media-banner v-if="subSolution.banner.bannerTitle!==''" id='subSolution.banner.title'
                  :media-banner='subSolution.banner' />
    <card-rows :card-items='subSolutions'>
      <template slot='title'>
        <h2 class='font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl'>
          Other&nbsp;<span class='text-orange-500'>{{ subSolution.area }}&nbsp;</span>&nbsp;focus areas
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
    const subSolution = await $content('solutions/subsolutions', params.subsolution)
      .fetch()

    const subSolutions = await $content('solutions/subsolutions')
      .where({ parentSolution: { $eq: subSolution.parentSolution } })
      .fetch()

    const solutions = await $content('solutions')
      .fetch()

    return {
      subSolution,
      subSolutions,
      solutions
    }
  }
}
</script>

<style scoped>

</style>
