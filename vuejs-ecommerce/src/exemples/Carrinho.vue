<template>
    <v-container>
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
    </v-container>


</template>

<script lang="ts">
import type { CartDetail } from "./Tipos"

export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            require: true
        }
    },
}
</script>
