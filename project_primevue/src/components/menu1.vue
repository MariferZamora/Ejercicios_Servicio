<template>
  <div id='tab'>
        <img id="yana" alt="Logo Yana" src="../assets/yana.png"/>
        <div id="botones">
            <Button label="Iniciar Sesión" class="p-button-secondary" style="background:#57B8EB; border-radius: 6px;"/>
            <Button label="Registrarse" class="p-button-secondary" style="background:#FFFFFF; color:#57B8EB; margin-left:10px; border-radius: 6px;"/>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tab{
  display:flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height:60px;
  background: #C74850;
}
#yana{
  width: 65px;
  height: 60px;
  margin-left: 20px;

}
#botones{
    display: flex;
    flex-direction: row;
    margin-right: 25px;
}
</style>