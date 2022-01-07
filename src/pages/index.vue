<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<script lang="ts">
export default{
  data() {
    return {
      areImagesLoaded: false,
    }
  },
  methods: {
    imagesLoaded(e){
      this.areImagesLoaded = true
      
    },
  },  
}

</script>

<template>
  <section v-if="!areImagesLoaded">
    <div class=" w-screen h-screen flex my-auto mx-auto justify-center items-center overflow-hidden">
      <ImageUploadBtn @loaded="imagesLoaded"/>
    </div>
  </section>
  <CullingView v-if="areImagesLoaded" />
</template>
