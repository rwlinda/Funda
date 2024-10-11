<template>
  <section>
    <div class="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-1 sm:my-8 mb-8">
      <div class="md:col-span-2 md:row-span-2">
        <img :src="images[0].MediaItems[3].Url" class="object-cover hover:cursor-pointer" @click="openModal" />
      </div>      
      <div class=" hidden md:block">
        <img :src="images[1].MediaItems[2].Url" class="object-contain w-full h-full hover:cursor-pointer" @click="openModal" />
      </div>      
      <div class="hidden md:block">
        <img :src="images[2].MediaItems[2].Url" class="object-cover w-full h-full hover:cursor-pointer" @click="openModal" />
      </div>      
      <div class="hidden md:block">
        <img :src="images[3].MediaItems[2].Url" class="object-cover w-full h-full hover:cursor-pointer" @click="openModal" />
      </div>      
      <div class="hidden md:block">
        <img :src="images[4].MediaItems[2].Url" class="object-cover w-full h-full hover:cursor-pointer" @click="openModal" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>
