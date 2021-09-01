import { createSEOMeta } from './utils/seo'

export default {
  env: {
    BASE_URL: 'https://www.andurilpartners.ai',
    siteTitle: 'Anduril Partners',
    topNavItems: [
      { label: 'News & Events', slug: 'about' },
      { label: 'Contact', slug: 'contact' }
    ],
    navItems: [
      { label: 'Home', slug: '' },
      { label: 'About Us', slug: 'about' },
      { label: 'Our Services', slug: 'services' },
      { label: 'Our Approach', slug: 'approach' },
      { label: 'Insights', slug: 'insights' }
    ],
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Anduril Partners. Data to KPI solutions',
    meta: [
      ...createSEOMeta({
        title: 'Anduril Partners. Data to KPI solutions',
        intro:
          'We help companies discover their ground truth, build KPIs and make data-driven decisions',
        image: 'https://www.andurilpartners.ai/images/og/default.jpg',
        url: process.env.HOST_NAME
      }),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882073/anduril-logos/logo-white-on-orange_syfekv.svg'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/clickaway',
    { src: '~/plugins/disqus' },
    { src: '~/plugins/format-date' },
    { src: '~/plugins/truncate' },
    { src: '~/plugins/format-time' },
    {
      src: '~/plugins/vue-gtag',
      mode: 'client'
    },
    {
      src: '~/plugins/gdpr',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/', '~/components/main/', '~/components/global/', '~/components/ui/', '~/components/markdown/'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],


  robots: {
    UserAgent: '*',
    Disallow: process.env.NODE_ENV === 'production' ? '' : '/',
    Sitemap: 'https://andurilpartners.ai/sitemap.xml'
  },

  colorMode: {
    classSuffix: ''
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Anduril Partners | Data-driven Decisions, KPIs, Ground Truth Discovery',
      short_name: 'Anduril',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#fefefe',
      theme_color: '#FF8400'
    }
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      // eslint-disable-next-line
      if (document.extension === '.md') {
        // eslint-disable-next-line global-require
        const { time } = require('reading-time')(document.text, { wordsPerMinute: 300 })
        document.readingTime = time
      }
    }
  },


  cloudinary: {
    cloudName: 'www-andurilpartners-ai',
    apiKey: 'tznDwFGJ59UPFhtVzRR80TtiG9g',
    apiSecret: '594873127926649',
    useComponent: true
  },

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'https://andurilpartners.ai'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name', 'author.image', 'author.linkedin', 'author.title', 'author.company', 'authorTwo.name', 'authorTwo.image', 'authorTwo.linkedin', 'authorTwo.title', 'authorTwo.company']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    // subfolders would create redirects on netlify
    subFolders: false,
    // generates a 404 page
    fallback: true,
    // site generation for all insights
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('insights').where({ isLive: true }).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}
