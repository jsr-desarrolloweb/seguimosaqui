<template>
  <div class="inicio">
    
    <!-- Titulo principal -->
    <h1>Seguimos <br> Aquí</h1>
    <div class="resumenProjecto">
      En un barrio que pierde a sus vecinas y
      vecinos año tras año debido a la turistificación
      masiva y al  número descontrolado de alojamientos
      turísticos ( entre otros problemas ), surge esta
      idea para dar la voz y el lugar a las que siempre
      lo han llenado de vida. Inspirado en el proyecto
      Alma do Alfama de Camila Watson, Lisboa 2021. <strong>Más info...</strong>
    </div>
  </div>

</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: 'Home',
  components: {
   
  },
  setup(){
    const router = useRouter()

    const abrirMapa = () => {
      router.push({name: 'Mapa'})
    }

    return {abrirMapa}
  }
}
</script>

<style>


  .inicio h1{
    margin: 10px 0;
    font-size: 60px;
    font-weight: 300;
    letter-spacing: 3px;
  }

  .resumenProjecto{
    font-size: 13px;
    margin: 0px 40px;
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: 2px;
    line-height: 1.2rem;
  }


</style>
