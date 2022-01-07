<template>
  <div v-if="!areImageUploaded" class="flex flex-row">
    <label class="bg-red-800 rounded-lg p-3 cursor-pointer">
      <div class="">Upload Images</div>
      <input
        id="inputFile"
        class="hidden"
        type="file"
        accept="image/*"
        multiple
        autoFocus
        @change="loadImages"
      >
    </label>
  </div>
  <div
    v-if="areImageUploaded"
    class="container flex flex-col justify-center items-center"
  >
    <div class="loader" />

    <h3 class="block">
      Please wait, the robot is thinking &#129302;
    </h3>
  </div>
</template>

<script lang="ts">
import exifr from 'exifr'
export default {
  emits: ['loaded'],
  data() {
    return {
      imageFileArr: [],
      images2DArray: [],
      areImageUploaded: false,
    }
  },
  methods: {
    compareSecondColumn(a, b): Number {
      if (a[1] === b[1])
        return 0

      else
        return a[1] < b[1] ? -1 : 1
    },

    sortByDateTimeOriginal(img2DArr): void {
      img2DArr.sort(this.compareSecondColumn)
    },

    async getMetaData(file) {
      const tags = await exifr.parse(file, ['DateTimeOriginal'])
      const { DateTimeOriginal } = tags
      return DateTimeOriginal.valueOf()
    },

    async loadImages(e) {
      this.areImageUploaded = true

      this.imageFileArr.push(e.target.files) // gets a file object with all files
      console.warn(this.imageFileArr)

      // Loop trough all the local images and creat blob elements for later use
      for (let i = 0; i < this.imageFileArr[0].length; i++) {
        // get the created date from the meta data of the images
        try {
          const createdTimeInMilisecs = await this.getMetaData(this.imageFileArr[0][i])
          if (createdTimeInMilisecs === undefined) {
            this.imageFileArr[0].splice(i, 1)
          }
          else {
            this.images2DArray.push([
              URL.createObjectURL(this.imageFileArr[0][i]),
              createdTimeInMilisecs,
            ])
          }
        }
        catch (error) {
          // eslint-disable-next-line no-alert
          alert(`Error, image ${this.imageFileArr[0][i].name} has no created date! This metadata is necessary for the program to work.`)
        }
      }

      this.sortByDateTimeOriginal(this.images2DArray)
      this.$emit('loaded', [this.images2DArray])
    },
  },
}

</script>

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
