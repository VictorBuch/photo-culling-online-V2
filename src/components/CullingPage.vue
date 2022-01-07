<!-- THIS component handles all of the culling -->

<template>
  <nav class="flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800">
    Accepted pictures: {{ totalNumSelectedImages }} of {{ totalNumSelectedImages }}
  </nav>
  <section class="">
    <!-- Clusters -->
    <div v-for="cluster in clusterArray" :key="cluster[0]" class="flex flex-row w-full h-full mb-1 bg-dark-500 ">
      <div class="flex flex-col p-4 pr-10 items-start">
        <h1>0 out of 10</h1>
        <h1>Arrow</h1>
      </div>
      <!-- Image cards -->
      <div v-for="image in cluster" :key="image[0]" class="flex flex-col w-96 max-h-3/5 p-2  overflow-auto justify-center items-center">
        <img class="object-contain w-full max-h-[25rem] rounded mb-2" :src="image[0]" alt="" srcset="">
        <svg
          id="Component_3_9"
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
</template>

<script lang="ts">
export default {
  props: {
    clusterArray: { type: Array, required: true },
  },
  data() {
    return {
      totalNumSelectedImages: 100,

    // imageblobarr = [[Blob, lastModifiedInMilisecs]]
    // element = [Blob, lastModifiedInMilisecs]
    }
  },
  mounted() {
    console.warn(this.clusterArray)
  },
  methods: {

  },
}

</script>

<!-- <style>
.open{
  flex flex-row overflow-y-hidden overscroll-x-auto object-contain h-full
}
</style> -->
