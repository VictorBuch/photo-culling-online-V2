<script>
export default {
  emits: ['expandedClusterChange'],
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    expandCluster() {
      this.isExpanded = !this.isExpanded
      this.$emit('expandedClusterChange', this.isExpanded)
    },
  },
}
</script>

<template>
  <div @click="expandCluster">
    <svg
      v-if="isExpanded"
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
    <svg
      v-if="!isExpanded"
      class="my-auto cursor-pointer hover:opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      width="22.644"
      height="13.443"
      viewBox="0 0 22.644 13.443"
    >
      <path
        id="Path_45"
        data-name="Path 45"
        d="M-4098,3547.375l10.261,10.261,10.261-10.261"
        transform="translate(4099.061 -3546.315)"
        fill="none"
        stroke="#fe8029"
        strokeWidth="3"
      />
    </svg>
  </div>
</template>
