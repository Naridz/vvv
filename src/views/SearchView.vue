<script setup>
import { ref,watch} from 'vue';
import { useRoute } from 'vue-router';

import navbar from '../components/navbar.vue';
import product from '../components/product.vue';

import { useProductStore } from '../stores/product';

const route = useRoute()
const productStore = useProductStore()

const searchP = ref('')
const filterproducts = ref([])


watch(()=>route.query.q, (newSearch)=>{
  searchP.value = newSearch
  filterproducts.value = productStore.filterproduct(searchP.value)
},{immediate:true})

</script>

<template>
    <navbar>
      <div class="fs-2 m-4">Search: <b>{{searchP}}</b></div>   

      <div v-if="filterproducts.length > 0">
      <product
        :products="filterproducts">
      </product>
      </div>

       <div class="m-10" v-else>
          <div class="text-center">Product "<b>{{searchP}}</b>" not found</div>
       </div>
    </navbar>
</template> 