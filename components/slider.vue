<template>
  <section id="slider">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide caption="BRAVADO" caption-tag="h1" img-src="/slide1.jpg">
        <h2>Habit tracking in social way</h2>
        <b-row class="pt-5">
          <b-col lg="6" class="pb-3">
            <b-button :class="{'float-right': windowWidth > 1000}" size="lg">Login to Bravado</b-button>
          </b-col>
          <b-col lg="6" class="pb-3">
            <b-button :class="{'float-left': windowWidth > 1000}" size="lg">Register to Bravado</b-button>
          </b-col>
        </b-row>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
import resize from '~/plugins/mixins/resize.js'
export default {
  name: 'slider',
  mixins: [resize]
}
</script>


<style>
#slider {
  z-index: -1;
  position: relative;
}
#slider h1 {
  font-size: 10vw;
}
#slider .carousel-caption {
  bottom: unset !important;
  background: rgba(255, 255, 255, 0.7);
  color: #0b3557;
  top: 25%;
}
</style>