<template>
  <b-carousel
    :arrow="false"
    :arrow-hover="false"
    :indicator="false"
    :pause-hover="false"
  >
    <b-carousel-item v-for="(image, i) in images" :key="i">
      <div class="card" :style="image"></div>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const images = [...new Array(6).keys()].map((i) => ({
      backgroundImage:
        "url('" + require(`@/assets/images/${i + 2}.jpeg`) + "')",
    }))

    return { images }
  },
})
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.card {
  background-size: cover;
  background-position: center;
  height: 75vh;

  @include mobile {
    height: calc(100vh - 70px);
  }
}
</style>
