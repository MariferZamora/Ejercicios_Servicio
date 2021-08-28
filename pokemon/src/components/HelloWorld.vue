<template>
  <div class="min-h-screen flex items-center justify-center">
      <h1>Galeria de Imagenes de los Simpson</h1>
      <div>
        <img V-for="(imagen, i) in galeria" :key="i" :src="imagen.data.images.downsized.url" :alt="imagen.data.title">
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      galeria:[]
    }

  },

  created(){
    this.getPokemon()
  },

  methods:{
    async getPokemon(){
      const response=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jUXq6uENWLkSViX2W9NacxL21RJbD5gZ&q=Simpson&limit=25&offset=0&rating=g&lang=es`)
      this.galeria=response.data
      console.log(this.galeria.data[0].images.downsized.url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
