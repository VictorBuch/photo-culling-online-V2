<script setup lang="ts">

const props = defineProps<{
  image: string
  index: number
  isImageSelected: boolean
  isImageAccepted: boolean
}>()

const emit = defineEmits<{
  (e: 'selectImage'): void
  (e: 'handleAcceptedImageArrayChange'): void
}>()

</script>

<template>
  <img
    :class="[isImageSelected ? 'border-light-800 border' : 'border border-dark-500']"
    class="object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer transition-all duration-200 "
    :src="image"
    alt=""
    srcset=""
    @click="$emit('selectImage')"
    @dblclick="$emit('handleAcceptedImageArrayChange')"
  >
  <AcceptBtn :is-accepted="isImageAccepted" @click="$emit('handleAcceptedImageArrayChange')" />
</template>
