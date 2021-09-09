<template>
  <div v-if='loading' class='bg-GunMetal dark:bg-white w-screen h-screen fixed z-50'>
    <div class='absolute spinner-wrapper'>
      <div class='spinner'>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang='postcss' scoped>
.spinner-wrapper {
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
}

.spinner {
  width: 80px;
  height: 80px;
  margin: 100px auto;
  background-color: #FF8400;

  border-radius: 100%;
  -webkit-animation: anduril-scaleout 1s infinite ease-in-out;
  animation: anduril-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes anduril-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes anduril-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
