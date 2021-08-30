<template>
  <div class="home min-h-screen flex items-center justify-center">
    <div>
        <h1 class="text-4xl leading-6 p-6 font-medium text-gray-900 ">
          Galeria de Imagenes de los Simpson
          </h1>
        <!--<img class="h-70 w-70 rounded-full p-4" v-for="imagen in imagenes" :key="imagen.id" :src="imagen" alt="img Simpson"> -->
        <img class="h-70 w-70 rounded-full p-4" v-for="imagen in galeria.data" :key="imagen.id" :src="imagen.images.downsized.url" :alt="imagen.title">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{
      galeria:[]
    }

  },

  created(){
    this.getPokemon()
  },

  methods:{
    /*async getPokemon(){
      const response=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jUXq6uENWLkSViX2W9NacxL21RJbD5gZ&q=Simpson&limit=30&offset=0&rating=g&lang=es`)
      this.galeria=response.data
      //console.log(this.galeria.data)
      //this.galeria.data.forEach(element => console.log(element.images.downsized.url)); //Probando forEach
    }*/
    getPokemon(){
      axios
        .get('https://api.giphy.com/v1/gifs/search?api_key=jUXq6uENWLkSViX2W9NacxL21RJbD5gZ&q=Simpson&limit=30&offset=0&rating=g&lang=es')
        .then(response => (this.galeria = response.data))
        .catch(error => console.log(error))
    }
  }
}
</script>
