<template>
  <div class="inicio">

    <h1>Seguimos <br> aquí</h1>
    <div class="resumenProjecto">
      En un barrio que pierde a sus vecinas y
      vecinos año tras año debido a la turistificación
      masiva y al  número descontrolado de alojamientos
      turísticos (entre otros problemas), surge esta
      idea para dar la voz y el lugar a las que siempre
      lo han llenado de vida. Inspirado en el proyecto
      Alma do Alfama de Camila Watson, Lisboa 2021. <strong> <div class="mas-info" @click="router.push({name: 'Proyecto'})">Más info...</div> </strong>
    </div>

    <div @click="router.push({name: 'Mapa'})" class="boton">Mapa</div>

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

    // const abrirMapa = () => {
    //   router.push({name: 'Mapa'})
    // }

    return { router}
  }
}
</script>

<style>

  .inicio{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 90%;
    /* background-image: url('~@/assets/wallaper2.jpg');
    background-size: cover; */
  }

  .inicio h1{
    font-size: 60px;
    font-weight: 200;
    
  }

  .resumenProjecto{
    margin: 50px 25px;
    text-align: justify;
    text-justify: inter-word;
    
  }

  .mas-info{
    cursor: pointer;
  }

</style>
