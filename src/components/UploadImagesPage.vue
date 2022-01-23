<!-- THIS component handles the upload, extraction of metadata,sorting and clustering the images and emits the cluster array to the parent. -->
<script>
import exifr from 'exifr'
export default {
  emits: ['loaded'],
  data() {
    return {
      imageFileArr: [],
      imageObjectArray: [],
      areImagesUploaded: false,
      clusterArray: [],
      prevClusterIndex: 0,
      interval: 2800,
      prevDateTimeOriginal: null,

    }
  },
  methods: {

    compareSecondColumn(a, b) {
      if (a.time === b.time)
        return 0
      else
        return a.time < b.time ? -1 : 1
    },
    sortByDateTimeOriginal(img2DArr) {
      img2DArr.sort(this.compareSecondColumn)
    },
    async getMetaData(file) {
      // const tags = await exifr.parse(file, ['DateTimeOriginal'])
      const tags = await exifr.parse(file)
      const { DateTimeOriginal, FNumber, ISO, FocalLength, LensModel } = tags
      return { DateTimeOriginal, FNumber, ISO, FocalLength, LensModel }
    },
    async loadImages(e) {
      this.areImagesUploaded = true
      if (e.type === 'drop') this.imageFileArr.push(e.dataTransfer.files)
      else this.imageFileArr.push(e.target.files) // gets a file object with all files
      // Loop trough all the local images and creat blob elements for later use
      for (let i = 0; i < this.imageFileArr[0].length; i++) {
        // get the created date from the meta data of the images
        try {
          const { DateTimeOriginal, FNumber, ISO, FocalLength, LensModel } = await this.getMetaData(this.imageFileArr[0][i])
          const createdTimeInMilisecs = DateTimeOriginal.valueOf()
          if (createdTimeInMilisecs === undefined) {
            this.imageFileArr[0].splice(i, 1)
          }
          else {
            this.imageObjectArray.push({
              blob: URL.createObjectURL(this.imageFileArr[0][i]),
              time: createdTimeInMilisecs,
              name: this.imageFileArr[0][i].name,
              FNumber,
              ISO,
              FocalLength,
              LensModel,
            })
          }
        }
        catch (error) {
          // TODO: make a vissible way to see which images failed to have metadata retreived
          // eslint-disable-next-line no-alert
          alert(`Error, image ${this.imageFileArr[0][i].name} has no ${error}! This metadata is necessary for the program to work.`)
        }
      }
      this.sortByDateTimeOriginal(this.imageObjectArray)
      this.imageObjectArray.forEach((element, index) => {
        // if our PrevlasMod is not set set it to the first elements lastMod, we can do this cuz the array is sorted
        if (this.prevDateTimeOriginal === null)
          this.prevDateTimeOriginal = element.time

        // Checks if current image is within timed threshold if not -> create cluster of previous images
        if (Math.abs(element.time - this.prevDateTimeOriginal) > this.interval) {
          this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex, index))
          this.prevClusterIndex = index
          this.prevDateTimeOriginal = element.time
        }
        else {
          this.prevDateTimeOriginal = element.time
        }
        // if the last image is not withing the same cluster, push the previous cluster and make a last cluster for the last image
        if (Math.abs(element.time - this.prevDateTimeOriginal) > this.interval && index === this.imageObjectArray.length - 1) {
          this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex, index))
          this.clusterArray.push(this.imageObjectArray.slice(index))
        }
        // The image is the last and a part of the cluster so push that
        if (index === this.imageObjectArray.length - 1)
          this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex, index + 1))
      })
      // TODO: sort the cluster arrays through the ML model
      console.warn(this.clusterArray)
      this.$emit('loaded', { array: this.clusterArray })
    },
  },
}

</script>

<template>
  <ImageUploadArea v-if="!areImagesUploaded" @drop.prevent="loadImages" @load-images="loadImages" />

  <div
    v-if="areImagesUploaded"
    class="container flex flex-col justify-center items-center"
  >
    <div class="loader" />

    <h3 class="block">
      Please wait, the robot is thinking &#129302;
    </h3>
  </div>
</template>

<style>
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #414141; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 50px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

}</style>
