<template>
  <div v-if="isOpen" class="fixed w-screen z-10 top-0 left-0 bg-white flex flex-col">
  <header class="h-12 flex justify-end px-4">
    <button
      @click="emit('modal-close')"
        class="hover:cursor-pointer
      ">
      <nuxt-icon name="icons:xmark" class="text-2xl" />
    </button>
  </header>
  <div class="flex-grow">
    <div class="size-full">
    <galleryElement :images="images" class="z-20 max-h-dvh" />
  </div>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["modal-close"]);


</script>
