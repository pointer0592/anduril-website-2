import Cloudinary, { CldImage, CldVideo, CldTransformation } from 'cloudinary-vue'
import Vue from 'vue'

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'www-andurilpartners-ai',
    secure: true },
  components: [CldImage, CldTransformation, CldVideo]
})
