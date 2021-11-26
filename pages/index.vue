<template>
  <section class="main-section">
    <div class="container is-max-desktop is-flex">
      <div class="columns">
        <div class="left-section column is-7">
          <MainCard />
        </div>

        <div class="carousel-column column is-5-desktop">
          <slides />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slides from '@/components/Slides.vue'
import MainCard from '@/components/MainCard.vue'

export default {
  name: 'HomePage',
  components: {
    MainCard,
    Slides,
  },
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.carousel-column {
  padding: 0 !important;
}

.container {
  align-items: center;

  .columns {
    flex: 1;
  }

  @include mobile {
    justify-content: center;
  }
}

.main-section {
  display: flex;
  background-image: url('~/assets/images/1.jpeg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 70px);
}

.left-section {
  align-self: center !important;

  .title {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }

  @include mobile {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }
}
</style>
