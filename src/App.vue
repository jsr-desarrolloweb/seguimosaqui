<template>
  <Navegacion />
  <router-view/>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
