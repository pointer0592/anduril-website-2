const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: []
    }
  },
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    darkSelector: '.dark',
    extend: {
      colors: {
        orange: {
          default: '#FF8400',
          50: '#ffd9bf',
          100: '#ffc69d',
          200: '#ffac78',
          300: '#fd8f47',
          400: '#fa8b14',
          500: '#FF8400',
          600: '#ee7c00',
          700: '#c96800',
          800: '#a65601',
          900: '#854600'
        },
        GunMetalLt: '#33495B',
        GunMetalLighter: '#2C3E4E',
        GunMetal: '#253342',
        GunMetalDarker: '#1D2834',
        GunMetalDk: '#161F27',
        black: '#091216',
        transparent: 'transparent',
        current: 'currentColor',
        Linkedin: '#0e76a8',
        LinkedinDK: '#054f73'
      },
      fontFamily: {
        futura: ['futura-pt', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants:
    {
      display: ['responsive'],
      gradient:
        [
          'dark',
          'dark-hover',
          'dark-group-hover',
          'hover',
          'focus',
          'responsive'
        ],
      backgroundColor:
        [
          'dark',
          'dark-hover',
          'dark-group-hover',
          'hover',
          'focus',
          'responsive'
        ],
      borderColor:
        [
          'dark',
          'dark-hover',
          'dark-focus',
          'dark-focus-within',
          'hover',
          'focus',
          'responsive'
        ],
      textColor:
        [
          'dark',
          'dark-hover',
          'dark-focus',
          'dark-focus-within',
          'hover',
          'focus',
          'responsive'
        ],
      opacity:
        [
          'dark',
          'dark-hover',
          'dark-focus',
          'dark-focus-within',
          'hover',
          'focus',
          'responsive'
        ]
    },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')()
  ]
}


