<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white min-h-screen flex flex-col lg:relative">
    <div class="flex-grow flex flex-col">
      <section class="flex-grow flex flex-col bg-white">
        <div class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
          <div class="flex-shrink-0 my-auto py-16 sm:py-32">
            <p class="text-sm font-semibold text-orange-500 uppercase tracking-wide">404 error</p>
            <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
            <p class="mt-2 text-base text-gray-500">{{ errorMsg }}</p>
            <div class="mt-6">
              <nuxt-link to="/" class="text-base font-medium text-orange-500 hover:text-orange-700">Go back home<span aria-hidden="true">
                 &rarr;</span></nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <footer class="flex-shrink-0 bg-gray-50">
        <div class="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
          <nav class="flex space-x-4">
            <nuxt-link to="/contact" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</nuxt-link>
            <span class="inline-block border-l border-gray-300" aria-hidden="true" />
            <a href="https://www.linkedin.com/company/andurilpartners/" class="text-sm font-medium text-gray-500 hover:text-gray-600">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </div>
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    errorMsg() {
      switch (this.error.statusCode) {
        case 404: {
          return this.$t('error.codes.404')
        }
        default: {
          return this.$t('error.codes.default')
        }
      }
    }
  }
}
</script>
