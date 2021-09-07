<template>
  <section class='bg-white dark:bg-GunMetal'>
    <div class='bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8'>
      <div class='relative mx-auto lg:max-w-7xl'
      :class="paddingClasses">
        <div>
          <h2 v-if='sectionTitle' class='font-futura text-4xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl pb-4'
          :class='textCenter'>
            {{ sectionTitle }}
          </h2>
        <div class='mb-3' :class='topLineClasses' />
            <p  v-if='sectionLead' class='text-base lg:text-lg text-gray-500 dark:text-gray-200'
          :class='textCenter'>
              {{ sectionLead }}
            </p>
        </div>
        <div class='pb-10 pb-5' :class='lineClasses' />
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainSectionHeader',
  props: {
    sectionTitle: {
      type: String,
      default: ''
    },
    sectionLead: {
      type: String,
      default: ''
    },
    isCentered: {
      type: Boolean,
      default: false
    },
    isTight: {
      type: Boolean,
      default: false
    },
    isMediumBottom: {
      type: Boolean,
      default: false
    },
    isTightBottom: {
      type: Boolean,
      default: false
    },
    isMediumTop: {
      type: Boolean,
      default: false
    },
    isTightTop: {
      type: Boolean,
      default: false
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    hasTopLine: {
      type: Boolean,
      default: false
    },
    lineColor: {
      type: String,
      default: 'gray'
    },
    topLineColor: {
      type: String,
      default: 'gray'
    },
    lineWidth: {
      type: String,
      default: 'full'
    },
    topLineWidth: {
      type: String,
      default: 'short'
    }
  },
  computed:{
    textCenter() {
      return this.isCentered ? 'text-center' : ''
    },
    lineClasses() {
      const { isCentered, lineWidth, hasLine, lineColor } = this
      const lineClasses = []

      switch (true) {
        case hasLine === true && isCentered === true && lineWidth === 'full':
          lineClasses.push(`border-b border-${lineColor}-100 dark:border-b dark:border-${lineColor}-400`)
          break
        case hasLine === true && isCentered === true && lineWidth === 'short':
          lineClasses.push(`border-b border-${lineColor}-100 dark:border-b dark:border-${lineColor}-400 mx-auto w-16`)
          break
        case hasLine === true && isCentered === false && lineWidth === 'short':
          lineClasses.push(`border-b border-${lineColor}-100 dark:border-b-2 dark:border-${lineColor}-400 mr-auto w-16`)
          break
        case hasLine === true && isCentered === false && lineWidth === 'full':
          lineClasses.push(`border-b border-${lineColor}-100 dark:border-b-2 dark:border-${lineColor}-400 w-16`)
          break
        case hasLine === false:
          default:
          lineClasses.push(``)
          break
      }

      return lineClasses
    },
    topLineClasses() {
      const { isCentered, topLineWidth, hasTopLine, topLineColor } = this
      const topLineClasses = []

      switch (true) {
        case hasTopLine === false:
          topLineClasses.push(``)
          break
        case hasTopLine === true && isCentered === true && topLineWidth === 'full':
          topLineClasses.push(`border-b border-${topLineColor}-100 dark:border-b dark:border-${topLineColor}-400`)
          break
        case hasTopLine === true && isCentered === false && topLineWidth === 'short':
          topLineClasses.push(`border-b border-${topLineColor}-100 border-b-2 dark:border-b-2 dark:border-${topLineColor}-400 mr-auto w-16`)
          break
        case hasTopLine === true && isCentered === false && topLineWidth === 'full':
          topLineClasses.push(`border-b border-${topLineColor}-100 border-b-2 dark:border-b-2 dark:border-${topLineColor}-400`)
          break
        case hasTopLine === true && isCentered === true && topLineWidth === 'short':
          default:
          topLineClasses.push(`border-b border-${topLineColor}-100 border-b-2 dark:border-b-2 dark:border-${topLineColor}-400 mx-auto w-16`)
          break
      }

      return topLineClasses
    },
    paddingClasses() {
      const { isTight, isMediumBottom, isTightBottom, isMediumTop, isTightTop } = this
      const paddingClasses = []

      switch (true) {
        case isTightBottom === true && isTightTop === true:
          paddingClasses.push(``)
          break
        case isTightBottom === true && isMediumTop === true:
          paddingClasses.push(`pt-3 lg:pt-12`)
          break
        case isTightBottom === true && isMediumTop === false && isTightTop === false:
          paddingClasses.push(`pt-6 lg:pt-24`)
          break
        case isMediumBottom === true && isTightTop === true:
          paddingClasses.push(`pb-3 lg:pb-12`)
          break
        case isMediumBottom === true && isMediumTop === true:
          paddingClasses.push(`py-3 lg:py-12`)
          break
        case isMediumBottom === true && isMediumTop === false && isTightTop === false:
          paddingClasses.push(`pb-3 pt-6 lg:pb-12 lg:pt-24`)
          break
        case isTight === true:
          paddingClasses.push(``)
          break
        case isTightBottom === false && isMediumBottom === false && isTightTop === false && isMediumTop === false && isTight === false:
        default:
          paddingClasses.push(`py-12 lg:py-24`)
          break
      }

      return paddingClasses
    }
  }
}
</script>
