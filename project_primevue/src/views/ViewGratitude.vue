<template>
  <div>
      <div id="botones">
          <Button label="Todos" style="background:#FFFFFF; color:#57B8EB; border-radius: 6px; width: 150px; " v-on:click="cambiarEstado(1)"/>
          <Button label="Destacados" style="background:#FFFFFF; color:#57B8EB; margin-left:7px; border-radius: 6px;  width: 150px;" v-on:click="cambiarEstado(2)"/>
      </div>
      <div id="viewGratitude" v-if="estado===1 && componente===1" >
          <Gratitude @accion="cambiarComponente(2)"/>
      </div>
      <div id="viewGratitude" v-else-if="estado===2 && componente===1" >
          <Gratitude  texto=" destacados" @accion="cambiarComponente(2)"/>
      </div>
      <div id="viewGratitude" v-else>
          <addAgradecimiento @accion1="cambiarComponente(1)"/>
      </div>
      
  </div>
</template>

<script>
import Gratitude from '../components/gratitude.vue'
import addAgradecimiento from '../components/addAgradecimiento.vue'
export default {
    name: 'ViewGratitude',
    components: {
        Gratitude,
        addAgradecimiento
    },

    data(){
        return{
            estado: 1,
            componente: 1
        }
    },

    methods:{
        cambiarEstado(n){
            this.estado = n
        },

        cambiarComponente(num){
            this.componente=num
        }
    }

}
</script>

<style scoped>
#viewGratitude{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}

 #botones{
     display: flex;
     justify-content: flex-end;
     margin-top: 20px;
 }
</style>