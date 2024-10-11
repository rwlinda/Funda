<template>
  <div v-if="isOpen" class="fixed h-screen w-screen z-10 top-0 left-0 bg-white sm:p-8">
      <galleryElement :images="images" class="z-20" />
      <button 
        @click="emit('modal-close')" 
        class="p-4 hover:cursor-pointer z-20 top-0 right-4 absolute
      ">
        <nuxt-icon name="icons:xmark" class="text-2xl" />
      </button>
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
