<template>
  <swiper-container
    :slides-per-view="1"
    :centered-slides="true"
    :navigation="true"
    :pagination="true">
    <swiper-slide v-for="(image) in mediumImages" :key="image.UrlSecure" class="sm:hidden">
      <img :src="image.UrlSecure" class="mx-auto"/>
    </swiper-slide>
    <swiper-slide v-for="(image) in largeImages" :key="image.UrlSecure" class="hidden sm:block">
      <img :src="image.UrlSecure" class="mx-auto"/>
    </swiper-slide>
  </swiper-container>
</template>

<script>
  import { register } from 'swiper/element/bundle';

  register();

  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    setup(props) {
    const allImages = props.images
    const mediaItems = [...new Set(allImages.map(item => item.MediaItems))]

    // const smallImages = [...new Set(mediaItems.map(item => item[1]))]
    const mediumImages = [...new Set(mediaItems.map(item => item[2]))]
    const largeImages = [...new Set(mediaItems.map(item => item[3]))]

      return {
        mediumImages,
        largeImages
      };
    }
  }
</script>