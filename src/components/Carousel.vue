<template>
    <div class="mt-5 d-none d-md-block">
        <mdb-carousel :items="items" :interval="5000" controlls>
        </mdb-carousel>
    </div>
</template>

<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "Carousel",
    components: {
      mdbCarousel
    },
    data() {
      return {
        carousel: 2,
        items: [
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
            mask: "black-light",
            alt: "First Slide",
            caption: {
              title: "First slide"
            }
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
            mask: "black-strong",
            caption: {
              title: "Second slide",
              text: "Texto de prueba"
            }
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
            mask: "black-slight",
            caption: {
              title: "Third slide"
            }
          }
        ]
      };
    }
  };
</script>
