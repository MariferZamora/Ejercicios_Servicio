<template>
  <div id="contenedor">
      <div id="chat">
          <Mensaje/>
      </div>
  </div>
</template>

<script>
import Mensaje from './mensaje.vue'
export default {
    name:'Chat',
    components:{
        Mensaje
    },

}
</script>

<style scoped>
#contenedor{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

#chat{
    width: 700px;
    height: 690px;
    box-shadow: 10px 10px 10px rgba(159, 159, 159, 0.50),inset 7px 7px 7px rgba(159, 159, 159, 0.50);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}
</style>