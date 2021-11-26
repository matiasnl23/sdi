<template>
  <div>
    <b-navbar :mobile-burger="false" wrapper-class="container is-max-desktop">
      <template #brand>
        <a href="#" class="nav-logo pt-1 vm">
          <img src="~/assets/logo/logo_only.png" alt="SDI" />
          <span class="pl-2 brand-name">
            Instalaciones eléctricas industriales
          </span>
        </a>
      </template>
      <template #end>
        <a
          v-for="(contact, idx) in contacts"
          :key="idx"
          :href="contact.link"
          target="_blank"
          class="vm pr-2"
        >
          <font-awesome-layers class="fa-2x">
            <font-awesome-icon :icon="['far', 'circle']" />
            <font-awesome-icon :icon="contact.icon" transform="shrink-8" />
          </font-awesome-layers>
        </a>
      </template>
    </b-navbar>

    <section>
      <Nuxt />
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const contacts = [
      {
        icon: ['fab', 'whatsapp'],
        link: 'https://api.whatsapp.com/send?phone=541131789264',
      },
      {
        icon: ['fas', 'at'],
        link: 'mailto:SD-Instalaciones@hotmail.com',
      },
    ]

    return { contacts }
  },
})
</script>

<style>
.nav-logo {
  flex-direction: column;
  display: flex;
}

.nav-logo .brand-name {
  font-size: 0.5rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
}

.nav-logo img {
  max-height: 50px;
}

.vm {
  display: flex;
  align-items: center;
}
</style>
