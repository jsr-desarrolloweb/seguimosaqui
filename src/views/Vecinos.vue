<template>
  <div class="vecinos">
      <h2>El Barrio y su Gente</h2>
      

      <!-- Esto será el componente Lista de Vecinos -->
      <div class="tarjeta-vecino">
          <div class="img-vecino"></div>
          <div class="info-vecino">
            <h3>Familia Pepperoni Ramoni</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorum sit provident atque quisquam voluptas voluptatum
            id quia...
            </p>
          </div>
          <div class="ubi-vecino boton">Ver en Mapa</div>
      </div>

            <div class="tarjeta-vecino">
          <div class="img-vecino"></div>
          <div class="info-vecino">
            <h3>Familia Los Alba</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorum sit provident atque quisquam voluptas voluptatum
            id quia...
            </p>
          </div>
          <div class="ubi-vecino boton">Ver en Mapa</div>
      </div>

            <div class="tarjeta-vecino">
          <div class="img-vecino"></div>
          <div class="info-vecino">
            <h3>Familia Patos Parque Genovés</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorum sit provident atque quisquam voluptas voluptatum
            id quia...
            </p>
          </div>
          <div class="ubi-vecino boton">Ver en Mapa</div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .vecinos{
        margin: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .tarjeta-vecino{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 15px;
        border: 1px solid black;
        margin-bottom: 20px;
    }

    .img-vecino{
        border: 1px solid black;
        width: 100%;
        height: 160px;
        text-align: center;
        border-top: none;
    }

    .info-vecino{
        padding: 0 15px;
    }

    .info-vecino h3, p {
        margin: 10px 0;
        text-align: justify;
        text-justify: inter-word;
    }
</style>