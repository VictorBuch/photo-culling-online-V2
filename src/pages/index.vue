<script setup lang="ts">
import UploadImagesPage from '../components/UploadImagesPage.vue'
const router = useRouter()
const { t } = useI18n()
</script>

<script lang="ts">
export default {
  data() {
    return {
      areImagesLoaded: false,
      loadedClusterArray: [[]],
    }
  },
  methods: {
    imagesLoaded(e) {
      this.areImagesLoaded = true
      this.loadedClusterArray = e.array
    },
  },
}

</script>

<template>
  <section v-if="!areImagesLoaded">
    <div class=" w-screen h-screen flex my-auto mx-auto justify-center items-center overflow-hidden">
      <UploadImagesPage @loaded="imagesLoaded" />
    </div>
  </section>
  <CullingPage v-if="areImagesLoaded" :cluster-array="loadedClusterArray" />
</template>

<style>

</style>
