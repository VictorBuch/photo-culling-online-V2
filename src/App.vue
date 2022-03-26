<script lang="ts">
export default {
	data() {
		return {
			pageShown: 'uploadImages',
			loadedClusterArray: [[]],
		};
	},
	methods: {
		imagesLoaded(e) {
			this.pageShown = 'cullingPage';
			this.loadedClusterArray = e.array;
		},
	},
};
</script>

<template>
	<UploadImagesPage
		v-if="pageShown === 'uploadImages'"
		@loaded="imagesLoaded"
	/>

	<CullingPage
		v-if="pageShown === 'cullingPage'"
		:cluster-array="loadedClusterArray"
	/>
</template>
