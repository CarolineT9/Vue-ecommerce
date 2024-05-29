
<template>
    <p>Nome: {{product.name}}</p>
    <p>Preço: {{ product.price }}</p>
    
    <hr/>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type {Product} from './Produto'
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
                required: true
        }
    }
}
</script>
