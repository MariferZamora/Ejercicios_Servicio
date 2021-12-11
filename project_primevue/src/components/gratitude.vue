<template>
  <div id="gratitude">
      <div id="headerGratitude">
          <p style="font-family: Times New Roman, Times, serif; font-size: 41px; color:#6B7280; margin-top: -10px; margin-left: 20px;">Agradecimientos {{texto}}</p>
          <Button icon="pi pi-plus" class="p-button-rounded" style="background: #57B8EB; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #6366F1; margin-right: 20px;" @click="accion"/>
      </div>
      <div id="divider"></div>
      <div id="contAgradecimientos">
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>
          <Agradecimiento/>


      </div>

  </div>
</template>

<script>
import Agradecimiento from './agradecimiento.vue'
export default {
    name:'Gratitude',
    props: {
        texto:String
    },
    components: {
        Agradecimiento
    },
    methods:{
        accion(){
            this.$emit('accion')
        }
    }

}
</script>

<style scoped>
#gratitude{
    width: 1000px;
    height: 700px;
    box-shadow: 5px 10px 10px rgba(159, 159, 159, 0.25), inset 7px 7px 7px rgba(159, 159, 159, 0.50);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
}
#headerGratitude{
    display: flex;
    flex-direction: row;
    width: 1000px;
    justify-content: space-between;
    margin-top: 15px;
}

#divider{
    height: 2px;
    width: 1000px;
    background: #E5E7EB;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin-top: -33px;
}

#contAgradecimientos{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 630px;
    height: 500px;
    margin-top: 50px;
    overflow: auto;
}
</style>