<!-- THIS component handles all of the culling -->

<template>
  <section>
    <nav class="flex sticky top-1 py-2 pb-3 pl-4 items-start bg-dark-800">
      Accepted pictures: {{ totalNumSelectedImages }} of {{ totalNumSelectedImages }}
    </nav>
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

  },
  methods: {

  },
}

</script>
