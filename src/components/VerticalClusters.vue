<script>
export default {
  props: ['clusterArray', 'currentClusterIndex'],
  emits: ['previousCluster', 'nextCluster'],
  data() {
    return {

    }
  },
  computed: {
    existsPreviousCluster() {
      if (this.clusterArray[this.currentClusterIndex - 1] !== undefined)
        return true

      return false
    },
    existsNextCluster() {
      if (this.clusterArray[this.currentClusterIndex + 1] !== undefined)
        return true

      return false
    },
  },
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div
      v-if="existsPreviousCluster"
      class="flex flex-col w-4/6 h-full overflow-hidden justify-center items-center"
      @click="$emit('previousCluster')"
    >
      <img class="object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border" :src="clusterArray[currentClusterIndex-1][0].blob" alt="" srcset="">
    </div>
    <div class="flex flex-col w-5/6 h-full overflow-hidden justify-center items-center">
      <img class="object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border" :src="clusterArray[currentClusterIndex][0].blob" alt="" srcset="">
    </div>
    <div
      v-if="existsNextCluster"
      class="flex flex-col w-4/6 h-full overflow-hidden justify-center items-center"
      @click="$emit('nextCluster')"
    >
      <img class="object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border" :src="clusterArray[currentClusterIndex+1][0].blob" alt="" srcset="">
    </div>

    <!-- <img v-if="existsPreviousCluster" class="w-44 h-44 object-cover" :src="clusterArray[currentClusterIndex-1][0].blob" alt="" srcset="">
    <img class="w-64 h-64 object-cover p-2" :src="clusterArray[currentClusterIndex][0].blob" alt="" srcset="">
    <img v-if="existsNextCluster" class="w-44 h-w-44 object-cover p-2 " :src="clusterArray[currentClusterIndex+1][0].blob" alt="" srcset=""> -->
  </div>
</template>
