<template>
  <h1>Contador: {{ count }}</h1>
  <button @click="plusCount">Aumentar contador</button>
  <button @click="decreaseCount">Diminuir o contador</button>
</template>

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