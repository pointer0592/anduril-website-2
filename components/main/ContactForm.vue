<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          orange: colors.purple,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
  <div class="bg-white dark:bg-GunMetal py-30 sm:py-24">
    <section>
      <!-- Hero section -->
      <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 data-aos="fade-up" class="text-4xl font-extrabold tracking-tight xs:text-6xl sm:text-6xl text-GunMetalDk dark:text-white">
                  Let's Connect
                </h2>
                <p data-aos="fade-up" class="mt-4 text-lg text-gray-500 font-medium dark:text-gray-300 sm:mt-3">
                  Over coffee, tea, or remotely...
                </p>
                <form
                  data-aos="fade-up"
                  method="post"
                  class="mt-9 grid grid-cols-1"
                  enctype="multipart/form-data"
                  name="contact-us-form"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div
                    v-for="(contact, index) in contactData"
                    :key="'contact-section'+index"
                    :class="contact.visibility"
                    class="sm:col-span-2"
                  >
                    <div v-if="!contact.visibility" class="flex justify-between pt-6">
                      <label :for="contact.name" class="block text-sm font-medium text-GunMetal dark:text-gray-200">{{ contact.header }}</label>
                      <span v-if="!contact.required" :id="contact.name" class="text-sm font-medium text-GunMetal dark:text-gray-200">Optional</span>
                    </div>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div v-if="contact.icon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <v-icon :name="contact.icon" class="h-5 w-5 font-medium text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        :id="contact.name"
                        class="text-gray-300"
                        :class="contact.class"
                        :type="contact.type"
                        :name="contact.name"
                        :autocomplete="contact.name"
                        :placeholder="contact.placeholder"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 pt-6">
                    <div class="flex justify-between">
                      <label for="how-can-we-help-you" class="block text-sm font-medium text-GunMetal dark:text-gray-200">How can we help you?</label>
                      <span id="how-can-we-help-you-optional" class="text-sm font-medium text-GunMetal dark:text-gray-200">Optional</span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="how-can-we-help-you"
                        class="form-textarea shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium"
                        name="how-can-we-help-you"
                        placeholder="Max. 500 characters"
                        aria-describedby="how-can-we-help-you-description"
                        rows="4"
                      />
                    </div>
                  </div>
                  <div data-aos="fade-up" class="text-right sm:col-span-2">
                <button
                  id="submit_button"
                  role='button'
                  class="ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6"
                  type="submit"
                  value="Ship it"
                ><span class='text-2xl font-bold'>Ship it</span>
                  <v-icon name='arrow-right' class='h-8 w-8 ml-2' />
                </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div class="hidden sm:block">
              <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-200 rounded-l-xl lg:left-80 lg:right-0 lg:w-full" data-aos="fade-left"  />
              <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392" data-aos="fade-up">
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-orange-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div data-aos="fade-up-left" class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" :src="contactImgSrc" alt="contact_img">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'ContactForm',
  mixins: [aosMixin],
  data () {
    return {
      isActive: false,
      contactData: [
        {
          header: 'form-name',
          icon: '',
          class: 'form-input hidden',
          value: 'contact-section-us-form',
          required: '',
          placeholder: '',
          type: 'hidden',
          visibility: 'hidden'
        },
        {
          header: 'Name',
          icon: '',
          class: 'form-input shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium',
          name: '',
          id: '',
          value: '',
          required: '*',
          placeholder: 'How should we address you?',
          type: 'text',
          visibility: ''
        },
        {
          header: 'Email',
          icon: 'mail',
          class: 'form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium',
          name: '',
          id: '',
          value: '',
          required: '*',
          placeholder: "you@example.com",
          type: 'email',
          visibility: ''
        },
        {
          header: 'Phone',
          icon: 'phone',
          class: 'form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium',
          name: '',
          id: '',
          value: '',
          required: '',
          placeholder: '+0 (000) 000-0000',
          type: 'tel',
          visibility: ''
        }
      ]
    }
  },
  computed: {
    contactImgSrc () {
      return require('~/static/images/contact-section/contact.jpg')
    }
  }
}
</script>
