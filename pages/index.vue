<template>
  <section class="main-section">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column title-left">
          <h1 class="title has-text-white has-text-weight-semibold is-size-2">
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

<style scoped>
.main-section {
  align-items: center;
  display: flex;
  background-image: url('~/assets/images/1.jpeg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 70px);
}

.title {
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}
</style>
