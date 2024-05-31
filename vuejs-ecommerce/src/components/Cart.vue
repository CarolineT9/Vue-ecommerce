<template>
    
        <v-card>
            <v-card-title>Produtos adicionados ao carrinho:</v-card-title>
            <v-card-text>

                <v-list>
                    <v-list-item v-for="detail in details" :value="detail.productId">
                        <v-list-item-title>
                            Produto: {{ detail.productId }} | Quantidade: {{ detail.quantity }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-card-text>
        </v-card>
   


</template>

<script lang="ts">
/* import type {PropType} from 'vue'
import type { CartDetail } from '@/model/Tipos'; */
import { useCartStore } from '../stores/cart';

export default {
    computed:{
        details (){
            const cartStore = useCartStore
            return cartStore.datails;
        }
    }
}
</script>
