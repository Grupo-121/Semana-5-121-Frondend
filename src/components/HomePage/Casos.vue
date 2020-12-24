<template>
  <v-container>
    
    <div>
      <h1 class="text-center">Casos de Exito</h1>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
          <v-card outlined class="mx-auto text-center" color="deep-orange lighten-4">
            
            <v-card-title>{{ item.caso }}</v-card-title>
            <v-card-subtitle>{{ item.ciudad }}</v-card-subtitle>

            <v-img
              class="white--text align-end"
              height="250px"
              :src="item.imagen"
            >
            </v-img>
            
            <v-card-text class="text--primary">
              <div>{{ item.descripcion }}</div>
            </v-card-text>


          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Casos",
  data() {
    return {
      items: [
        {
          id: 1,
          caso: "Motores de Colombia",
          ciudad: "Cali. Colombia",
          imagen: 'img/exito1.jpg',
          descripcion: "Desarrollamos un juego, con el cual se busca conectar a todos los empleados y que conozcan, a través del juego, las diferentes conexiones que hay entre cada sección de una planta y el proceso de fabricación.  A la vez que se enseñan las diferentes fases de los procesos productivos de la planta de producción con lo que se desarrollan nuevos conocimientos que facilitan la interacción entre las distintas áreas. Hemos conseguido mejorar el conocimiento de los procesos de la planta mediante un sistema de evaluación de conocimiento de la planta que se realiza mediante un cuestionario interactivo.",
          
        },
        {
          id: 2,
          caso: "ProximoSalto s.a. ",
          ciudad: "Bogotá. Colombia",
          imagen: 'img/exito2.jpg',
          descripcion: "Nuestra esta empresa, especializada en crear espacios de trabajo, se planteó el objetivo de convertir el lugar de trabajo en un espacio más saludable y alegre. Aprovechando la gamificación y en compañía de IndustrialGames, conseguimos que el 12% de nuestros empleados realizasen algún deporte de forme regular. ¿Cómo? Instalamos gimnasios en las oficinas y creamos una app que daba premios a los empleados, fomentando el deporte y la vida saludable. Creamos una tabla de clasificación para comparar el progreso de los empleados logrando que el 70% de los trabajadores practicase habitualmente algún deporte",
          
        },
        {
          id: 3,
          caso: "Interconecta s.a.",
          ciudad: "Medellín. Colombia",
          imagen: 'img/exito3.jpg',
          descripcion: "En compañía de IndustrialGames desarrollamos una plataforma para la atención de quejas y reclamos donde cada queja del cliente es resuelta por varios grupos de trabajo. Primero se identifica cuáles son las áreas que aportan a la solución. Se creó un tablero de logros donde se premia cada grupo por resolver la queja.  Caga grupo recibe retroalimentación del avance. Se mejora la comunicación entre los diferentes grupos de trabajo para dar una solución conjunta a las quejas y reclamos. Mejoramos en un 45% en el índice de atención al cliente y un 35% en la calificación de servicio par parte del cliente.",
          
        },
      ],
    };
  },
};
</script>
