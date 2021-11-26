<template>
  <div>
    <b-navbar
      :mobile-burger="false"
      wrapper-class="nav-container"
      type="is-dark"
    >
      <template #brand>
        <a href="#" class="vm px-2">
          <font-awesome-icon class="mt-1" icon="at" />
          <span class="pl-1">email@email.com</span>
        </a>
      </template>
      <template #end>
        <a
          href="https://api.whatsapp.com/send?phone=541158593099"
          class="vm pr-2"
        >
          <font-awesome-layers class="fa-2x">
            <font-awesome-icon :icon="['far', 'circle']" />
            <font-awesome-icon
              :icon="['fab', 'whatsapp']"
              transform="shrink-8"
            />
          </font-awesome-layers>
        </a>
      </template>
    </b-navbar>

    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>

<style>
.nav-container {
  display: flex;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
}

.vm {
  display: flex;
  align-items: center;
}
</style>
