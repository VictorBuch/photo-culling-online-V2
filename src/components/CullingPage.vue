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
  mounted() {
    console.warn(this.clusterArray)
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
  <div v-if="false" id="NetflixView">
    <nav class="flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800">
      Accepted pictures: {{ totalNumSelectedImages }} of {{ totalNumSelectedImages }}
    </nav>
    <section>
      <div v-for="cluster in clusterArray" :key="cluster[0].blob" class="flex flex-row w-full h-full mb-1 bg-dark-500 overflow-auto">
        <div class="flex flex-col p-3 pr-6 items-center ">
          <h1 class="mb-10">
            0 out of 10
          </h1>
          <ExpandClusterBtn @expanded-cluster-change="handleExpandCluster(cluster[0].blob)" />
        </div>
        <!-- TODO: Make actual layout work when expanded -->
        <div :class="[isClusterExpanded(cluster[0].blob) ? 'grid-rows-4 grid-cols-4' : 'flex flex-row']" class=" w-full h-full">
          <div v-for="image in cluster" :key="image.blob" class="flex flex-col w-96 max-h-3/5 p-2  overflow-auto justify-center items-center">
            <img class="object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer border border-dark-500 hover:border-light-800 hover:border" :src="image.blob" alt="" srcset="">
            <AcceptBtn />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- TODO: Fix vertical cluster styling -->
  <div>
    <section class="fullscreen bg-dark-800">
      <div class="VerticalClusters ">
        Clusters
      </div>
      <div class="MainImage">
        <img :src="clusterArray[0][0].blob" alt="" class="">
      </div>
      <div class="MLInfo flex flex-col p-2">
        <h1 class="flex mb-4">
          <svg
            class="icon mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="26.858"
            height="26.858"
            viewBox="0 0 26.858 26.858"
          >
            <g
              id="Group_21"
              data-name="Group 21"
              transform="translate(-74.801 -74.811)"
            >
              <path
                id="Path_38"
                data-name="Path 38"
                d="M168.271,155.12H156.923a1.8,1.8,0,0,0-1.8,1.8v11.349a1.8,1.8,0,0,0,1.8,1.8h11.349a1.8,1.8,0,0,0,1.8-1.8V156.922A1.8,1.8,0,0,0,168.271,155.12Zm.811,13.151a.815.815,0,0,1-.811.811H156.923a.815.815,0,0,1-.811-.811V156.922a.815.815,0,0,1,.811-.811h11.349a.815.815,0,0,1,.811.811Z"
                transform="translate(-74.366 -74.357)"
                fill="#b9b9b9"
              />
              <path
                id="Path_41"
                data-name="Path 41"
                d="M101.146,86.615a.5.5,0,1,0,0-.992H98.168V82.375h2.977a.5.5,0,1,0,0-.992H98.127a3.472,3.472,0,0,0-3.039-3.039V75.326a.5.5,0,0,0-.992,0V78.3h-3.25V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H86.606V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H82.366V75.326a.5.5,0,0,0-.992,0v3.017a3.472,3.472,0,0,0-3.039,3.039h-3.02a.5.5,0,1,0,0,.992h2.977v3.25H75.316a.5.5,0,1,0,0,.992h2.977v3.249H75.316a.5.5,0,1,0,0,.992h2.977V94.1H75.316a.5.5,0,1,0-.038.991h3.057a3.471,3.471,0,0,0,3.039,3.039v3.018a.5.5,0,0,0,.992,0V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,0,0,.992,0V98.136A3.471,3.471,0,0,0,98.125,95.1h3.019a.5.5,0,1,0,.038-.991H98.168V90.856h2.977a.5.5,0,1,0,0-.992H98.168V86.615Zm-3.968,8.073a2.5,2.5,0,0,1-2.5,2.5h-12.9a2.5,2.5,0,0,1-2.5-2.5v-12.9a2.5,2.5,0,0,1,2.5-2.5h12.9a2.5,2.5,0,0,1,2.5,2.5Z"
                transform="translate(0 0)"
                fill="#b9b9b9"
              />
              <text
                id="AI"
                transform="translate(88.281 90.811)"
                fill="#b9b9b9"
                font-size="9"
                font-family="Helvetica"
                letter-spacing="-0.02em"
              >
                <tspan x="-4.162" y="0">
                  AI
                </tspan>
              </text>
            </g>
          </svg>
          Auto Culling
        </h1>
        <div class="grid grid-rows-2 grid-cols-2 gap-2">
          <p class="text-left">
            Confidence
          </p>
          <p class="text-right">
            38%
          </p>
          <p class="text-left">
            Images accepted
          </p>
          <p class="text-right">
            0 out of 100
          </p>
        </div>
      </div>
      <div class="AcceptedPanel ">
        <h1>Accepted</h1>
        <img :src="clusterArray[0][0].blob" alt="" class="p-1">
      </div>
      <div class="RejectedPanel ">
        <h1>Rejected</h1>
        <img :src="clusterArray[0][0].blob" alt="" class="p-1">
      </div>
    </section>
  </div>

  <!-- <div id="vertical cluster legacy">
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
          <img class="" :src="clusterArray[0][0].blob" alt="" srcset="">
          <h1 class="">
            Number of images in cluster
          </h1>
        </div>
        <div><img :src="clusterArray[1][0].blob" alt="" srcset=""><h1>Number of images in cluster</h1></div>
        <div><img :src="clusterArray[2][0].blob" alt="" srcset=""><h1>Number of images in cluster</h1></div>
      </div>
    </div>
  </div> -->
</template>

<!-- // FNumber ('F/FNumber')
      // ISO
      // FocalLength ('mm')
      // LensModel -->

<style scoped>

</style>
