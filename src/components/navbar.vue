<script setup>
import { onMounted } from "vue";
import { RouterLink,useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { useProductStore } from "../stores/product";

const productStore = useProductStore()
const count = useCounterStore()
const router = useRouter()

const sun = 'btn-outline-dark bi bi-brightness-high-fill'
const moon = 'btn-outline-light bi bi-moon-stars-fill'


onMounted(()=>{
  if(localStorage.getItem('theme')){
    count.theme = true
    document.body.dataset.bsTheme = 'dark'
  }
});

const enterSearch = (event)=>{
  if(event.key === 'Enter' && productStore.input.length>0){
    router.push({
      name:'search',
      query:{q:productStore.input}
    })
    productStore.input = ""
  }
}

</script>


<template>
  <!-- navbar -->
   <nav class="navbar navbar-expand-lg sticky-top "
        :class="count.theme===false?'nav-light bg-light':'nav-dark bg-dark border-bottom'" >

  <div class="container">

    <router-link :to="{name:'home'}" class="navbar-brand">Home</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:'about'}" class="nav-link">about</router-link>
        </li>
    
        <span @click="count.toogle" class="btn" 
        :class="count.theme === false?sun:moon"></span>
      </ul>
      <!-- seacrh -->
      <div class="d-flex">
        <input @keyup="enterSearch" v-model="productStore.input" class="form-control me-2" placeholder="Search" type="Search" >
      </div>
      
    </div>
  </div>
</nav>


    <slot></slot>
 <!-- footer -->
    <p class="d-flex justify-content-center text-muted border-top mt-5 p-2 ">Footer</p>

</template>
