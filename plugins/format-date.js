import Vue from 'vue'

Vue.filter('formatdate', function (value) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const today = new Date(value)

  return today.toLocaleDateString('en-US', options)
})
