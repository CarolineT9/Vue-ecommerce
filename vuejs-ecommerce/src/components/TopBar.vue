<template>
  <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <RouterLink to="/" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate">Home</v-btn>
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange" >
            <v-btn variant="text" @click="navigate">Cart</v-btn>
          </v-badge>
          
        </RouterLink>
        <RouterLink to="/about" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate">About</v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  computed:{
    itemsCount(){
      const cartStore = useCartStore()
      return cartStore.cartItemsCount;
    }
  }
}
</script>

