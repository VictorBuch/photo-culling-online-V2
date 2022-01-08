<!-- THIS component handles all of the culling -->

<template>
  <!-- TODO: Make this a component -->
  <!-- <div id="NetflixView">
    <nav class="flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800">
      Accepted pictures: {{ totalNumSelectedImages }} of {{ totalNumSelectedImages }}
    </nav>
    <section>

      <div v-for="cluster in clusterArray" :key="cluster[0]" class="flex flex-row w-full h-full mb-1 bg-dark-500 ">
        <div class="flex flex-col p-3 pr-6 items-center">
          <h1>0 out of 10</h1>
          <svg
            class="my-auto cursor-pointer hover:opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            width="13.443"
            height="22.644"
            viewBox="0 0 13.443 22.644"
          >
            <path
              id="Path_49"
              data-name="Path 49"
              d="M-4098,3547.375l10.261,10.261,10.261-10.261"
              transform="translate(-3546.315 -4076.417) rotate(-90)"
              fill="none"
              stroke="#fe8029"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div v-for="image in cluster" :key="image[0]" class="flex flex-col w-96 max-h-3/5 p-2  overflow-auto justify-center items-center">
          <img class="object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer border border-dark-500 hover:border-light-800 hover:border" :src="image[0]" alt="" srcset="">
          <svg
            id="Component_3_9"
            class="cursor-pointer hover:opacity-70"
            data-name="Component 3 – 9"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
          >
            <g
              id="Rectangle_95"
              data-name="Rectangle 95"
              fill="#fe8029"
              stroke="#fe8029"
              strokeWidth="1"
            >
              <rect width="19" height="17" stroke="none" />
              <rect x="0.5" y="0.5" width="18" height="16" fill="none" />
            </g>
            <path
              id="Path_30"
              data-name="Path 30"
              d="M105.618,1053.058l4.275,4.1,7.391-9.832"
              transform="translate(-101.724 -1044.227)"
              fill="none"
              stroke="#181818"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  </div> -->

  <div>
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
        <!-- TODO: Fix vertical cluster styling -->
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
  </div>
</template>

<script lang="ts">
export default {
  props: {
    clusterArray: { type: Array, required: true },
  },
  data() {
    return {
      totalNumSelectedImages: 100,
    }
  },
  methods: {
  },
}

</script>

<style scoped>

</style>
