<template>
  <div id="message">
      <img id="yana" alt="Logo Yana" src="../assets/yana.png"/>
      <div id="msg">
           <p style="font-family: Times New Roman, Times, serif; font-size: 20px; font-weight:600;">Yana</p>
           <p style="font-family: Times New Roman, Times, serif; font-size: 20px; color:#6B7280; margin-top: -10px;">Hola ¿Como estás hoy?</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#message{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    box-shadow: 5px 10px 10px rgba(159, 159, 159, 0.25);
    border-radius: 10px;
    height: 82px;
    width: 600px;
}
#msg{
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    
}
</style>