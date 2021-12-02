<template>
  <div id="activity">
      <div id="activity2">
          <div id="imgActividad"> 
           <img alt="Logo Yana" src="../assets/gym.png" style="width: 50px; height: 50px;"/>
      </div>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px; color:#6B7280;margin-left:11px; ">Estirate cinco minutos y haz cinco minutos de ejercicio.</p>
      </div>
      <Button icon="pi pi-check" class="p-button-rounded" style="background: white; border: 2px solid #FBBBB2; color:#FBBBB2; margin-right: 10px;"/>
  </div>
</template>

<script>
export default {

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