<template>
  <div>
    <primary-hero
      hero-img='/hero-images/esg-services-design'
      hero-title='ESG Resource Center'
    />
    <section class='bg-white dark:bg-GunMetal'>
      <div class='bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div class='relative max-w-lg mx-auto divide-y-2 divide-gray-200 dark:divide-white lg:max-w-7xl'>
          <div>
            <div class='border-b border-gray-200'>
              <div class='sm:flex sm:items-baseline'>
                <h3 class='text-xl leading-6 font-medium text-GunMetal dark:text-white'>
                  Resource Sections
                </h3>
                <div class='mt-4 sm:mt-0 sm:ml-10'>
                  <nav class='-mb-px flex space-x-8'>
                    <nuxt-link v-for='tab in tabs' :key='tab.name' v-scroll-to='`#${tab.id}`' :to='`#${tab.id}`'
                               :class="[tab.current ? 'border-orange-500 text-orange-500' : 'border-transparent dark:text-gray-200 text-gray-500 hover:text-gray-700 dark-hover:text-gray-50 hover:border-gray-300 dark:hover:border-gray-50', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']"
                               :aria-current="tab.current ? 'page' : undefined">
                      {{ tab.name }}
                    </nuxt-link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Use Cases</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Donec vitae urna tincidunt, tempus
              enim sit amet, elementum lorem. Ut ac dui feugiat, pulvinar ligula vitae, finibus mauris. Aenean
              convallis, orci et mollis venenatis, nunc nulla ornare quam, ac vestibulum augue dolor id augue.</p>
          </div>
        </div>
      </div>
    </section>
    <news-links id='press-box' :title='newsTitle' :lead='newsLead' :news-links='esg' />
    <grid-list id='esg-resources' grid-title='ESG Resources' grid-lead='Get weekly articles in your inbox on how to grow your business.' :grid-items='gridItems' />
    <contact-form />
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import NewsLinks from '~/components/global/NewsLInks'
import GridList from '~/components/global/GridList'

export default {
  components: { GridList, NewsLinks },
  mixins: aosMixin,
  async asyncData({ $content }) {
    const esg = await $content('esg')
      .sortBy('date', 'desc')
      .without('body')
      .fetch()

    return {
      esg
    }
  },
  data() {
    return {
      tabs: [
        { name: 'PressBox', id: 'press-box', current: false },
        { name: 'ESG Resources', id: 'esg-resources', current: false }
      ],
      newsTitle: 'ESG Press Box',
      newsLead: 'Get weekly articles in your inbox on how to grow your business.',
      gridItems: [
        {
          title: 'Request time off',
          href: '#',
          icon: 'clock',
          iconForeground: 'text-orange-700',
          iconBackground: 'bg-orange-50'
        },
        {
          title: 'Benefits',
          href: '#',
          icon: 'badge-check',
          iconForeground: 'text-BG-700',
          iconBackground: 'bg-BG-50'
        },
        {
          title: 'Schedule a one-on-one',
          href: '#',
          icon: 'users',
          iconForeground: 'text-red-700',
          iconBackground: 'bg-red-50'
        },
        {
          title: 'Payroll',
          href: '#',
          icon: 'cash',
          iconForeground: 'text-blue-700',
          iconBackground: 'bg-blue-50'
        },
        {
          title: 'Submit an expense',
          href: '#',
          icon: 'receipt-refund',
          iconForeground: 'text-green-700',
          iconBackground: 'bg-green-50'
        },
        {
          title: 'Training',
          href: '#',
          icon: 'academic-cap',
          iconForeground: 'text-indigo-700',
          iconBackground: 'bg-indigo-50'
        }
      ]
    }
  }
}
</script>
