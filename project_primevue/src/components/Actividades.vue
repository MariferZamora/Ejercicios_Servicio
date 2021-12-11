<template>
  <div id="actividades">
      <div id="contenedor">
          <Actividad texto="Estirate cinco minutos y haz cinco minutos de ejercicio." img="gym"/>
          <Actividad texto="Toma dos vasos de agua simple después de despertarte." img="dieta"/>
          <Actividad texto="Ve un episodio de tu serie favorita durante la cena." img="cine"/>
          <Actividad texto="Márcale a un amigo para preguntarle cómo le fue en la escuela o el trabajo." img="chat"/>
          <Actividad texto="camina durante cinco minutos" img="gym"/>
          <Actividad texto="Ve tu película favorita" img="cine"/>
      </div>

  </div>
</template>

<script>
import Actividad from './actividad.vue'
export default {
    name: 'Actividades',
    components:{
        Actividad
    }
}
</script>

<style scoped>
#actividades{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}

#contenedor{
    width: 620px;
    height: 650px;
    box-shadow: 10px 10px 10px rgba(159, 159, 159, 0.50),inset 7px 7px 7px rgba(159, 159, 159, 0.50);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 10px;
}
</style>