<template>
  <div class="about" id="inicio">
     <div class="p-5">
        <label class="text-2xl leading-6 p-3 font-medium text-gray-900 " for="search">Buscar pokémon</label>
        <input class="border-2" type="input" v-model="id"  @keyup.enter="getPokemonEnter"/>
        <button  class="ml-5 bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
        v-on:click="getPokemon">
          Buscar
        </button>
        <h1 v-if="error" class="text-5xl leading-6 p-20 font-medium text-gray-900">{{error}}</h1>
      </div>
      <div v-if="pokemon" class="items-center">
        <h1 class="text-5xl leading-6 p-8 font-medium text-gray-900">{{pokemon.name}}</h1>
        <img :src="pokemon.sprites.other.dream_world.front_default" class=" h-40 w-40 inline-flex " >
        <h2 class="text-2xl leading-6 p-3 font-medium text-gray-900">Habilidades:</h2>
        <h2 class="text-xl" v-for="hability in pokemon.abilities" :key="hability.id">{{hability.ability.name}}</h2>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"inicio",
  data(){
    return {
      pokemon:null,
      id:'',
      error:null

    }

  },

  methods:{
    getPokemonEnter(event){
      if(event){
        this.getPokemon()
      }
    },
     getPokemon(){
       this.error=null
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response)=>{
        this.pokemon=response.data
        //console.log(this.pokemon.name)
        // this.pokemon.abilities.forEach(element => this.habilidades.push(element.ability.name))
        //console.log(this.habilidades)
      })
      .catch(error => {
        this.pokemon=null
        this.error="Pokémon no encontrado"
        console.log(error)
      })
    }
  }

}
</script>

<style>

</style>
