<template>
  <div>
    <InputText v-model="text"/>
    <Button label="Greet" icon="pi pi-user" @click="greet"/>
    <Toast/>
    {{text}}
  </div>
</template>

<script>
import { defineComponent,ref } from "vue";
import { useToast } from 'primevue/usetoast';

export default defineComponent({
  setup(){
    const toast = useToast();
    const text =ref('prime');

    const greet = () =>{
      toast.add({severity:'info', summary:'Hello', detail:text, life:1000})
    }

    return {
    text,
    greet
  }

  }
  
})

/*
export default{
  data(){
    return{
      text: null
    }
  },

  methods: {
    greet(){
      this.$toast.add({severity:'info', summary:'Hello', detail:this.text})
    }
  }
}*/

</script>