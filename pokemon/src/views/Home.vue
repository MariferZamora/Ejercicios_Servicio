<template>
  <div class="home min-h-screen flex items-center justify-center">
    <div>
        <h1 class="text-4xl leading-6 p-6 font-medium text-gray-900 ">
          Galeria de Imagenes de los Simpson
          </h1>
        <img class="h-70 w-70 rounded-full p-4" v-for="imagen in imagenes" :key="imagen.id" :src="imagen" alt="img Simpson">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      galeria:[],
      imagenes:[],
      titulos:[]
    }

  },

  created(){
    this.getPokemon()
  },

  methods:{
    async getPokemon(){
      const response=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jUXq6uENWLkSViX2W9NacxL21RJbD5gZ&q=Simpson&limit=30&offset=0&rating=g&lang=es`)
      this.galeria=response.data
      for(let i=0; i<30; i++){
        this.imagenes[i]=this.galeria.data[i].images.downsized.url
      }
      //console.log(this.imagenes)
      //console.log(this.galeria.data[0].images.downsized.url)
    }
  }
}
</script>
