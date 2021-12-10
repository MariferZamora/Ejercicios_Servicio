<template>
  <div id="login">
      <img id="user" alt="User" src="../assets/user.png"/>
    
        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Usuario" />
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-lock"></i>
            </span>
            <InputText type="password" placeholder="Contraseña" />
        </div>

        <Button label="Iniciar Sesión" style="background:#57B8EB; color:#FFFFFF; border-radius: 5px;  width: 380px; height:50px"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#login{
    width: 500px;
    height: 470px;
    box-shadow: 10px 10px 10px rgba(159, 159, 159, 0.50),inset 7px 7px 7px rgba(159, 159, 159, 0.50);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 25px;
}

#user{
    width: 150px;
    height: 150px;
    margin-top: 40px;
}
</style>