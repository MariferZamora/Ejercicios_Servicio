<template>
  <div>
      <Menu @accion1="cambiarEstado(2)" @accion2="cambiarEstado(3)"/>
      <div id="home" v-if="estado === 1">
          <Bienvenida @accion="cambiarEstado(2)"/>
      </div>
      <div id="home" v-else-if="estado === 2">
          <Login />
      </div>
      <div id="home" v-else-if="estado === 3" style="margin-top: 40px;">
          <Signup/>
      </div>
  </div>
</template>

<script>
import Menu from '../components/menu1'
import Bienvenida from '../components/Bienvenida'
import Login from '../components/inicioSesion'
import Signup from '../components/registro.vue'
export default {
    name: 'Home',
    components: {
         Menu,
         Bienvenida,
         Login,
         Signup
    },

    data(){
       return{
           estado: 1
       }
    },

    methods:{
        cambiarEstado(num){
            this.estado = num
        }
    },
    

}
</script>

<style scoped>
#home{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}

</style>