import Vue from 'vue'

Vue.filter('truncate', function (string, value) {
  return (string || '').substring(0, value) + '…'
})
