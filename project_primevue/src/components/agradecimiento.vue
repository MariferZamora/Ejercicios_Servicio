<template>
  <div id="agradecimiento">
      <div id="title">
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px; font-weight:550;">Un gran día</p>
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px; color:#6B7280;">1 de octubre del 2021</p>
      </div>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px; margin-top: -15px; color: #4B5563;  width: 570px;">hoy fue un buen día ya que bla bla bla bla bla bla bla bla bla bla bla...</p>
  </div>
</template>

<script>
export default {
    name:'Agradecimiento',

}
</script>

<style scoped>
#agradecimiento{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    box-shadow: 5px 10px 10px rgba(159, 159, 159, 0.25);
    border-radius: 10px;
    height: 82px;
    width: 600px;
}

#title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 570px;
}
</style>