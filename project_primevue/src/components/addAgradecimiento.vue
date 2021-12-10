<template>
  <div id="addAgradecimiento">
      <p style="font-family: Times New Roman, Times, serif;color:#7F8D94; font-size: 48px; margin-top: 8px; margin-bottom:1px; margin-left: 40px;">Escribe tu agradecimiento</p>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px; font-weight:400; color:#374151; margin-left: 60px;">Titulo</p>
      <InputText type="text" v-model="value" style="margin-left: 60px"/>
      <p style="font-family: Times New Roman, Times, serif; font-size: 20px;font-weight:400;color:#37415; margin-left: 60px">Mensaje</p>
      <Textarea v-model="value" rows="4" cols="70" style="margin-left: 60px"/>
      <div id="cont4">
          <InputSwitch v-model="checked" />
          <p style="font-family: Times New Roman, Times, serif; font-size: 20px;font-weight:400;color:#374151;margin-left: 10px;">Destacar agradecimiento</p>
      </div>
      <div id="botones2">
            <Button label="Cancelar" class="p-button-secondary" style="background:#D43939; border-radius: 6px; width: 140px;"/>
            <Button label="Guardar" class="p-button-secondary" style="background:#FFFFFF; color:#57B8EB; margin-left:10px; border-radius: 6px;width: 140px;"/>
        </div>

  </div>
</template>

<script>
export default {
    data() {
		return {
			checked: false
		}
	}

}
</script>

<style>
#addAgradecimiento{
    width: 800px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(120, 120, 120, 0.25), inset 4px 4px 4px rgba(120, 120, 120, 0.25);

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
    width: 750px;
    display: flex;
    flex-direction: row;
    margin-right: 25px;
    align-items: flex-end;
    justify-content: flex-end;
}


</style>