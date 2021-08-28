<template>
  <div class="about">
     <form class="p-5">
        <label class="text-2xl leading-6 p-3 font-medium text-gray-900 " for="search">Buscar pokémon</label>
        <input class="border-2" type="search" name="id"/>
        <button  class="ml-5 bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="btnSearch">
          Buscar
        </button>
      </form>
      <div class="out"></div>
    <h1 class="text-5xl leading-6 p-8 font-medium text-gray-900">{{pokemon.name}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    pokemon: null,
    id: null
  }),

  created(){
    this.getPokemon()
  },

  methods:{

    getPokemon(){
      const axiosInstance=axios.create({
       headers:{ 
         "Access-Control-Allow-Origin": "*"
        }
      });
      axiosInstance
      .get(`https://pokeapi.co/api/v2/pokemon/1`)
      .then(response=>{
        this.pokemon=response.data
        console.log(this.pokemon)
        const{name, base_experience}=response.data
        console.log(name)
        console.log(base_experience)
        const habilidades=response.data.abilities
        console.log(habilidades)
        const habilidad= response.data.abilities[1].ability.name
        console.log(habilidad)
        console.log(this.id)
      })
    }
  }

}
</script>

<style>

</style>
