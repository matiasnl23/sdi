<template>
  <section class="main-section">
    <div class="container is-max-desktop is-flex">
      <div class="columns">
        <div class="left-section column">
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

          <b-button
            type="is-primary"
            tag="a"
            href="https://api.whatsapp.com/send?phone=541131789264"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
            Contactar
          </b-button>
          <b-button
            type="is-primary is-light"
            tag="a"
            href="mailto:sd-instalaciones@hotmail.com"
            target="_blank"
          >
            <font-awesome-icon :icon="['far', 'envelope']" />
            Escribir
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.main-section {
  display: flex;
  background-image: url('~/assets/images/1.jpeg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 70px);
}

.container {
  align-items: center;

  @include mobile {
    align-items: flex-start;
    justify-content: center;
    padding-top: 1rem;
  }
}

.left-section {
  .title {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }
  @include mobile {
    text-align: center;
  }
}
</style>
