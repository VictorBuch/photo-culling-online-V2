<script>
export default {
  props: ['isAccepted'],

}
</script>

<template>
  <div>
    <svg
      v-if="isAccepted"
      id="Component_3_9"
      class="cursor-pointer hover:opacity-90"
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
    <svg
      v-if="!isAccepted"
      id="Component_4_33"
      class="cursor-pointer hover:opacity-90"
      data-name="Component 4 – 33"
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      viewBox="0 0 19 17"
    >
      <rect
        id="Rectangle_97"
        data-name="Rectangle 97"
        width="19"
        height="17"
        fill="#be171c"
      />
      <g id="Group_20" data-name="Group 20" transform="translate(3.915 2.959)">
        <path
          id="Path_36"
          data-name="Path 36"
          d="M-5800.456,4404.347l-11.182,11.01"
          transform="translate(5811.638 -4404.347)"
          fill="none"
          stroke="#181818"
          strokeWidth="2"
        />
        <path
          id="Path_37"
          data-name="Path 37"
          d="M-5811.638,4404.347l10.93,11.083"
          transform="translate(5811.638 -4404.347)"
          fill="none"
          stroke="#181818"
          strokeWidth="2"
        />
      </g>
    </svg>
  </div>
</template>
