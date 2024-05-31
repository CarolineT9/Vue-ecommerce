<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn variant="text"  @click="navigate">Home</v-btn>
        </RouterLink>
        <RouterLink to="/cart"  custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">Cart</v-btn>
        </RouterLink>
        <RouterLink to="/about"  custom v-slot="{navigate}">
          <v-btn variant="text"  @click="navigate">About</v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
      
    </v-main>
  </v-app>



</template>

<style scoped></style>
