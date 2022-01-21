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
      totalNumSelectedImages: this.clusterArray.reduce((count, row) => { return count + row.length }, 0),
      expandedClusters: [],
      acceptedImages: [],
      selectedImage: this.clusterArray[0][0].blob,
      selectedClusterIndex: 0,
      isFullscreen: false,
    }
  },
  computed: {
    isClusterExpanded() {
      return open => this.expandedClusters.includes(open)
    },
    isImageAccepted() {
      return image => this.acceptedImages.includes(image)
    },
    isImageSelected() {
      return image => this.selectedImage === image
    },
    selectedImageClusterIndex() {
      return this.clusterArray[this.selectedClusterIndex].indexOf(this.clusterArray[this.selectedClusterIndex].find(image => image.blob === this.selectedImage))
    },
    selectedClustersRejectedImages() {
      return this.clusterArray[this.selectedClusterIndex].filter(image => !this.acceptedImages.includes(image.blob))
    },
    selectedClustersAcceptedImages() {
      return this.clusterArray[this.selectedClusterIndex].filter(image => this.acceptedImages.includes(image.blob))
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeypress)
  },
  unmounted() {
    window.removeEventListener('keydown', this.handleKeypress)
  },
  methods: {
    handleKeypress(e) {
      console.warn(e.code)
      switch (e.code) {
        case 'KeyF':
          this.isFullscreen = !this.isFullscreen
          break
        default:
          break
      }
    },
    handleExpandCluster(cluster) {
      if (this.isClusterExpanded(cluster))
        this.expandedClusters.splice(this.expandedClusters.indexOf(cluster), 1)

      else
        this.expandedClusters.push(cluster)
    },
    handleAcceptedImageArrayChange(image) {
      if (this.acceptedImages.includes(image)) {
        this.acceptedImages.splice(this.acceptedImages.indexOf(image), 1)
        return
      }
      this.acceptedImages.push(image)
    },
    selectImage(image, clusterIndex) {
      this.selectedImage = image
      this.selectedClusterIndex = clusterIndex
    },
  },
}

</script>

<template>
  <!-- TODO: Make this a component -->
  <div v-if="!isFullscreen" id="NetflixView">
    <nav class="flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800">
      Accepted pictures: {{ acceptedImages.length }} of {{ totalNumSelectedImages }}
    </nav>
    <section>
      <div v-for="(cluster, index) in clusterArray" :key="cluster[0].blob" class="flex flex-row w-full h-full mb-1 bg-dark-500 ">
        <div class="flex flex-col p-3 pr-6 items-center w-max w-auto whitespace-nowrap">
          <h1 class="mb-10 w-full">
            {{ `${cluster.length} out of ${cluster.length}` }}
          </h1>
          <ExpandClusterBtn @expanded-cluster-change="handleExpandCluster(cluster[0].blob)" />
        </div>
        <div
          :class="[isClusterExpanded(cluster[0].blob) ? 'columns-sm' : 'grid grid-rows-1 auto-cols-auto grid-flow-col overflow-auto snap snap-mandatory snap-x']"
          class=" w-full h-full items-center "
        >
          <div v-for="image in cluster" :key="image.blob" class="flex flex-col w-96 max-h-3/5 p-2 justify-center items-center snap-start">
            <img
              :class="[isImageSelected(image.blob) ? 'border-light-800 border' : 'border border-dark-500']"
              class="object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer"
              :src="image.blob"
              alt=""
              srcset=""
              @click="selectImage(image.blob, index)"
              @dblclick="handleAcceptedImageArrayChange(image.blob)"
            >
            <AcceptBtn :is-accepted="isImageAccepted(image.blob)" @click="handleAcceptedImageArrayChange(image.blob)" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <section v-if="isFullscreen" class="fullscreen bg-dark-800 w-screen h-screen overflow-hidden">
    <div class="flex h-8/12">
      <div class="flex flex-col w-2/12">
        <div className="flex flex-row items-center p-3 items-start justify-start bg-dark-300">
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
        <div class="VerticalClusters h-3/4 bg-dark-300 mb-1 flex flex-col items-center justify-center">
          <VerticalClusters
            :cluster-array="clusterArray"
            :current-cluster-index="selectedClusterIndex"
          />
          <!-- @previous-cluster="selectedClusterIndex -= 1"
            @next-cluster="selectedClusterIndex += 1" -->
        </div>
        <div class="MLInfo flex flex-col p-2 h-1/4 bg-dark-300 mb-1">
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
              {{ Math.round(Math.random(0,1)*100) }}%
            </p>
            <p class="text-left">
              Images accepted
            </p>
            <p class="text-right">
              {{ `${acceptedImages.length} out of ${clusterArray[selectedClusterIndex].length}` }}
            </p>
          </div>
        </div>
      </div>
      <div class="MainImage flex flex-col h-full w-10/12 items-center justify-center">
        <img class="w-full h-11/12 object-contain p-2" :src="clusterArray[selectedClusterIndex][selectedImageClusterIndex].blob" alt="">
        <div class="flex h-1/12 w-2/3 justify-center">
          <p class="w-full">
            ISO {{ clusterArray[selectedClusterIndex][selectedImageClusterIndex].ISO }}
          </p>
          <p class="w-full">
            f/{{ clusterArray[selectedClusterIndex][selectedImageClusterIndex].FNumber }}
          </p>
          <p class="w-full">
            {{ clusterArray[selectedClusterIndex][selectedImageClusterIndex].FocalLength }}mm
          </p>
          <p class="w-full">
            {{ clusterArray[selectedClusterIndex][selectedImageClusterIndex].name }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex w-screen h-4/12">
      <div class="AcceptedPanel flex flex-col bg-dark-300 w-1/3 items-start justify-start mr-1">
        <h1 class="p-2">
          Accepted
        </h1>
        <div class="flex w-full h-full overflow-x-auto snap snap-mandatory snap-x">
          <div v-for="image in selectedClustersAcceptedImages" :key="image" class="flex flex-col w-80 h-full p-2  overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start">
            <img
              :class="[isImageSelected(image.blob) ? 'border-light-800 border' : 'border border-dark-500']"
              class="object-contain aspect-auto rounded mb-2 cursor-pointer"
              :src="image.blob"
              alt=""
              srcset=""
              @click="selectImage(image.blob, selectedClusterIndex)"
              @dblclick="handleAcceptedImageArrayChange(image.blob)"
            >
            <AcceptBtn :is-accepted="isImageAccepted(image.blob)" @click="handleAcceptedImageArrayChange(image.blob)" />
          </div>
        </div>
      </div>
      <div class="RejectedPanel flex flex-col bg-dark-300 w-screen items-start justify-start ">
        <h1 class="p-2">
          Rejected
        </h1>
        <div class="flex w-full h-full overflow-x-auto snap snap-mandatory snap-x">
          <div v-for="image in selectedClustersRejectedImages" :key="image" class="flex flex-col w-80 h-full p-2  overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start">
            <img
              :class="[isImageSelected(image.blob) ? 'border-light-800 border' : 'border border-dark-500']"
              class="object-contain aspect-auto rounded mb-2 cursor-pointer"
              :src="image.blob"
              alt=""
              srcset=""
              @click="selectImage(image.blob, selectedClusterIndex)"
              @dblclick="handleAcceptedImageArrayChange(image.blob)"
            >
            <AcceptBtn :is-accepted="isImageAccepted(image.blob)" @click="handleAcceptedImageArrayChange(image.blob)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
