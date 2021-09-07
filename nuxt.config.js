import global from './utils/global'
import getSiteMeta from './utils/get-site-meta'
import getRoutes from './utils/get-routes'

const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    siteTitle: 'Anduril Partners',
    topNavItems: [
      { label: 'Contact', slug: 'contact' }
    ],
    navItems: [
      { label: 'Home', slug: '', dropdown: false },
      { label: 'About Us', slug: 'about', dropdown: false },
      {
        label: 'Our Solutions', slug: 'solutions', dropdown: true, subNavs: [
          { name: 'All Solutions', tgt: '/solutions', description: '' },
          { name: 'KPI Strategy', tgt: '/solutions/strategy', description: 'Put an end to indecision, uninformed decisions, and haphazard decisions. We\'ll help align your decision-making around a data-driven approach.' },
          { name: 'KPI Design', tgt: '/solutions/design', description: 'Develop a universal language across you organization and answer key business questions buy developing a robust set of KPIs.' },
          { name: 'KPI Workflow', tgt: '/solutions/workflow', description: 'Build a robust solution that fits your organizational needs, resources and technology capabilities.' },
          { name: 'ESG Solutions', tgt: '/solutions/esg', description: 'Leverage our deep understanding of ESG and experience working with many types of stakeholder groups the ESG ecosystem.' },
          { name: 'Anduril Accelerators', tgt: '/solutions/accelerators', description: 'Accelerate your growth by excelling in the critical elements that often hamper growth.' }
        ]
      },
      { label: 'Our Approach', slug: 'approach', dropdown: false },
      { label: 'Insights', slug: 'insights', dropdown: false }
    ]
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en-US',
      class: 'bg-black'
    },
    title: 'Anduril Partners',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      {
        property: 'og:site_name',
        content: global.siteName || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
      {
        property: 'og:image:width',
        content: '740'
      },
      {
        property: 'og:image:height',
        content: '300'
      },
      {
        name: 'twitter:site',
        content: global.siteName || ''
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'linkedin:site',
        name: 'linkedin:site',
        content: 'https://www.linkedin.com/company/andurilpartners/'
      },
      {
        hid: 'linkedin:creator',
        name: 'linkedin:creator',
        content: 'https://www.linkedin.com/company/andurilpartners/'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882145/og/default_ff6rsr.jpg'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882145/og/default_ff6rsr.jpg'
      }
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
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vClickOutside', ssr: false },
    '~/plugins/axios.js',
    { src: '~/plugins/disqus' },
    { src: '~/plugins/format-date' },
    { src: '~/plugins/truncate' },
    { src: '~/plugins/format-time' },
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
    '@nuxt/components',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/cloudinary',
    '@nuxtjs/dotenv',

    ['vue-scrollto/nuxt', { duration: 500 }],
    '@nuxtjs/markdownit',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],


  googleFonts: {
    families: {
      Inter: true
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'Anduril Partners | Data to KPI solutions',
      description: 'We help companies discover their ground truth, build KPIs and make data-driven decisions',
      ogImage:
        'https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1628882073/anduril-logos/logo-white-on-orange_syfekv.svg',
      ogHost: 'https://andurilpartners.ai'
    },
    manifest: {
      lang: 'en',
      name: 'Anduril Partners | Data to KPI solutions',
      short_name: 'Anduril Partners | Data | KPIs',
      start_url: '/index.html',
      display: 'standalone',
      theme_color: '#FF8400'
    }
  },

  purgeCSS: {
    whitelist: ['dark-mode', 'aos-init', 'aos-animate']
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      // eslint-disable-next-line
      const md = require('markdown-it')()
      // eslint-disable-next-line
      if (document.extension === '.md') {
        // eslint-disable-next-line global-require
        const { time } = require('reading-time')(document.text, { wordsPerMinute: 300 })
        document.readingTime = time
        const mdToHtml = md.render(document.text)
        document.bodyText = mdToHtml
      }
    }
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  cloudinary: {
    cloudName: 'www-andurilpartners-ai',
    apiKey: 'tznDwFGJ59UPFhtVzRR80TtiG9g',
    apiSecret: '594873127926649',
    useComponent: true
  },


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    dir: 'content',
    liveEdit: false,
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkExternalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['solutions.banner']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  feed: async () => {
    const { $content } = require('@nuxt/content')
    const tags = await $content('insights').only(['tags']).fetch()
    const insights = await $content('insights').fetch()

    return tags.map(tag => {
      const relevantInsights = insights.filter(insight => insight.tags.includes(tag))

      return {
        path: `/${tag}.xml`,
        create(feed) {
          feed.options = {
            title: `Category: ${tag} - Anduril Partners`,
            link: `https://andurilpartners.ai/${tag}.xml`,
            description: `All posts related to ${tag} of the Anduril Partners Blog`
          }

          relevantInsights.forEach(insight => {
            feed.addItem({
              title: insight.title,
              id: insight.slug,
              link: `https://andurilpartners.ai/${insight.dir}/${insight.slug}`,
              description: insight.description,
              content: insight.bodyText
            })
          })
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2'
      }
    })
  },

  googleAnalytics: {
    id: 'G-FWFH1CH7FB',
    autoTracking: {
      screenview: true
    }
  },

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  colorMode: {
    classSuffix: ''
  },

  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes()
    }
  },
  build: {},
  generate: {
    fallback: true,
    devtools: true
  }
}
