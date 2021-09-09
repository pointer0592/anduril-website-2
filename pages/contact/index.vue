<template>
  <div class='bg-white dark:bg-GunMetal'>
    <div class='max-w-full mx-auto py-24 px-4 sm:pt-48 sm:bp-24 sm:px-6 lg:px-8'>
      <div class='relative shadow-xl'>
        <h2 class='sr-only'>Contact us</h2>

        <div class='py-10 xl:py-12 bg-white dark:bg-GunMetal'>
          <h1 class='text-GunMetal dark:text-white font-futura font-bold text-2xl'>Stay in Touch</h1>
        </div>
        <div class='grid lg:grid-cols-4 grid-cols-1'>
          <div class='grid grid-cols-1 lg:grid-cols-3 col-span-3'>
            <!-- Contact information -->
            <div class='relative overflow-hidden py-10 px-6 bg-BG-700 dark:bg-GunMetalDk sm:px-10 xl:p-12'>
              <div class='absolute inset-0 pointer-events-none sm:hidden' aria-hidden='true'>
                <svg class='absolute inset-0 w-full h-full text-BG-800' width='343' height='388' viewBox='0 0 343 388'
                     fill='none' preserveAspectRatio='xMidYMid slice' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z' fill='url(#linear1)'
                        fill-opacity='.1' />
                  <defs>
                    <linearGradient id='linear1' x1='254.553' y1='107.554' x2='961.66' y2='814.66'
                                    gradientUnits='userSpaceOnUse'>
                      <stop stop-color='currentColor' />
                      <stop offset='1' stop-color='currentColor' stop-opacity='.5' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                   aria-hidden='true'>
                <svg class='absolute inset-0 w-full h-full text-BG-800' width='359' height='339' viewBox='0 0 359 339'
                     fill='none' preserveAspectRatio='xMidYMid slice' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z' fill='url(#linear2)'
                        fill-opacity='.1' />
                  <defs>
                    <linearGradient id='linear2' x1='192.553' y1='28.553' x2='899.66' y2='735.66'
                                    gradientUnits='userSpaceOnUse'>
                      <stop stop-color='currentColor' />
                      <stop offset='1' stop-color='currentColor' stop-opacity='0' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block' aria-hidden='true'>
                <svg class='absolute inset-0 w-full h-full text-BG-900' width='160' height='678' viewBox='0 0 160 678'
                     fill='none' preserveAspectRatio='xMidYMid slice' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z' fill='url(#linear3)'
                        fill-opacity='.1' />
                  <defs>
                    <linearGradient id='linear3' x1='192.553' y1='325.553' x2='899.66' y2='1032.66'
                                    gradientUnits='userSpaceOnUse'>
                      <stop stop-color='currentColor' />
                      <stop offset='1' stop-color='currentColor' stop-opacity='0' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 class='font-futura text-lg font-medium text-white'>Contact information</h3>
              <p class='mt-6 text-base text-gray-200 max-w-3xl'>Questions? How can we help? Please reach out to us.</p>
              <dl class='mt-8 space-y-6'>
                <dt><span class='sr-only'>Phone number</span></dt>
                <dd class='flex text-base text-gray-100'>
                  <PhoneIcon class='flex-shrink-0 w-6 h-6 text-gray-200' aria-hidden='true' />
                  <span class='ml-3'>+1 (917) 887-1295</span>
                </dd>
                <dt><span class='sr-only'>Email</span></dt>
                <dd class='flex text-base text-gray-100'>
                  <MailIcon class='flex-shrink-0 w-6 h-6 text-gray-200' aria-hidden='true' />
                  <span class='ml-3'>info@andurilpartners.ai</span>
                </dd>
              </dl>
              <ul role='list' class='mt-8 flex space-x-6'>
                <li>
                  <a>
                    <span class='sr-only'>LinkedIn</span>
                    <LinkedInLogoIcon class='h-6 w-6 text-gray-200 hover:text-Linkedin'
                                    href='https://www.linkedin.com/company/andurilpartners/' aria-hidden='true' />
                  </a>
                </li>
                <li>
                  <a>
                    <span class='sr-only'>Medium</span>
                    <MediumLogoIcon class='h-6 w-6 text-gray-200 hover:text-black'
                                 href='https://medium.com/anduril-partners'
                                 aria-hidden='true' />
                  </a>
                </li>
              </ul>
            </div>

            <!-- Contact form -->
            <div class='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-white '>
              <h3 class='font-futura text-lg font-medium text-GunMetal'>Send us a message</h3>
              <form action='#' method='POST' class='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <label for='first-name' class='block text-sm font-medium text-GunMetal'>First name</label>
                  <div class='mt-1'>
                    <input id='first-name' type='text' name='first-name' autocomplete='given-name'
                           class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent' />
                  </div>
                </div>
                <div>
                  <label for='last-name' class='block text-sm font-medium text-gray-900'>Last name</label>
                  <div class='mt-1'>
                    <input id='last-name' type='text' name='last-name' autocomplete='family-name'
                           class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent' />
                  </div>
                </div>
                <div>
                  <label for='email' class='block text-sm font-medium text-gray-900'>Email</label>
                  <div class='mt-1'>
                    <input id='email' name='email' type='email' autocomplete='email'
                           class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent' />
                  </div>
                </div>
                <div>
                  <div class='flex justify-between'>
                    <label for='phone' class='block text-sm font-medium text-gray-900'>Phone</label>
                    <span id='phone-optional' class='text-sm text-gray-500'>Optional</span>
                  </div>
                  <div class='mt-1'>
                    <input id='phone' type='text' name='phone' autocomplete='tel'
                           class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent'
                           aria-describedby='phone-optional' />
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <label for='subject' class='block text-sm font-medium text-gray-900'>Subject</label>
                  <div class='mt-1'>
                    <input id='subject' type='text' name='subject'
                           class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent' />
                  </div>
                </div>
                <div class='sm:col-span-2'>
                  <div class='flex justify-between'>
                    <label for='message' class='block text-sm font-medium text-gray-900'>Message</label>
                    <span id='message-max' class='text-sm text-gray-500'>Max. 500 characters</span>
                  </div>
                  <div class='mt-1'>
                  <textarea id='message' name='message' rows='4'
                            class='py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent'
                            aria-describedby='message-max' />
                  </div>
                </div>
                <div class='sm:col-span-2 sm:flex sm:justify-end'>
                  <button type='submit'
                          class='ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6'>
                    <span class='text-2xl font-bold'>Ship it</span>
                    <svg class='h-7 w-7 ml-2 mb-1 pt-1 text-orange-500' fill='currentColor' width='100%' height='100%'
                         viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'
                         xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'
                         xmlns:serif='http://www.serif.com/'
                         style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'>
<g>
<rect x='7.28' y='45.637' width='76.651' height='8.333'/><path
                      d='M86.81,44.047l-27.998,27.998l5.893,5.892l27.997,-27.998l-5.892,-5.892Z' /><path
                      d='M86.827,55.971l-28.015,-28.016l5.893,-5.892l28.015,28.015l-5.893,5.893Z' />
</g>
</svg>
                  </button>
                </div>
              </form>
            </div>
            </div>
            <div class='py-10 col-span-1 xl:py-12 bg-white dark:bg-GunMetal'>
              <h1 class='text-GunMetal dark:text-white font-futura font-bold text-2xl'>Latest Insights</h1>
              <div class='mt-12 mx-auto max-w-md px-4 grid gap-2 sm:max-w-lg sm:px-6 lg:px-8 grid-cols-1 lg:max-w-7xl'>
                <div
                  v-for='insight in latestInsights'
                  :key='insight.slug'
                >
                  <insight-card
                    :insight='insight'
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from '~/assets/svg/phone.svg?inline'
import MailIcon from '~/assets/svg/mail.svg?inline'
import MediumLogoIcon from '~/assets/svg/medium-logo.svg?inline'
import LinkedInLogoIcon from '~/assets/svg/linkedin.svg?inline'

export default {
  components: {
    PhoneIcon,
    MailIcon,
    MediumLogoIcon,
    LinkedInLogoIcon
  },
  async asyncData({ $content, params }) {
    const latestInsights = await $content('insights', params.slug)
      .where({
        isLive: true
      })
      .sortBy('published', 'desc')
      .without('body')
      .limit(2)
      .fetch()
    return {
      latestInsights
    }
  }
}
</script>
