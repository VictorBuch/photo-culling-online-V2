<!-- THIS component handles all of the culling -->
<script>
import ExpandClusterBtn from './expandClusterBtn.vue'
export default {
  components: { ExpandClusterBtn },
  props: {
    clusterArray: { type: Array, required: true },
  },
  data() {
    return {
      totalNumSelectedImages: 100,
      expandedClusters: [],
    }
  },
  computed: {
    isClusterExpanded() {
      return open => this.expandedClusters.includes(open)
    },
  },
  methods: {
    handleExpandCluster(cluster) {
      if (this.isClusterExpanded(cluster))
        this.expandedClusters.splice(this.expandedClusters.indexOf(cluster), 1)

      else
        this.expandedClusters.push(cluster)
    },
  },
}

</script>

<template>
  <!-- TODO: Make this a component -->
  <div id="NetflixView">
    <nav class="flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800">
      Accepted pictures: {{ totalNumSelectedImages }} of {{ totalNumSelectedImages }}
    </nav>
    <section>
      <div v-for="cluster in clusterArray" :key="cluster[0][0]" class="flex flex-row w-full h-full mb-1 bg-dark-500 overflow-auto">
        <div class="flex flex-col p-3 pr-6 items-center">
          <h1 class="mb-10">
            0 out of 10
          </h1>
          <ExpandClusterBtn @expanded-cluster-change="handleExpandCluster(cluster[0][0])" />
        </div>
        <!-- TODO: Make actual layout work when expanded -->
        <div :class="[isClusterExpanded(cluster[0][0]) ? 'grid-rows-4 grid-cols-4' : 'flex flex-row']" class=" w-full h-full">
          <div v-for="image in cluster" :key="image[0]" class="flex flex-col w-96 max-h-3/5 p-2  overflow-auto justify-center items-center">
            <img class="object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer border border-dark-500 hover:border-light-800 hover:border" :src="image[0]" alt="" srcset="">
            <AcceptBtn />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- TODO: Fix vertical cluster styling -->
  <!-- <div>
    <section>
      <div class="flex flex-col items-start w-64 p-4">
        <div className="flex flex-row items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#b9b9b9"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
          </svg>
          <h1>
            Clusters
          </h1>
        </div>
        <div class="flex flex-col justify-center items-center w-full my-6">
          <div class="">
            <img class="" :src="clusterArray[0][0][0]" alt="" srcset="">
            <h1 class="">
              Number of images in cluster
            </h1>
          </div>
          <div><img :src="clusterArray[1][0][0]" alt="" srcset=""><h1>Number of images in cluster</h1></div>
          <div><img :src="clusterArray[2][0][0]" alt="" srcset=""><h1>Number of images in cluster</h1></div>
        </div>
      </div>
    </section>
  </div> -->
</template>

<style scoped>

</style>
