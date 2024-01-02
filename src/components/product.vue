<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import { useCounterStore } from "../stores/counter";

defineProps({
    products:Array
})

const count = useCounterStore()
const clickP = ref("")
const clickD = ref("")

const clickProduct = (id,description)=>{
  clickP.value= id 
  clickD.value= description
}

</script>

<template>
  <!-- Downloading -->
  <div class="d-flex justify-content-center mt-5" v-if="!products.length>0">
    <h2>Downloading...</h2>
  </div>

<div class="container" v-else>
       <div class="row">
              <div class="col col-lg-3 col-md-6 col-sm-1 my-2" v-for="(product,index) in products" :key="index">
                <div class="card h-100 mt-4 shadow bg-body rounded" style="width: 15rem;">
                  <img :src=product.image class="card-img-top" style="height:15rem;">
                     <div class="card-body ">
                       <h4 class="card-title">{{ product.title }}</h4>
                       <h6 class="card-subtitle mb-2 text-muted">{{product.category}}</h6>
                       <p class="card-text">{{product.price}}</p>
                     </div>
                     <button
                      class="btn w-75 mx-auto mb-3"
                      :class="count.theme===false?'btn-success':' btn-primary'" 
                      data-bs-toggle="modal" data-bs-target="#myModal"
                      @click="clickProduct(product.id,product.description)"
                      >Okkkk</button>
                </div>
             </div>
      </div> 
      <!-- modal -->
      <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                   <div class="modal-body">
                       <h4 class="modal-title">product : {{ clickP }} <hr> </h4>
                       <p class="modal-title text-muted"> {{ clickD }} </p>
                   </div>
                  </div>
               </div>
             </div>     
</div>
             


</template>