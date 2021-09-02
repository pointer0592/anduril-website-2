<template>
 <div class='flex flex-wrap items-start content-around justify-start text-xs font-medium mt-2'>
    <span v-for="(tag, id) in tags" :key="`tag-${id}`"
    data-aos="fade-up"
    class="w-fit h-fit px-3 mb-1 border rounded-full py-1 text-white border border-1 border-white mr-2 bg-GunMetal bg-opacity-70">
      {{ tag }}
    </span>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'Tags',
  mixins: [aosMixin],
  props: {
    tags: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
