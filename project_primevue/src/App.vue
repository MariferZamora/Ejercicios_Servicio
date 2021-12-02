<template>
  <div>
    <Menu/>
    <Mensaje/>
  </div>
</template>

<script>
import Menu from './components/menu'
import Mensaje from './components/actividad'
export default {
  name:'App',
  components: {
    Menu,
    Mensaje
  }
}
</script>

<style>

</style>
