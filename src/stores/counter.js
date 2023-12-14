import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter',  {
  state: () => ({
    theme : false,
  }),
  actions: {
     toogle(){
      this.theme = !this.theme
      if(this.theme===false){
        localStorage.removeItem('theme')
        document.body.dataset.bsTheme = 'light'
      }else{
        document.body.dataset.bsTheme = 'dark'
        localStorage.setItem('theme',true)
      }
      
    },
   }      
})

