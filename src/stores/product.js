import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product',{
    state:()=>({
        list: [],
        input:'',

    }),
    actions:{
        async loadproduct(){
            const response = await axios.get('https://fakestoreapi.com/products')
            this.list = response.data
        },
        filterproduct(searchP){
            return this.list.filter(product=>product.title.includes(searchP))
        }
    }
})



