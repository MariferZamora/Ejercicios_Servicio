<template>
  <div id="app">
    <Menu/>
    <Bienvenida/>
  </div>
</template>

<script>
import Menu from './components/menu1'
import Bienvenida from './components/Bienvenida'
export default {
  name:'App',
  components: {
    Menu,
    Bienvenida

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
