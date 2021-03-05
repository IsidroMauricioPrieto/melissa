<template>
  <v-footer app padless color="#000000" dark>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Agencia Aduanal Perez Ortiz</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      padless: false
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    localAttrs() {
      const attrs = {}
      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>
