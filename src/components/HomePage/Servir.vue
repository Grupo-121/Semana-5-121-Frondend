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
              :src="item.img"
            >
            </v-img>
            <v-card-title>{{ item.nombre }}</v-card-title>
            <v-card-text class="text--primary">
              <div>{{ item.resumen }}</div>
            </v-card-text>

            <v-card-actions class="d-flex justify-end mb-6">
              <v-btn       color="blue-grey" text> EXPLORE </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

function misservicios(objeto) {
  var servicios = [];
  for (var unoauno in objeto) {
    if (objeto[unoauno].categoriaId == 3) {
      servicios.push(objeto[unoauno]);
    }
  }
  return servicios
};


export default {
  name: "Servir",
  data() {
    return {
      // items: [
        // {
        //   id: 1,
        //   servicio: "Motivar a los Colaboradores",
        //   imagen: 'img/serv1.jpg',
        //   descripcion: "Desarrollamos Herramientas y estrategias para que cada empleado participe y sea un jugador activo con la determinación que su dedicación y esfuerzo diario es un camino al éxito.",
        // },
        // {
        //   id: 2,
        //   servicio: "Cambiar los comportamientos",
        //   imagen: 'img/serv2.jpg',
        //   descripcion: "Nuestras aplicaciones permiten reconocer inmediatamente los logros de los empleados cuando sus practicas y sus decisiones están alineadas con los objetivos del negocio. ",
        // },
        // {
        //   id: 3,
        //   servicio: "Crear una cultura empresarial",
        //   imagen: 'img/serv3.jpg',
        //   descripcion: "Formar grupos de trabajo de alto nivel. Donde trabajar en equipos y con unos objetivos claramente definidos permita que el equipo evolucione para que la empresa evolucione hacia alcanzar sus objetivos.",
        // },
      // ],
      info: null
    };
  },
  mounted() {
    axios.get('https://calm-chamber-38042.herokuapp.com/api/articulo/list')
    .then(response => {
    (this.info = misservicios(response.data)); 
    console.log(this.info);
    })
  },
};
</script>
