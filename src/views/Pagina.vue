<template>
  <v-app>
    <v-app-bar
      app
      silver
    >
      <Header/>
    </v-app-bar>

    <v-main>
      <carrusel/>
      <igames/>
      <servir/>
      <casos/>


    </v-main>

    <v-footer>
        <Footer/>
    </v-footer>
   

  </v-app>
</template>

<script>

import Header from '../components/HomePage/Header';
import Carrusel from '../components/HomePage/Carrusel.vue';
import Igames from '../components/HomePage/Igames.vue';
import Servir from '../components/HomePage/Servir.vue';
import Casos from '../components/HomePage/Casos.vue';
import Footer from '../components/HomePage/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Carrusel,
    Igames,
    Servir,
    Casos,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>