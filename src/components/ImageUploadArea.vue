<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits(['loadImages']);

const active = ref(false);

const toggleActive = () => {
	active.value = !active.value;
};
</script>

<template>
	<div
		class="dropzone w-96 h-52 flex flex-col items-center justify-evenly border-2 border-red-700 border-dashed transition-all duration-300"
		:class="{ 'bg-red-800 ': active }"
		@dragenter.prevent="toggleActive"
		@dragleave.prevent="toggleActive"
		@drop.prevent="toggleActive"
		@dragover.prevent
	>
		<span>Drag and Drop File</span>
		<span>OR</span>
		<label
			:class="[active ? ' bg-slate-900 text-red-700' : 'bg-red-700']"
			class="rounded-lg p-3 cursor-pointer w-auto"
		>
			Upload Images
			<input
				id="inputFile"
				class="hidden"
				type="file"
				accept="image/*"
				multiple
				autoFocus
				@change="emit('loadImages', $event)"
			/>
		</label>
	</div>
</template>
