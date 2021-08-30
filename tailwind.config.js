const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}'],
    whitelist: ['dark-mode','bg-GunMetal']
  },
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    darkSelector: '.dark-mode',
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
        BG: {
          50: '#EFF9FA',
          100: '#D0EEF0',
          200: '#c1e9eb',
          300: '#b1e3e7',
          400: '#92d8dd',
          500: '#80D1D7',
          600: '#64c7ce',
          700: '#45bcc4',
          800: '#36a3ab',
          900: '#2c858c'
        },
        MdBlueGreen: '#1EA2AE',
        DkBlueGreen: '#315868',
        GunMetalLt: '#33495B',
        GunMetalLighter: '#2C3E4E',
        GunMetal: '#253342',
        GunMetalDarker: '#1D2834',
        GunMetalDk: '#161F27',
        black: '#091216',
        transparent: 'transparent',
        current: 'currentColor',
        Bg: {
          light: '#ffffff',
          dark: '#222222'
        },
        Linkedin: '#0e76a8',
        LinkedinDK: '#054f73'
      },
      fontFamily: {
        sans: ["futura-pt", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    display: ['responsive'],
    gradient: [
      'selected',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'focus',
      'responsive'
    ],
    backgroundColor: [
      'selected',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'focus',
      'responsive'
    ],
    borderColor: [
      'selected',
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'focus',
      'responsive'
    ],
    textColor: [
      'selected',
      'dark',
      'dark-hover',
      'dark-active',
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
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-dark-mode')()
  ]
}