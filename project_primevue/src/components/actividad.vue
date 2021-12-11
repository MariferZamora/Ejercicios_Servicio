<template>
  <div id="activity">
      <div id="activity2">
          <div id="imgActividad"> 
              <img v-if="img==='gym'" alt="Logo Yana" src="../assets/gym.png" style="width: 50px; height: 50px;"/>
              <img v-else-if="img==='chat'" alt="Logo Yana" src="../assets/chat.png" style="width: 50px; height: 50px;"/>
              <img v-else-if="img==='cine'" alt="Logo Yana" src="../assets/cine.png" style="width: 50px; height: 50px;"/>
               <img v-else-if="img==='dieta'" alt="Logo Yana" src="../assets/dieta.png" style="width: 50px; height: 50px;"/>
          </div>
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px; color:#6B7280; margin-left:11px; width: 430px;">{{texto}}</p>
      </div>
      <Button icon="pi pi-check" class="p-button-rounded" style="background: white; border: 2px solid #FBBBB2; color:#FBBBB2; margin-right: 10px; width: 40px; height: 40px;"/>
  </div>
</template>

<script>
export default {
    name: 'Actividad',
    props:{
        texto:String,
        img:String
    },

}
</script>

<style>
#activity{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    justify-content: space-between;

    box-shadow: 5px 10px 10px rgba(159, 159, 159, 0.25);
    border-radius: 10px;
    height: 82px;
    width: 600px;
}

#imgActividad{
    width: 60px;
    height: 55px;
    background: #D7E8F0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
}

#activity2{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
}


</style>