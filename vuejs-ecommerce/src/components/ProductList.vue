<template>
  
    <v-row>
      <v-col v-for="product in products" cols="12" sm="6" md="4" lg="3">

        <product-card :product="product" @addProduct="onProductAdded(product.id)" />


      </v-col>
    </v-row>
    
  



</template>

<script lang="ts">
import ProductCard from './ProductCard.vue'
import Cart from '../components/Cart.vue';
import type { CartDetail, Product } from '../model/Tipos';


export default {
  components: {
    ProductCard,
    Cart
  },
  props: ['details'],
  data() {
    return {
      products: <Array<Product>>[
        { name: 'Mouse', price: 56, id: 1 },
        { name: 'Monitor', price: 100, id: 2 },
        { name: 'Teclado', price: 12, id: 3 },
        { name: 'Controle sem fio', price: 12, id: 4 },
        { name: 'Fones de Ouvido', price: 12, id: 5 },
        { name: 'Teclado', price: 12, id: 3 },
      ]
    }
  },
  methods: {
    onProductAdded(productId : number){

    }
  },
}
</script>
