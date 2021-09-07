const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    darkSelector: '.dark-mode',
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // snip...
            blockquote: {
              fontSize: '150%',
              fontWeight: '500',
              fontStyle: 'italic',
              borderLeftWidth: '0.0rem',
              // borderLeftColor: theme('colors.gray.200'),
              marginTop: em(0, 30),
              marginLeft: em(30, 30)
            },
            'blockquote:before': {
              fontSize: '4.5em',
              marginTop: em(-12, 30),
              marginLeft: em(-18, 30),
              color: '#919da7',
              position: 'absolute',
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              content: '"\\201C"',
              fontWeight: 'bold',
              fontStyle: 'normal'
            },
            'blockquote p:first-of-type::before': {
              content: '""'
            },
            'blockquote p:first-of-type::after': {
              content: '""'
            }
          }
        },
        sm: {
          css: {
            blockquote: {
              marginTop: em(0, 30),
              marginLeft: em(24, 30)
            },
            'blockquote:before': {
              fontSize: '4.5em',
              marginTop: em(-12, 30),
              marginLeft: em(-18, 30)
            }
          }
        },
        lg: {
          css: {
            blockquote: {
              marginTop: em(0, 30),
              marginLeft: em(24, 30)
            },
            'blockquote:before': {
              fontSize: '4.5em',
              marginTop: em(-12, 30),
              marginLeft: em(-18, 30)
            }
          }
        },
        xl: {
          css: {
            blockquote: {
              marginTop: em(0, 30),
              marginLeft: em(28, 30)
            },
            'blockquote:before': {
              fontSize: '4.5em',
              marginTop: em(-12, 30),
              marginLeft: em(-18, 30)
            }
          }
        },
        '2xl': {
          css: {
            blockquote: {
              marginTop: em(0, 0),
              marginLeft: em(24, 30)
            },
            'blockquote:before': {
              fontSize: '4.5em',
              marginTop: em(-12, 30),
              marginLeft: em(-18, 30)
            }
          }
        }
      }),
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
  ],
  purge:
    {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: process.env.NODE_ENV === 'production',
      content:
        [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.js',
          'nuxt.config.js'
        ]
    },
  future: {
    removeDeprecatedGapUtilities: true
  }
}


