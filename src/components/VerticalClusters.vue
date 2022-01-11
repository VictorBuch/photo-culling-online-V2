<script>
export default {
  props: ['clusterArray', 'currentClusterIndex'],
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
  mounted() {

  },
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img v-if="existsPreviousCluster" class="w-44 h-44 object-cover" :src="clusterArray[currentClusterIndex-1][0].blob" alt="" srcset="">
    <img class="w-64 h-64 object-cover p-2" :src="clusterArray[currentClusterIndex][0].blob" alt="" srcset="">
    <img v-if="existsNextCluster" class="w-44 h-w-44 object-cover p-2 " :src="clusterArray[currentClusterIndex+1][0].blob" alt="" srcset="">
  </div>
</template>
