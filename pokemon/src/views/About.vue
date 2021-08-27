<template>
  <div class="about">
    <h1>{{pokemon.name}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    pokemon: null
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
      })
    }
  }

}
</script>

<style>

</style>
