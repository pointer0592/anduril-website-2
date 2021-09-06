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
            <p  v-if='sectionLead' class='text-base lg:text-lg text-gray-500 dark:text-gray-200'
          :class='textCenter'>
              {{ sectionLead }}
            </p>
        </div>
        <div class='pb-10 pb-5' :class='lineColors' />
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
    lineColor: {
      type: String,
      default: 'gray'
    }
  },
  computed:{
    lineColors() {
      if ( this.hasLine===true ) {
        return `border-b border-${this.lineColor}-100 dark:border-b dark:border-${this.lineColor}-400`
      }
      return ''
    },
    textCenter() {
      return this.isCentered ? 'text-center' : ''
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
      }

      return paddingClasses
    }
  }
}
</script>
