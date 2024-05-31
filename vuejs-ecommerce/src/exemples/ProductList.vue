<template>
  <v-row>
    <v-col v-for="product in products" cols="12" sm="6" md="4" lg="3">
      
        <product-card :product="product" @addProduct="onAddProduct(product.id)"/>
        
     
    </v-col>
  </v-row>
  <carrinho :details="details" />



</template>

<script lang="ts">
import ProductCard from './ProductCard.vue'
import Carrinho from './Carrinho.vue';
import type { CartDetail, Product } from './Tipos';


export default {
  components: {
    ProductCard,
    Carrinho
  },
  data() {
    return {
      products: <Array<Product>>[
        { name: 'Mouse', price: 56, id: 1 },
        { name: 'Monitor', price: 100, id: 2 },
        { name: 'Teclado', price: 12, id: 3 },
        { name: 'Controle sem fio', price: 12, id: 4 },
        { name: 'Fones de Ouvido', price: 12, id: 5 }
      ],
      details: <Array<CartDetail>>[]
    }
  },
  methods: {
    onAddProduct(productId: number) {
      // console.log('O produto no pai' + '' + productId)
      const detailFound = this.details.find(d => d.productId === productId)
      if (detailFound) {
        detailFound.quantity += 1
      } else {
        this.details.push({
          productId,
          quantity: 1
        })
      }

    }
  },
}
</script>
