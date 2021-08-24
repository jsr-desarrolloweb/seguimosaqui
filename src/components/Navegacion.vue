// Componente NavBar

<template>
    <!-- CSS del botón burger -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="navegacion">
        <p>Logo</p>

        <!-- Burger y Close botones -->
        <i v-if="!mostrarNavegacion" id="burger" class="fa fa-bars fa-2x" @click="mostrarNavegacion = true"></i>
        <p class="cerrarNav"  v-else @click="mostrarNavegacion = false">X</p>
    </div>
       
    <!-- Links de navegacion -->
    <nav v-if="mostrarNavegacion">
        <router-link to="/">Inicio</router-link> 
        <router-link to="/vecinos">Vecinos</router-link>
        <router-link to="/mapa">Mapa</router-link>
        <router-link to="/proyecto">Proyecto</router-link>    
    </nav>


    
</template>

<script>
import {ref} from 'vue'

export default {
    setup(){
        const mostrarNavegacion = ref(false)

        return {mostrarNavegacion}
    }
}
</script>

<style>
    .navegacion {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
    }

    nav{
        display: flex;
        flex-direction: column;
    }

    nav a{
        padding: 5px 0px;
    }

    #burger{
        cursor: pointer;
    }

    .cerrarNav{
        cursor: pointer;
    }

</style>