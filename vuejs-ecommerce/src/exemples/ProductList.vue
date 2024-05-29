

<template>
  
    <ul>
        <product-card v-for="product in products" :product="product" />
    </ul>

</template>

<script lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from './Produto';

export default {
  components: { ProductCard },
    data() {
      return{
        products:<Array<Product>> [
            {name: 'Mouse', price: 56},
            {name: 'Monitor', price: 100},
            {name: 'Teclado', price: 12}
        ]
      }
    },
    methods: {
        
    },
}
</script>

