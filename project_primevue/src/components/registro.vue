<template>
  <div id="signup">
    <h1 style="color:#7F8D94">Crear Cuenta</h1>
     <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Nombre Completo" type="text" />
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <Dropdown v-model="selectedGenero" :options="genero" optionLabel="name" placeholder="Genero" />
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-envelope"></i>
            </span>
            <InputText placeholder="Email" type="email"/>
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Usuario" type="text" />
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-lock"></i>
            </span>
            <InputText type="password" placeholder="Contraseña" />
        </div>

        <div class="p-inputgroup" style="height:50px; width: 380px;">
            <span class="p-inputgroup-addon">
                <i class="pi pi-lock"></i>
            </span>
            <InputText type="password" placeholder="Confirmar contraseña" />
        </div>

        <Button label="Registrarse" style="background:#57B8EB; color:#FFFFFF; border-radius: 5px;  width: 380px; height:50px"/>
    
  </div>
</template>

<script>
export default {
  data() {
	return {
		selectedGenero: null,
		genero: [
			{name: 'Mujer', code: 'M'},
			{name: 'Hombre', code: 'H'}
		]
	}
}
}
</script>

<style scoped>
#signup{
  width: 520px;
  height: 650px;
  box-shadow: 10px 10px 10px rgba(159, 159, 159, 0.50),inset 7px 7px 7px rgba(159, 159, 159, 0.50);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 25px;
}
</style>