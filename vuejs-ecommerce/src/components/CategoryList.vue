<template>
   <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item v-for="category in categories " :key="category.id"  link>
              <v-list-item-title>
                {{ category.name }}
              </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item>Order by Price</v-list-item>

           
          </v-list>
        </v-sheet>
</template>

<script lang="ts">
import type {Category} from '../model/Tipos'
export default {

  data() {
    return{
      categories: <Array<Category>>[{
        id: 1,
        name: 'Technology'
      },
      
        {
          id: 2,
          name: 'Toys'
        }
         
        
      ]

    };
  }
}
</script>

