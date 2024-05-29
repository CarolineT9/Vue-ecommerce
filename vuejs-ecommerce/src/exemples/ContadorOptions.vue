<template>
  <h1>Contador: {{ count }}</h1>
  <p>Objetivo: você tem que chegar a 100 cliques!</p>
  <button @click="plusCount">Aumentar contador</button>
  <button @click="decreaseCount">Diminuir o contador</button>
  <p  v-if="count <= 10">Vamos, você pode!</p>
  <p v-else="">Já te falta muito pouco</p>
</template>


<!--Options API-->

<script lang="ts">
export default {
    data (){
        return {
            count:0
        }
    },
    methods: {
        plusCount(){
            return this.count = this.count + 1
        },
        decreaseCount(){
            return this.count -= 1
        }
    },
    mounted() {
        console.log('O valor inicial do contador é' + ' ' + this.count)
    },
}
</script>

<style>

</style>