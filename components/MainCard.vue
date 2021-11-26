<template>
  <div class="main-card">
    <h1
      class="
        title
        has-text-white has-text-weight-semibold
        is-size-2 is-size-4-mobile
      "
    >
      Descubre la diferencia de <br />
      SDInstalaciones
    </h1>

    <b-button type="is-primary" tag="a" :href="whatsappUrl" target="_blank">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
      Contactar
    </b-button>
    <b-button
      type="is-primary is-light"
      tag="a"
      :href="emailUrl"
      target="_blank"
    >
      <font-awesome-icon :icon="['far', 'envelope']" />
      Escribir
    </b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=541131789264'
    const emailUrl = 'mailto:sd-instalaciones@hotmail.com'

    return { emailUrl, whatsappUrl }
  },
})
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';
</style>
