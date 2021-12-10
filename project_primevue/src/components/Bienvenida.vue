<template>
  <div id="contenedor">
      <img id="yana2" alt="Yana" src="../assets/Image.png"/>
      <div id="content2">
          <p style="font-family: Times New Roman, Times, serif; font-size: 30px; font-weight: bold; margin: 1px;">¡Que gusto tenerte de nuevo por aquí!</p>
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px;">¿Te gustaría iniciar sesión para platicar un rato?</p>
          <Button label="Iniciar Sesión" class="p-button-secondary" style="background:#FFFFFF; color:#57B8EB; border-radius: 6px;" @click="accion"/>
      </div>

  </div>
</template>

<script>
export default {
    methods:{
        accion(){
            this.$emit('accion')
        }
    }
}
</script>

<style>
#contenedor{
    width: 820px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #FBBBB2;
    border-radius: 24px;
}

#yana2{
    width: 300px;
    height: 350px;
}

#content2{
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
}
</style>