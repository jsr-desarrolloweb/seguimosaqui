<template>
  <Navegacion />
  <router-view/>
</template>

<script>
import Navegacion from './components/Navegacion.vue'

export default {
  components:{Navegacion},
  setup() {
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&display=swap');

#app {
  font-family: 'Advent Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  
}


</style>
