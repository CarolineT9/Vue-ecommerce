<template>
  <main>
    <v-row>
      <v-col cols="2">
       <category></category>
      </v-col>
      <v-col cols="10">
        <ProductList></ProductList>
      </v-col>
    </v-row>


  </main>
</template>

<script lang="ts">
import Category from '../components/CategoryList.vue';
import ProductList from '../components/ProductList.vue'

export default {
  components: {
    ProductList,
    Category,
  }
}

</script>
