<template>
  <div class="vecino">

      <div class="imagenVecino">
          <img src="../assets/iglesia.jpg" alt="">
      </div>

      <div class="infoTarjeta">
          <h3>Familia Sánchez Rodríguez</h3>
          <span class="resumenVecino">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda inventore accusantium illo sunt laudantium ad
            laboriosam dolor magni, totam dolorem?</span>

      <div class="botonIcono">
          <span>Ver en Mapa</span>
          <i class="fas fa-map-marked-alt"></i>
      </div>
      </div>


      


  </div>
</template>

<script>
export default {

}
</script>

<style >

.vecino{
    margin: 10px 20px;
    height: 470px;
    width: 320px;
    
    -webkit-box-shadow: 3px -2px 11px 3px rgba(0,0,0,0.24); 
box-shadow: 3px -2px 11px 3px rgba(0,0,0,0.24);
    
}

.imagenVecino{
    height: 65%;
}

.imagenVecino img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.infoTarjeta{
    border: 1px solid #2c3e50;
    border-top: none;
    height: 35%;
    background-color: #2c3e50;
    color: white;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    text-justify: inter-word;
}

.resumenVecino{
    font-size: 14px;
}

.botonIcono{
    margin: 0px auto;
}






    







</style>