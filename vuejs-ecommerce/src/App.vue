<script lang="ts">

import { RouterView } from 'vue-router'
import type { CartDetail } from '../src/model/Tipos'
import { useCartStore } from '../stores/cart';
import TopBar from '../src/components/TopBar.vue'

export default {
  components: {
    TopBar
  },
  computed: {
    details() {
      const cartStore = userCartStore();
      return cartStore.details
    }

  }
}

</script>

<template>
  <v-app id="inspire">
    
    <top-bar></top-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>

    </v-main>
  </v-app>



</template>

<style scoped></style>
