<template>
  <footer class='bg-white dark:bg-GunMetal' aria-labelledby='footer-heading'>
    <h2 id='footer-heading' class='sr-only'>Footer</h2>
    <div class='max-w-full mx-auto pt-12 lg:pt-16'>
      <div class='border-t border-gray-400 py-8 dark:border-gray-200' />
      <div
        class='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:grid grid-cols-2 sm:grid-cols-3 xl:gap-12 gap-8'>
        <div class='space-y-8 col-span-1'>
          <div data-aos='fade-up'>
            <span class='flex items-start'>
              <v-icon name='anduril-logo' class='h-16 w-auto text-orange-500 mr-auto' />
            </span>
            <p data-aos='fade-up' class='text-2xl font-extrabold text-gray-900 dark:text-white leading-0'>Anduril
              Partners</p>
            <p data-aos='fade-up' class='text-gray-700 dark:text-gray-200 text-base'>
              We help companies discover their ground truth, build KPIs and make data-driven decisions
            </p>
          </div>
          <div class='flex space-x-6'>
            <a v-for='item in socials' :key='item.name' data-aos='fade-up' :href='item.href'>
              <span class='sr-only'>{{ item.name }}</span>
              <v-icon :name='item.icon'
                      class='h-6 w-6 text-gray-700 dark:text-gray-300'
                      :class='item.hoverColor'
                      aria-hidden='true' />
            </a>
          </div>
        </div>
        <div class='mt-12 grid col-span-2 grid-cols-3 gap-8 xl:mt-0'>
          <div class='mt-12 grid xl:mt-0'>
            <div>
              <h3 data-aos='fade-up'
                  class='text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase'>
                Solutions
              </h3>
              <ul data-aos='fade-up' role='list' class='mt-4 space-y-4'>
                <li>
                <li v-for='service in services' :key='service.name' data-aos='fade-up'>
                  <nuxt-link :to="`${service.link}`"
                             class='text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark-hover:text-white'>
                    {{ service.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class='mt-12 grid xl:mt-0'>
            <div>
              <h3 data-aos='fade-up'
                  class='text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase'>
                Company
              </h3>
              <ul role='list' class='mt-4 space-y-4'>
                <li v-for='item in company' :key='item.name' data-aos='fade-up'>
                  <nuxt-link :to='item.link'
                             class='text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark-hover:text-white'>
                    {{ item.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class='mt-12 grid xl:mt-0'>
            <div>
              <h3 data-aos='fade-up'
                  class='text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase'>
                Legal
              </h3>
              <ul role='list' class='mt-4 space-y-4'>
                <li data-aos='fade-up'>
                  <nuxt-link to="/policies/terms-of-use"
                             class='text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark-hover:text-white'>
                    Terms
                  </nuxt-link>
                <li data-aos='fade-up'>
                  <nuxt-link to="/policies/cookie-policy"
                             class='text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark-hover:text-white'>
                    Cookies
                  </nuxt-link>
                <li data-aos='fade-up'>
                  <nuxt-link to="/policies/privacy-policy"
                             class='text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark-hover:text-white'>
                    Privacy
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='mt-12 border-t border-gray-400 py-8 dark:border-gray-200'>
        <p class='text-base text-GunMetal dark:text-gray-200 text-center'>
          &copy; 2021 Anduril Partners, LLC All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'TheFooter',
  mixins: [aosMixin],
  data() {
    return {
      company: [
        { name: 'About Us', link: '/about' },
        { name: 'Approach', link: '/approach' },
        { name: 'Insights', link: '/insights' },
        { name: 'Contact', link: '/contact' }
      ],
      services: [
        { name: 'KPI Strategy', link: '/services/kpi-strategy' },
        { name: 'KPI Design', link: '/services/kpi-design' },
        { name: 'KPI Workflow', link: '/services/kpi-workflow' },
        { name: 'ESG', link: '/services/esg-services' },
        { name: 'Accelerators', link: '/services/accelerators' }
      ],
      socials: [
        {
          name: 'LinkedIn',
          icon: 'linkedin',
          href: 'https://www.linkedin.com/company/andurilpartners/',
          hoverColor: 'hover:text-Linkedin dark-hover:text-Linkedin'
        },
        {
          name: 'Medium',
          icon: 'medium-logo',
          href: 'https://medium.com/anduril-partners',
          hoverColor: 'hover:text-GunMetalDk dark-hover:text-white'
        }
      ]
    }
  }
}
</script>
