<template>
  <div id="addAgradecimiento">
      <p style="font-family: Times New Roman, Times, serif;color:#7F8D94; font-size: 48px; margin-top: 15px; margin-bottom:1px; margin-left: 40px;">Escribe tu agradecimiento</p>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px; font-weight:400; color:#374151; margin-left: 60px; ">Titulo</p>
      <InputText type="text" v-model="value" style="margin-left: 60px; width: 450px;"/>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px;font-weight:400;color:#37415; margin-left: 60px">Mensaje</p>
      <Textarea v-model="value" rows="4" cols="73" style="margin-left: 60px"/>
      <div id="cont4">
          <InputSwitch v-model="checked" />
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px;font-weight:400;color:#374151;margin-left: 10px;">Destacar agradecimiento</p>
      </div>
      <div id="botones2">
            <Button label="Cancelar" class="p-button-secondary" style="background:#FFFFFF; color:red; margin-left:10px; border-radius: 6px; width: 140px; border: 1px solid red;" @click="accion1"/>
            <Button label="Guardar" class="p-button-secondary" style="background:#FFFFFF; color:#57B8EB; margin-left:10px; border-radius: 6px; width: 140px; border: 1px solid #57B8EB;"/>
        </div>

  </div>
</template>

<script>
export default {
    name: 'addAgradecimiento',
    data() {
		return {
			checked: false
		}
	},
    methods:{
        accion1(){
            this.$emit('accion1')
        }
    }

}
</script>

<style scoped>
#addAgradecimiento{
    width: 700px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 10px 10px 10px rgba(159, 159, 159, 0.50),inset 7px 7px 7px rgba(159, 159, 159, 0.50);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

}

#cont4{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 60px;
    
}

#botones2{
    width: 660px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 25px;
    align-items: flex-end;
    justify-content: flex-end;
}


</style>