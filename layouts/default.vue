<template>
  <div>
    <b-navbar :mobile-burger="false" wrapper-class="container is-max-desktop">
      <template #brand><Logo /></template>
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
import { useBreakpoints } from '@/hooks/useBreakpoints'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  components: { Logo },
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

    const { isTouch } = useBreakpoints()

    return { contacts, isTouch }
  },
})
</script>

<style>
.vm {
  display: flex;
  align-items: center;
}
</style>
