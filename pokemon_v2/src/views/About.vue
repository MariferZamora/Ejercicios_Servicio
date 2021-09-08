<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
    <img :src="pokemon.sprites.other.dream_world.front_default" class=" h-40 w-40 inline-flex " >
    <div class="p-5">
      <h1 class="text-2xl font-bold">{{pokemon.name}}</h1>
      <p class="mt-2 text-lg font-semibold text-gray-600">Habilidades</p>
      <p class="mt-1 text-gray-500 font-" v-for="hability in pokemon.abilities" :key="hability.id">{{hability.ability.name}}</p>
    </div>
  </div>
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
        const{name, id, abilities}=response.data
        console.log(name, id, abilities)

        /*
        this.pokemon=response.data
        console.log(this.pokemon)
        const{name, base_experience}=response.data
        console.log(name)
        console.log(base_experience)
        const habilidades=response.data.abilities
        console.log(habilidades)
        const habilidad= response.data.abilities[1].ability.name
        console.log(habilidad)
        const {id} = response.data
        this.id=id
        console.log(this.id)
        */
      })
    }
  }

}
</script>

<style>

</style>
