import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
  Vue.use(VueGtag, {
    id: 'G-FWFH1CH7FB',
    enabled: true
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  Vue.use(VueGtag, {
    id: 'G-FWFH1CH7FB',
    enabled: false
  })
}
