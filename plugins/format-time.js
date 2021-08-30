import Vue from 'vue'

Vue.filter('formattime', function (value) {
  const minutes = Math.floor(value / 60000)
  if (minutes < 1) {
    return 1
  }
  return `${minutes}`
})
