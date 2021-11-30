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

        <Button label="Iniciar Sesión" style="background:#57B8EB; color:#FFFFFF; border-radius: 50px;  width: 380px; height:50px"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#login{
    width: 400px;
    height: 470px;
    background: #F9F8FD;
    box-shadow: 0px 4px 4px rgba(159, 159, 159, 0.25);
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