<script setup lang="ts">

</script>

<script lang="ts">
export default {
  data() {
    return {
      pageShown: 'uploadImages',
      loadedClusterArray: [[]],
    }
  },
  methods: {
    imagesLoaded(e: { array: never[][] }) {
      this.pageShown = 'cullingPage'
      this.loadedClusterArray = e.array
    },
  },
}

</script>

<template>
  <WelcomePage v-if="pageShown === 'welcomeScreen'" />

  <UploadImagesPage v-if="pageShown === 'uploadImages'" @loaded="imagesLoaded" />

  <CullingPage v-if="pageShown === 'cullingPage'" :cluster-array="loadedClusterArray" />
</template>

<style>

</style>
