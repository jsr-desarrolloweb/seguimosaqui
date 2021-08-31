<template>
  <div class="vecinos">
      <h2>El Barrio y su Gente</h2>
      
      <Vecino />
      <Vecino />
      <Vecino />
      



  </div>
</template>

<script>
import Vecino from '../components/Vecino.vue'

export default {
  components: { Vecino }
}
</script>

<style>
  .vecinos{
    display: flex;
    flex-direction: column;
    align-items: center;  
    /* height: 90%; */
  }

  .vecinos h2{
    font-weight: 400;
    letter-spacing: 1px;
    margin: 10px 0;
  }
</style>