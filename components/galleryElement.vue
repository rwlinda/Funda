<template>
  <Splide :options="mainOptions" aria-label="Alle foto's" class="size-full">
    <SplideSlide v-for="(image, index) in largeImages" :key="index" class="sm:px-16 mt-11">
      <img :src="image.Url" class="mx-auto max-h-full" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/css/skyblue';

export default defineComponent( {
  components: { Splide, SplideSlide },
  props: {
      images: {
        type: Array,
        required: true
      }
    },
    setup(props) {
    const allImages = props.images
    const mediaItems = [...new Set(allImages.map(item => item.MediaItems))]

    // const imageset = (size) => {
    //   [...new Set(mediaItems.map(item => item[size]))]
    // }

    // const smallImages = [...new Set(mediaItems.map(item => item[1]))]
    // const mediumImages = [...new Set(mediaItems.map(item => item[2]))]
    const largeImages = [...new Set(mediaItems.map(item => item[3]))]

    console.log(largeImages.length)
    const mainOptions = {
      pagination: false,
      height:'100vh',
      arrows:true,
      breakpoints: {
        560: {
          arrows:false
        },
      },
    };


      return {
        // mediumImages,
        largeImages,
        mainOptions
      };
    }
} );

// TODO: create srcset of images 

</script>
