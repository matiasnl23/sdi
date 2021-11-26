<template>
  <a href="#" class="nav-logo pt-1 vm" :class="{ shadow }">
    <img src="~/assets/logo/logo_only.png" alt="SDI" :style="imgStyles" />
    <span class="pl-2 brand-name" :style="spanStyles">
      Instalaciones eléctricas industriales
    </span>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    fontSize: {
      type: String,
      default: '0.5rem',
    },
    height: {
      type: String,
      default: '50px',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const imgStyles = computed(() => ({
      height: props.height,
    }))

    const spanStyles = computed(() => ({
      fontSize: props.fontSize,
    }))

    return { imgStyles, spanStyles }
  },
})
</script>

<style lang="scss" scoped>
.nav-logo {
  display: flex;
  flex-direction: column;

  &.shadow {
    filter: drop-shadow(0px 0px 10px #fff);
    -webkit-filter: drop-shadow(0px 0px 5px #fff);
    -moz-filter: drop-shadow(0px 0px 10px #fff);
  }

  .brand-name {
    margin-top: 0.25rem;
    text-transform: uppercase;
  }
}
</style>

