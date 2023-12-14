<script setup>
import { onMounted } from 'vue';

import { useProductStore } from '../stores/product';

import navbar from '../components/navbar.vue';
import product from '../components/product.vue';


const productStore = useProductStore()

onMounted(async()=>{
       await productStore.loadproduct()
       console.log(productStore.list)
})

</script>

<template>

 <navbar>
  
  <product
  :products="productStore.list"
  ></product>
      
 </navbar>
       
</template>