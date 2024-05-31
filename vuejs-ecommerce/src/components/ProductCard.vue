<template>
   <v-container  fluid>
    <v-card>
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-text>
            <v-chip class="mb-2">
                R${{ product.price }}
            </v-chip>
            <p class="mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fuga.
            </p>
        </v-card-text>

        <v-card-actions>
            <v-btn @click="onAddButtonClick" color="orange">
                Colocar no carrinho
            </v-btn>
        </v-card-actions>


    </v-card>
   </v-container>

</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/Tipos'
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    emits: ['addProduct'],
    methods: {
        onAddButtonClick() {
            //console.log('agregando produto!' + this.product.id)
            this.$emit('addProduct')
        }
    }
}
</script>
