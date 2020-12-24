<template>
  <v-container>
    <div>
      <h1 class="text-center"  >Servicios</h1>
      <v-row>
        <v-col cols="4" v-for="item in info" :key="item.id">
          <v-card outlined class="mx-auto text-center" color="teal lighten-4">
            <v-img
              class="white--text align-end"
              height="250px"
              :src="item.img">
            </v-img>
            <v-card-title>{{ item.nombre }}</v-card-title>
            <v-card-text class="text--primary">
              <div>{{ item.resumen }}</div>
            </v-card-text>
            <v-card-actions class="d-flex justify-end mb-6">
              <v-btn  @click="btn(item.nombre,item.descripcion)"    color="blue-grey" text> {{Texto}} </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

function esServicio(articulo) {
  return articulo.estado == 1 && articulo.categoriaId == 3;
};

export default {
  name: "Servir",
  data() { return{
    Texto: 'Ver mas',
    info: null
  }},
  mounted() {
    axios.get('https://calm-chamber-38042.herokuapp.com/api/articulo/list')
    .then(response => {
    (this.info = (response.data.filter(esServicio)));
    console.log(this.info);
    })
  },
  methods:{
    btn(nombre,descripcion) {
     swal(nombre,descripcion);
    }},
}
</script>
