<!--Composition API-->
<script setup lang="ts"> 
    import {onMounted, ref} from 'vue'
    const count = ref (0);
    

    function increase( ){
        return count.value += 1
    }
    function decrease(){
        return count.value -= 1
    }

    onMounted(function () {
        console.log('O valor inicial do contador é ' + ' ' + count.value )
    })
</script>
<template>
  <p>Olá mundo! Sou a versão com compostion API </p>
  <h1>Contador : {{ count }}</h1>

  <button @click="increase">Incrementar contador</button>
  <button @click="decrease">Decrementar contador</button>
</template>